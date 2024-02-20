import axios from "axios";

/* nom de l'action pour lire post */
export const GET_POSTS = "GET_POSTS";

/* nom de l'action pour ajouter un post */
export const ADD_POSTS = "ADD_POSTS";

/* nom de l'action pour editer un post */
export const EDIT_POSTS = "EDIT_POSTS";

/* nom de l'action pour supprimer un post */
export const DELETE_POSTS = "DELETE_POSTS";

/* nom de l'action pour ajouter un like a un post */
export const ADD_POSTS_LIKE = "ADD_POSTS_LIKE";

export const getPosts = () => {
    /* dispatch pour envoyer dans le store */
    return (dispatch) =>{

        /* Communique avec la DB via axios*/
        return axios.get("http://localhost:3000/posts").then((res) =>{
            /* communique avec le reducer pour changer les données dans le store */
            dispatch({type: GET_POSTS, payload: res.data});
        });
    };
};  

/* action pour l'ajout de posts */
export const AddPosts = (data) => {
    /* dispatch pour envoyer dans le store */
    return (dispatch) =>{

        /* Communique avec la DB via axios*/
        return axios.post("http://localhost:3000/posts",data).then((res) =>{
            /* communique avec le reducer pour changer les données dans le store */
            dispatch({type: ADD_POSTS, payload: data});
        });
    };
};  

/* action pour modifier un post */
export const EditPosts = (data) => {
    /* dispatch pour envoyer dans le store */
    return (dispatch) =>{

        /* Communique avec la DB via axios pour recherche via l'id */
        return axios.put(`http://localhost:3000/posts/${data.id}`,data).then((res) =>{
            /* communique avec le reducer pour changer les données dans le store */
            dispatch({type: EDIT_POSTS, payload: data});
        });
    };
};  

/* action pour supprimer un post */
export const deletPosts = (postId) => {
    /* dispatch pour envoyer dans le store */
    return (dispatch) => {
        /* Communique avec la DB via axios pour recherche via l'id */
        return axios.delete(`http://localhost:3000/posts/${postId}`)
                    .then((res) =>{
                    /* communique avec le reducer pour changer les données dans le store */
                    dispatch({type: DELETE_POSTS, payload: postId});
                    });
    };
};  

/* action pour ajouter un like sur un post */
export const addPostsLike = (data) => {
    /* dispatch pour envoyer dans le store */
    return (dispatch) =>{
        /* Communique avec la DB via axios pour recherche via l'id */
        return axios.put(`http://localhost:3000/posts/${data.id}`,data).then((res) =>{
            /* communique avec le reducer pour changer les données dans le store */
            dispatch({type: ADD_POSTS_LIKE, payload: data});
        });
    };
};  
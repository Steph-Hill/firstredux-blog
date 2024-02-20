import axios from "axios";

/* nom de l'action */
export const GET_USER = "GET_USER";

/* nom de l'action */
export const ADD_USER_LIKE = "ADD_USER_LIKE";

export const getUser = () => {
    /* dispatch pour envoyer dans le store */
    return (dispatch) =>{

        /* Communique avec la DB via axios*/
        return axios.get("http://localhost:3000/user").then((res) =>{
            /* communique avec le reducer pour changer les données dans le store */
            dispatch({type: GET_USER, payload: res.data[0]});
        });
    };
};  

/* action pour ajouter un like sur un post */
export const addUserLike = (data) => {
    /* dispatch pour envoyer dans le store */
    return (dispatch) =>{
        /* Communique avec la DB via axios pour recherche via l'id */
        return axios.put(`http://localhost:3000/user/${data.id}`,data).then((res) =>{
            /* communique avec le reducer pour changer les données dans le store */
            dispatch({type: ADD_USER_LIKE, payload: data});
        });
    };
};  
import { ADD_POSTS, ADD_POSTS_LIKE, DELETE_POSTS, EDIT_POSTS, GET_POSTS } from "../actions/post.action";

const initialState = {};

export default function postReducer(state = initialState, action){
  
  switch (action.type){
    case GET_POSTS:
        return action.payload;
    /* si l'action addPost est detecté on ajoute en destructurant le state initial */
    case ADD_POSTS:
        return [action.payload, ...state];
    case EDIT_POSTS:
          return state.map((post) => {
            /* retrouve le bon id */
            if( post.id === action.payload.id){
                return {
                  /* returne le post au complet sauf le content a l'initial */
                  ...post,
                  content: action.payload.content,
                };
            }else return post;
          });
    case DELETE_POSTS:
      return state.filter((post) => post.id !== action.payload);
    case ADD_POSTS_LIKE:
      return state.map((post) => {
        /* retrouve le bon id */
        if( post.id === action.payload.id){
            return {
              /* returne le post au complet sauf le content a l'initial */
              ...post,
              likes: action.payload.likes,
            };
        }else return post;
      });
    default:
        return state;
  }

}
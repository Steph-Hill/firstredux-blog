import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";

/* Redux */
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"
import { getPosts } from "./actions/post.action";
import { getUser } from "./actions/user.action";


const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});
/* lancement de l'action post.action pour afficher les posts*/
store.dispatch(getPosts());
/* lancement de l'action post.user pour afficher l'utilisateur'*/
store.dispatch(getUser());


ReactDOM.render(
    /* ajout du provider */
    <Provider store={store}>

        <App />

    </Provider>

    , document.getElementById("root"));

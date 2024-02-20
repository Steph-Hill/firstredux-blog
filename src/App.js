import React from "react";
import PostForm from "./components/PostForm";
import User from "./components/User";
/* REDUX */
import { useSelector } from "react-redux";
import Post from './components/Post'
/* utilisation de isEmpty pour controller de mesposts avant de faire le map */
import {isEmpty} from './components/Utils'

const App = () => {
  /* donnée du reducer post */
  const mesposts = useSelector((state) => state.postReducer);

  return (
    <div>
      <h1>Extreme</h1>
      <PostForm />
      <div className="content">
        <div className="post-container">
        {/* Affiche tous les posts */}
          {!isEmpty(mesposts) && mesposts.map((poste,index) => 
            <Post post={poste} key={index}/>) }

        </div>
        <User />
      </div>
    </div>
  );
};

export default App;

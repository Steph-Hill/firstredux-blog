import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddPosts,getPosts } from "../actions/post.action";



const PostForm = () => {

  /* utilisation de useref qui donne une reference pour le formulaire*/
  const form = useRef();

  /* ajout du useSelector pour récuperer l'user connecté */
  const user = useSelector((state) => state.userReducer);

  /* envoie de donnée avec dispatch par l'action addpost*/
  const dispatch = useDispatch();

  /* mise en place d'handleform pour géré l'evenement du formulaire soumis*/
  const handleform = async(evenement) => {
    evenement.preventDefault();
    
    /* const pour enregistrer les données de l'article */
    const postData = {
      author: user.pseudo,
      title: form.current[0].value,
      content: form.current[1].value,
      like: 0,
    };

    /* envoie de données dans le store 
    interroge la DB avec le await afin d'obtenir son id pour les mettres a jours*/
    await dispatch(AddPosts(postData));
    dispatch(getPosts());

    /* apres envoie des données, remet le formulaire a zéro */
    form.current.reset();
  };


  return (
    <div className="form-container">

      <form ref={form} onSubmit={(evenement) => handleform(evenement)}>

        <input type="text" placeholder="Titre du poste" />
        <textarea placeholder="Postez vos pensées..."></textarea>
        <input type="submit" value="Envoyer" />

      </form>

    </div>
  );
};

export default PostForm;

import React, { useState } from "react";
import Like from "./Like";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "./Utils";
import { deletPosts, EditPosts } from "../actions/post.action";



const Post = ({ post }) => {
  /* identifie si l'utilisateur est entrain d'editer ou pas */
  const [editToggle, setEditToggle] = useState(false);
  /* communiquer avec le reducer */
  const user = useSelector((state) => state.userReducer);
  /* contient l'element a modifier */
  const [editContent, setEditContent] = useState(post.content)
  /* dispatch pour envoyer les données au store et la DB */
  const dispatch = useDispatch();

  /* contient l'evenment de la modification  */
  const handleEdit = (evenement) => {

    evenement.preventDefault();

    /* informations a conserver lors de la modification 
    car l'usage de db.json necessite ce precaution pour eviter 
    de tout supprimer quand il modifie*/
    const postData = {
      title: post.title,
      author: user.pseudo,
      likes: post.likes,
      id: post.id,
      content: editContent
    }

    /* envoie les donnee a l'aide de editPost */
    dispatch(EditPosts(postData));
    /* change l'etat du formulaire en mode edition a false */
    setEditToggle(false);


  }

  return (
    <div className="post">
      {/* controle si l'article appartient a l'utilisateur connecté 
      avec verification si const user existe */}
      {!isEmpty(user) && user.pseudo === post.author && (
      <div className="edit-delete">
        <img
          src="./icons/edit.svg"
          alt="edit"
          onClick={() => setEditToggle(!editToggle)}
        />
        <img  src="./icons/delete.svg"
              alt="delete"
              onClick={() => dispatch(deletPosts(post.id))}
        />
      </div>
      )}

      <h2>{post.title}</h2>
      <img
        src="https://picsum.photos/1500/400"
        className="post-img"
        alt="img-post"
      />

      {editToggle ? (/* ajout handleEdit */
        <form onSubmit={evenement => handleEdit(evenement)}>
          {/* ajout onChange */}
          <textarea autoFocus={true} defaultValue={post.content} 
          onChange={evenement => setEditContent(evenement.target.value)}></textarea>

          <input type="submit" value="Valider modification" />
        </form>
      ) : (
        <p>{post.content}</p>
      )}

      <div className="author">
        <h5>{post.author}</h5>
        <Like post={post} />
      </div>
    </div>
  );
};

export default Post;

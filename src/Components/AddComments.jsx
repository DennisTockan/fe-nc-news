import { useState } from "react";
import { addComment } from "../Api";

const AddComments = () => {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    addComment(newComment).then((newAddedComment) =>{
        console.log(newAddedComment)
    })
  }

  return (
    <form className="comment-adder" onSubmit={handleSubmit}>
    <h3 className="comment-header">Add Comments</h3>
      <input type="text" id="username" placeholder="Enter Username..." onChange={(event) => {
          setNewComment(event.target.value);
        }}/><br/> <br/>
      <textarea
      placeholder="Add a comment ..."
        value={newComment}
        onChange={(event) => {
          setNewComment(event.target.value);
        }}
      />
      <button>Comment!</button>
    </form>
  );
};

export default AddComments;

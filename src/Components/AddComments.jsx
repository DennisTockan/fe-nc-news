import { useState } from "react";
import { addComment } from "../Utils/Api";


const AddComments = ({setComments, article_id}) => {
    const [username, setUsername] = useState("");
    const [body , setBody] = useState("");
    const [disabledButton, setDisabledButton] = useState(false)
   
    
  const handleSubmit = (event) => {
    event.preventDefault();
 
    addComment(article_id, username, body).then((finalComment) => {
        alert('Comment added succesfully')
        setComments((currentComment)=> {
            return [finalComment, ...currentComment]
        })
        setUsername("");
        setBody("");
    })
  };

  return (
    <form className="comment-adder" onSubmit={handleSubmit}>
      <h3 className="comment-header">Add Comments</h3>
      <input
        type="text"
        required
        id="username"
        placeholder="Enter Username..."
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <br /> <br />
      <textarea
      required
      rows="3"
      cols="130"
        placeholder="Add a comment ..."
        value={body}
        onChange={(event) => {
          setBody(event.target.value);
        }}
      />
      <button disabled={disabledButton}>Comment!</button>
      {/* {isError ? <p>Failed to post comment. Please try again!</p> : null} */}
      
    </form>
  );
};

export default AddComments;

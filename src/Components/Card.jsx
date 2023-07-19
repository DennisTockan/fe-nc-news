const Card = ({title, author, created_at, votes, image, commentCount}) => {
    return (
    <div className="card"> 
    <h2>{title}</h2>
    <img src={image} alt={`Picture of ${title}`}/>
    <p>Created by: {author}</p>
    <p>Uploaded on: {created_at.slice(0,10)}</p>
    <p>Votes: {votes}</p>
    <p>Comments: {commentCount}</p>
    </div>
    )
  }
  export default Card;



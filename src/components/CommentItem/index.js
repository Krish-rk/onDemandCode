// Write your code here
const CommentItem = props => {
  const {commentitem} = props
  const {name, comment, isLiked} = commentitem
  const like = ''
  return (
    <li>
      <div>
        <div>
          <h1>{name}</h1>
          <p>less than a minute ago</p>
          <p>{comment}</p>
        </div>
        <img src={like} />
        <img src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png" />
      </div>
    </li>
  )
}

export default CommentItem

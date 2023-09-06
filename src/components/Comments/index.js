import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
const initalList = [
  {
    name: 'elon',
    comment: 'must',
    id: 4,
    isLiked: false,
  },
]

// Write your code here

class Comments extends Component {
  state: {
    name: '',
    comment: '',
    commentsList: initalList,
  }

  nameChange = event => {
    this.setState({
      name: event.target.value,
    })
  }

  commentChange = event => {
    this.setState({
      comment: event.target.value,
    })
  }

  addComment = event => {
    event.prevent.default()
    const {name, comment} = this.state
    const newComment = {
      name,
      comment,
      id: uuidv4(),
    }
    this.setState(prev => ({
      commentsList: [...prev.commentsList, newComment],
    }))
  }

  render() {
    const {commentsList} = this.state
    return (
      <div>
        <h1>Comments</h1>
        <div>
          <div>
            <form>
              <input type="text" onChange={this.commentChange} />
              <input type="text-area" />
              <button type="submit" onClick={this.nameChange}>
                Add Comment
              </button>
            </form>
          </div>
          <img src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png" />
        </div>
        <div>
          <div>
            <p>0</p>
            <p>Comments</p>
          </div>
          <div>
            <ul>
              {commentsList.map(item => (
                <CommentItem commentitem={item} key={item.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments

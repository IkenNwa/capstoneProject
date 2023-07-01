/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react"
import { PostContext } from "../context"

function Comments() {
  const {post} = useContext<any>(PostContext)

  return (
    <div>{post && post.comments && post.comments.length > 0 ? (
      <div>
        {post.comments.map((comment: any) => (
          <div key={comment.id}>
            <div>{comment.comment}</div>
            <div>{comment.user}</div>
            </div>
        ))}
        </div>
    ) : (
      <div>No comments yet</div>
    )}
    </div>
  )
}

export default Comments
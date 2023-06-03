import { markdown } from "../assets/markdown"
import Viewer from "../components/Viewer"

function Post() {
  return (
    <div className="Post">
        <Viewer markdown={markdown}/>
    </div>
  )
}

export default Post
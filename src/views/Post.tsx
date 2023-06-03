import { markdown } from "../assets/markdown"
import Header from "../components/Header"
import Viewer from "../components/Viewer"

function Post() {
  return (
    <div className="Post">
        <Header />
        <Viewer markdown={markdown}/>
    </div>
  )
}

export default Post
/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from "../components/Header"
import Viewer from "../components/Viewer"

function Post() {
  //find post from context

  return (
    <div className="Post">
        <Header />
        <Viewer />
    </div>
  )
}

export default Post
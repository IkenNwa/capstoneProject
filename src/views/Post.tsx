/* eslint-disable @typescript-eslint/no-explicit-any */
import { Header, Viewer } from "../components";

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
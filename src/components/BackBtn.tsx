import { MdArrowBackIosNew } from "react-icons/md"
import { useNavigate } from "react-router"

function BackBtn() {
    const navigate = useNavigate()
  return (
    <button 
    className="btn"
    onClick={() => navigate(-1)}
    ><MdArrowBackIosNew /> Go Back</button>
  )
}

export default BackBtn
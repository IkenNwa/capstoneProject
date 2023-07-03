import { MdArrowBackIosNew } from "react-icons/md"
import { useNavigate } from "react-router"

function BackBtn() {
    const navigate = useNavigate()
    const handleNavigate = () => {
      //Disable back button if the previous page is the new tab page
      if (window.location.pathname === "/newtab") {
        return
      }
      navigate(-1)
    }
  return (
    <button 
    className="btn"
    onClick={handleNavigate}
    ><MdArrowBackIosNew /> Go Back</button>
  )
}

export default BackBtn
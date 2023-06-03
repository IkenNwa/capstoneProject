import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import UserBanner from "./UserBanner"
import CreditsBanner from "./CreditsBanner"
import Interactions from "./Interactions"
import Profile from "./Profile";
import ChatterLogo from "./ChatterLogo";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Viewer({markdown}:any) {
  return (
    <>
    <div className="viewer">
      <ChatterLogo />
      <Profile />
    </div>
      <UserBanner />
      
      <div className="article">
        <Interactions />
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
      <Interactions />
      <CreditsBanner />
    </>
  );
}

export default Viewer
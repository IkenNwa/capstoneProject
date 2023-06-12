import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import UserBanner from "./UserBanner"
import CreditsBanner from "./CreditsBanner"
import Interactions from "./Interactions"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Viewer({markdown}:any) {
    return (
    <div>
      <div className="article max-margin">
        <UserBanner />
        <Interactions />
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
      <Interactions />
      <CreditsBanner />
    </div>
  );
}

export default Viewer
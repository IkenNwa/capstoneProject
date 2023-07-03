/* eslint-disable @typescript-eslint/no-explicit-any */

import { useContext } from "react";
import { UserContext } from "../context";
import Commenter from "./Commenter";
import WriterInfo from "./WriterInfo";


function CreditsBanner() {
  
const {user} = useContext<any>(UserContext)
  return (
    <>
      {user && (
        <Commenter />
      )}
      <WriterInfo />
    </>
  );
}

export default CreditsBanner;

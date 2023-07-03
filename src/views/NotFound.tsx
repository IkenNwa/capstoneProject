/* eslint-disable @typescript-eslint/no-explicit-any */
import { createUseStyles } from "react-jss";
import { BackBtn, ChatterLogo, SEO } from "../components";
import { useEffect, useState } from "react";
import { Loader } from ".";

const styles = createUseStyles({
  page:{
    display: "flex",
    flexDirection: "column",
    height: "100svh",
    alignItems: "center",
    justifyContent: "space-evenly",
    textAlign: "center",
  },
})

function NotFound() {
  const classes = styles()
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>{!isLoading ? (
      <div className={classes.page}>
      <SEO 
      title="Not Found"
      description="The page you are looking for cannot be found."
       />
      <ChatterLogo />
      <h1>The Page you are looking for cannot be Found.</h1>
      <BackBtn />
    </div>) : (
     <Loader />)}
    </>
  );
}

export default NotFound;

import React, { useState, useEffect, useRef, createRef } from "react";
import { makeStyles } from "@mui/styles";
import lottie from "lottie-web";

export const Button = (props) => {
  const [play, setPlay] = useState(false);
  const [iconColor, setIconColor] = useState(
    require("./animations/clockblack")
  );
  // const btn = useRef(null);
  let btn = createRef();

  useEffect(() => {
    lottie.loadAnimation({
      container: btn.current,
      animationData: iconColor,
      renderer: "svg",
      loop: false,
      autoplay: true,
    });
    return () => lottie.destroy();
  }, [play]);

  const useStyles = makeStyles({
    btn: {
      position: "absolute",
      width: "50px",
      left: "15%",
    },

    root: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      alignContent: "center",
      padding: "10px 20px",
      minWidth: "10px",
      maxWidth: "150px",
      height: "40px",
      fontFamily: "Roboto, arial",
      backgroundColor: "white",
      border: ({ outline }) =>
        outline ? "solid 2px black" : "solid 2px white",
      borderRadius: "4px",
      background: ({ outline }) => (outline ? "white" : "black"),
      color: ({ outline }) => (outline ? "black" : "white"),
      letterSpacing: "0.7px",
      fontSize: "17px",
      cursor: "pointer",
      transition: ".3s ease ",
      padding: ({ big }) => (big ? "16px 40px" : "10px 25px"),
      borderRadius: ({ round }) => (round ? "50px" : "none"),
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
      "&:hover": {
        // background: ({ outline }) => (outline ? "black" : "#eeeeee"),
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        transform: "translateY(-3px)",
        filter: "invert(1)",
      },
    },
    text: {
      position: "absolute",
      left: "42%",
    },
  });

  const playAnimation = () => {
    setPlay(!play);
  };

  const classes = useStyles(props);
  return (
    <div
      className={classes.root}
      onMouseEnter={() => playAnimation()}
      onClick={() => playAnimation()}
    >
      <div ref={btn} className={classes.btn} />
      <div className={classes.text}>{props.text}</div>
    </div>
  );
};

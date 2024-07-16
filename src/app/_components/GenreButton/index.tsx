import { css } from "../../../../styled-system/css";
import { defineConfig } from "@pandacss/dev";

defineConfig({
  theme: {
    extend: {
      breakpoints: {
        sm: "500px",
      },
    },
  },
});

const GenreButton = (props: {
  name: string;
  selected: boolean;
  clickHandler: () => void;
}) => {
  return (
    <>
      {props.selected ? (
        <button className={trueButtonStyle} onClick={props.clickHandler}>
          <div className={trueTopDivStyle}>
            <p>{props.name}</p>
          </div>
          <div className={trueBottomDivStyle}></div>
        </button>
      ) : (
        <button className={falseButtonStyle} onClick={props.clickHandler}>
          <div className={falseTopDivStyle}>
            <p>{props.name}</p>
          </div>
          <div className={falseBottomDivStyle}></div>
        </button>
      )}
    </>
  );
};

const trueButtonStyle = css({
  color: "night",
  sm: {
    width: "205px",
  },
  width: "135px",
  height: "43px",
  cursor: "pointer",
});
const trueTopDivStyle = css({
  sm: {
    width: "200px",
  },
  width: "130px",
  height: "37px",
  border: "3px solid #BFA45E",
  bgColor: "night",
  paddingRight: "10px",
});
const trueBottomDivStyle = css({
  sm: {
    width: "200px",
  },
  width: "130px",
  height: "37px",
  border: "3px solid #BFA45E",
  marginLeft: "-5px",
  marginTop: "-42px",
  bgColor: "star",
});

const falseButtonStyle = css({
  color: "star",
  sm: {
    width: "205px",
  },
  width: "135px",
  height: "43px",
  cursor: "pointer",
});
const falseTopDivStyle = css({
  sm: {
    width: "200px",
  },
  width: "130px",
  height: "37px",
  border: "3px solid #BFA45E",
  bgColor: "night",
  paddingRight: "10px",
});
const falseBottomDivStyle = css({
  sm: {
    width: "200px",
  },
  width: "130px",
  height: "37px",
  border: "3px solid #BFA45E",
  marginLeft: "-5px",
  marginTop: "-42px",
  bgColor: "night",
});

export default GenreButton;

import { css } from "../../../../styled-system/css";

const Button = (props: { name: string; clickHandler: () => void }) => {
  return (
    <button type="submit" className={buttonStyle} onClick={props.clickHandler}>
      <div className={topDivStyle}>{props.name}</div>
      <div className={bottomDivStyle}></div>
    </button>
  );
};

const buttonStyle = css({
  color: "night",
  width: "205px",
  height: "43px",
  cursor: "pointer",
  marginLeft: "5px",
  _hover: {
    transitionDuration: "0.2s",
    opacity: "0.8",
  },
});
const topDivStyle = css({
  fontSize: "16px",
  width: "200px",
  height: "37px",
  border: "3px solid #BFA45E",
  bgColor: "night",
});
const bottomDivStyle = css({
  width: "200px",
  height: "37px",
  border: "3px solid #BFA45E",
  marginLeft: "-5px",
  marginTop: "-42px",
  bgColor: "star",
});

export default Button;

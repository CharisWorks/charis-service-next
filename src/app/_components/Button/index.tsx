import { css } from "../../../../styled-system/css";

const Button = (props: { name: string; clickHandler: () => void }) => {
  const buttonStyle = css({
    color: "star",
    width: "205px",
    height: "43px",
    cursor: "pointer",
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
    bgColor: "night",
  });

  return (
    <button type="submit" className={buttonStyle} onClick={props.clickHandler}>
      <div className={topDivStyle}>{props.name}</div>
      <div className={bottomDivStyle}></div>
    </button>
  );
};

export default Button;

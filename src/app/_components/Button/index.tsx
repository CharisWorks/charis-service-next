import { css } from "../../../../styled-system/css";

const Button = (props: { name: string, clickHandler: () => void }) => {
  const button = css({
    color: "star",
    width: "205px",
    height: "43px",
    cursor: "pointer",
  });
  const topDiv = css({
    width: "200px",
    height: "37px",
    border: "3px solid #BFA45E",
    bgColor: "night",
  });
  const bottomDiv = css({
    width: "200px",
    height: "37px",
    border: "3px solid #BFA45E",
    marginLeft: "-5px",
    marginTop: "-42px",
    bgColor: "night"
  });

  return (
    <button className={button} onClick={props.clickHandler}>
      <div className={topDiv}>{props.name}</div>
      <div className={bottomDiv}></div>
    </button>
  );
}

export default Button;


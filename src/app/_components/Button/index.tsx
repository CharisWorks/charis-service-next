import { css } from "../../../../styled-system/css";

const Button = (props: { name: string, clickHandler: () => void }) => {
  const button = css({
    color: "star",
    border: "3px solid #BFA45E",
    width: "200px",
    height: "37px"
  })

  return (
    <button className={button} onClick={props.clickHandler}>{props.name}</button>
  );
}

export default Button;


import { css } from "../../../../styled-system/css";

const SoldOutButton = (props: { name: string }) => {
  const buttonStyle = css({
    color: "star",
    width: "205px",
    height: "43px",
    fontSize: "16px",
    border: "3px solid #8c8065",
    bgColor: "#5c5c5c",
  });

  return (
    <button type="submit" className={buttonStyle} disabled={true}>
      {props.name}
    </button>
  );
};

export default SoldOutButton;

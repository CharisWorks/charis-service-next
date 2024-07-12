import { css } from "../../../../styled-system/css";

const GenreButton = (props: {
  name: string;
  selected: boolean;
  clickHandler: () => void;
}) => {
  const trueButtonStyle = css({
    color: "night",
    width: "205px",
    height: "43px",
    cursor: "pointer",
  });
  const trueTopDivStyle = css({
    width: "200px",
    height: "37px",
    border: "3px solid #BFA45E",
    bgColor: "night",
  });
  const trueBottomDivStyle = css({
    width: "200px",
    height: "37px",
    border: "3px solid #BFA45E",
    marginLeft: "-5px",
    marginTop: "-42px",
    bgColor: "star",
  });

  const falseButtonStyle = css({
    color: "star",
    width: "205px",
    height: "43px",
    cursor: "pointer",
  });
  const falseTopDivStyle = css({
    width: "200px",
    height: "37px",
    border: "3px solid #BFA45E",
    bgColor: "night",
  });
  const falseBottomDivStyle = css({
    width: "200px",
    height: "37px",
    border: "3px solid #BFA45E",
    marginLeft: "-5px",
    marginTop: "-42px",
    bgColor: "night",
  });

  return (
    <>
      {props.selected ? (
        <button className={trueButtonStyle} onClick={props.clickHandler}>
          <div className={trueTopDivStyle}>{props.name}</div>
          <div className={trueBottomDivStyle}></div>
        </button>
      ) : (
        <button className={falseButtonStyle} onClick={props.clickHandler}>
          <div className={falseTopDivStyle}>{props.name}</div>
          <div className={falseBottomDivStyle}></div>
        </button>
      )}
    </>
  );
};

export default GenreButton;

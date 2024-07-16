import { css } from "../../../../styled-system/css";

const Loading = (props: { isLoading: boolean }) => {
  return (
    <>
      {props.isLoading ? (
        <div className={LoadingBodyStyle}>
          <div className={LoadingBoxStyle}>
            <div className={charisLogoSquare1}></div>
            <div className={charisLogoSquare2}></div>
          </div>
        </div>
      ) : (
        <div className={FadeOutLoadingBodyStyle}>
          <div className={LoadingBoxStyle}>
            <div className={charisLogoSquare1}></div>
            <div className={charisLogoSquare2}></div>
          </div>
        </div>
      )}
    </>
  );
};

const LoadingBodyStyle = css({
  position: "fixed",
  width: "100%",
  height: "100lvh",
  bgColor: "night",
});
const LoadingBoxStyle = css({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});
const charisLogoSquare1 = css({
  width: "100px",
  height: "100px",
  border: "6px solid #BFA45E",
});
const charisLogoSquare2 = css({
  width: "100px",
  height: "100px",
  border: "6px solid #BFA45E",
  marginTop: "-100px",
  transform: "rotate(45deg)",
  animation: "spin 2s infinite",
});
const FadeOutLoadingBodyStyle = css({
  position: "fixed",
  width: "100%",
  height: "100lvh",
  bgColor: "night",
  animation: "fadeOut 2s",
});

export default Loading;

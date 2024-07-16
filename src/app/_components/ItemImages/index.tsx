import { css } from "../../../../styled-system/css";
import { MeiliItemImage } from "@/api/meili";
import { useState } from "react";

const ItemImages = (props: { imageArray: MeiliItemImage[] }) => {
  const [imageUrl, setImageUrl] = useState<string>(
    props.imageArray[0].large_url
  );
  const itemImageButtonWrapper = (index: number) => {
    if (typeof props.imageArray === "undefined") return;
    const imageUrl = props.imageArray[index];
    setImageUrl(imageUrl.large_url);
  };
  return (
    <div className={itemImagesStyle}>
      {props.imageArray.length === 1 ? (
        <div
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "393.433px",
            height: "347px",
          }}
        ></div>
      ) : (
        <div
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "393.433px",
            height: "243px",
          }}
        ></div>
      )}
      <div className={buttonWrapperStyle}>
        {props.imageArray.length === 1 ? (
          <></>
        ) : (
          props.imageArray.map((image, index) => {
            return (
              <button
                key={index}
                className={buttonStyle}
                onClick={() => itemImageButtonWrapper(index)}
              >
                <div
                  style={{
                    backgroundImage: `url(${image.large_url})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    height: "100px",
                  }}
                ></div>
              </button>
            );
          })
        )}
      </div>
    </div>
  );
};

const itemImagesStyle = css({
  width: "100%",
});
const buttonWrapperStyle = css({
  display: "flex",
  justifyContent: "flex-start",
  gap: "5px",
  marginTop: "5px",
});
const buttonStyle = css({
  flexGrow: 1,
  cursor: "pointer",
  _hover: {
    transitionDuration: "0.2s",
    opacity: "0.7",
  },
});

export default ItemImages;

"use client";
import { css } from "../../../../styled-system/css";
import { MeiliItemImage } from "@/api/meili";
import { useState } from "react";

const ItemImages = (props: { imageArray: MeiliItemImage[] | undefined }) => {
  if (typeof props.imageArray === "undefined") return;
  const [imageUrl, setImageUrl] = useState<string>(
    props.imageArray[0].large_url
  );
  const [imageDiv, setImageDiv] = useState<HTMLDivElement>();

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
  });
  const itemImageButtonWrapper = (index: number) => {
    if (typeof props.imageArray === "undefined") return;
    const imageUrl = props.imageArray[index];
    console.log(props.imageArray);
    setImageUrl(imageUrl.large_url);
  };

  return (
    <div className={itemImagesStyle}>
      <div
        style={{
          background: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "393.433px",
          height: "226.724px",
        }}
      ></div>
      <div className={buttonWrapperStyle}>
        {props.imageArray.map((image, index) => {
          return (
            <button
              key={index}
              className={buttonStyle}
              onClick={() => itemImageButtonWrapper(index)}
            >
              <div
                style={{
                  background: `url(${image.small_url})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: "100px",
                }}
              ></div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ItemImages;

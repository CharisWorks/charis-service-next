"use client";
import { css } from "../../../../styled-system/css";
import { MeiliItemImage } from "@/api/meili";
import { useEffect, useState } from "react";

type ImageStyleType = {
  background: string;
  backgroundSize: string;
  backgroundRepeat: string;
  backgroundPosition: string;
  width: string;
  height: string;
};

const ItemImages = (props: { imageArray: MeiliItemImage[] }) => {
  const [imageUrl, setImageUrl] = useState<string>(
    props.imageArray[0].large_url
  );

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
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
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
                  backgroundImage: `url(${image.large_url})`,
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

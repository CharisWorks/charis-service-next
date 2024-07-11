import * as React from "react";
import { MeiliItemHit } from "@/api/meili";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { css } from "../../../../styled-system/css";

const ItemCard = (props: { item: MeiliItemHit }) => {
  const router = useRouter();

  const cardButtonWrapper = () => {
    router.push(`item/${props.item.id}`);
  }

  const cardStyle = css({
    bgColor: "night",
    width: "260px",
    padding: "2",
  });
  const imageWrapperStyle = css({
    width: "150px",
    height: "150px",
    marginLeft: "auto",
    marginRight: "auto",
  });
  const imageStyle = css({
    borderRadius: "50%",
    width: "auto",
    height: "100%",
  });
  const workerStyle = css({
    marginTop: "20px",
    fontSize: "12px",
    color: "star",
    display: "flex",
    justifyContent: "flex-end",
  });


  return (
    <div className={cardStyle}>
      <div>
        <button onClick={cardButtonWrapper}>
          <div className={imageWrapperStyle}>
            <Image
              src={props.item.thumbnail_url}
              width={0}
              height={0}
              sizes="100vw"
              className={imageStyle}
              alt={'Picture of the author'}
            />
          </div>
          <div className={workerStyle}>
            {props.item.worker}
          </div>
          <div
            className={css({
              fontSize: "16px",
              fontWeight: 700,
              color: "star",
              display: "flex",
              justifyContent: "flex-start",
            })}
          >
            ￥{props.item.price}
          </div>
          <div
            className={css({
              width: "240px",
              fontSize: "24px",
              fontWeight: 700,
              color: "star",
            })}
          >
            {props.item.item_name}
          </div>
        </button>
      </div>
    </div>
  );
};

export default ItemCard;

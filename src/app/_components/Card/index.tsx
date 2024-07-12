import * as React from "react";
import { MeiliItemHit } from "@/api/meili";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { css } from "../../../../styled-system/css";

const ItemCard = (props: { item: MeiliItemHit }) => {
  const router = useRouter();

  const cardButtonWrapper = () => {
    router.push(`item/${props.item.id}`);
  };

  const cardStyle = css({
    width: "265px",
    bgColor: "night",
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
    fontSize: "12px",
    width: "100%",
    textAlign: "end",
    marginTop: "20px",
    color: "star",
  });
  const costStyle = css({
    fontSize: "16px",
    width: "100%",
    textAlign: "start",
    fontWeight: 700,
    color: "star",
  });
  const itemNameStyle = css({
    width: "100%",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: 700,
    color: "star",
  });

  const upperDivStyle = css({
    width: "260px",
    border: "3px solid #BFA45E",
    bgColor: "night",
    padding: "10px",
  });
  const bottomDivStyle = css({
    width: "260px",
    border: "3px solid #BFA45E",
    bgColor: "night",
    padding: "10px",
    marginLeft: "5px",
  });

  const dummyWorkerStyle = css({
    fontSize: "12px",
    width: "100%",
    textAlign: "end",
    marginTop: "20px",
    color: "rgba(0,0,0,0)",
  });
  const dummyCostStyle = css({
    fontSize: "16px",
    width: "100%",
    textAlign: "start",
    fontWeight: 700,
    color: "rgba(0,0,0,0)",
  });
  const dummyItemNameStyle = css({
    width: "100%",
    textAlign: "center",
    fontSize: "24px",
    fontWeight: 700,
    color: "rgba(0,0,0,0)",
  });

  return (
    <button className={cardStyle} onClick={cardButtonWrapper}>
      <div className={upperDivStyle}>
        <div className={imageWrapperStyle}>
          <Image
            src={props.item.thumbnail_url}
            width={0}
            height={0}
            sizes="100vw"
            className={imageStyle}
            alt={"Picture of the author"}
          />
        </div>
        <p className={workerStyle}>{props.item.worker}</p>
        <p className={costStyle}>￥{props.item.price}</p>
        <h2 className={itemNameStyle}>{props.item.item_name}</h2>
      </div>
      <div className={bottomDivStyle}>
        <div className={imageWrapperStyle}></div>
        <p className={dummyWorkerStyle}>
          {props.item.worker}
        </p>
        <p className={dummyCostStyle}>
          ￥{props.item.price}
        </p>
        <h2 className={dummyItemNameStyle}>
          {props.item.item_name}
        </h2>
      </div>
    </button>
  );
};

export default ItemCard;

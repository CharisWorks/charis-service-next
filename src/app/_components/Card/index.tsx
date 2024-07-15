import * as React from "react";
import { MeiliItemHit } from "@/api/meili";
import Image from "next/image";
import Link from "next/link";
import { css } from "../../../../styled-system/css";

const ItemCard = (props: { item: MeiliItemHit }) => {
  const cardStyle = css({
    width: "260px",
    height: "100%",
    bgColor: "night",
    margin: "10px",
    border: "3px solid #BFA45E",
    padding: "10px",
    zIndex: 10,
    boxShadow: "8px 8px 0px 0px #002D52, 8px 8px 0px 3px #BFA45E",
    cursor: "pointer",
  });
  const imageWrapperStyle = css({
    width: "150px",
    height: "150px",
    marginLeft: "auto",
    marginRight: "auto",
  });
  // const imageStyle = css({
  //   borderRadius: "50%",
  //   width: "auto",
  //   height: "100%",
  // });
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

  return (
    <Link href={`/item/${props.item.id}`} scroll={false}>
      <div className={cardStyle}>
        <div
          style={{
            width: "150px",
            height: "150px",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundImage: `url(${props.item.thumbnail_url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "50%",
          }}
        >
          {/* <Image
            src={props.item.thumbnail_url}
            width={0}
            height={0}
            sizes="100vw"
            className={imageStyle}
            alt={"Picture of the author"}
          /> */}
        </div>
        <p className={workerStyle}>{props.item.worker}</p>
        <p className={costStyle}>￥{props.item.price}</p>
        <h2 className={itemNameStyle}>{props.item.item_name}</h2>
      </div>
    </Link>
  );
};

export default ItemCard;

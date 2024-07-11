import * as React from "react";
import { MeiliItemHit } from "@/api/meili";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { css } from "../../../../styled-system/css";

const ItemCard = (props: { item: MeiliItemHit }) => {
  const router = useRouter();
  const card = css({
    bgColor: "night",
    width: "260px",
    padding: "2",
  });

  return (
    <div className={card}>
      <div>
        <button
          onClick={() => {
            router.push(`item/${props.item.id}`);
          }}
        >
          <div>
            <div
              className={css({
                display: "flex",
                justifyContent: "center",
              })}
            >
              <Image
                src={props.item.thumbnail_url}
                width={"150"}
                height={"150"}
                alt="Picture of the author"
                className={css({
                  borderRadius: "50%",
                  width: "150px",
                  height: "150px",
                })}
              />
            </div>
          </div>
          <div
            className={css({
              fontSize: "12px",
              color: "star",
              display: "flex",
              justifyContent: "flex-end",
            })}
          >
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

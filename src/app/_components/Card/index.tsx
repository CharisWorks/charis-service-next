import * as React from "react";
import { MeiliItemHit } from "@/api/meili";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ItemCard = (props: { item: MeiliItemHit }) => {
  const router = useRouter();

  return (
    <div>
      <div>
        <div>
          <div>
            <Image
              src={props.item.thumbnail_url}
              width={200}
              height={200}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div>
          {props.item.genre}
        </div>
        <div>
          {props.item.item_name}
        </div>
        <div>
          {props.item.worker}
        </div>
        <div>{props.item.price}</div>
      </div>
      <div>
        <button onClick={() => { router.push(`item/${props.item.id}`) }}>Details</button>
      </div>
    </div>
  );
}

export default ItemCard;


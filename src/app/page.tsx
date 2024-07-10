"use client";
import React, { useState } from "react";
import { Checkout } from "@/api/gobackend";
import { MeiliItemHit, Search } from "@/api/meili";
import ItemCard from "./_components/card";
export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [itemId, setItemId] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [items, setItems] = useState<MeiliItemHit[]>([]);
  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <button
          onClick={async () => {
            const { data } = await Search([keyword]);
            if (data?.hits) {
              setItems(data.hits);
            }
            console.log(data);
          }}
        >
          検索！！
        </button>
        <div>
          {items.map((item, key) => {
            return (
              <div key={key}>
                <ItemCard item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

"use client";
import React, { useState } from "react";
import { Checkout } from "@/api/gobackend";
import { Search } from "@/api/meili";
export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [itemId, setItemId] = useState(0);
  const [quantity, setQuantity] = useState(0);
  return (
    <>
      <h1>Search</h1>
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
            console.log(data);
          }}
        >
          検索！！
        </button>
      </div>
      <div>
        <h1>Checkout</h1>
        <div>商品ID</div>
        <input
          type="text"
          onChange={(e) => {
            setItemId(parseInt(e.target.value));
          }}
        />
        <div>数量</div>
        <input
          type="number"
          onChange={(e) => {
            setQuantity(Number(e.target.value));
          }}
        />

        <button
          onClick={async () => {
            const { data } = await Checkout({ itemId, quantity });
            console.log(data?.url);
          }}
        >
          購入！！
        </button>
      </div>
    </>
  );
}

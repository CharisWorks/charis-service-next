"use client";
import React, { useState } from "react";
import { Checkout } from "@/api/gobackend";
import { MeiliItemHit, Search } from "@/api/meili";
import Card from "./_components/Card";
import Button from "./_components/Button";
import TopHeader from "./_components/TopHeader"
import { css } from "../../styled-system/css";

const Home = () => {
  const [keyword, setKeyword] = useState("");
  const [itemId, setItemId] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [items, setItems] = useState<MeiliItemHit[]>([]);

  const containerStyle = css({
    bgColor: "night",
    width: "100%",
    maxWidth: "1024px",
    marginLeft: "auto",
    marginRight: "auto",
    height: "100vh"
  });
  const titleStyle = css({
    color: "star",
    fontSize: "30px",
    textAlign: "center"
  });
  const searchStyle = css({
    margin: "30px auto 0px",
    outline: "none",
    border: "none",
    fontSize: "35px",
    color: "star",
    bgColor: "night",
    textAlign: "center",
    width: "100%",
    height: "50px",
    _placeholder: {
      color: "star.700"
    }
  });
  const buttonWrapperStyle = css({
    width: "100%"
  });
  const innerButtonWrapperStyle = css({
    marginTop: "30px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "200px",
    height: "37px",
  });
  const searchDiv = css({
    width: "100%",
    height: "50px",
  })

  return (
    <>
      <div className={containerStyle}>
        <TopHeader />
        <h1 className={titleStyle}>ブレスレッドを探すたびにでかけませんか？</h1>
        <input
          type="text"
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          className={searchStyle}
          placeholder="SEARCH"
        />
        <div className={buttonWrapperStyle} >
          <div className={innerButtonWrapperStyle}>
            <Button name="検索" clickHandler={async () => {
              const { data } = await Search([keyword]);
              if (data?.hits) {
                setItems(data.hits);
              }
              console.log(data);
            }} />
          </div>
        </div>
        <div className={searchDiv}></div>
        <div>
          {items.map((item, key) => {
            return (
              <div key={key}>
                <Card item={item} />
              </div>
            );
          })}
        </div>
      </div >
    </>
  );
};

export default Home;

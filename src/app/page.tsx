"use client";
import React, { useState } from "react";
//import { Checkout } from "@/api/gobackend";
import { MeiliItemHit, Search } from "@/api/meili";
import Card from "./_components/Card";
import Button from "./_components/Button";
import TopHeader from "./_components/TopHeader";
import GenreButton from "./_components/GenreButton";
import { css } from "../../styled-system/css";

const Home = () => {
  const [keyword, setKeyword] = useState("");
  //const [itemId, setItemId] = useState(0);
  //const [quantity, setQuantity] = useState(0);
  const [items, setItems] = useState<MeiliItemHit[]>([]);
  const [braceletOrRibbon, setBraceletOrRibbon] = useState("bracelet");

  //genre
  const choiceBracelet = () => {
    setBraceletOrRibbon("bracelet");
  };
  const choiceRibbon = () => {
    setBraceletOrRibbon("ribbon");
  };

  const containerStyle = css({
    bgColor: "night",
    width: "100%",
    maxWidth: "1024px",
    marginLeft: "auto",
    marginRight: "auto",
    minHeight: "100lvh",
  });
  const titleStyle = css({
    color: "star",
    fontSize: "30px",
    textAlign: "center",
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
      color: "star.700",
    },
  });
  const buttonWrapperStyle = css({
    width: "100%",
  });
  const innerButtonWrapperStyle = css({
    marginTop: "30px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "200px",
    height: "37px",
  });
  const genreStyle = css({
    color: "star",
    fontSize: "30px",
    textAlign: "center",
    marginTop: "30px",
    marginBottom: "30px",
  });
  const genreButtonStyle = css({
    width: "100%",
  });
  const genreButtonInnerStyle = css({
    display: "flex",
    width: "fit-content",
    marginLeft: "auto",
    marginRight: "auto",
  });
  const genreButtonSpaceStyle = css({
    width: "30px",
    height: "43px",
  });
  const searchDivStyle = css({
    width: "100%",
    height: "50px",
  });

  return (
    <div className={containerStyle}>
      <TopHeader />
      <h1 className={titleStyle}>美しいものを探す旅にでかけませんか？</h1>
      <input
        type="text"
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        className={searchStyle}
        placeholder="SEARCH"
      />
      <div className={buttonWrapperStyle}>
        <div className={innerButtonWrapperStyle}>
          <Button
            name="検索"
            clickHandler={async () => {
              const { data } = await Search([keyword]);
              if (data?.hits) {
                setItems(data.hits);
              }
              console.log(data);
            }}
          />
        </div>
      </div>
      <h2 className={genreStyle}>ジャンル</h2>
      <div className={genreButtonStyle}>
        <div className={genreButtonInnerStyle}>
          {braceletOrRibbon === "bracelet" ? (
            <>
              <GenreButton
                name="ブレスレッド"
                selected={true}
                clickHandler={choiceBracelet}
              />
              <div className={genreButtonSpaceStyle}></div>
              <GenreButton
                name="リボン"
                selected={false}
                clickHandler={choiceRibbon}
              />
            </>
          ) : (
            <>
              <GenreButton
                name="ブレスレッド"
                selected={false}
                clickHandler={choiceBracelet}
              />
              <div className={genreButtonSpaceStyle}></div>
              <GenreButton
                name="リボン"
                selected={true}
                clickHandler={choiceRibbon}
              />
            </>
          )}
        </div>
      </div>
      <div className={searchDivStyle}></div>
      <div>
        {items.map((item, index) => {
          if (item.genre === braceletOrRibbon) {
            return (
              <Card key={index} item={item} />
            );
          } else {
            return <React.Fragment key={index}></React.Fragment>;
          }
        })}
      </div>
    </div>
  );
};

export default Home;

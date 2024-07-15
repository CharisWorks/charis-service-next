"use client";
import React, { useEffect, useState } from "react";
import { MeiliItemHit, Search } from "@/api/meili";
import Card from "./_components/Card";
import Button from "./_components/Button";
import TopHeader from "./_components/TopHeader";
import GenreButton from "./_components/GenreButton";
import Loading from "./_components/Loading";
import { css } from "../../styled-system/css";
import { defineConfig } from "@pandacss/dev";
defineConfig({
  theme: {
    extend: {
      breakpoints: {
        sm: "980px",
        md: "1140px",
        lg: "1320px",
        xl: "1480px",
      },
    },
  },
});
const Home = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [items, setItems] = useState<MeiliItemHit[]>([]);
  const [braceletOrRibbon, setBraceletOrRibbon] = useState<string>("bracelet");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  const fetchData = async (keyword: string) => {
    const { data } = await Search([keyword]);
    if (data?.hits) {
      setItems(data.hits);
    }
  };
  useEffect(() => {
    (async () => {
      await fetchData("");
    })();
  }, []);
  const choiceBracelet = () => {
    setBraceletOrRibbon("bracelet");
  };
  const choiceRibbon = () => {
    setBraceletOrRibbon("ribbon");
  };
  useEffect(() => {
    setIsLoading(false);
    setTimeout(() => {
      setFadeOut(true);
    }, 1800);
  }, [items]);

  const containerStyle = css({
    bgColor: "night",
    maxWidth: "1210px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: "100px",
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
    paddingBottom: "50px",
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
  const CardWrapperStyle = css({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: "30px",
    alignItems: "stretch",
    alignContent: "stretch",
    width: ["300px", "600px", "600px", "900px", "1600px"],
    maxWidth: "1210px",
  });
  const CardContainerStyle = css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  });

  return (
    <>
      {isLoading ? (
        <Loading isLoading={true} />
      ) : (
        <>
          {fadeOut ? <></> : <Loading isLoading={false} />}
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
                    await fetchData(keyword);
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
            <div className={CardContainerStyle}>
              <div className={CardWrapperStyle}>
                {items.map((item, index) => {
                  if (item.genre === braceletOrRibbon) {
                    return (
                      <>
                        <Card key={index} item={item} />
                        <Card key={index} item={item} />
                        <Card key={index} item={item} />
                      </>
                    );
                  } else {
                    return <React.Fragment key={index}></React.Fragment>;
                  }
                })}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;

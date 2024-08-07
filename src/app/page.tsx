"use client";
import React, { Suspense, useEffect, useState } from "react";
import { MeiliItemHit, Search } from "@/api/meili";
import Card from "./_components/Card";
import Button from "./_components/Button";
import GenreButton from "./_components/GenreButton";
import Loading from "./_components/Loading";
import { css } from "../../styled-system/css";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { defineConfig } from "@pandacss/dev";
import Footer from "./_components/Footer";
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
  const searchParams = useSearchParams();
  const router = useRouter();

  const [keyword, setKeyword] = useState<string>("");
  const [items, setItems] = useState<MeiliItemHit[]>([]);
  const [genre, setGenre] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const fetchData = async () => {
    const { data } = await Search([query ?? ""]);
    if (data?.hits) {
      const items: MeiliItemHit[] = [];
      if (genre) {
        data?.hits.map((item) => {
          if (item.genre === genre) {
            items.push(item);
          }
        });
        setItems(items);
      } else {
        setItems(data?.hits);
      }
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, [query, genre]);

  useEffect(() => {
    setGenre(searchParams.get("genre") ?? "");
    setQuery(searchParams.get("q") ?? "");
    setKeyword(searchParams.get("q") ?? "");
  }, [searchParams]);

  useEffect(() => {
    setIsLoading(false);
    setTimeout(() => {
      setFadeOut(true);
    }, 1800);
  }, [items]);
  function routinghandler({
    keyword,
    genre,
  }: {
    keyword?: string;
    genre?: string;
  }) {
    const url = new URL(process.env.NEXT_PUBLIC_ADDRESS ?? "http://localhost:3000");
    if (keyword) {
      url.searchParams.set("q", keyword);
    } else {
      url.searchParams.delete("q");
    }
    if (genre) {
      url.searchParams.set("genre", genre);
    } else {
      url.searchParams.delete("genre");
    }
    console.log(url.toString());
    router.push(url.toString());
  }
  return (
    <>
      {isLoading ? (
        <Loading isLoading={true} />
      ) : (
        <>
          {fadeOut ? <></> : <Loading isLoading={false} />}
          <div className={containerStyle}>
            <h1 className={titleStyle}>美しいものを探す旅にでかけませんか？</h1>
            <input
              type="text"
              defaultValue={query}
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
                  clickHandler={() => {
                    setQuery(keyword);
                    routinghandler({ keyword: keyword, genre: genre });
                  }}
                />
              </div>
            </div>
            <h2 className={genreStyle}>ジャンル</h2>
            <div className={genreButtonStyle}>
              <div className={genreButtonInnerStyle}>
                <GenreButton
                  name="ブレスレッド"
                  selected={genre === "bracelet"}
                  clickHandler={() => {
                    if (genre === "bracelet") {
                      setGenre("");
                      routinghandler({
                        keyword: keyword,
                        genre: "",
                      });
                    } else {
                      setGenre("bracelet");
                      routinghandler({
                        keyword: keyword,
                        genre: "bracelet",
                      });
                    }
                  }}
                />
                <div className={genreButtonSpaceStyle}></div>
                <GenreButton
                  name="リボン"
                  selected={genre === "ribbon"}
                  clickHandler={() => {
                    if (genre === "ribbon") {
                      setGenre("");
                      routinghandler({
                        keyword: keyword,
                        genre: "",
                      });
                    } else {
                      setGenre("ribbon");
                      routinghandler({
                        keyword: keyword,
                        genre: "ribbon",
                      });
                    }
                  }}
                />
              </div>
            </div>
            {items.length !== 0 ? (
              <div className={CardContainerStyle}>
                <div className={CardWrapperStyle}>
                  {items.map((item, index) => {
                    return <Card key={index} item={item} />;
                  })}
                </div>
              </div>
            ) : (
              <>
                <h2 className={notFoundTitleStyle}>
                  商品が見つかりませんでした。
                </h2>
                <h3 className={notFoundDescriptionStyle}>
                  色やサイズなど、他のキーワードで検索してみてください。
                </h3>
              </>
            )}
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

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
  paddingTop: "120px",
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
const notFoundTitleStyle = css({
  color: "star",
  fontSize: "30px",
  textAlign: "center",
  marginTop: "30px",
  marginBottom: "30px",
});
const notFoundDescriptionStyle = css({
  color: "star",
  fontSize: "20px",
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
});
const CardContainerStyle = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
});

const Page = () => {
  return (
    <Suspense fallback={<Loading isLoading={true} />}>
      <Home />
    </Suspense>
  );
};
export default Page;

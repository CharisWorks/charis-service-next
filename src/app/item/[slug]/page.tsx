"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Description from "../../_components/Description";
import { MeiliItemHit } from "@/api/meili";
import { GetItem } from "@/api/gobackend";
import { css } from "../../../../styled-system/css";
import Header from "../../_components/Header";
import Button from "@/app/_components/Button";

const ItemImages = dynamic(() => import("../../_components/ItemImages"), {
  ssr: false,
});

export default function ItemPage({ params }: { params: { slug: string } }) {
  const [item, setItems] = useState<MeiliItemHit>();
  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await GetItem(params.slug);
      setItems(data);
    };
    fetchItems();
  }, [params.slug]);

  const containerStyle = css({
    bgColor: "night",
    width: "100%",
    maxWidth: "1044px",
    minHeight: "100lvh",
    paddingTop: "185px",
    paddingBottom: "100px",
    paddingRight: "10px",
    paddingLeft: "10px",
    marginLeft: "auto",
    marginRight: "auto",
  });
  const ItemStyle = css({
    width: "100%",
    padding: "20px",
    border: "3px solid #BFA45E",
    boxShadow: "8px 8px 0px 0px #002D52, 8px 8px 0px 3px #BFA45E",
  });
  const mainStyle = css({
    display: "flex",
    marginBottom: "50px",
  });
  const mainImageStyle = css({
    width: "412px",
  });
  const mainContentStyle = css({
    width: "612px",
    color: "star",
    paddingLeft: "30px",
  });
  const itemNameStyle = css({
    fontSize: "40px",
  });
  const workerStyle = css({
    fontSize: "16px",
  });
  const tagWapperStyle = css({
    marginTop: "60px",
  });
  const tagStyle = css({
    fontSize: "18px",
  });
  const priceWapperStyle = css({
    display: "flex",
  });
  const stockStyle = css({
    fontSize: "24px",
    marginTop: "auto",
    marginBottom: "13px",
  });
  const priceStyle = css({
    fontSize: "48px",
  });
  const taxStyle = css({
    marginTop: "auto",
    marginBottom: "auto",
    paddingLeft: "10px",
  });
  const stockAndPriceWapperStyle = css({
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "12px",
  });
  const buyButtonWapper = css({
    width: "fit-content",
    marginLeft: "auto",
    marginRight: "auto",
  });
  const errorMessage = css({
    color: "star",
    fontSize: "20px",
    textAlign: "center",
  });

  return (
    <>
      <Header />
      <div className={containerStyle}>
        <div className={ItemStyle}>
          <div className={mainStyle}>
            <div className={mainImageStyle}>
              {typeof item?.images !== "undefined" ? (
                <ItemImages imageArray={item?.images} />
              ) : (
                <p className={errorMessage}>Loading...</p>
              )}
            </div>
            <div className={mainContentStyle}>
              <h1 className={itemNameStyle}>{item?.item_name}</h1>
              <p className={workerStyle}>出品者: {item?.worker}</p>
              <div className={tagWapperStyle}>
                <p className={tagStyle}>色: {item?.tags[0]}</p>
                <p className={tagStyle}>長さ: {item?.tags[1]}</p>
              </div>
              <div className={stockAndPriceWapperStyle}>
                <h3 className={stockStyle}>在庫: {item?.stock}個 (n → ∞)</h3>
                <div className={priceWapperStyle}>
                  <h2 className={priceStyle}>¥ {item?.price}</h2>
                  <p className={taxStyle}>税込</p>
                </div>
              </div>
              <div className={buyButtonWapper}>
                <Button name="購入" clickHandler={() => {}} />
              </div>
            </div>
          </div>
          <Description overview={item?.description ?? ""} />
        </div>
      </div>
    </>
  );
}

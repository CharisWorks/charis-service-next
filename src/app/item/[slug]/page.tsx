"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Description from "../../_components/Description";
import { MeiliItemHit } from "@/api/meili";
import { Checkout, GetItem } from "@/api/gobackend";
import { css } from "../../../../styled-system/css";
import Header from "../../_components/Header";
import Button from "@/app/_components/Button";
import SoldOutButton from "../../_components/SoldOutButton";

const ItemImages = dynamic(() => import("../../_components/ItemImages"), {
  ssr: false,
});

export default function ItemPage({ params }: { params: { slug: string } }) {
  const [item, setItems] = useState<MeiliItemHit>();
  const fetchItems = async () => {
    const { data } = await GetItem(params.slug);
    setItems(data);
  };
  useEffect(() => {
    (async () => {
      await fetchItems();
    })();
  }, [params.slug]);
  const quantityRef = useRef<HTMLSelectElement>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const selectQuantity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(Number(e.target.value));
  };
  const quantityArray: number[] = Array.from(
    { length: item?.stock ?? 0 },
    (_, i) => i + 1
  );
  const [purchaseValidation, setPurchaseValidation] = useState<boolean>(false);
  useEffect(() => {
    if (quantityArray.length !== 0) {
      setPurchaseValidation(true);
    }
  }, [quantityArray]);
  const router = useRouter();

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
              <div className={tagWrapperStyle}>
                <p className={tagStyle}>色: {item?.tags[0]}</p>
                <p className={tagStyle}>長さ: {item?.tags[1]}</p>
              </div>
              <div className={stockAndPriceWrapperStyle}>
                <h3 className={stockStyle}>在庫: {item?.stock}個 (n → ∞)</h3>
                <div className={priceWrapperStyle}>
                  <h2 className={priceStyle}>¥ {item?.price}</h2>
                  <p className={taxStyle}>税込</p>
                </div>
              </div>
              <div className={purchaseAndSelectWrapperStyle}>
                <div className={selectWrapperStyle}>
                  <div className={selectInnerStyle}>
                    <p className={quantityStyle}>数量</p>
                    <select
                      ref={quantityRef}
                      value={quantity}
                      onChange={selectQuantity}
                      className={selectStyle}
                    >
                      {quantityArray.map((quantity, index) => (
                        <option value={quantity} key={index}>
                          {quantity}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className={purchaseButtonWrapperStyle}>
                  <div className={purchaseButtonInnerStyle}>
                    {purchaseValidation ? (
                      <Button
                        name="購入"
                        clickHandler={async () => {
                          if (item?.id) {
                            const p = { itemId: parseInt(item.id), quantity };
                            const data = await Checkout(p);
                            if (data.data?.url) {
                              router.push(data.data.url);
                            }
                          }
                        }}
                      />
                    ) : (
                      <SoldOutButton name="SOLD OUT" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Description overview={item?.description ?? ""} />
        </div>
      </div>
    </>
  );
}

const errorMessage = css({
  color: "star",
  fontSize: "20px",
  textAlign: "center",
});
const containerStyle = css({
  bgColor: "night",
  width: "100%",
  maxWidth: "1055px",
  minHeight: "100lvh",
  paddingTop: "185px",
  paddingBottom: "100px",
  paddingRight: "21px",
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
const tagWrapperStyle = css({
  marginTop: "52px",
});
const tagStyle = css({
  fontSize: "18px",
});
const priceWrapperStyle = css({
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
const stockAndPriceWrapperStyle = css({
  display: "flex",
  justifyContent: "space-between",
  paddingBottom: "12px",
});
const purchaseAndSelectWrapperStyle = css({
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  display: "flex",
});
const selectStyle = css({
  color: "star",
  width: "205px",
  height: "42.5px",
  fontSize: "16px",
  cursor: "pointer",
  border: "3px solid #BFA45E",
  textAlign: "center",
});
const selectWrapperStyle = css({
  flexGrow: "1",
});
const purchaseButtonWrapperStyle = css({
  flexGrow: "1",
  marginTop: "30px",
});
const purchaseButtonInnerStyle = css({
  width: "fit-content",
  marginLeft: "auto",
  marginRight: "auto",
});
const selectInnerStyle = css({
  width: "fit-content",
  marginLeft: "auto",
  marginRight: "auto",
});
const quantityStyle = css({
  fontSize: "20px",
});

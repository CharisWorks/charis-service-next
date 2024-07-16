"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Description from "../../_components/Description";
import { MeiliItemHit } from "@/api/meili";
import { Checkout, GetItem } from "@/api/gobackend";
import { css } from "../../../../styled-system/css";
import Header from "../../_components/Header";
import Button from "@/app/_components/Button";
import SoldOutButton from "../../_components/SoldOutButton";
import ItemImages from "../../_components/ItemImages";
import Loading from "../../_components/Loading";
import ItemImagesMobile from "../../_components/ItemImagesMobile";

const ItemPage = ({ params }: { params: { slug: string } }) => {
  const [item, setItems] = useState<MeiliItemHit>();
  const quantityRef = useRef<HTMLSelectElement>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  const router = useRouter();
  const fetchItems = async () => {
    const { data } = await GetItem(params.slug);
    setItems(data);
  };
  useEffect(() => {
    (async () => {
      await fetchItems();
    })();
  }, [params.slug]);
  useEffect(() => {
    setIsLoading(false);
    setTimeout(() => {
      setFadeOut(true);
    }, 1800);
  }, [item]);
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

  return (
    <>
      {isLoading ? (
        <Loading isLoading={true} />
      ) : (
        <>
          {fadeOut ? <></> : <Loading isLoading={false} />}
          <Header />
          <div className={containerStyle}>
            <div className={ItemStyle}>
              <div className={mainPcStyle}>
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
                    <h3 className={stockStyle}>在庫: {item?.stock}個</h3>
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
                                const p = {
                                  itemId: parseInt(item.id),
                                  quantity,
                                };
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

              <div className={mainMobileStyle}>
                <div className={mainImageMobileStyle}>
                  {typeof item?.images !== "undefined" ? (
                    <ItemImagesMobile imageArray={item?.images} />
                  ) : (
                    <p className={errorMessage}>Loading...</p>
                  )}
                </div>
                <div className={mainContentMobileStyle}>
                  <h1 className={itemNameMobileStyle}>{item?.item_name}</h1>
                  <p className={workerStyle}>出品者: {item?.worker}</p>
                  <div className={tagWrapperStyle}>
                    <p className={tagStyle}>色: {item?.tags[0]}</p>
                    <p className={tagStyle}>長さ: {item?.tags[1]}</p>
                  </div>
                  <div className={stockAndPriceWrapperStyle}>
                    <h3 className={stockStyle}>在庫: {item?.stock}個</h3>
                    <div className={priceWrapperStyle}>
                      <h2 className={priceStyle}>¥ {item?.price}</h2>
                      <p className={taxStyle}>税込</p>
                    </div>
                  </div>
                  {/*******************************************************************/}
                  <div className={purchaseAndSelectWrapperMobileStyle}>
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
                    <div className={purchaseButtonWrapperStyle}>
                      {purchaseValidation ? (
                        <Button
                          name="購入"
                          clickHandler={async () => {
                            if (item?.id) {
                              const p = {
                                itemId: parseInt(item.id),
                                quantity,
                              };
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
                  {/*******************************************************************/}
                  <div className={purchaseAndSelectWrapperSmallMobileStyle}>
                    <div className={selectInnerStyle}>
                      <p className={quantityStyle}>数量</p>
                      <select
                        ref={quantityRef}
                        value={quantity}
                        onChange={selectQuantity}
                        className={selectSmallMobileStyle}
                      >
                        {quantityArray.map((quantity, index) => (
                          <option value={quantity} key={index}>
                            {quantity}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={purchaseButtonWrapperStyle}>
                      {purchaseValidation ? (
                        <Button
                          name="購入"
                          clickHandler={async () => {
                            if (item?.id) {
                              const p = {
                                itemId: parseInt(item.id),
                                quantity,
                              };
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
                  {/*******************************************************************/}
                </div>
              </div>
              <Description overview={item?.description ?? ""} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

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
//pc
const mainPcStyle = css({
  hideBelow: "item_xl",
  display: "flex",
  marginBottom: "50px",
});
//mobile
const mainMobileStyle = css({
  hideFrom: "item_xl",
  marginBottom: "50px",
});
//pc
const mainContentStyle = css({
  width: "612px",
  color: "star",
  paddingLeft: "30px",
});
//mobile
const mainContentMobileStyle = css({
  width: "100%",
  maxWidth: "800px",
  color: "star",
  marginLeft: "auto",
  marginRight: "auto",
});
//pc
const itemNameStyle = css({
  fontSize: "40px",
});
//mobile
const itemNameMobileStyle = css({
  marginTop: "40px",
  fontSize: "40px",
  textAlign: "center",
});
//pc
const mainImageStyle = css({
  width: "412px",
});
//mobile
const mainImageMobileStyle = css({
  width: "100%",
  maxWidth: "600px",
  marginLeft: "auto",
  marginRight: "auto",
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
//pc
const purchaseAndSelectWrapperStyle = css({
  width: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  display: "flex",
});
//mobile
const purchaseAndSelectWrapperMobileStyle = css({
  width: "430px",
  marginLeft: "auto",
  display: "flex",
  gap: "20px",
  hideBelow: "item_lg",
});
//small mobile
const purchaseAndSelectWrapperSmallMobileStyle = css({
  width: "280px",
  marginLeft: "auto",
  display: "flex",
  gap: "20px",
  hideFrom: "item_lg",
});
//pc
const selectStyle = css({
  color: "star",
  width: "205px",
  height: "42.5px",
  fontSize: "16px",
  cursor: "pointer",
  border: "3px solid #BFA45E",
  textAlign: "center",
});
//small mobile
const selectSmallMobileStyle = css({
  color: "star",
  width: "55px",
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
const selectInnerSmallMobileStyle = css({});
const quantityStyle = css({
  fontSize: "20px",
});

export default ItemPage;

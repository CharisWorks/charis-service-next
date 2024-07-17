"use client";
import React, { useEffect, useState } from "react";
import { css } from "../../../styled-system/css";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "../_components/Header";
import Loading from "../_components/Loading";
import Footer from "../_components/Footer";

const term = `
|項目|説明|
|---|---|
|販売事業者・住所|販売事業者、住所、並びにについて、開示を必要とする場合にはその旨お問合わせ下さい。請求がございましたら遅滞なく回答致します。|
|お問合わせ|contact@charis.worksよりお問い合わせください。|
|販売価格|各商品に表記された価格に準じます。また、商品の決済の際に、出品者には商品の販売価格の３％の手数料がかかります。|
|お支払方法|クレジットカードがご利用頂けます|
|支払時期|購入日即日払いとなります。引き落とし日は、クレジットカード会社とお客様との契約内容によります。|
|販売価格以外で発生する金銭|本サイトの閲覧等に必要となるインターネット接続料金、通信料金などは利用者のご負担となります。それぞれの料金は、利用者がご利用のインターネットプロバイダーまたは携帯電話会社にお問い合わせ下さい。|
|サービスの提供時期|クレジットカード情報を入力し、決済が完了した時点で課金されます。代金の入金確認後、3営業日以内に商品を発送します。|
|キャンセルポリシー|原則として**ご注文成立後の返品・キャンセルはできません**。ただし、到着した商品に不良・不足があった場合は、商品名や状況を明記の上 contact@charis.worksまでお問い合わせください。|
|動作環境|以下の推奨環境をご参照ください。Chrome 最新版,Microsoft Edge 最新版,Firefox 最新版,Safari 最新版,以上の環境以外では、正常に動作しなかったり画面表示が崩れたりする可能性があります。ご利用頂いているブラウザの種類・バージョンをご確認頂き、推奨環境でのご利用をおススメします。|
|特別条件|利用規約に定める禁止事項に該当する場合は、サービスの提供を受けることはできません。|
|免責事項|サーバートラブル、ネットワークトラブルその他不可抗力により生じたサービス・商品の提供不能、中断については、本サイトに重大な過失がある場合を除き、その責任を負わないものとします。|
`;

const Terms = () => {
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
    }, 1800);
  }, []);
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
  const titleStyle = css({
    color: "star",
    fontSize: "40px",
    textAlign: "center",
    marginBottom: "60px",
  });
  const termStyle = css({
    color: "star",
    "& h1": {
      fontSize: "28px",
      marginTop: "10px",
      marginBottom: "10px",
    },
    "& h2": {
      fontSize: "26px",
      marginTop: "10px",
      marginBottom: "10px",
    },
    "& h3": {
      fontSize: "24px",
      marginTop: "10px",
      marginBottom: "10px",
    },
    "& h4": {
      fontSize: "22px",
      marginTop: "10px",
      marginBottom: "10px",
    },
    "& h5": {
      fontSize: "20px",
      marginTop: "10px",
      marginBottom: "10px",
    },
    "& h6": {
      fontSize: "18px",
      marginTop: "10px",
      marginBottom: "10px",
    },
    "& strong": {
      fontWeight: "bold",
      color: "red",
    },
    "& p": {
      fontSize: "16px",
      marginTop: "10px",
      marginBottom: "10px",
    },
    "& a": {
      fontSize: "16px",
      textDecoration: "underline",
      marginTop: "10px",
      marginBottom: "10px",
    },
    "& ul": {
      listStyle: "inside square",
    },
    "& ol": {
      listStyle: "inside decimal",
    },
    "& blockquote": {
      color: "rgba(191, 164, 94, 0.8)",
      bgColor: "rgb(25, 71, 108)",
      paddingTop: "5px",
      paddingBottom: "5px",
      paddingRight: "10px",
      paddingLeft: "10px",
      borderRadius: "5px",
      marginTop: "20px",
      marginBottom: "20px",
    },
    "& table": {
      marginTop: "20px",
      marginBottom: "20px",
      borderCollapse: "collapse",
      "& th": {
        border: "1px solid #BFA45E",
        borderBottom: "3px double #BFA45E",
        padding: "8px",
        textAlign: "left",
        bgColor: "rgb(0, 33, 60)",
      },
      "& td": {
        border: "1px solid #BFA45E",
        padding: "8px",
        textAlign: "left",
        bgColor: "rgb(0, 51, 93)",
      },
    },
  });

  return (
    <>
      {fadeOut ? <></> : <Loading isLoading={false} />}
      <Header />
      <div className={containerStyle}>
        <h1 className={titleStyle}>特定商取引法に基づく表記</h1>
        <Markdown className={termStyle} remarkPlugins={[remarkGfm]}>
          {term}
        </Markdown>
      </div>
      <Footer />
    </>
  );
};

export default Terms;

"use client";
import React, { useEffect, useState } from "react";
import { css } from "../../../styled-system/css";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "../_components/Header";
import Loading from "../_components/Loading";
import Footer from "../_components/Footer";

const term = `
# Charis WORKsとは
Charis WORKsとはwhatacottonが実装、Myxogastria0808がデザインを手掛けるECサイトです。
主にブレスレットを販売しております。

このサイトは2024年8月にスタートしました。まだ、始まったばかりのサイトですが、よろしくお願いいたします。

また、ご要望やご質問につきましてはcontact@charis.worksまでよろしくお願いいたします。
`;

const Terms = () => {
  const [fadeOut, setFadeOut] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
    }, 1800);
    window.scrollTo(0, 0);
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
        <h1 className={titleStyle}>Charis WORKsについて</h1>
        <Markdown className={termStyle} remarkPlugins={[remarkGfm]}>
          {term}
        </Markdown>
      </div>
      <Footer />
    </>
  );
};

export default Terms;

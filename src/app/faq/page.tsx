"use client";
import React from "react";
import Header from "../_components/Header";
import { css } from "../../../styled-system/css";

const faq: { question: string; answer: string }[] = [
  {
    question: "Q. マイページはありますか？",
    answer:
      "A. 申し訳ありません。今後マイページ機能を開発していく予定ではありますが、ご購入していただいた商品に関しましてはメールをご確認いただくようお願いいたします。またご要望・ご質問がありましたら、contact@charis.worksまでメールしていただくようお願いいたします。",
  },
  {
    question:
      "Q. 送料はいくらですか。また、配送無料になるオプションはありますか。",
    answer:
      "A. 送料は全国一律300円です。送料無料オプションは今後導入するかもしれません。",
  },
];

const Faq = () => {
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
  const contentStyle = css({
    color: "star",
    textAlign: "left",
    paddingBottom: "50px",
  });
  const questionStyle = css({
    fontSize: "20px",
    paddingBottom: "12px",
  });
  const answerStyle = css({
    fontSize: "20px",
  });

  return (
    <>
      <Header />
      <div className={containerStyle}>
        <h1 className={titleStyle}>Q & A</h1>
        {faq.map((item, index) => {
          return (
            <div key={index} className={contentStyle}>
              <h2 className={questionStyle}>{item.question}</h2>
              <p className={answerStyle}>{item.answer}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Faq;

"use client";
import React from "react";

import { css } from "../../../styled-system/css";
const faq: { question: string; answer: string }[] = [
  {
    question: "質問: マイページはありますか？",
    answer:
      "申し訳ありません。今後マイページ機能を開発していく予定ではありますが、ご購入していただいた商品に関しましてはメールをご確認いただくようお願いいたします。またご要望・ご質問がありましたら、contact@charis.worksまでメールしていただくようお願いいたします。",
  },
  {
    question:
      "質問: 送料はいくらですか？また、配送無料になるオプションはありますか？",
    answer:
      "送料は全国一律300円です。送料無料オプションは今後導入するかもしれません。",
  },
];
const FAQ = () => {
  const container = css({
    bgColor: "night",
    width: "100%",
    height: "100vh",
    paddingTop: "74px",
  });

  const title = css({
    color: "star",
    fontSize: "40px",
    textAlign: "center",
    fontStyle: "bold",
    paddingBottom: "60px",
  });
  const body = css({
    color: "star",
    textAlign: "left",
    paddingBottom: "50px",
  });

  return (
    <>
      <div className={container}>
        <h1 className={title}>F & Q</h1>
        <div>
          {faq.map((item, index) => {
            return (
              <div key={index} className={body}>
                <h2
                  className={css({
                    fontSize: "30px",
                    fontStyle: "bold",
                    paddingBottom: "12px",
                  })}
                >
                  {item.question}
                </h2>
                <p className={css({ fontSize: "20px", fontStyle: "bold" })}>
                  {item.answer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FAQ;

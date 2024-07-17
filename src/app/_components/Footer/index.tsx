import Link from "next/link";
import Image from "next/image";
import { css } from "../../../../styled-system/css";

const Footer = () => {
  return (
    <footer className={footerStyle}>
      <Link href="/" className={ImageWrapper} scroll={false}>
        <Image
          src={"/logo.svg"}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt={"Logo of charis WORKs"}
        />
      </Link>
      <div className={creditStyle}>
        <a href="http://yukiosada.work/">designed by Myxogastria0808</a>
      </div>
      {/*******************************************************************/}
      <div className={footerBoxStyle}>
        <Link href="/about" scroll={false} className={footerLinkStyle}>
          charis WORKsについて
        </Link>
        <Link href="/faq" scroll={false} className={footerLinkStyle}>
          Q & A
        </Link>
        <Link href="/terms" scroll={false} className={footerLinkStyle}>
          プライバシーポリシー
        </Link>
        <Link
          href="/specified-commercial-transaction-act"
          scroll={false}
          className={footerLinkStyle}
        >
          特定商取引法に基づく表記
        </Link>
      </div>
      {/*******************************************************************/}
      <div className={footerBoxMobileStyle}>
        <div className={footerBoxInnerLeftMobileStyle}>
          <Link href="/about" scroll={false} className={footerLinkStyle}>
            charis WORKsについて
          </Link>
          <br />
          <Link href="/faq" scroll={false} className={footerLinkStyle}>
            Q & A
          </Link>
        </div>
        <div className={footerBoxInnerRightMobileStyle}>
          <Link href="/terms" scroll={false} className={footerLinkStyle}>
            プライバシーポリシー
          </Link>
          <br />
          <Link
            href="/specified-commercial-transaction-act"
            scroll={false}
            className={footerLinkStyle}
          >
            特定商取引法に基づく表記
          </Link>
        </div>
      </div>
      {/*******************************************************************/}
      <div className={footerBoxSmallMobileStyle}>
        <Link href="/about" scroll={false} className={footerLinkStyle}>
          charis WORKsについて
        </Link>
        <br />
        <Link href="/faq" scroll={false} className={footerLinkStyle}>
          Q & A
        </Link>
        <br />
        <Link href="/terms" scroll={false} className={footerLinkStyle}>
          プライバシーポリシー
        </Link>
        <br />
        <Link
          href="/specified-commercial-transaction-act"
          scroll={false}
          className={footerLinkStyle}
        >
          特定商取引法に基づく表記
        </Link>
      </div>
      {/*******************************************************************/}
    </footer>
  );
};

const footerStyle = css({
  width: "100%",
  borderTop: "3px double #BFA45E",
  position: "sticky",
  top: "100lvh",
});

const ImageWrapper = css({
  display: "block",
  width: "170px",
  marginLeft: "auto",
  marginRight: "auto",
  paddingTop: "40px",
});

const creditStyle = css({
  paddingTop: "10px",
  textAlign: "center",
  color: "star",
  fontSize: "16px",
  width: "100%",
  textDecoration: "underline",
  _hover: {
    transitionDuration: "0.2s",
    opacity: "0.7",
  },
});
//pc
const footerBoxStyle = css({
  color: "star",
  fontSize: "16px",
  width: "100%",
  maxWidth: "700px",
  display: "flex",
  justifyContent: "space-around",
  paddingTop: "40px",
  paddingBottom: "100px",
  marginLeft: "auto",
  marginRight: "auto",
  hideBelow: "footer_xl",
});
//mobile
const footerBoxMobileStyle = css({
  color: "star",
  fontSize: "16px",
  width: "100%",
  maxWidth: "400px",
  display: "flex",
  justifyContent: "space-around",
  paddingTop: "40px",
  paddingBottom: "100px",
  marginLeft: "auto",
  marginRight: "auto",
  hideFrom: "footer_xl",
  hideBelow: "footer_lg",
});
//small mobile
const footerBoxSmallMobileStyle = css({
  color: "star",
  fontSize: "16px",
  width: "100%",
  maxWidth: "192px",
  display: "block",
  paddingTop: "40px",
  paddingBottom: "100px",
  marginLeft: "auto",
  marginRight: "auto",
  hideFrom: "footer_lg",
});
//mobile
const footerBoxInnerLeftMobileStyle = css({
  display: "block",
  width: "100%",
  textAlign: "left",
});
//mobile
const footerBoxInnerRightMobileStyle = css({
  display: "block",
  width: "100%",
  textAlign: "right",
});
const footerLinkStyle = css({
  fontSize: "16px",
  _hover: {
    transitionDuration: "0.2s",
    opacity: "0.7",
  },
});

export default Footer;

import { css } from "../../../../styled-system/css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className={HeaderWrapperStyle}>
      <div className={HeaderStyle}>
        <Link href="/" className={ImageWrapper} scroll={false}>
          <Image
            src={"/logo.svg"}
            width={176}
            height={69}
            alt={"Logo of charis WORKs"}
          />
        </Link>
        <div className={LinkBoxStyle}>
          <Link href="/about" scroll={false}>
            charis WORKsについて
          </Link>
          <br />
          <Link href="/faq" scroll={false}>
            Q & A
          </Link>
          <br />
          <Link href="/terms" scroll={false}>
            プライバシーポリシー
          </Link>
        </div>
        <div className={creditStyle}>
          <a href="http://yukiosada.work/">designed by Myxogastria0808</a>
        </div>
      </div>
    </div>
  );
};

const HeaderWrapperStyle = css({
  position: "fixed",
  width: "100%",
  height: "85px",
  bgColor: "night",
  boxShadow: "0px 0px 25px #0088ff",
  marginBottom: "25px",
  zIndex: "1",
});
const HeaderStyle = css({
  width: "100%",
  maxWidth: "1210px",
  height: "85px",
  display: "flex",
  paddingTop: "8px",
  paddingBottom: "8px",
  marginLeft: "auto",
  marginRight: "auto",
});
const LinkBoxStyle = css({
  width: "100%",
  maxWidth: "200px",
  color: "star",
  fontSize: "16px",
  marginLeft: "40px",
});
const creditStyle = css({
  width: "100%",
  color: "star",
  fontSize: "16px",
  textAlign: "right",
  paddingTop: "48px",
});
const ImageWrapper = css({
  width: "290px",
  height: "75px",
});

export default Header;

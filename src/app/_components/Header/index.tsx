import { css } from "../../../../styled-system/css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const HeaderWrapperStyle = css({
    position: "fixed",
    width: "100%",
    height: "85px",
    bgColor: "night",
    boxShadow: "0px 0px 15px #ffffff",
    marginBottom: "15px",
    zIndex: "1",
  });
  const HeaderStyle = css({
    width: "100%",
    maxWidth: "1024px",
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
    width: "280px",
    height: "69px",
  });
  return (
    <div className={HeaderWrapperStyle}>
      <div className={HeaderStyle}>
        <Link href="/" className={ImageWrapper}>
          <Image
            src={"/logo.webp"}
            width={280}
            height={69}
            alt={"Logo of charis WORKs"}
          />
        </Link>
        <div className={LinkBoxStyle}>
          <Link href="/about">charis WORKsについて</Link>
          <br />
          <Link href="/faq">Q & A</Link>
          <br />
          <Link href="/terms">プライバシーポリシー</Link>
        </div>
        <div className={creditStyle}>
          <a href="http://yukiosada.work/">designed by Myxogastria0808</a>
        </div>
      </div>
    </div>
  );
};

export default Header;

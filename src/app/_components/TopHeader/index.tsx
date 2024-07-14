import { css } from "../../../../styled-system/css";
import Image from "next/image";
import Link from "next/link";

const TopHeader = () => {
  const TopHeaderStyle = css({
    width: "100%",
    height: "69px",
    display: "flex",
    marginBottom: "69px",
  });
  const TopHeaderSpaceStyle = css({
    width: "100%",
    height: "60px",
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
  });
  const ImageWrapper = css({
    width: "280px",
    height: "69px",
  });

  return (
    <>
      <div className={TopHeaderSpaceStyle}></div>
      <div className={TopHeaderStyle}>
        <Link href="/" className={ImageWrapper}>
          <Image
            src={"/logo.webp"}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "100%" }}
            alt={"logo image"}
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
    </>
  );
};

export default TopHeader;

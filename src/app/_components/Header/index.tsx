import { css } from "../../../../styled-system/css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className={HeaderWrapperStyle}>
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
    </div>
  );
};

const HeaderWrapperStyle = css({
  position: "fixed",
  width: "100%",
  height: "100px",
  bgColor: "night",
  borderBottom: "3px double #BFA45E",
  marginBottom: "25px",
});
const ImageWrapper = css({
  display: "block",
  width: "170px",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "15.17px",
  marginBottom: "15.17px",
});

export default Header;

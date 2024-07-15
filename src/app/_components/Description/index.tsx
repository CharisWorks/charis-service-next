import { css } from "../../../../styled-system/css";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const Description = (props: { overview: string }) => {
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
    <Markdown className={termStyle} remarkPlugins={[remarkGfm]}>
      {props.overview}
    </Markdown>
  );
};
export default Description;

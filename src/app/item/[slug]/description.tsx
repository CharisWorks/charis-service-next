import markdownToHtml from "zenn-markdown-html";
import { Box } from "@mui/material";

export const Description = (props: { overview: string }) => {
  const html = markdownToHtml(decodeURIComponent(props.overview));
  return <Box dangerouslySetInnerHTML={{ __html: html ?? "" }}></Box>;
};
export default Description;

import markdownToHtml from "zenn-markdown-html";

export const Description = (props: { overview: string }) => {
  const html = markdownToHtml(decodeURIComponent(props.overview));
  return <div dangerouslySetInnerHTML={{ __html: html ?? "" }}></div>;
};
export default Description;

import { NextApiRequest, NextApiResponse } from "next";
import { MeiliItem } from "../meili";

const meili_address =
  process.env.NEXT_PUBLIC_MEILI_ADDRESS ?? "http://localhost";
const meili_api_key = process.env.MEILI_SECRET_KEY;
const meili_port = process.env.NEXT_PUBLIC_MEILI_PORT ?? "7700";
const meiliFetcher = async (url: string) => {
  const res = await fetch(url, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${meili_api_key}`,
    }),
  });
  const data = await res.json();
  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};

export const Search = async (params: number) => {
  const rawURL = new URL(`${meili_address}:${meili_port}`);
  rawURL.pathname = `/indexes/items/documents/${params}`;
  console.log("params:", params);
  const url = rawURL.toString();
  const data = await meiliFetcher(url);
  return {
    data: data as MeiliItem | undefined,
  };
};
export async function GET(
  req: NextApiRequest,
  res: NextApiResponse<MeiliItem | null>
) {
  const r = await Search(parseInt(req.query.id as string));
  if (r === null) {
    res.status(404).json(null);
  } else {
    res.status(200).json(JSON.parse(JSON.stringify(r)));
  }
}

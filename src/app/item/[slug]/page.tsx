"use client";
import { useEffect, useState } from "react";
import Description from "./description";
import { MeiliItemHit } from "@/api/meili";
import { GetItem } from "@/api/gobackend";

export default function ItemPage({ params }: { params: { slug: string } }) {
  const [item, setItems] = useState<MeiliItemHit>();
  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await GetItem(params.slug);
      setItems(data);
    };
    fetchItems();
  }, [params.slug]);
  return (
    <div>
      <Description overview={item?.description ?? ""} />
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import Description from "./description";
import { MeiliItemHit, Search } from "@/api/meili";

export default function ItemPage({ params }: { params: { slug: string } }) {
  const [items, setItems] = useState<MeiliItemHit[]>([]);
  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await Search([params.slug]);
      if (data?.hits) {
        setItems(data.hits);
      }
    };
    fetchItems();
  }, [params.slug]);
  return (
    <div>
      <Description overview={items[0]?.description ?? ""} />
    </div>
  );
}

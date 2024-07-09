"use client";
import { useEffect, useState } from "react";
import Description from "./description";
import { MeiliItemHit } from "@/api/meili";
import { Checkout, GetItem } from "@/api/gobackend";
import Image from "next/image";
import styles from "./item.module.css";
import {
  AppBar,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  Link,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import PrimarySearchAppBar from "@/app/_components/header";
export default function ItemPage({ params }: { params: { slug: string } }) {
  const [item, setItems] = useState<MeiliItemHit>();
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await GetItem(params.slug);
      setItems(data);
    };
    fetchItems();
  }, [params.slug]);
  return (
    <div>
      <PrimarySearchAppBar />
      <Container maxWidth="lg" sx={{ paddingTop: 5 }}>
        <Button onClick={() => router.back()} sx={{ marginBottom: 10 }}>
          Back
        </Button>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={12}>
              <Grid container alignItems={"center"} justifyContent={"center"}>
                {item?.images.map((image, key) => {
                  return (
                    <Grid item key={key} xs={12} md={6} lg={4}>
                      <div className={styles.top_image}>
                        <Image
                          src={
                            image.large_url != ""
                              ? image.large_url
                              : image.medium_url
                          }
                          alt="Picture of the author"
                          width={200}
                          height={200}
                        />
                      </div>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item xs={12} md={8} lg={8}>
              <Typography variant="h5" component="div">
                {item?.item_name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {item?.genre}
              </Typography>
              <Typography variant="body1">￥{item?.price}</Typography>
              <Typography variant="body1">Stock: {item?.stock}</Typography>
              <Box sx={{ marginTop: 2, border: 1 }}>
                <Typography variant="body1">製作者: {item?.worker}</Typography>
                <Typography variant="body1">
                  製作者より: {item?.worker_description}
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Description overview={item?.description ?? ""} />
        </div>
        <FormControl sx={{ width: "50%" }}>
          <InputLabel>数量</InputLabel>
          <Select
            value={1}
            label="数量"
            onChange={(e) => {
              setQuantity(e.target.value as number);
            }}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>
        <Button
          onClick={async () => {
            if (item?.id) {
              const p = { itemId: parseInt(item.id), quantity };
              const data = await Checkout(p);
              if (data.data?.url) {
                router.push(data.data.url);
              }
            }
          }}
        >
          購入
        </Button>
      </Container>
    </div>
  );
}

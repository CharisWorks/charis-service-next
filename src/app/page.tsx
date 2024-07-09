"use client";
import React, { useEffect, useState } from "react";
import { Checkout } from "@/api/gobackend";
import { MeiliItemHit, Search } from "@/api/meili";
import { Container } from "@mui/material";
import ItemCard from "./_components/card";
import Grid from "@mui/material/Grid";
import PrimarySearchAppBar from "./_components/header";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import { Paper } from "@mui/material";
import Divider from "@mui/material/Divider";
import DirectionsIcon from "@mui/icons-material/Directions";

const SearchComponent = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [itemId, setItemId] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [items, setItems] = useState<MeiliItemHit[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await Search([""]);
      if (data?.hits) {
        setItems(data.hits);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <PrimarySearchAppBar />
      <Container maxWidth="lg" sx={{ paddingTop: 5 }}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "80%",
            mb: 5,
          }}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={async () => {
              const { data } = await Search([keyword]);
              if (data?.hits) {
                setItems(data.hits);
              }
              console.log(data);
            }}
          >
            <SearchIcon />
          </IconButton>
        </Paper>

        <Grid container spacing={2}>
          {items.map((item, key) => {
            return (
              <Grid item xs={12} md={4} lg={4} key={key}>
                <ItemCard item={item} />
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* <h1>Search</h1>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <button
          onClick={async () => {
            const { data } = await Search([keyword]);
            console.log(data);
          }}
        >
          検索！！
        </button>
      </div>
      <div>
        <h1>Checkout</h1>
        <div>商品ID</div>
        <input
          type="text"
          onChange={(e) => {
            setItemId(parseInt(e.target.value));
          }}
        />
        <div>数量</div>
        <input
          type="number"
          onChange={(e) => {
            setQuantity(Number(e.target.value));
          }}
        />

        <button
          onClick={async () => {
            const { data } = await Checkout({ itemId, quantity });
            console.log(data?.url);
          }}
        >
          購入！！
        </button>
      </div> */}
    </>
  );
}

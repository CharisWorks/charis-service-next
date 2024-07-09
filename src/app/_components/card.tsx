import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { MeiliItemHit } from "@/api/meili";

import Image from "next/image";
import { Grid } from "@mui/material";

export default function ItemCard(props: { item: MeiliItemHit }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Grid container alignItems={"center"} justifyContent={"center"}>
          <Grid>
            <Image
              src={props.item.thumbnail_url}
              width={200}
              height={200}
              alt="Picture of the author"
            />
          </Grid>
        </Grid>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.item.genre}
        </Typography>
        <Typography variant="h5" component="div">
          {props.item.item_name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.item.worker}
        </Typography>
        <Typography variant="body2">{props.item.price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
}

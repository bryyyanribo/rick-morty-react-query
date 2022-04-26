import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const BaseCard = ({ image, name, status, species, origin, location }) => {
  const { name: originName } = origin;
  const { name: locationName } = location;

  return (
    <Card sx={{ display: "flex", margin: "12px" }}>
      <CardMedia component="img" sx={{ width: 151 }} image={image} alt={name} />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {status}-{species}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Last know location:
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {originName}
            </Typography>

            <Typography component="div" variant="h5">
              First seen in:
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {locationName}
            </Typography>
          </CardContent>
        </Box>
      </Box>
    </Card>
  );
};

export default BaseCard;

import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function SpecialBanner({ specialItem }) {
  return (
    <Card
      variant="outlined"
      style={{ marginBottom: "50px", border: "none", marginInline: "2rem" }}
    >
      {/* Display the image */}
      <div style={{ position: "relative" }}>
        <img
          src={specialItem.image}
          alt={specialItem.name}
          style={{
            width: "100%",
            height: "15rem",
            maxHeight: "40vh",
            objectFit: "cover",
            borderRadius: "18px",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "16px",
            left: "16px",
            right: "16px",
            background: "rgba(0, 0, 0, 0.5)",
            color: "white",
            padding: "8px",
            borderRadius: "0 0 18px 18px",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            style={{
              fontSize: "1.125rem",
              fontWeight: "500",
            }}
          >
            {specialItem.name}
          </Typography>
          {specialItem.price && (
            <Typography
              variant="body2"
              style={{ fontSize: "24px", fontWeight: "700" }}
            >
              {specialItem.price}
            </Typography>
          )}
        </div>
      </div>
    </Card>
  );
}

export default SpecialBanner;

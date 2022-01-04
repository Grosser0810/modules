import React, { FC } from "react";
import { Button, Typography } from "@mui/material";

const Page404: FC = () => {
  return (
    <div>
      <h1>404</h1>
      <h3>Page not found</h3>
      <Button>
        <Typography>Go to home page</Typography>
      </Button>
    </div>
  );
};

export default Page404;

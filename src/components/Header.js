import React from "react";
import { Link, Outlet } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import Episodes from "../pages/Episodes/Episodes";
import Characters from "../pages/Characters/Characters";

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <nav className={classes.menu}>
        <nav className={classes.menu}>
          <Link
            to="/characters"
            element={<Characters />}
            style={{ textDecoration: "none" }}
          >
            <Button style={{ color: "white" }}>Characters</Button>
          </Link>
          {/**<Link
            to="/episodes"
            element={<Episodes />}
            style={{ textDecoration: "none" }}
          >
            <Button style={{ color: "white" }}>Episodes</Button>
          </Link>
          */}
        </nav>
      </nav>
      <Outlet />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  main: {
    margin: "0 auto",
    padding: "16px",
  },
  menu: {
    display: "flex",
    backgroundColor: "rgb(36, 40, 47)",
    "& button": {
      margin: theme.spacing(1),
    },
  },
}));

export default Header;

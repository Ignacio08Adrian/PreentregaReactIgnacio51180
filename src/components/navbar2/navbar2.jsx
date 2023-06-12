import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import Truenavbarlist from "./navbardrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import Cartwidget from "../cartwidget";
import { NavLink } from "react-router-dom";

const navlinks = [
  {
    title: "inicio",
    path: "/home",
  },
  {
    title: "productos",
    path: "/",
  },
  {
    title: "indie",
    path: "/category/indies",
  },
  {
    title: "Triple - A",
    path: "/category/triple-aaa",
  },
];

export default function Truenavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          <IconButton>
            <VideogameAssetIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Tienda my games
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {navlinks.map((item) => (
              <Button
                color="inherit"
                key={item.title}
                component={NavLink}
                to={item.path}
              >
                {item.title}
              </Button>
            ))}
            <ListItemText primary={<Cartwidget />} />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <Truenavbarlist navlinks={navlinks} setOpen={setOpen} />
      </Drawer>
    </>
  );
}

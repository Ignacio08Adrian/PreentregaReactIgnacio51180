import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Cartwidget from "../cartwidget";
import { NavLink } from "react-router-dom";

export default function Truenavbarlist({ navlinks, setOpen }) {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          {navlinks.map((item) => (
            <ListItem key={item.title}>
              <ListItemButton
                component={NavLink}
                to={item.path}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem>
            <ListItemButton>
              <ListItemText primary={<Cartwidget />} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </nav>
    </Box>
  );
}

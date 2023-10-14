import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Cartwidget from "./components/cartwidget";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/cart";
import CartProvider from "./context/cartcontext";
import { Box, Button, Container, Grid, Icon, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Truenavbar from "./components/navbar2/navbar2";

function App() {
  return (
    <>
      <div className="smoke">
        <CartProvider>
          <Truenavbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/home" element={<Home />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
        <footer>
          <Container>
            <Box
              sx={{
                border: 2,
                p: 5,
                borderColor: "blue",
                bgcolor: "#111",
                color: "white",
              }}
            >
              <Typography variant="h3" textAlign="center">
                TIENDA MY GAMES
              </Typography>

              <Typography variant="subtitle2">
                <Box>
                  <Grid container justifyContent="center">
                    <Grid item xs={2} md={1}>
                      <a href="https://www.facebook.com/" target="_blank">
                        <FacebookIcon fontSize="large" />
                      </a>
                    </Grid>
                    <Grid item xs={2} md={1}>
                      <a href="https://www.instagram.com/" target="_blank">
                        <InstagramIcon fontSize="large" />
                      </a>
                    </Grid>
                    <Grid item xs={2} md={1}>
                      <a href="https://twitter.com" target="_blank">
                        <TwitterIcon fontSize="large" />
                      </a>
                    </Grid>
                  </Grid>
                </Box>
                Tienda My Games NO está afiliada, avalada, sponsoreada o
                asociada con Nintendo o otras empresas. Todos los derechos de
                autor, marcas, imágenes y marcas de servicio pertenecen a sus
                respectivos propietarios.
              </Typography>
            </Box>
          </Container>
        </footer>
      </div>
    </>
  );
}

export default App;

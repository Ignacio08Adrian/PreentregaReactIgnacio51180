import { Link } from "react-router-dom";
import "./itemlist.css";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export const ItemList = ({ productos }) => {
  return (
    <div className="flexs">
      {productos.map((producto) => (
        <div className="flexs" key={producto.id}>
          <div className="card">
            <Link key={producto.id} to={`/item/${producto.id}`}>
              <Card sx={{ maxWidth: 180 }}>
                <CardMedia
                  sx={{ height: 120 }}
                  image={producto.imagen}
                  title={producto.nombre}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {producto.nombre}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    precio: ${producto.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    categoria: {producto.categoria}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

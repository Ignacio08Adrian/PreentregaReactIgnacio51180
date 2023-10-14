import React from "react";
import "./home.css";
import { Box, Container, Grid, Typography } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Container>
        <Typography variant="h2" gutterBottom>
          TIENDA MY GAMES
        </Typography>
        <div className="flex_button">
          <img
            src="https://i.pinimg.com/originals/f7/a3/3a/f7a33af19c2e88cb2ee3a8697b46e0f2.png"
            alt="es la cara del personaje de videojuegos mario"
            width="80"
            height="70"
            className="circle"
          />
          <Typography variant="subtitle1" gutterBottom>
            bienvenidos a Tienda My games, en esta tienda, podras encontraras
            diferentes juegos y precios para toda la familia, tenemos diversos
            generos de videojuegos con un catalogo que contiene tanto juegos
            triple AAA como indies, aqui apoyamos tanto empresas grandes como
            pequeñas
          </Typography>
        </div>
        <Grid>
          <Grid item xs="3" textAlign="center">
            <img
              src="https://media.vandal.net/i/1200x630/11-2018/2018111411432889_1.jpg"
              alt=""
              height="250"
              width="400"
            />
          </Grid>
        </Grid>
        <div className="flex_button">
          <Typography variant="subtitle1" gutterBottom>
            como bien sabeis, la nintendo switch cuenta con un catalogo muy
            amplio de videojuegos, nosotros tenemos nuestros favoritos e
            imaginamos que vosotros tambien pero siempre debemos estar abierto a
            nuevas opciones, los invitamos a revisar nuestro catalogo para
            añadir algun juego mas a la lista de favoritos
          </Typography>
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUSEBMVFRUVFxgXFRYWFRUVFRYVFRYWFhgYFRUYHiggGBolGxUVITEiJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGjUlICUtLS4tMC0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMQBAQMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHAQj/xAA/EAABAwIDBQMKAwcEAwAAAAABAAIDBBEFITEGEkFRYXGBkQcTIjJCUqGxwdGCkvAjM0NTYnLhCBQWJDSywv/EABoBAQACAwEAAAAAAAAAAAAAAAADBQIEBgH/xAA6EQACAQIDBQUGBAQHAAAAAAAAAQIDEQQhMQUSQVFxYYGRofATMrHB0eEUIkJSBiRy8RUjM1OSstL/2gAMAwEAAhEDEQA/AO1IiIAiIgCIiAIiIAiIgCIiAIiIAiKmSRrc3EAdSB80BUiiqjaSkjydM2490Od8gsQ7Y0X8x35HfZQyxNGOs14oheIpLWa8UbAi1/8A5lR/zHfkcg2yov5jvyO+yx/F0P3rxR5+Jo/vXijYEUPT7T0b8hMO9rx8wpSGdj82Pa7sIKlhUhP3ZJ9GSRqQn7rT7y4iIszMIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiKKxrHoaUWebv4NGvfyCxnOMI70nZGM5xgt6TsiU01UDiu1lPB6LT5x17WFwAervstJxnaOepJBdus4NGQHaRr3qHLuf68bKorbUbypLvf09dCqrbT4U/Fmx4htjUy3DCIh0sT+YqAqJXSHekJcebr/AFVsOurzKd50Y49iqqtWc/8AUl4ldKpKt7z3vPy0LNv1ovQstmGTu0jd8lfbgdSfYt2uAWu69NayXiiSOFry92nL/jL6EcimG7NzH3R2/wCEfs7OPV3D2FYfi6P70S/4div9t+uzUhg3qvY3Fp3mkg8xkft8FlVOHSx+vGQOeqxAVMmpK6z7/oas6bhLdkmn2pp+ZtWCbYSxkMm/aM0ucnDrfit5w+vjqGb8Tg4fEHkRwXHFm4ViclM8PjNuY4EdQrPC7QnTe7PNeaN3D46VPKea8zr6KNwTGGVTN5uTuLfqOYUkr6MlNb0dC6jJSSlF3QREWRkEREAREQBERAEREAREQBERAEREAQBeErRtrNp968UB9HRzhx7Oihr140Y70v7kNatGjHekZW021u5eKmN3aOeOHZ91qOHRf7ioa2Qk717m+Z3QVhKS2cbeobYHIOv+U/dctjcVUqxlNvRO3ZkU9OrKviaftNHKKtwtfTw15on48Apx7B73GyymYdC3SNnwWSi5eVapLWT8WdjDC0Ie7CK6RRSyNo0AHYAqw5eIonmbCy0CL1eIeMIvUQHijMQwWOW5A3Hc7ZH8PFSaLOnUlTe9F2ZFWowrR3Kiuu31l1VmaFW0j4XbjxnwPvdQVYW94hRNnYWu19k8QVo00Za7dcLEajqr7C4lVo56rX6nIbRwDws1Z3i9Po/k+Kz4MyMNxB8Dw9hORXTsDxdlUy7fWHrDr06Lkyy8MxB9O8PjNra9R1CtsHjHQlZ5xfq6IcNiXRdnmvWh2FFhYPibKqMSM/EOIKzV0kZKSumX8ZKSTWjCIi9PQiIgCIiAIiIAiIgCIiAIqZJGtzc4DtICh8axYCNzYHgvOQPBt+PUqCviaVCLdSSXfn4CztdK/QhNsto8zTwnT947/wCQtJ1Opv4qaiwVv8RxcePs3PU6qSpaRoyjbbqPuuQxW01Vk5a+SXroaH+GYnET3qrUezVrsyy797XMhaDBpJD6XojjfNbVRUbIW7rB2nme1XYYg0WCrVHiMVOrk9ORd4PZ9HDK8Fnzev0XdbtuF6iLVN4IiIAiIgCIiALxeogPFBY7g7pXiSIXy9IcyOXcp1FLRrSpS3omviMNDEQ9nU07Ncjn1TTvjNntLT+v1orQXRJYw4WcAQeBzWt4vgFgXwaDVmpHVp4q2oY+M3uzVn5fbvObxexqlJb9J7yXDj9H3Z8kY2zeLOpZg6/oOyeOBHPtC6nDKHtDmm7XC4I4gritlvOwWMk/9Z/AXYfElv1XSbNxO7L2UtHp1+/x6kGz8TaXs3o9OvrzN0REV6XIREQBERAEREAREQFExIa4t1sbdtslpktfK/1nnxt8luxC0iupzG8tPA5dQua/iH2ijTlFvdzTzdr5W+Zs4a2aLTnE6m68RFyhtlUcZcbBSUMQaLDvUY1xBuFIQVAdrkVFVuZRsXV6vEUBIeovEQHqLxEB6iIgCIvEB6vEVuWZrdfBepXBcVnzxDhcWa4eiefVVUURndnkwa9eik8SpPOMsBm31fsrTDbNnUpSqeC58/ou0hlUs7GAix6Wa/onULIVW1YlTNa2mwsC8zBr64HAniFCU05je17ciCCO39ZrfpIw4FrhcEWPYtCrKcxPdGfZy7evgrvZ+Ic47recdOn2djlds4RUqirQyUtf6s355vrd669dwysE8TJB7QzHI8R4rJWj+T3EbOdTutYjeZ2i+8PkVvC7nDVvbUlPx6m1h63taal49V68AiIpycIiIAiIgCIiAKA2pDBuEmz3GwHNS2IVzIIzJIbAfE8AOq5ZjWLPqpC52Q9kX0A0sqvas6bouk9Xp2dprV8b+GaazfLs7fl2k+ijsNxLesx59LgeakVw1SnKDtIt6FeFeG/B5fB8n2hERYExdZVlo9IiwzN+AHVcprvKbUisfLAQYL7rYnj0XNb7WWYcdbqa8p2PiCEUzHWkmHpZ+rFx/Np2XXKrLpdjbLpzpyrVo3Uskny4vsz0azsnwZrVqrTsmd/2X20pa8Wa7zctvSiebO/AdHjsU8Z2+8F8xMcQQ5pIIzaQSCOoI0XR9j9v94tgrjYmwZNoDyEvI/1LV2j/AA+6SdSg21y4rpzXn1M6eJvlI6oatvarsb94XtZR9NDvnprdSVlzk1FZI2o3YRUPma3UrGkrfdHisVBvQ9ujMVqSpaOvYsF8rnalWlKqXMxcjJlqnHTIJR0rpXbo7zyCjsSxKGmjMs7wxg4nMk8mt1cei5jtT5RKiqBhpr08B1sf2snWR40H9I8VcbM2ZLFSvpBav5Lt58iCpVUddTqm0XlBoMNHmg4zSt/hxWJH97/Vb81N7M7S02Ixedpn3t67DlIw8nN+uhXy0BZZeG4hLTSNmp5HRyN0c027iPaHQrrvwUFHdjl65GqqrufTmLUP8Vn4gPmFi09SHZHX5rWNh/KpDVFsFbuwzmwD72ilOn4HdDlyW24nhlrvjGWpaOHUdFzG1NmSTc4rqvmvn48zapVT1avtbDZ7Xe/r2tt9FLxVLh1HVYG0k2/GDbNrr9xVNhE4Vovhp4/c19qQVTCTvws/B5+VyGwaqMNRHLycPAnMLsJXEdPhb5rseFvc6GMuFnFoJHWwXb7Jn78ej9eRQ7Lm/wA0X1+plIiK4LYIiIAiIgCsVtWyFhkkdutbqfoOZVOIVrII3SSH0W/E8AuYY7jj6t93ZMafRbwHMnmVp4vFxoLnLh9WamKxUaKtrJ6L5vs+OhVtFjj6uS59Fgya3kONz1UQ39c7odPn1W6DZ6KphY9n7N5bmbXaTpmPsuee/Vk5N3ZU0qFXFSlJO7WfW+Wvyy5LTPTWtLrAC5Og/wArZqKJ7GASO3j4W+6jzSy0TyZWXafaBvlzvw71KQyteLtNx+siOCrMa5q0Wsufr0y32PQhCUnJv2nGLurLnb9XXNLOyvZu4iIq8vjFq8Ohl/exRv8A7mAnx1Wt4n5PKOW5iD4Hf0G7fyHJbcrNXVxwt3pXtY3m4geF9VPRxFak/wDKk10fy4+BjKMXqjkWMbA1kF3MAnYOMeTwOsZz8CVqzmkEhwIIyIIII6EHRdsftpQg286T1DH28bJNBh+KCx83K62Rad2Zvf6y6OjtfFUVfFUnu/u3XH42XnE13RjL3Wa35NdtXMLaOoN2nKF7jm0/y3HiOR7l0iSZx1K5Rjnk4niu+jf50DMNNmytIzFjo7PsXRsDqXy08T5Glr3MG+0ixDhkbg6ZhVe1KeFm1iMO8pP8y0s9b21V8+FrrLXKWk5pbsu4zURVwU7nmzWk/LxVUk27LUlLStYnVspoJKmbKOMd7nHJrGc3ErYaPBgM5Df+kad54rD2x2TjxNkUUsj44o375bGAC82sBc6AZq3wezN6SdfKPLj9vj0I5TaWR87bQY7LWymWc29xgPoxt4Bo58zqVcwjZitq/wDx6aV497d3WfndYL6EwTYbD6OxipmFw9uQecf4uUli2N01IAaiZkQ4AnPuYMz3BdMsRCEVTpQyWi+yNX2b1bOQ4R5Gap9jVTxwji1gMr7f3ZNB8VuWFeSTDYbGVsk7ucj7N/I2wWe3yk4YTbz5HUxv3fGy2LDMUgqW79PKyVvNjgbdo1Heo51a36rryMoxhwLFFs9RwC0VNCwdI2/UKSCIoLtkliIxukaB5xosSQDbjfj2rX8Yj/6zz/U3wuLracbH7I9oWrbSMtA3tzHO4vmOPBc/jYKOMillez838beZFjH/AClX+l+asQWFUhnmjj03jbw/wuwtaAABoMh2BaJ5PKG7pJ3DJuTSeZvvHplbxW8MmDiQM7eC6nZsY06e89ZPLtS9MqdnUnGm521z7v73LiIitDfCIiAIiICA25bejk6OZ/7BczXZqymEsbo3aOaQuR4phz6aQseDkcjwcOio9q05KaqcLW+PxuU20qb31Pha3xZilb5sXU79PbiwnwJv9VoZU3shX+an3XH0ZMiT7wGR79FXU5WmrkezqqpYhN6PLx087LvN9ewOBa4Ag6gi4Pcod+DQwuL4xbfFi2+Q6jkptYeIez3rDabthpPp/wBkdYqcZTTazWnZkRzcLL7lhGXA/dY8tDI3Vnhn8lN4d7Xd9VVi1eKaGSdwc4RtLt1oJcbaAAa3NlrYPAQr4eE7tN3+NjKcrNnPNrNpGULLWvM4XYw5AD3n8h81oWI4VWywur60mOL2XTXaXk+qyCLXPu0XVtjNiHSSnEsVAfUynfZC7NkDfZBHFwFug7VoX+oLGHSVkdKD6EEYdbgXycbcw0DxXUbP2bTwcbrOXGXyXJfHjyNKpUc+hzV1c7hYfFTGzNLLWS+apy0T2Lo27/mzIRmRG73rZ24rXFeo6t8EjJYzZ8bg9p5FpuPkrBEZ13ZzaaWOYUeJNMUl7NkkG5noBJwN9A4ZLpkWCe+/wH1V+swmlxijidURh7ZY2va7R7N9oN2O1Gqidn46jD3ihqnmWI5UlSdXAfwZuTwND7Q7FR4rY+H3nVjHquHVL459psU6z0ZNw4bE32bnrn8FltFshkiKOFOFNWgkuhK8z1F4td2gfUVbzQ0Ttwkf9mo1EEbvYbzlcNBwGZ4KWFNzluoxbSVzW9tdv3iQ0WFtMtQTuue1u/uHi2McXDi45BcUxaukMr/OOL5ASHvc7fcXDXPou+7UYZT4Dg9QaRu7I5gj86c5XPkIZvF3eTbQL5tAVvTpRpqyNaUm9TJbWPGpv0K3XB8FrmwsxHDnF7R6xhJ87G5vrMli9oeIIWgrrH+nrF3R1ktLf0Joy8C+QfGRp2tcfBSdhib35PtuW4i3zUtmVLBctGTZGjVzBwI4t4Lc1qe3GwnnnCtw60NZGd8WyZMRwcODjpfjoVNbOYoaunjmLHRucCHscCCyRpLXtz5OBVZiaKg7x0ZsU53yMuvbdhB6KHqcOZUNDHk7oPO18iLfFTVX6hWDTan9c1zONX8/S6f+jZUIzpuMldMrpqdsTQyMbrRwHPn1KkcP1PcsNSNFHZvarzAx3qyfL6W+ZHWtGnZIyERFfGkEREAREQBYmJYbFUN3ZWh3I6Edh4LLReOKkrNXR5KKkrPQ0ys2CB/cy7o5OaT8QQsP/gEn85v5Tdb+i03s7Dt33fNmpLAYeWsfN/UhsOw+eNobLK2S3HdLTbrnmqcQGneptRmNN9U9v0VZtvCRjgpyhwt2/qXMtMLLdajfxd/iWMO9ru+qz4SLi+iiIZiw5LPpqjf4WIVVsnGU1TjR/Ur66PO/rxNmrB5smQvmny70zmYq5xGUkUbmnsBafiF9EwT2yOnyWkeV/Yp2J07ZaYXqILlgvbzjD6zL88rjw4rsKVaNRXRoSi4nzSvHaK9UwPicWSNcx7ci1wLXA9QVvnkr2BlxCdk8zC2kicHFzgR50jMMZfUXtc6KQxPoDY+kdDQUsTtWQRNPaGNCz6+BkjCyQXB4cbjMEHgQc7quScN08FiPeSbla1bEqGUc35EkKbebKQO/qURFVmyFkYdAyNm7GLZku4uLjmXOPEnmsdVMcRmFNRrezlfgYTjvI1Ty307n4RNui+46N57A8X+a+Yl9kV9PHVQyQSi7ZGOY4dHC2S+U9sNmJ8MqHQTtNrkxyezIy+Tmnna1xwKtYzU1eLNZprUg10byDUxfiocL2jhkcTwz3WgHx+C52xhJAAJJIAAzJJyAA4lfSHkZ2Nfh1O6eoG7PUWJadY4xm1p/qNyT3LI8OkFYFQ4Xy71cnqL5N8VG17iG9pVTtHGRhSk0rqOf2XzeeRsUabvmWqup3sm6fNWqUaqypjDqUboccyc1yuzo1sfjN5vS77EtEl3v5s25yjTiV0tMCA53gsxEXeUaMaUd2Pf2ldObk7sIiKUxCIiAIiIAiIgCIiALFxKHeZlqM/uspFDiKEa9KVKeklYyjJxd0awVm4d7Xcsmsw6+bPBUUdI5ocXC2i4nDbLxOGxkd6LaV81pbdfEsHWhKGpeVTXEaFUor/oRFuopo5DvSRRPI4ujY4+JCvb5tYZAaAZDwCpRZOpN6yfiY7q5BERYGR48GxtrY27Vg4NSyws3JXNfb1SL3F9QbrPReNXdwERF6AsfEKGKoZ5uojZKz3ZGh47r6K+51gSdBmewLyN4cA4G4IuDzBXqbTujy1yLwrZihpX+cp6WGN/BwYC4dhOimHPJ1KpRZSqTl7zv3sKKWgWNX+qO1ZKwMXqA1oHtHQcupWjjlfDTXYZw95EdUz7osNfktnof3bP7W/RabBC57g1uZK3aBm41rfdAHgFh/DNJxlUlbKyV+3WxhineyK0RF1hphERAEREAREQBERAEREAREQBERAWZYuIWOs5W5IgdFo18Lf8ANDwJoVeDMVFU5pGqpWg007MnCIi8BhzVrmkgQSOtxG4Aewkq3/vpzpSu/FIwfIlSKLFxfP4fQEYairOkEY7ZT9AqSa08IG97ypRE3e1+X0BDTUlZI0tdNEA4WNmHQ9brMwejdBEI3uD931SBazeA7lmoigk7i4RegX0V5kHNT06UqnumLklqR1dWtiGebjoPv0WuzTF7i5xuSpPFcJka4ubd4Od9bKIsuZ2lVre03Kq3UtF878e7JaE0LNXRtWA0gbGH+04XvyHJSi1/BJJwA1rQWc3XAGedlsC67ZVSEsNFQi4pLirXfFp8b63NKqmpO4REViRhERAEREAREQBERAEREAREQBERAEREAVt0IPRXEWE4Rn7yueptaGO6A8FQYzyWWi15YOm9MjNVWYe6eRTdPJZiLH8Ev3GXtnyMPdPJNw8lmIn4JfuHtnyMYQFXGwDjmrqKWOFpx4X6mDqSZ4BbReoi2NDAKgxNJuWi/Owuq0XjV9QERF6AiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiA//Z"
            alt=""
            width="80"
            height="70"
            className="circle"
          />
        </div>
      </Container>
    </div>
  );
};

export default Home;

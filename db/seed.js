import { collection, addDoc } from "firebase/firestore";
import db from "./firebase-config.js";
import games from "../public/juegos.js";

const listgames = collection(db, "juegos");

const promises = games.map((game) => addDoc(listgames, game));

Promise.all(promises).then(() => {
  console.log("hecho");
  process.exit(0);
});

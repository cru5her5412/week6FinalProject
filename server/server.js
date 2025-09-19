import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use("./images", express.static("images"));
app.listen(8080, () => console.log("listening on port 8080"));
app.get("/", (request, response) => {
  response = "hi";
});

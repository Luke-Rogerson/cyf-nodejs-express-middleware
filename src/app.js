import express from "express";
import { authMiddleware } from "./middleware/auth/auth.js";

const app = express();
const port = 3000;

app.use((req, res, next) => {
  const now = new Date();
  console.log(`NEW REQUEST AT ${now}`);
  next();
});

// this route does not require authentication
app.post("/register", (_req, res) => {
  // do some DB operation to create a user...
  res.send("Registered!");
});

// this route does require authentication
app.get("/profile", authMiddleware, (_req, res) => {
  // do a DB lookup to get user data...
  res.send({ firstName: "Luke", email: "luke@gmail.com" });
});

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Cool app listening at http://localhost:${port}`);
});

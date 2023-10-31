import app from "./src/server";
const port: number = 443;

app.listen(port, () => {
  console.log(`Server listening at https://localhost:${port}`);
});

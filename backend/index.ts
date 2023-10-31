import app from "./src/server";
const port: number = 3000;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

import { app } from "./app";
const PORT = process.env.PORT || 5000;

const start = async () => {
  app.listen(PORT, () => {
    console.log(`RODANDO NA PORTA ${PORT}`);
  });
};

start();

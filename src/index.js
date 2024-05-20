const express = require("express");
const cors = require("cors");
const conectarBD = require("../config/db");

conectarBD();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

// rutas modulos

app.use("/api/usuarios", require("../routes/usuariosRoute"));
app.use("/api/auth", require("../routes/auth"));
app.use("/api/clientes", require("../routes/clientesRoutes"));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

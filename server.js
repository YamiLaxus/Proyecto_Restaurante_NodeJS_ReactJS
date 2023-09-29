const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET", "DELETE", "PUT"],
  })
);

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a Le Bernandin." });
});

app.use(cors());
require("./app/routes/roles.routes")(app);
app.use(cors());
require("./app/routes/mesas.routes")(app);
app.use(cors());
require("./app/routes/categorias.routes")(app);
app.use(cors());
require("./app/routes/proveedores.routes")(app);
app.use(cors());
require("./app/routes/menus.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
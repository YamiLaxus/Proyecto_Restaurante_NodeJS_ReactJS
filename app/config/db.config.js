module.exports = {
    HOST: "dpg-ckmbq48710pc739j8g30-a.oregon-postgres.render.com",
    USER: "le_bernardin_user",
    PASSWORD: "Gn5ZTRgC4AjiVvXkNgToQyy3OGB0ErXT",
    DB: "le_bernardin",
    dialect: "postgres",
    ssl: true,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
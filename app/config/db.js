const { Pool } = require('pg');

const pool = new Pool ({
    user: 'le_bernardin_user',
    password: 'Gn5ZTRgC4AjiVvXkNgToQyy3OGB0ErXT',
    host: 'dpg-ckmbq48710pc739j8g30-a.oregon-postgres.render.com',
    port: '5432',
    database: 'le_bernardin',
    languae: 'postgres',
    ssl: true
});

module.exports = pool;
const sqlite3 = require('sqlite3').verbose();

require('dotenv').config();

exports.getAllMetricas = async () => {
    const db = initDB();
    let sql = `select * from metricas ORDER BY id DESC LIMIT 200  `;

    const data = await new Promise( (res, rej) => {
        db.all(sql, (err, rows) => {
            if (err) rej(err);
            res(rows)
        })
    });
    closeDB(db);

    return data
}

const initDB = () => {
    return new sqlite3.Database(process.env.DB_PATH, sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            throw err.message
        }
        console.log(`Connected to the ${''} database.`);
    });
}

const closeDB = (db) => {
    console.log(`Desconectado de ${''} DB.`);
    db.close;
}
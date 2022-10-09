const mysql = require("mysql");
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'mysql',
    user: 'root',
    password: 'staek',
    database: 'myapp'
});

// pool을 다른 파일에서 쓸수 있도록 export 함
exports.pool = pool;
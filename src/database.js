const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'desa',
    password: 'Desatest01.',
    database: 'rutas_sa'
});

conn.connect(function (err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('La base de dato esta conectada')
    }
});
 

module.exports = conn;
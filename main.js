var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "dev_ho",
    password: "1234",
    database: "testdb",
});

connection.connect();

connection.query(
    "insert into users (	 username ,password ,email, full_name )  values ('엄','qwer1234','adb@ndaver.com', '심호성개발자');",
    function (error, results, fields) {
        if (error) throw error;
        console.log(results);
    }
);

connection.end();

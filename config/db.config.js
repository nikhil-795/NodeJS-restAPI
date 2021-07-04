const {createPool}= require("mysql");
const db=createPool(
    {
        port:3306,
        hostname :"localhost",
        username: "root",
            askForPassword: true,
            driver: "MySQL",
            name: "my-post",
            database: "test",
            username: "root"
    }
);
module.exports=db; 
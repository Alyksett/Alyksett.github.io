const {Client} = require('pg')

var today = new Date();
var date = String(today.getFullYear())+String((today.getMonth()+1))+String(today.getDate());

fs = require("fs")

const client = new Client({
    host: "kashin.db.elephantsql.com",
    user: "prvhztbg",
    post: 5433,
    password: "eRSTmCc_lmjknyk4-nso7Hp2TtDZlx42",
    database: 'prvhztbg'
})
client.connect();
client.query(`Select * from question`, (err, res) => {
    client.end();
     if(!err){
            // console.log(res.rows)
            cursor1 = []
        for (var i = 0; i < res.rowCount; i++) {
            cursor1.push(String(res.rows[i].Start_Week).split("/"))
        }
        for (var j = 0; j < 2; j++) {
            for (var i = 0; i < res.rowCount; i++) {
            cursor1[i].push(cursor1[i].shift());
        }
        }
        for (var i = 0; i < res.rowCount; i++) {
            cursor1[i][1] = cursor1[i][1].padStart(2, "0")
            cursor1[i][2] = cursor1[i][2].padStart(2, "0")
        }
        for (var i = 0; i < res.rowCount; i++) {
            cursor1[i] = parseInt(cursor1[i].join(""))
        }
        cursor1.sort();
    if(date >= cursor1[cursor1.length-1]){
        var week = cursor1[cursor1.length-1]
        }
    else{
        for(var i = 0; i < cursor1.length; i++){
            if(date < cursor1[i]){
                var week = cursor1[i-1]
                break
            }
        }
    }

    week = String(week).substring(4, 6) + "/" + String(week).substring(6, 8) + "/" + String(week).substring(0, 4)
    for (var i = 0; i < res.rowCount; i++) {
        if (res.rows[i].Start_Week == week) {
            console.log(res.rows[i]);
        }
        }
     }
     else{
         console.log(err.message);
     }
     client.end;
})
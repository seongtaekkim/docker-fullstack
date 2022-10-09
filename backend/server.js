// 필요모듈 가져오기
const express = require("express");
const bodyParser = require("body-parser");

const db = require('./db');

const app = express();

// json 형태로 오는 요청의 본문ㅇ르 해석해주는 미들웨어
app.use(bodyParser.json());


// db.pool.query(`create table lists (
//     id integer auto_increment,
//     value text,
//     primary key (id)
// )`, (err, results, fields) =>
//     console.log('results', results)
// );



// db lists 테이블에 있는 모든 데이터를 프론트 서버에 보내주기
app.get('/api/values', function(req, res) {
    // 데이터베이스에서 모든 정보 가져오기
    db.pool.query('select * from lists;',
    (err, results, fields) => {
        if(err)
            return res.status(500).send(err);
        else
            return res.json(results);
    })
});

// 클라이언트에서 입력한 값을 데이터베이스 lists 테이블에 삽입
app.post('/api/value', function(req, res, next) {
    console.log("===============insert");
    console.log(req.body.value);
    //데이터베이스에 삽입
    db.pool.query('insert into lists (value) values("${req.body.value}")',
    (err, results, fileds) => {
        if(err)
            return res.status(500).send(err)
        else
            return res.json({success: true, value: req.body.value})
    })
})


app.listen(5500, () => {
    console.log("start server");
 });

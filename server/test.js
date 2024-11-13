
//Node.js
const express = require('express'); //express라이브러리에 require함수를통해 express객체생성
const app = express(); //express객채를 사용해서 app객체반환 app=서버기능추가




//body-parser 라이브러리 추가
const bodyParser = require('body-parser'); //모듈가져옴
app.use(bodyParser.urlencoded({ extended: true })); //모듈사용하고자urlencoded옵션사용해야됨
//           템플릿 엔진 설치 및 설정 422p
const db = require('node-mysql/lib/db'); app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs'); //템플릿 엔진설정시 app.set()함수를 사용한다 첫번째 전달인자에view engine를 입력하고
//두번째 전달인자에 내가사용할 템플릿 엔진이름을 입력


//  app.listen(3000,function(){ //listen서버를띄우고 요청을 기다리는함수 (포트번호,실행할코드)
//      console.log("3000번포트대기중") //서버를시작하면 띄울안내문
//      // 두번째 전달인자에는 실행할코드 포함
//  });  몽고db접속후 포트접속하기위해 몽고db접속코드 connect콜백함수의 포함함

app.get('/book', function (req, res) { // /book경로 function콜백함수
    res.send('도서목록관련페이지')// res 응답해서 다시웹브라우저로 보냄 req 웹브라우저요청을 받아들임
    //send=문자열형식 메세지응답 html포함 가능하지만 가독성떨어짐
})

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');//sendFile경로지정해서 웹브라우저에 보내기
});

//몽고db접속코드
const mongclient = require('mongodb').MongoClient; //객체생성
const url = 'mongodb+srv://admin:1234@cluster0.ofefu.mongodb.net/';//접속코드(비번)

let mydb; //확장성을위해 외부에 선언

mongclient.connect(url)
    .then(client => { //.then접속성공하면 실행하는 메소드 client로 정보를 넘겨줌
        mydb = client.db('myboard');  //client객체의 멤버함수db()를통해 데이터베이스의 접근 전달인자로('myboard')입력
        //    mydb.collection('post').find().toArray().then(result =>{ //컬렉션접근허용 데이터기능사용가능
        //        console.log(result);
        //    })
        app.listen(3000, function () {
            console.log("3000번포트대기중") //포트접속
        })
    }).catch(err => {       //접속중 오류방생시 catch에서 처리하도록 구현 err에서 정보가 넘어옴
        console.log(err);//접속성공시 띄울안내문
    })


//Node.js와MySQL 연동코드작성

var mysql = require("mysql"); //객체선언
var conn = mysql.createConnection({ //mysql접속하기위한 필수정보입력 
    host: "localhost",
    user: "root",
    password: "1234",
    database: "myboard",
});

conn.connect(); //접속객체conn으로 connect함수 호출해서 서버접속

//  conn.query("select * from post",function(err,rows,fields){ //query 문 사용해서 post테이블 불러오기
//      if (err) throw err;
//      console.log(rows);
//  });

//          요청시 데이터조회
app.get('/list', (req, res) => {
             conn.query("select * from post",function(err,rows,fields){ //query 문 사용해서 post테이블 불러오기
             if (err) throw err;
             console.log(rows);
         });
                  console.log('데이터베이스를 조회합니다.');
        });

//          템플릿 엔진 EJS사용
app.get('/list', (req, res) => {
    //     conn.query("select * from post",function(err,rows,fields){ //query 문 사용해서 post테이블 불러오기
    //         if (err) throw err;
    //         console.log(rows);
    //     });
    //     console.log('데이터베이스를 조회합니다.');
    // });            몽고db에서 데이터를가져올거라 주석처리
    mydb.collection('post').find().toArray().then(function (result) { //mydb=myboard데이터베이스의 접속객체 
        console.log(result);   //then(err) 코드의 용도때문에 오류남 복습하기!!
        res.render('list.ejs', { data: result });
    })  //템플릿 ejs파일 응답 render파일은 내용을만들어 내는기능
    //res.sendFile(__dirname + '/list.html'); //sendFile함수로 html파일응답
    //두번째 전달인자에 전달할 데이터를 넣어야됨 ejs에서 넘겨받은변수 data
});


//'/enter'요청에 대한 처리 루틴
app.get('/enter', function (req, res) {
    res.render('enter.ejs');  //ejs로 동적데이터로 변경
    //res.sendFile(__dirname + '/enter.html'); 정적데이터
});       //enter.html불러오기

// './save' 요청에 대한 post 방식의 처리 루틴
app.post('/save', function (req, res) {
    console.log(req.body.title); //req.body에 폼입력데이터 확인했지만db데이터를 입력할때는 각필드별로 데이터를 입력해야됨
    console.log(req.body.content); //title content필드를 나눔
    console.log(req.body.someDate); //날짜데이터 저장
    //     몽고DB에 데이터 저장하기
    mydb.collection('post').insertOne(
        { title: req.body.title, content: req.body.content,date : req.body.someDate},//date : req.body.someDate날짜데이터 저장
    ).then(result => {
        console.log(result);
        console.log('데추성공');
    })

    //     MYSQL DB에 데이터 저장하기
    // let sql = "insert into post (title, content, created) values(?,?,NOW())";
    // let params = [req.body.title, req.body.content];
    // conn.query(sql, params, function (err,result){
    //     if(err)throw err;
    //     console.log('테이터 추가 성공');
    // });
    res.send('데이터 추가 성공');
});
//     console.log(req.body); //body-parser라이브러리를 추가해서 post방식으로 출력
//     console.log("저장완료"); //form에 입력한정보를 출력함
//  });


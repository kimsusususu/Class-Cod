const express = require("express");
const path = require("path");
// const router = express.Router();
const app = express();

const errorhandler =require("./middlewares/errorhandler"); //errorhandler=require("./middlewares/errorhandler")
const router = require("./routes/3-0contactRoutes");

const port = 3000;

const requestTime = (req, res, next) =>{
    let today = new Date();
    let now =today.toLocaleTimeString(); //현제시간을 문자로바꿈
    req.requestTime = now;
    next();
}

app.use(requestTime);


/*
 app.get("/", (req, res) => {
     res.status(200).send("Hello Node!");
    // res.json({ message: "Hello Worlds" });
 });*/

// router
//     .route("/contacts")
//     .get((req, res) => {
//         res.status(200).send("Contacts Page");
//     })
//     .post((req, res) => {
//         res.status(201).send("Create Contact Page");
//     });

// router
//     .route("/contacts/:id")
//     .get((req, res) => {
//         res.status(200).send(`View Contact For ID : ${req.params.id}`)
//     })
//     .put((req, res) => {
//         res.status(200).send(`Update Contact For ID : ${req.params.id}`)
//     })
//     .delete((req, res) => {
//         res.status(200).send(`Delete contact for ID: ${req.params.id}`);
//     });


// app.get("/contacts", (req, res) => {
//     // res.status(200).send("Contacts page");
//     res.sendFile(__dirname + "/assets/contacts.html");
// });

// app.get("/contacts/id", (req, res) => {
//     res.staetsus(200).send(`View Contact For ID : ${req.params.id}`)
// });

// app.put("/contacts/:id", (req, res) => {
//     res.status(200).send(`Update Contact For ID : ${req.params.id}`)
// });

// app.post("/contacts", (req, res) => {
//     res.status(201).send("Create contacts page")
// });

// app.delete("/contacts/:id", (req, res) => {
//     res.status(200).send(`Delete contact for ID: ${req.params.id}`);
// });

// app.post("/contacts", (req, res) => {
//     res.status(201).send("Create Contacts page");
// });

// app.use(router);

app.use(express.json());
app.use(express.urlencoded({extended:true}));

/*const logger = (req, res, next)=> {
    console.log("User Logged");
    next();
};*/

//app.use(logger);


app.route("/").get((req,res)=>{
    const responseText = `Hello Node! \n 요청시간 : ${req.requestTime}`;
    res.set("Content-type","text/plain");
    res.send(responseText);   //요청시간 나타내는 코드
});




//app.use("/", require("./routes/contactRoutes"));

app.get("/test", (req,res,next) =>{
    const error = new Error("테스트용 에러");
    error.status =401;
    next(error);
});

app.use(errorhandler);



//cmd 내용
app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
})











/*
const express = require("express")
const path = require("path")
const router = express.Router();  //Router=사용한다고 객체선언

const app = express();
//서버가 만들어짐

const port = 3000;

app.use(router);  //router 사용한다고 선언

router.app.get("/", (req, res) => {
    res.status(200);
    res.send("Hello Node~~~");
    //res.json({message: "Hello Worid!!"}); json형식 
})

app.get("/contacts", (req,res) => {
    //res.status(200).send("Contacts page");
    res.sendFile(__dirname+"/contacts.html");
})

app.get("/contacts/:id", (req,res) => {
    res.status(200).send(`View contact for ID: ${req.params.id}`);
})

app.put("/contacts/:id", (req,res) => {
    res.status(200).send(`View contact for ID: ${req.params.id}`);
})

app.delete("/contacts/:id", (req,res) => {
    res.status(200).send(`Delete consact for ID: ${req.params.id}`);
})

app.post("/contacts", (req,res) => {
    res.status(201).send("Create Contacts page");
})

app.listen(port, () =>{ //귀 기울임
    console.log(`${port}번 포트에서 서버 실행중`);
})*/
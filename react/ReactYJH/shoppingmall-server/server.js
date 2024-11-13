const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const db = require('./db');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');


app.listen(PORT,()=> {
    console.log(`Server is running on port ${PORT}`);

    db.authenticate() //데이터베이스 연결을 확인
.then(()=> {
    console.log("데이터베이스 연결 성공.");
})
.catch((err)=> {
    console.error("데이터베이스 연결 실패",err);
});
app.use(express.json()); //JSON 파싱 미들웨어

app.use(cors());

app.use("./users",userRoutes); // /users 경로로 들어오는 모든 요청을 UserRoutes에서 처리

app.post("./users", async (req,res)=>{
    const newUser = await UserActivation.create(req.body);
    res.json(newUser);
});
});


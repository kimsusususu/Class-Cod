const express = require("express");
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/users", async (req,res)=>{
    const  {user_id, password }=req.body;
    //비밀번호 해쉬화 하기
    const hachedPassword = await bcrypt.hash(password,10);

    //해시화된 비밀번호로 사용자 생성
    const newUser = await User.create({ user_id, password: hashedPassword});

    res.json(newUser);
});

module.exports = router;
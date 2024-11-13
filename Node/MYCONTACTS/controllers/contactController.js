
// const asyncHandler = require("express-async-handler");
// const Contact = require("../models/contactModel");
// //const path = require("path"); html 함수가져오고 사용하기

// // @desc Get all contacts
// // @route GET /contacts
// const getAllContacts = asyncHandler(async (req, res) => { //async 비동기처리
//     const contacts = await Contact.find(); //await 비동기처리중 먼저실행되야하는명령을 동기처리로 처리하지않으면 안넘어감
//     res.render("index",{contacts:contacts});
//     // const users = [          //정적연결
//     //   {name: "john", email: "john@aaa.bbb", phone:"123459"},
//     //   {name: "park", email: "park@aaa.bbb", phone:"44449"},
//     // ];


//     // res.render("getAll", {heading: "User List", users:users}); //getAll을render함수로 뿌린다 해딩유저리스트랑 유저스를
//     // res.render("getAll",{heading: "User List"});
//     // res.render("getAll")  //render 뿌려준다 정적인걸 동적으로 가져옴
//     //const finePath = path.join(__dirname, "../assets","getAll.html")  html가져오기
//     //res.sendFile(finePath);
//     //res.status(200).send("<h1 style='color:green'> Contacts Page </h1>"); 3000번포트 들어갈때 메세지전달
//     //res.status(200).send(contacts);
//   });

//    const addContactForm =(req,res) =>{
//      res.render("add");
//    };

  
  
//   // @desc Create a contact
//   // @route POST /contacts
//   const createContact = asyncHandler(async (req, res) => {
//     console.log(req.body);
//     const { name, email, phone } = req.body;
//     console.log(name);
//     console.log(email);
//     console.log(phone);
//     //if (!name || !email || !phone) {
//     //   return res.status(400).send("필수값이 입력되지 않았습니다.");
//     // }
//     const contact = Contact.create({
//       name,
//       email,
//       phone,
//     });

//     //res.status(200).send("Create Contacts");
//     res.redirect("/");
//     // res.status(201).send("Create Contacts");
//   });
  
//   // @desc Get contact
//   // @route GET /contacts/:id
//   const getContact = asyncHandler(async (req, res) => {
//     const contact = await Contact.findById(req.params.id);
//     res.render("update", { contact: contact });
//     //const name = req.params.id;
//     // const contacts = await Contact.findById(req.params.id);    //특정ID에있는것을 찾기 findById
//     //const contact = await Contact.findOne({name: name});   //  특정 조건으로 찾기 findOne
//     //res.status(200).send(contact);
//   });
  
//   // @desc Update contact
//   // @route PUT /contacts/:id
//   const updateContact = asyncHandler(async (req, res) => {
//     const id = req.params.id;
//     const {name,email, phone}= req.body;
//     console.log(req.body);
//     const updateContact = await Contact.findByIdAndUpdate(
//     id,
//     {name,email,phone},
//     {new:true}
//   );

//   res.redirect("/")
//     //수정
//     // contact.name = name;
//     // contact.email = email;
//     // contact.phome = phone;

//     // //저장
//     // contact.save();

//     // res.status(200).json(contact);


//     // res.status(200).send(`Update Contact for ID: ${req.params.id}`);
//   });

//   // @desc Delete contact
//   // @route DELETE /contacts/:id
//   const deleteContact = asyncHandler(async (req, res) => {  //삭제하기

//     await Contact.findByIdAndDelete(req.params.id);
//     res.redirect("/");
//     // const contact = await Contact.findBtId(req.paramsid.id);
//     // if(!contact){
//     //     res.status(404);
//     //     throw new Error("존재없는 아이디.");
//     // }

//     // await Contact.deleteOne();
//     // res.status(200).send(`Delete Contact for ID: ${req.params.id}`);
//   });
  
//   module.exports = {
//     getAllContacts,
//     createContact,
//     getContact,
//     updateContact,
//     deleteContact,
//     addContactForm,
//   };
  





















// /*const asyncHandler = require("express-async-handler");

// const getAllContacts = asyncHandler(async (req, res) => {
//     res.status(200).send("Contacts Page");
// });


// const createContact = asyncHandler(async (req, res) => {
//     console.log(req.body);
//     const{name, email, phone} = req.body;
//     if(!name || !email || !phone) {
//       return res.status(400).send("필수값이 입력되지 않았습니다.");
//     }
//     res.status(201).send("Create Contacts");
// })
// /*
// const getAllContacts = async (req, res)=> {
//     try{
//         res.status(200).send("Contacts Page");
//     }catch(error){
//         res.send(error.message);
//     }
   
// }
//     */
// /*
// const getContact = asyncHandler(async (req, res) => {
//     res.status(200).send(`View contact for ID : ${req.params.id}`);
// })

// const updateContact = asyncHandler(async (req, res) => {
//     res.status(200).send(`Update Contact for ID : ${req.params.id}`);
// })


// const deleteContact = asyncHandler(async (req, res) => {
//     res.status(200).send(`Delete Contact for ID : ${req.params.id}`)
// });

// module.exports = {getAllContacts, createContact,getContact, updateContact, deleteContact};*/
/* ./controllers/contactController.js */

const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
// const path = require('path');

// 수정 전

/* const getAllContacts = async (req, res) => {

    try {
        res.status(200).send("Contacts Page");
    } catch (error) {
        res.send(error.message);
    }
} */

//수정후
const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();

    // res.status(200).send(contacts);

    // res.status(200).send("<h1 style='color:green'> Contacts Page </h1>");

    // const finePath = path.join(__dirname, "../assets", "getAll.html");

    // res.sendFile(finePath);

    // res.render("getAll");

    // const users = [
    //     {name: "john", email: "john@aaa.bbb", phone: 123456},
    //     {name: "park", email: "park@aaa.bbb", phone: 224455},
    // ];
    // res.render("getAll", {heading: "User List ", users:users});

    res.render("index", { contacts: contacts });
})
/* 
    find : 지정한 조건에 맞는 Document를 찾음
        조건을 지정하지 않으면 모든 Document를 찾음
        find()
        find({name:kim});

    findById : 특정 조건에 맞는 연락처 가져오기
    Mongosoo의 findById 함수나 findOne 함수를 사용하면
    특정 조건에 맞는 연락처만 가져옵니다.
*/
/*
    템플릿 엔진이란?
    웹사이트에서 사용자의 동작에 동적으로
    반응해서 서버에서 자료를 가져와
    바뀐 내용을 동적으로 처리해주는 것

    EJS (Embedded Javascript)
    프론트엔드도 개발 할 수 있는 템플릿 엔진 존재
    리액트 혹은 뷰
 */
/*
    app.set("view engin", "ejs");

    views 
    템플릿 엔진이 템플릿 파일을 어디에서 찾을지 경로 설정
    ejs 파일은 views 폴더에 위치함
*/
/*
    컨트롤러에서 템플릿 파일로 값 넘기기
    res.render(ejs파일, {변수:전송자료});
*/



const createContact = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    // if (!name || !email || !phone) {
    //     return res.status(400).send("필수값이 입력되지 않았습니다.");
    // }

    const contact = await Contact.create({
        name,
        email,
        phone,
    });

    // res.status(200).send("Create Contacts");
    res.redirect("/");
})

const addContactForm = (req, res) => {
    res.render("add");
};

/* const getContact = asyncHandler(async (req, res) => {
    // res.status(200).send(`View contact for ID : ${req.params.id}`);
    const name = req.params.id;
    // const contact = await Contact.findById(req.params.id);
    const contact = await Contact.findOne({name: name});
    res.status(200).send(contact);
}) */

const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    res.render("update", { contact: contact });
});

/* const updateContact = asyncHandler(async (req, res) => {
    // res.status(200).send(`Update Contact for ID : ${req.params.id}`);
    const id = req.params.id;
    console.log(id);
    const { name, email, phone } = req.body;
    const contact = await Contact.findById(id);

    // if(!contact) {
    //     res.status(404);
    //     throw new Error("찾을 수 없는 아이디입니다.");
    // }

    contact.name = name;
    contact.email = email;
    contact.phone = phone;

    contact.save();

    res.status(200).json(contact);
}) */
const updateContact = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const { name, email, phone } = req.body;

    const updatedContact = await Contact.findByIdAndUpdate(
        id,
        { name, email, phone },
        { new: true }
    );
    res.redirect("/");
});

/*
    수정 : Mongo DB의 데이터를 수정할 때는 findById로
    자료를 찾은 후 내용을 수정하여 save 함수를 사용하여 저장
*/

/* const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("존재하지 않는 아이디입니다.");
    }
    await contact.deleteOne();

    res.status(200).send(`Delete Contact for ID : ${req.params.id}`)
}); */
const deleteContact = asyncHandler(async (req, res) => {
    await Contact.findByIdAndDelete(req.params.id);
    res.redirect("/");
});
/*
    findById 함수로 조건을 검색
 */

module.exports = {
    getAllContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
    addContactForm,
};





/* const asyncHandler = require("express-async-handler");

const getAllContacts = asyncHandler(async (req, res) => {
    res.status(200).send("Contacts Page");
});


const createContact = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        return res.status(400).send("필수값이 입력되지 않았습니다.");
    }
    res.status(201).send("Create Contacts");
})

const getAllContacts = async (req, res) => {
    try {
        res.status(200).send("Contacts Page");
    } catch (error) {
        res.send(error.message);
    }

}


const getContact = asyncHandler(async (req, res) => {
    res.status(200).send(`View contact for ID : ${req.params.id}`);
})

const updateContact = asyncHandler(async (req, res) => {
    res.status(200).send(`Update Contact for ID : ${req.params.id}`);
})


const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).send(`Delete Contact for ID : ${req.params.id}`)
});

module.exports = { getAllContacts, createContact, getContact, updateContact, deleteContact }; */
/* ./routes/contactRoutes.js */

const express = require("express")
const router = express.Router();
const { 
    getAllContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
    addContactForm
} = require("../controllers/contactController");

router.route("/").get(getAllContacts).post(createContact);

router.route("/add").get(addContactForm).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;  
  
  
  
  
/*     .post((req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        return res.status(400).send("필수값이 입력되지 않았습니다.");
    }
    res.status(201).send("Create Contacts");
})
    .post(createContact); */


/* router
    .route("/")
    .get((req, res) => {
        res.status(200).send("Contacts pase");
    })
    .post((req, res) => {
        console.log(req.body);
        const { name, email, phone } = req.body;
        if (!name || !email || !phone) {
            return res.status(400).send("필수값이 입력되지 않았습니다.");
        }
        res.status(201).send("Create Contacts");
    }) */

        
/* router
    .route("/contacts")
    .get((req, res) => {
        res.status(200).send("Contacts Page");
    })
    .post((req, res) => {
        res.status(201).send("Creage Contacts Page");
    }); */


/* router
    .route("/contacts/:id")
    .get((req, res) => {
        res.status(200).send(`View contact for ID : ${req.params.id}`);
    })
    .put((req, res) => {
        res.status(200).send(`Update contact for ID : ${req.params.id}`);
    })
    .delete((req, res) => {
        res.status(200).send(`Delete contact for ID : ${req.params.id}`);
    }); */


// module.exports = router;



/* const express = require("express");
const router = express.Router();

router
    .route("/")
    // 모든 연락처 가져오기
    .get((req, res) => {
        res.status(200).send("Contacts Page");
    })
    .post((req, res) => {
        console.log(req.body);
        const { name, email, phone } = req.body;
        if (!name || !email || !phone) {
            return res.status(400).send('필수값이 입력되지 않았습니다');
        }
        res.status(201).send("Create Contacts");
    });

router
    .route("/:id")
    .get((req, res) => {
        // 연락처 상세보기
        res.status(200).send(`View Contact for ID: ${req.params.id}`);
    })
    .put((req, res) => {
        // 연락처 수정하기
        res.status(200).send(`Update Contact for ID: ${req.params.id}`);
    })
    .delete((req, res) => {
        // 연락처 삭제하기
        res.status(200).send(`Delete Contact for ID: ${req.params.id}`);
    }); */


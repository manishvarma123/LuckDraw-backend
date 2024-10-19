const express = require('express')
const userSignUpController = require('../controllers/user/userSignUp')
const authToken = require('../middleware/authToken')
const userDetails = require('../controllers/user/userDetails')
const userSignInController = require('../controllers/user/userSignIn')
const uploadContest = require('../controllers/contest/uploadContest')
const getContestList = require('../controllers/contest/getContestList')
const updateContest = require('../controllers/contest/updateContest')
const deleteContest = require('../controllers/contest/deleteContest')

const router = express.Router()


router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetails)

router.get("/contest-list",getContestList)
router.post("/upload-contest",uploadContest)
router.put("/update-contest/:id",authToken,updateContest)
router.delete("/delete-contest/:id",authToken,deleteContest)



module.exports = router
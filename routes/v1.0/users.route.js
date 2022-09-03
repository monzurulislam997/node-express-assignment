const express = require("express");
const { getAllRandomUsers, getARandomUser, saveAuser, deleteARandomUser } = require("../../controller/v1.0/users.controllers");
// const { getAllRandomUsers } = require("../controller/v1.0/users.controllers");
const router = express.Router();

router.route('/')
    .get(getAllRandomUsers)


router.route('/random')
    .get(getARandomUser)

router.route('/save')

    .post(saveAuser)

router.route('/:id')
    .delete(deleteARandomUser)

module.exports = router
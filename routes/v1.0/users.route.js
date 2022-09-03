const express = require("express");
const { getAllRandomUsers, getARandomUser, saveAuser, deleteARandomUser, updateAUser, bulkUserUpdate } = require("../../controller/v1.0/users.controllers");
// const { getAllRandomUsers } = require("../controller/v1.0/users.controllers");
const router = express.Router();


//get all user
router.route('/all').get(getAllRandomUsers)

//get random user
router.route('/random').get(getARandomUser)

//create a user and save
router.route('/save').post(saveAuser)


//specific id update
router.route('/:id')
    .patch(updateAUser)
    .delete(deleteARandomUser)


// Bulk update
router.patch("/bulk-update/", bulkUserUpdate);
module.exports = router



const allUserdata = require('../../users.json');
const fs = require("fs")

module.exports.getAllRandomUsers = (req, res) => {
    const query = req.query;

    if (query) {
        res.send(allUserdata.slice(0, query.limit,))

    }
    else {
        res.send(allUserdata)
    }
}


//get a random user
module.exports.getARandomUser = (req, res) => {

    const createRandomUser = allUserdata.sort(() => Math.random() - 0.5)
    const randomUser = createRandomUser.slice(0, 1)

    res.send(randomUser)
}

//save a user
module.exports.saveAuser = (req, res) => {
    let id = allUserdata.length + 1;


    const userInfo = { id, ...req.body }

    if (!userInfo || !userInfo.name || !userInfo.gender || !userInfo.contact) {
        return res.send({
            message: "Give all information correctly",
            status: 400
        })
    }

    allUserdata.push(userInfo)

    //console.log(allUserdata.length)
    res.send(allUserdata)
    fs.writeFileSync("../../users.json", JSON.stringify(allUserdata))

}

//update user
module.exports.updateAUser = (req, res) => {
    const id = req.params.id;

    const matchedUser = allUserdata.find(user => user.id == Number(id));
    const indexNumber = allUserdata.indexOf(matchedUser)
    if (!matchedUser) {
        res.status(404).send({
            message: "User not found",
            status: 404,
        });
    }

    const updatedInfo = { ...req.body }
    allUserdata.splice(indexNumber, 1, updatedInfo)
    // console.log(updatedInfo)


    res.send(allUserdata)
    fs.writeFileSync("../../users.json", JSON.stringify(allUserdata))
}


module.exports.deleteARandomUser = (req, res) => {
    const id = Number(req.params.id);

    if (!id) {
        res.send({
            message: "id not found",
            status: 404
        })
    }

    const matchedUser = allUserdata.find(user => user.id == id);
    // console.log(matchedUser)

    const indexNumber = allUserdata.indexOf(matchedUser)

    // console.log(indexNumber)
    const user = allUserdata.slice(0, indexNumber)

    const restUser = allUserdata.filter(user => user.id !== id)

    res.send(restUser)
    fs.writeFileSync("../../users.json", JSON.stringify(allUserdata))
}



//bulk-update 
module.exports.bulkUserUpdate = (req, res) => {
    const { users } = req.body;
    console.log(users);
    //   console.log(testData);
    const updatedUsers = allUserdata.map((user) => {
        const updatedUser = users.find((user) => user.id === user.id);
        return updatedUser ? { ...user, ...updatedUser } : user;

    });
    fs.writeFileSync("../../users.json", JSON.stringify(allUserdata))
    res.json({
        message: " Multiusers updated successfully",
        status: 200,
        data: updatedUsers,
    });

}

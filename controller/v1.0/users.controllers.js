
const allUserdata = require('../../users.json');

// module.exports.homeRoute = (req, res) => {
//     res.send(`
//      <h1>Node Express Assignment</h1>
//         <a href='/api/v1.0/random '>Get Random User</a>
//     `)
// }
module.exports.getAllRandomUsers = (req, res) => {

    res.send(allUserdata)

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

    allUserdata.push({ id, ...req.body })


    //console.log(allUserdata.length)
    res.json(allUserdata)

}

//update user
module.exports.updateAUser = (req, res) => {
    const id = req.params.id;

    const matchedUser = allUserdata.find(user => user.id == Number(id));
    const indexNumber = allUserdata.indexOf(matchedUser)
    console.log(matchedUser)

    const updatedInfo = { ...req.body }
    allUserdata.splice(indexNumber, 1, updatedInfo)
    // console.log(updatedInfo)

    res.send(allUserdata)
}


module.exports.deleteARandomUser = (req, res) => {
    const id = req.params.id;
    // const id = req.params.id-1;
    const matchedUser = allUserdata.find(user => user.id == Number(id));


    // console.log(typeof matchedUser)
    // console.log(matchedUser)
    const indexNumber = allUserdata.indexOf(matchedUser)
    console.log(indexNumber)
    // console.log(indexNumber)
    allUserdata.slice(indexNumber, 1)
    res.send(allUserdata)

}





//bulk 
module.exports.bulkUserUpdate = (req, res) => {
    const { users } = req.body;
    console.log(users);
    //   console.log(testData);
    const updatedUsers = allUserdata.map((user) => {
        const updatedUser = users.find((user) => user.id === user.id);
        return updatedUser ? { ...user, ...updatedUser } : user;

    });
    res.json({
        message: "Users updated successfully",
        status: 200,
        data: updatedUsers,
    });

}










// console.log(typeof matchedUser)
    // console.log(matchedUser)
    //  const indexNumber = allUserdata.indexOf(matchedUser)
    // console.log(indexNumber)
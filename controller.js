const pool = require("../../config/db")
const query = require("./queries")

const getUsers = (req, res) => {
    pool.query(query.getUsers, (err, results) => {
        if (err) {
            console.log(err.message);
            throw err;
        }
        res.status(200).json(results.rows);
    })
}

const getUserByPublicId = (req, res) => {
    const public_ID = req.params.public_id;
    pool.query(query.getUserByPublicId, [public_ID], (err, results) => {
        if (err) {
            console.log(err.message);
            throw err;
        }
        res.status(200).json(results.rows);
    })
}

const addUser = (req, res) => {
    console.log(req.body)
    const { public_id,email,  name, lastname, password, phone } = req.body;

    // there should not same public id in db
    pool.query(query.checkPublicIdExist, [public_id], (err, results) => {
        if (results.rows.length) {
            res.send("internal server error try again");
        } else {

             pool.query(addUser, [public_id,email, name, lastname, password, phone], (err, results) => {
                 if (err) {
                     console.log(err.message);
                     throw err;
                 }
                 res.status(201).send("User Created with success");
             })
        }
    });
    res.send(public_id);
}
const removeUser = (req, res) => {
    const public_ID = req.params.public_id;
    pool.query(query.removeUser, [public_ID], (err, results) => {
        if (err) {
            res.query("User do not fpund in database");
        }
    })
};
const removeUser = (req, res) => {
    const public_ID = req.params.public_id;
    pool.query(query.getUserByPublicId, [public_ID], (err, results) => {
        if (err) {
            res.query("User do not fpund in database");
        }
        pool.query (quey.removeUser,[public_ID], (err, results) =>{
            if(error) throw error;
            res.status(200).send("student removed successfully.");
        });
    });
};
const updateUser = (req, res) => {
    const public_ID = req.params.public_id;
    const {name} = req.body;
    pool.query(query.getUserByPublicId, [public_ID], (err, results) => {
        if (err) {
            res.query("User do not fpund in database");
        }

         pool.query(qery.updateUser, [name,public_id], (error, result) =>{
            if (error) throw error;
            res.status(200).send("Student update successfully");   
         });


});
};


module.exports = {
    getUsers,
    getUserByPublicId,
    addUser,
    removeUser,
    updateUser,
};
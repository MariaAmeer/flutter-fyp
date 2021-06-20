const getUsers = "SELECT * FROM users";
const getUserByPublicId = "SELECT * FROM users WHERE publicid = $1";
const checkPublicIdExist = "SELECT u FROM users u WHERE u.publicid = $1";
const addUser = "INSERT INTO users(userID,publicId,email,name,lastname,password,phone) VALUES ($1,$2,$3,$4,$5,$6,$7)";
const removeUser = "DELETE FROM users WHERE publicid = $1";
const updateUser = "UPDATE users SET name = $1 WHERE publicid = $2";

module.exports = {
    getUsers,
    getUserByPublicId,
    checkPublicIdExist,
    addUser,
    removeUser,
    updateUser,
}
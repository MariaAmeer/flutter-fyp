const { Router } = require("express");
const controller = require('./controller');

const router = Router();

router.get("/", controller.getUsers);
router.get("/:public_id", controller.getUserByPublicId);
router.post("/", controller.addUser);
router.delete("/:public_id", controller.removeUser);
router.put("/:public_id", controller.updateUser);

module.exports = router;
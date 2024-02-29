const express = require('express')
const router = express.Router()
const {allCharactersGeneration}  = require("../controller/PasswordController")

router.route('/allCharacters').post(allCharactersGeneration);

module.exports = router
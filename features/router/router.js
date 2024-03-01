const express = require('express')
const router = express.Router()
const {allCharactersGeneration,alphaNumGeneration,aplhabethGeneration,numbersGeneration,numbersSymbolGeneration}  = require("../controller/PasswordController")

router.route('/allCharacters').post(allCharactersGeneration);
router.route('/alphaNum').post(alphaNumGeneration);
router.route('/alphabeth').post(aplhabethGeneration);
router.route('/numbers').post(numbersGeneration);
router.route('/numSymbols').post(numbersSymbolGeneration);
module.exports = router
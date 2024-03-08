const express = require('express')
const router = express.Router()
const {allCharactersGeneration,alphaNumGeneration,aplhabethGeneration,numbersGeneration,numbersSymbolGeneration,alphaSymbolGeneration,SymbolGeneration}  = require("../controller/PasswordController")

router.route('/allCharacters').post(allCharactersGeneration);
router.route('/alphaNum').post(alphaNumGeneration);
router.route('/alphabeth').post(aplhabethGeneration);
router.route('/numbers').post(numbersGeneration);
router.route('/numSymbols').post(numbersSymbolGeneration);
router.route('/alphaSymbols').post(alphaSymbolGeneration);
router.route('/symbols').post(SymbolGeneration);

module.exports = router
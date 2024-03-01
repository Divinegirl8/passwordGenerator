const {generateAllCharacters,generateAlphaNum,genenerateAlphabeth,genenerateNumbers,genenerateNumSymbols,genenerateAlphaSymbols} = require('../services/PasswordService')

const allCharactersGeneration = async(request,response) =>{
    try{
        const res = await generateAllCharacters(request.body);
        response.status(200).json({res});
    }catch(error){
        response.status(404).json(error.message);
    }
}

const alphaNumGeneration = async(request,response) => {
    try{
        const res = await generateAlphaNum(request.body)
        response.status(200).json({res})
    }catch(error){
        response.status(404).json(error.message)
    }
}
const aplhabethGeneration = async(request,response) => {
    try{
        const res = await genenerateAlphabeth(request.body)
        response.status(200).json({res})
    }catch(error){
        response.status(404).json(error.message)
    }
}

const numbersGeneration = async(request,response) => {
    try{
        const res = await genenerateNumbers(request.body)
        response.status(200).json({res})
    }catch(error){
        response.status(404).json(error.message)
    }
}

const numbersSymbolGeneration = async(request,response) => {
    try{
        const res = await genenerateNumSymbols(request.body)
        response.status(200).json({res})
    }catch(error){
        response.status(404).json(error.message)
    }
}


const alphaSymbolGeneration = async(request,response) => {
    try{
        const res = await genenerateAlphaSymbols(request.body)
        response.status(200).json({res})
    }catch(error){
        response.status(404).json(error.message)
    }
}
module.exports = {allCharactersGeneration,alphaNumGeneration,aplhabethGeneration,numbersGeneration,numbersSymbolGeneration,alphaSymbolGeneration}
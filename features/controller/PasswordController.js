const {generateAllCharacters,generateAlphaNum} = require('../services/PasswordService')

const allCharactersGeneration = async(request,response) =>{
    try{
        const res = await generateAllCharacters(request.body);
        response.status(200).json({res});
    }catch(error){
        response.status(404).json(error.message);
    }
}

module.exports = {allCharactersGeneration}
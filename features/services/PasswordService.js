const LengthException = require("../exception/LengthException");

const generateAllCharacters = async (request) => {
  const { length } = request;
  const allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+=}{[]\\|/><.\"\',:;";
  
  let pattern = /[0-9]{0,}/;
  if (!pattern.test(length)) {
      throw new LengthException("length must contain numbers from 0 - 9 or more");
  }

  
  let password = "";
  
  for (let index = 0; index < length; index++) {
      password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
  }
  
  return password;
}

const generateAlphaNum = async (request) => {
  const { length } = request;
  const allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
  let pattern = /[0-9]{0,}/;
  if (!pattern.test(length)) {
      throw new LengthException("length must contain numbers from 0 - 9 or more");
  }

  
  let password = "";
  
  for (let index = 0; index < length; index++) {
      password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
  }
  
  return password;
}



module.exports = {generateAllCharacters,generateAlphaNum};
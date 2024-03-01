const LengthException = require("../exception/LengthException");

const generateAllCharacters = async (request) => {
  const { length } = request;
  const alphabeth = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "~`!@#$%^&*()_-+=}{[]\\|/><.\"\',:;";

  let pattern = /[0-9]{1,}/;
  if (!pattern.test(length)) {
      throw new LengthException("length must contain numbers from 0 - 9 or more");
  }

  if (length < 4 || length == null){
    throw new LengthException("length cannot be empty or less than 4");
  }

  
  let password = "";
  
  for (let index = 0; index < length; index++) {
    if(index % 2 == 0){
      password += alphabeth.charAt(Math.floor(Math.random() * alphabeth.length));
  }  else if(index % 3 == 0){
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }else{
    password += specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length))
  }

}
  
  return password;
}

const generateAlphaNum = async (request) => {
  const { length } = request;
  const alphabeth = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";

  let pattern = /[0-9]{0,}/;
  if (!pattern.test(length)) {
      throw new LengthException("length must contain numbers from 0 - 9 or more");
  }
  if (length < 4 || length == null){
    throw new LengthException("length cannot be empty or less than 4");
  }

  
  let password = "";
  
  for (let index = 0; index < length; index++) {
    if(index % 2 == 0){
      password += alphabeth.charAt(Math.floor(Math.random() * alphabeth.length));
  } else{
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }

}
  
  return password;
}

const genenerateAlphabeth = async (request) => {
 const { length } = request;
 const aplhabeth = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

 let pattern = /[0-9]{0,}/;
 if (!pattern.test(length)) {
     throw new LengthException("length must contain numbers from 0 - 9 or more");
 }
 if (length < 4 || length == null){
   throw new LengthException("length cannot be empty or less than 4");
 }

 let password = "";

 for (let index = 0; index < length; index++) {
  password += aplhabeth.charAt(Math.floor(Math.random() * aplhabeth.length));
 }

 return password;
 

}

const genenerateNumbers = async (request) => {
  const { length } = request;
  const numbers = "0123456789";
 
  let pattern = /[0-9]{0,}/;
  if (!pattern.test(length)) {
      throw new LengthException("length must contain numbers from 0 - 9 or more");
  }
  if (length < 4 || length == null){
    throw new LengthException("length cannot be empty or less than 4");
  }
 
  let password = "";
 
  for (let index = 0; index < length; index++) {
   password += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
 
  return password;
  
 
 }
 
 const genenerateNumSymbols = async (request) => {
  const { length } = request;
  const numbers = "0123456789";
  const symbols =  "~`!@#$%^&*()_-+=}{[]\\|/><.\"\',:;";
 
  let pattern = /[0-9]{0,}/;
  if (!pattern.test(length)) {
      throw new LengthException("length must contain numbers from 0 - 9 or more");
  }
  if (length < 4 || length == null){
    throw new LengthException("length cannot be empty or less than 4");
  }
 
  let password = "";
 
  for (let index = 0; index < length; index++) {
    if(index % 2 == 0){
   password += numbers.charAt(Math.floor(Math.random() * numbers.length));
  } else{
    password += symbols.charAt(Math.floor(Math.random() * symbols.length));
  }

}
 
  return password;
  
 
 }
 


module.exports = {generateAllCharacters,generateAlphaNum,genenerateAlphabeth,genenerateNumbers,genenerateNumSymbols};
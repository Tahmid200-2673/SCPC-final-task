// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generatePassword(length) {
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";

    
    const password = [];
    for (let i = 0; i < length; i++) {
      password.push(characters[Math.floor(Math.random() * characters.length)]);
    }
  
    
    return password.join("");
  }
  
  console.log(generatePassword(12));
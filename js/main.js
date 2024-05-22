function generatePassword() {
    const name = "Tomek";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";
    
    password += name;

    for (let i = name.length; i < 14; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

// Unikalny Token:
function generateUniqueToken() {
  return crypto.randomUUID();
}
const token = generateUniqueToken();

console.log(generatePassword());
console.log(token)


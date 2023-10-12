const accountId = 12345677
let accountEmail = "naik@google.com"
var accountPassword = "123456"
accountCity = "shimoga"
let accountState; // if don't assign anything it will show undefined
// accountId = 2    //constant changing is not allowed


accountEmail = "hc@hc.com"
accountPassword = "56798"
accountCity = "Bangalore"
console.log(accountId)

/*
Prefer not to use var
Because of issue in black Scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])

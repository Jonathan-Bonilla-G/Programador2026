let usuario = "jonathan";
let contraseña = "clash96p";

if(usuario === "JonathanBonilla" && contraseña === "Clashofclans96"){
    console.log("usuario y contraseña correcto")
}
else if(usuario ==="JonathanBonilla" && contraseña !== "Clashofclans96"){
    console.log("usuario conrrecto pero contraseña incorrecta")
}
else if(usuario !=="JonathanBonilla" && contraseña === "Clashofclans96"){
    console.log("usuario incorrecto pero contraseña correcta")
}
else if(usuario !=="JonathanBonilla" && contraseña !== "Clashofclans96"){
    console.log("usuario contraseña incorrecta")
}
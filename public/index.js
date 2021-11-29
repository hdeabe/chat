const socket = io();

let input = document.getElementById('mensaje');
let user = document.getElementById('user');
input.addEventListener("keyup",(e)=>{
    if(e.key==="Enter"){
        if(e.target.value){
    socket.emit('mensaje2', {user:user.value, mensaje2:e.target.value});
    }
    else{
        console.log("no enviado");
    }
    }
})

socket.on('welcome',data=>{
    alert(data);
})

socket.on('messagelog',data=>{
    let p = document.getElementById('log');
    let mensajes = data.map(mensaje2=>{
        return `<div><span> ${mensaje2.user} : ${mensaje2.mensaje2}</span></div>`
    }).join('');
    p.innerHTML= mensajes;
})
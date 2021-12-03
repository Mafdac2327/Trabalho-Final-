function mostrarsenha( ){
   let divnova = document.createElement( "div" );
   let ret = document.querySelector( "#senhaUsuario" );
   let inputsenha = ret.value;
   const senha = "ola";
   console.log( inputsenha )
   let lk = "Clic Aki";
   if( inputsenha == senha ){
    
    window.location.href = "../src/trabalhofinal.html";
   
   }
   else{
    alert("Senha incorreta")

   }
}
let botaooK = document.querySelector( "#enviar" );

botaooK.onClick = mostrarsenha;


// console.log( botaooK );
// botaooK.onclick = mostrarsenha;
// var senhaUsuario = document.getElementById( "senhaUsuario" );
// console.log( senhaUsuario );

var i = setInterval(function () {
    
  clearInterval(i);

  // O código desejado é apenas isto:
  document.getElementById("loading").style.display = "none";
  document.getElementById("conteudo").style.display = "inline";
  const texto = document.getElementById('texto')
  digitar(texto)
}, 5000);
//Função digitar sozinho
function digitar(elemento){
  
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML=''
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML+=letra, 75*i)
    });
}

function navbarColor(elemento){
  let span = document.getElementById('b1')
  let nav = document.getElementById(elemento).className
  let nav1 = document.getElementById(elemento)
  if(nav == "navbar navbar-expand-md navbar-light bg-transparente"){
    nav1.className="navbar navbar-expand-md navbar-light bg-primary"
}else {
  nav1.className="navbar navbar-expand-md navbar-light bg-transparente"
}

}

function fechar(elemento){
  let nav =  document.getElementById('nav')
  let n = document.getElementById(elemento)
  n.className="navbar-collapse collapse"
  nav.className="navbar navbar-expand-md navbar-light bg-transparente"
}
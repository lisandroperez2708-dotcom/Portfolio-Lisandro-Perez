document.getElementById('subir').addEventListener('click', function(){
window.scrollTo({
  top:0, behavior:'smooth'
});
});

let animado = document.querySelectorAll(".animado");

function mostrarScroll(){
  let scrollTop = document.documentElement.scrollTop;
  for (var i=0; i<animado.length; i++){
    let alturaAnimado = animado[i].offsetTop;
    if(alturaAnimado - 300 < scrollTop) {
      animado[i].style.opacity = 1;
    }
  }
  
}

window.addEventListener('scroll', mostrarScroll);



const body = document.body
const modoToggle = document.getElementById('modoToggle');

body.classList.toggle('modoOscuro', localStorage.getItem('modo') === 'oscuro');

modoToggle.addEventListener('click', () => {
  const esOscuro = body.classList.toggle('modoOscuro');
  localStorage.setItem('modo', esOscuro ? 'oscuro' : 'claro');
  
});

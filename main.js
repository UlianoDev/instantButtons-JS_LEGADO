let botoes = document.querySelectorAll('.tecla')

for(let contador = 0; contador < botoes.length; contador++ ){
  const indiceArray = botoes[contador]
  const id = indiceArray.classList[1]
  //indiceArray.onclick = ()=>{document.querySelector(`#som_${id}`).play();} 
  const sound = () => {
    document.querySelector(`#som_${id}`).play();
  }; 
  indiceArray.addEventListener('click', sound )
}
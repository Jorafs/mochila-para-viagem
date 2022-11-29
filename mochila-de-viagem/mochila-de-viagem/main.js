const itens = document.getElementById("nome")
const numero = document.getElementById("quantidade")
const form = document.getElementById("novoItem")
const criaElemento = document.createElement('li')
const criaQuantidade = document.createElement('strong');
const lista = document.getElementById('lista')

 form.addEventListener("submit" , (evento)=>{
 	evento.preventDefault();
	addItens(itens.value, numero.value)
 })

 function addItens(nome, quantidade){
 	criaElemento.classList.add('item')

 	criaQuantidade.innerHTML = quantidade

 	criaElemento.appendChild(criaQuantidade)
 	criaElemento.innerHTML += nome

 	lista.appendChild(criaElemento)

 }

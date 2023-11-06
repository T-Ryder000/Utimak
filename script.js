'use strict'

let prev = document.getElementById('next')
let nex = document.getElementById('prev')

let containerItems = document.querySelector('.img-ofertas')
console.log(containerItems)

prev.addEventListener('click', previous)
nex.addEventListener('click', next)

function previous(){
  let ofertas = document.querySelectorAll('.img-ofertas img');
  containerItems.appendChild(ofertas[0]);
}

function next(){
  let ofertas = document.querySelectorAll('.img-ofertas img');
  const lastItem = ofertas[ofertas.length - 1];
  containerItems.insertBefore( lastItem, ofertas[0] );
}


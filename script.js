'use strict'

const prodMain = [
  { id: '1', url: "./Main/Main3/produto1.jpeg"},
  { id: '2', url: "./Main/Main3/produto2.jpeg"},
  { id: '3', url: "./Main/Main3/produto3.jpeg"},
  { id: '4', url: "./Main/Main3/produto4.jpeg"},
  { id: '5', url: "./Main/Main3/produto5.jpeg"},
  { id: '6', url: "./Main/Main3/produto6.jpeg"},
  { id: '7', url: "./Main/Main3/produto7.jpeg"},
]

const container = document.querySelector('.slide-images')

const loadImages = function (prodMain, container) {
  prodMain.forEach(image => {
    container.innerHTML += `<div class='item'>
      <img src='${image.url}'>
    </div>`
  })
}

loadImages(prodMain, container)

let items = document.querySelectorAll('.item')

const previous = () => {
  container.appendChild(items[0])
  items = document.querySelectorAll('.item')
}

document.querySelector('#button1').addEventListener('click', previous)

const next = () => {
  const lastItem = items[items.length - 1]

  container.insertBefore(lastItem, items[0])
  items = document.querySelectorAll('.item')
}

document.querySelector('#button2').addEventListener('click', next)
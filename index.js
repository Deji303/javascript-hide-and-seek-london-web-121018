function getFirstSelector (selector) {
  return document.querySelector(selector)
}

function nestedTarget () {
  let nested = document.getElementById('nested')
  return nested.querySelector('.target')
}

function increaseRankBy (n) {
  let list = document
    .getElementById('app')
    .querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = (parseInt(list[i].innerHTML) + n).toString()
  }
}


function deepestChild() {
    return document.getElementById('grand-node').querySelector('div div div div div')
}
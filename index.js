function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector(".target")
}

function increaseRankBy(n) {
  document.querySelectorAll("ul.ranked-list li").forEach( 
    (i) => i.innerHTML = parseInt(i.innerHTML) + n)   
}

function deepestChild() {
  var node = document.getElementById("grand-node")
  while( node.children[0] != null) {
    node = node.children[0]
  }
  return node
}
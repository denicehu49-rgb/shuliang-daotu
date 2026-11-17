
function renderTree(root, withImages) {
  document.getElementById("tree").replaceChildren(renderNode(root, withImages));
}
function renderNode(node, withImages) {
  var article = document.createElement("article");
  article.className = "node";
  var title = document.createElement("h2");
  title.className = "node-title";
  title.textContent = node.title;
  article.appendChild(title);
  if (node.see) article.appendChild(line("看见", node.see));
  if (node.diff) article.appendChild(line("差别", node.diff));
  if (withImages && node.image) {
    var figure = document.createElement("figure");
    var img = document.createElement("img");
    img.src = node.image;
    img.alt = node.title;
    figure.appendChild(img);
    if (node.why) {
      var cap = document.createElement("figcaption");
      cap.textContent = node.why;
      figure.appendChild(cap);
    }
    article.appendChild(figure);
  }
  if (node.children && node.children.length) {
    var kids = document.createElement("div");
    kids.className = "kids";
    node.children.forEach(function (child) { kids.appendChild(renderNode(child, withImages)); });
    article.appendChild(kids);
  }
  return article;
}
function line(label, text) {
  var p = document.createElement("p");
  p.className = "line";
  var b = document.createElement("b");
  b.textContent = label;
  p.appendChild(b);
  p.appendChild(document.createTextNode(text));
  return p;
}

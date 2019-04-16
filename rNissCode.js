function main() {
   $('a').remove();
   $('br').remove();
  var scramble = document.getElementById('scramble').value;
  var skeleton = document.getElementById('skeleton').value;

  var skeletonArray = skeleton.split(" ");
  var url;
  var link;
  for (var i = 0; i < skeletonArray.length; i++) {
    url = "https://alg.cubing.net/?setup=";
    for (var j = i; j < skeletonArray.length; j++) {
      url += skeletonArray[j] + "_";

    }
    url += scramble;
    for (var g = 0; g < i; g++) {
      url += skeletonArray[g] + "_";

    }
    var element = document.createElement("a");
  element.setAttribute("href", url);
  element.innerHTML = "Spot # "+ i;
  var lineBreak = document.createElement('br');

  document.body.appendChild(element);
  document.body.appendChild(lineBreak);

  }
}

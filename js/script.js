var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// ---------------
// убираем левую сторону
var leftSide = document.getElementById('left_side');
var arrow = document.getElementById('arrow');
var sample = document.getElementById('sample');
//var wrapper = document.getElementById('wrapper');
var root = document.querySelector(':root');
// var myMap = document.getElementById('map');
arrow.addEventListener("click", function() {
  if (sample.style.display === "block") {
    leftSide.style.setProperty('min-width', '25px');
    sample.style.display = "none";
    root.style.setProperty('--indent', '25px');
    //wrapper.style.margin = "0";
    // myMap.style.width = "95%";
  } else {
    //leftSide.style.width = "var(--indent)";
    //wrapper.style.margin_left = "calc(33% - 1px)";
    leftSide.style.setProperty('min-width', '350px');
    sample.style.display = "block";
    root.style.setProperty('--indent', 'calc(23% - 1px)');
    // myMap.style.width = "95%";
  }
});

  // var iframe = document.getElementsByTagName('iframe')[0];

  // var iframeDoc = iframe.contentWindow.document;
  // iframe.onload = function(){iframeDoc.body.style.backgroundColor = 'green'};

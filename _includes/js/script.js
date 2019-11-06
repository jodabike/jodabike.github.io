<div id="toc_container">
<p class="toc_title">Table of Contents &nbsp; <button id="hide">Hide</button> <button id="show" hidden="true">Show</button></p>
<ol class="toc_list" id="toc_contents">
  <li><a href="#First_Point_Header"> First Point Header</a>
  <ol>
    <li><a href="#First_Sub_Point_1"> First Sub Point 1</a></li>
    <li><a href="#First_Sub_Point_2"> First Sub Point 2</a></li>
  </ol>
</li>
<li><a href="#Second_Point_Header">2 Second Point Header</a></li>
<li><a href="#Third_Point_Header">3 Third Point Header</a></li>
</ol>
</div>


var toc2 = 
	"<div id='toc_container'>
<p class='toc_title'>Table of Contents &nbsp; <button id='hide'>Hide</button> <button id='show' hidden='true'>Show</button></p>
<ol class='toc_list' id='toc_contents'>";

var mp, np, el, title, link;

$("article h3").each(function() {

  el = $(this);
  title = el.text();
  link = "#" + el.attr("id");

  mp =
    "<li>" +
      "<a href='" + link + "'>" +
        title +
      "</a>" +
    "</li>";

  ToC += mp;
  
  .. run through h4 headings ..

});



var ToC =
  "<nav role='navigation' class='table-of-contents'>" +
    "<h2>Table of Contents</h2>" +
    "<ol>";

var newLine, el, title, link;

$("article h3").each(function() {

  el = $(this);
  title = el.text();
  link = "#" + el.attr("id");

  newLine =
    "<li>" +
      "<a href='" + link + "'>" +
        title +
      "</a>" +
    "</li>";

  ToC += newLine;

});

ToC +=
   "</ol>" +
  "</nav>";

$(".all-questions").prepend(ToC);
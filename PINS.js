$(function(){ 
$("table.datalist tr:nth-child(odd)").addClass("altrow"); 
$("table").mouseover(function(){ 
$("tr:gt(0)").toggleClass("altrow"); }); 
$("table").mouseout(function(){ 
$("tr:gt(0)").toggleClass("altrow"); }); }); 
function addfavorite(){if (document.all)
{window.external.addFavorite('http://www.bearing-needles.com/','Bookmark');}else 
if(window.sidebar){window.sidebar.addPanel('Bookmark','http://www.bearing-needles.com', "");}}
function changeArticleFont(size)
{var articleBody = document.getElementById("AXI"); switch (size)
{case 'm':articleBody.style.fontSize = '11pt'; break;
case 'l':articleBody.style.fontSize = '13pt';
break; case 'xl': articleBody.style.fontSize = '16pt';
break; default: articleBody.style.fontSize = '11pt';
break;}}

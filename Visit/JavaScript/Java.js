var menuTrigger = document.getElementById('menuTrigger'); 
var headerMenu = document.getElementById('headerMenu');
menuTrigger.onclick = function()
{
$("#headerMenu").slideToggle(500);
}
$("#headerMenu a").click(function() 
{
if (headerMenu.style.display === "block") 
{ 
    $("#headerMenu").slideUp(500);
}});

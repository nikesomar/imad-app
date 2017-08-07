console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerhtml='LINKIN PARK';
var img=document.getElementById('lp');
var marginleft=0;
function moveright()
{
    marginleft=marginleft+1;
    img.style.marginleft=marginleft+'px';
    
}
img.onclick=function()
{
    var interval=setInterval(moveright,50);
}
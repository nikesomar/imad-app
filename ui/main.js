var button= document.getElementById('counter');
button.onClick=function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readystate===XMLHttpRequest.DONE){
            if(request.status===200){
                var counter=request.responseText;
                 var span=document.getElementById('count');
                 span.innerHTMl=counter.toString();
            }
        }
    };
  request.open('GET', 'http://nikesomar.imad.hasura-app.io/counter', true);
  request.send(null);
  
  
   
};
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function()
{
    var name=['name1','name2','name3','name4'];
    var list='';
    for(var i=0;i<names.length;i++)
    {
        list+='<li>'+names[i]+'<li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
};

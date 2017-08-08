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


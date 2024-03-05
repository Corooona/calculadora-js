const display = document.querySelector( '#display' );

const buttons = document.querySelectorAll('button');

//recorremos todos los buttons
buttons.forEach((item)=>{
    item.onclick=()=>{
        if(item.id=="clear"){
            display.innerText="";  //limpiamos el display al hacer click
        }
        else if(item.id=="backspace"){
            let string = display.innerText.toString();
            display.innerText=string.substr(0,string.length-1);
        }else if(display.innerHTML !="" && item.id=="equal"){
            
            display.innerText=eval(display.innerText);
        }else if(display.innerHTML =="" && item.id=="equal"){
            display.innerText="NULL"
            setTimeout(()=>{
                display.innerText=""
            },2000)
        }
        else{
            display.innerText+=item.id;
        }
    };
});
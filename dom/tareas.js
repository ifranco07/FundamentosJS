const inputTarea = document.querySelector('#inputTarea');
const tareas = document.querySelector('#tareas');
const btnTarea = document.querySelector('#btnTarea');

function createAlert(message){
    /*
    <div class ="alert alert-primary" role="alert">
    A simple primary alert-check it out!
    </div>
    */
   const alerta= document.createElement('div');
   alerta.classList.add('alert');
   alerta.classList.add('alert-primary');
   alerta.classList.add('role','alert');
   let buttons= `<div>`;
   buttons+=`<buttons class="btn red"></buttons>`;
   buttons+=`<buttons class="btn yellow"></buttons>`;
   buttons+=`<buttons class="btn green"></buttons>`;
   buttons+=`<buttons class="btn x">X</buttons>`;
   buttons+= `</div>`;
   alerta.innerHTML = `<div>${message}</div>${buttons}`;
   return alerta;

}

function addTarea(){
    const data = inputTarea.value;
    const alerta = createAlert(data);
    inputTarea.value = '';
    tareas.appendChild(alerta);
}

function getButton(e){
    if(e.target.classList.contains('btn'));
    const action= e.target.classList[1];
    const alertActual= e.target.parentElement.parentElement;
    switch(action){
        case 'red':
            alertActual.classList=[];
            alertActual.classList.add('alert','alert-danger');
            break;
            case 'yellow':
                alertActual.classList=[];
                alertActual.classList.add('alert','alert-warning');
                break;
            case 'green':
                alertActual.classList=[];
                alertActual.classList.add('alert','alert-danger');
                break;
            case 'x':
                alertActual.remove();
                break; 

    }
}

btnTarea.addEventListener('click', addTarea);
tareas.addEventListener('click', getButton);

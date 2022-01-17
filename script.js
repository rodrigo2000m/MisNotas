//Inicio
function initFunction(){
    let notes=JSON.parse(localStorage.getItem('notes'));
    let categories=JSON.parse(localStorage.getItem('categories'))
    if(notes===null){
        notes=[];
        localStorage.setItem('notes',JSON.stringify(notes));
    }
    if(categories===null){
        categories=[];
        localStorage.setItem('categories', JSON.stringify(categories))
    }
}
initFunction()

//Creacion y muestra de las categorias
function createCategory(){
    let newCategory=document.getElementById('newCategory').value;
    let categories=JSON.parse(localStorage.getItem('categories'));
    //en proximas mejoras comparar si existe la categoria ya
    categories.push(newCategory)
    localStorage.setItem('categories', JSON.stringify(categories));
    showCategories()
}
function showCategories(){
    let categories=JSON.parse(localStorage.getItem('categories'));
    let htmlContentToAppend='';
    for(let i=0;i<categories.length;i++){
        htmlContentToAppend+=`
        <div class="d-flex my-1 justify-content-between border rounded-pill align-items-center">
            <p class="my-1 mx-3">${categories[i]}</p>
            <div class="m-1 me-3 d-flex justify-content-around col-2">
                <svg onclick="seeTheseNotes(${i})" height="20px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="eye" class="svg-inline--fa fa-eye fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"></path></svg>
                <svg onclick="deleteCategory(${i})" height="20px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg>
            </div>
        </div>

        `    
    }
    document.getElementById('categoriesSpace').innerHTML=htmlContentToAppend
}
showCategories()

function deleteCategory(i){
    let categories=JSON.parse(localStorage.getItem('categories'));
    categories.splice(i,1);
    localStorage.setItem('categories', JSON.stringify(categories));
    showCategories()
}
function seeTheseNotes(i){

}




//Crear nota nueva
function createNote() {
    let htmlContentToAppend = '';
    let htmlContentToAppend2='';
    htmlContentToAppend = `
    <div class="col-md-6 col-sm-12 card m-2 p-2">
        <div class='d-flex'>
            <input class="form-control mb-2 type="text" name="noteTitle" id="noteTitle" placeholder="Título">
            <select class='form-select mb-2 ms-2 form-select-sm' id="noteCategory">
            </select>
        </div>
    <textarea class="form-control mb-2 "name="noteBody" id="noteBody" cols="30" rows="2" placeholder="Nota..."></textarea>
    <div class="d-flex align-items-center">
        <div class="d-flex align-items-center" id="bell">
            <svg class="mx-2" height="20px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" class="svg-inline--fa fa-bell fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg>           
            <input type="datetime-local" class="form-control" name="alertTime" id="alertTime">
        </div>
        <div class="d-flex align-items-center" id="palette">
            <svg class="mx-2" height="20px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="palette" class="svg-inline--fa fa-palette fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path></svg>
            <input id="noteColor" type="color" class="form-control form-control-color" value="#CCCCCC">
        </div>
    </div>
    <div class="d-flex justify-content-end mt-2">
        <button class="btn btn-secondary mx-2">Cancelar</button>
        <button class="btn btn-primary" onclick="saveNote()">Guardar</button>
    </div>
    </div>

    `
    document.getElementById('newNote').innerHTML = htmlContentToAppend;

    //Usar solo categorias definidas previamente
    let categories=JSON.parse(localStorage.getItem('categories'));
    for(let i=0;i<categories.length;i++){
        htmlContentToAppend2+=`
        <option>${categories[i]}</option>
        `    
    }
    document.getElementById('noteCategory').innerHTML=htmlContentToAppend2
}

//Guarda los datos de una nueva nota
function saveNote(){
    let notes=JSON.parse(localStorage.getItem('notes'));
    let newNote={
        title:document.getElementById('noteTitle').value,
        category:document.getElementById('noteCategory').value,
        note:document.getElementById('noteBody').value,
        color:document.getElementById('noteColor').value,
        alert:document.getElementById('alertTime').value
    };
    notes.push(newNote);
    localStorage.setItem('notes',JSON.stringify(notes));
    createNote();
    location.reload()
}

//Actualizar una nota con nuevos datos
function updateNote(i){
    let notes=JSON.parse(localStorage.getItem('notes'));
    let newNote={
        title:document.getElementById('noteTitle'+i).value,
        category:document.getElementById('noteCategory'+i).value,
        note:document.getElementById('noteBody'+i).value,
        color:document.getElementById('noteColor'+i).value,
        alert:document.getElementById('alertTime'+i).value
    };
    notes[i]=newNote;
    localStorage.setItem('notes',JSON.stringify(notes));
    location.reload()

}
//borrar una nota existente
function deleteNote(i){
    let notes=JSON.parse(localStorage.getItem('notes'));
    notes.splice(i,1);
    localStorage.setItem('notes',JSON.stringify(notes));
    location.reload()
}

function showNotes(){
    let notes=JSON.parse(localStorage.getItem('notes'));
    let htmlContentToAppend='';
    for(let i=0;i<notes.length;i++){
        htmlContentToAppend+=`
        <div id="note${i}" class="card m-2 p-2 col-md-3 align-self-start myNotes" data-bs-toggle="modal" data-bs-target="#myModal${i}">
            <span class="badge" style="background:${notes[i].color};">${notes[i].category}</span>
            <h5>${notes[i].title}</h5>
            <p>${notes[i].note}</p>
            <div class="d-flex align-items-center" id="bell">
                <svg color="${notes[i].color}" class="mx-2" height="20px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" class="svg-inline--fa fa-bell fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg>           
                <div>${notes[i].alert}</div>
            </div>

        </div>


        <!-- The Modal -->
        <div class="modal" id="myModal${i}">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <div class='d-flex'>
                    <input class="form-control mb-2 type="text" name="noteTitle" id="noteTitle${i}" value="${notes[i].title}">
                    <select class='form-select mb-2 ms-2 form-select-sm' id="noteCategory${i}"></select>
                </div>
                <textarea class="form-control mb-2 "name="noteBody" id="noteBody${i}" cols="30" rows="2">${notes[i].note}</textarea>
            </div>

            <div class="d-flex align-items-center mb-2">
                    <div class="d-flex align-items-center" id="bell">
                        <svg class="mx-2" height="20px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" class="svg-inline--fa fa-bell fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg>           
                        <input type="datetime-local" class="form-control" name="alertTime" id="alertTime${i}" value="${notes[i].alert}">
                    </div>
                    <div class="d-flex align-items-center" id="palette">
                        <svg class="mx-2" height="20px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="palette" class="svg-inline--fa fa-palette fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path></svg>
                        <input id="noteColor${i}" type="color" class="form-control form-control-color" value="${notes[i].color}">
                    </div>
                </div>

            <!-- Modal footer -->
            <div class="modal-footer">
                    
                <div class="d-flex justify-content-end mt-2">
                    <button class="btn btn-secondary mx-2" onclick="deleteNote(${i})">Eliminar</button>
                    <button class="btn btn-primary" onclick="updateNote(${i})">Guardar</button>
                </div>

                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
            </div>

        </div></div>
    </div>
        `
    };
    document.getElementById('notes').innerHTML=htmlContentToAppend;

    for(let i=0;i<notes.length;i++){
        let htmlContentToAppend2='';
        //Usar solo categorias definidas previamente
        let categories=JSON.parse(localStorage.getItem('categories'));
        for(let i=0;i<categories.length;i++){
            htmlContentToAppend2+=`
            <option>${categories[i]}</option>
            `
        }
        document.getElementById('noteCategory'+i).innerHTML=htmlContentToAppend2           
    
    }

}

showNotes();

//Cambiar vista
function changeView(){
    let view=document.querySelector('.views');
    let myNotes=document.getElementsByClassName('myNotes')
    if(view.id==='listView'){
        view.setAttribute('src','/icons/th-gallery-solid.svg')
        view.setAttribute('id','galleryView');
        myNotes.forEach(i => {
            myNotes[i].remove='col-2';
            myNotes[i].add="col"       
        });
    }else if(view.id==='galleryView'){
        view.setAttribute('src','/icons/th-list-solid.svg')
        view.setAttribute('id','listView')
      
    }
}

//Eliminar todos los datos del localstorage
function deleteAllDates(){
window.localStorage.clear()
    location.reload()
}


//Ejecucion de funciones

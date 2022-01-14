//

//Crear nota nueva
function createNote() {
    let htmlContentToAppend = '';
    htmlContentToAppend = `
    <div class="col-md-6 col-sm-12 card m-2 p-2">
        <div class='d-flex'>
            <input class="form-control mb-2 type="text" name="noteTitle" id="noteTitle" placeholder="Título">
            <select class='form-select mb-2 ms-2 form-select-sm' id="noteCategory">
                <option>Categoria 1</option>
                <option>Categoria 2</option>
                <option>Categoria 3</option>
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
        <button class="btn btn-secondary mx-2">Eliminar</button>
        <button class="btn btn-primary" onclick="saveNote()">Guardar</button>
    </div>
    </div>

    `
    document.getElementById('newNote').innerHTML = htmlContentToAppend
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
        title:document.getElementById('noteTitle').value,
        category:document.getElementById('noteCategory').value,
        note:document.getElementById('noteBody').value,
        color:document.getElementById('noteColor').value,
        alert:document.getElementById('alertTime').value
    };
    notes[i]=newNote;
    localStorage.setItem('notes',JSON.stringify(notes));
    location.reload()

}
//borrar una nota existente
function deleteNote(){

}

function showNotes(){
    let notes=JSON.parse(localStorage.getItem('notes'));
    htmlContentToAppend='';
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
                <h4 class="modal-title">${notes[i].title}</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <div class='d-flex'>
                    <input class="form-control mb-2 type="text" name="noteTitle" id="noteTitle" value="${notes[i].title}">
                    <select class='form-select mb-2 ms-2 form-select-sm' id="noteCategory" value="${notes[i].category}">
                        <option>Categoria 1</option>
                        <option>Categoria 2</option>
                        <option>Categoria 3</option>
                    </select>
                </div>
                <textarea class="form-control mb-2 "name="noteBody" id="noteBody" cols="30" rows="2">${notes[i].note}</textarea>
            </div>

            <div class="d-flex align-items-center mb-2">
                    <div class="d-flex align-items-center" id="bell">
                        <svg class="mx-2" height="20px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" class="svg-inline--fa fa-bell fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path></svg>           
                        <input type="datetime-local" class="form-control" name="alertTime" id="alertTime" value="${notes[i].alert}">
                    </div>
                    <div class="d-flex align-items-center" id="palette">
                        <svg class="mx-2" height="20px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="palette" class="svg-inline--fa fa-palette fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"></path></svg>
                        <input id="noteColor" type="color" class="form-control form-control-color" value="${notes[i].alert}">
                    </div>
                </div>

            <!-- Modal footer -->
            <div class="modal-footer">
                    
                <div class="d-flex justify-content-end mt-2">
                    <button class="btn btn-secondary mx-2">Eliminar</button>
                    <button class="btn btn-primary" onclick="updateNote(${i})">Guardar</button>
                </div>

                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
            </div>

        </div></div>
</div>
        `
    };
    document.getElementById('notes').innerHTML=htmlContentToAppend
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

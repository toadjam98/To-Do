import datepicker from 'js-datepicker';
function renderHeader(id,text){
    let   header      = document.createElement  ("div");
    header.id = id;
    header.textContent = text;
    return header;
}

function renderButton(id,text,getClass){
    let createButton = document.createElement("button");
    createButton.id = id;
    createButton.textContent = text;
    createButton.classList = getClass;
    return createButton;

}

function renderHorNav(id){

    let   horNav      = document.createElement  ("nav");
    horNav.id = id;
    let homeButton     = renderButton("home","","horButtons fa fa-home");
    homeButton.title   = "Home";
    let addButton      = renderButton("add","","horButtons fa fa-plus-square-o");
    addButton.title    = "New Task";
    let completeButton = renderButton("complete","","horButtons fa fa-calendar-check-o");
    completeButton.title = "Completed Tasks";
    horNav.appendChild(homeButton);
    horNav.appendChild(completeButton);
    horNav.appendChild(addButton);
    
    return horNav;

}

function renderVerNav(id){
    
    let   verNav      = document.createElement  ("nav");
    verNav.id = id;
    let todayButton     = renderButton("today","Today","verButtons");
    let weekButton      = renderButton("week","Week","verButtons");
    let projectButton   = renderButton("project","Project","verButtons");
    verNav.appendChild(todayButton);
    verNav.appendChild(weekButton);
    verNav.appendChild(projectButton);
   
    return verNav;

}

function renderContentArea(id){
  
    let contentArea   = document.createElement("div");
    contentArea.id = id;
  
    return contentArea;
}
//Revist this and make it reusable (Note USE renderButton Function)
function createPopUp(){
    let modal_bg = document.createElement("div");
    modal_bg.className = "modal-bg";
    let modal = document.createElement("div");
    modal.className = "modal";
    let inputDiv=document.createElement("div");
    inputDiv.id="inputDiv";
    let titleInput         = document.createElement("input");
    titleInput.placeholder ="Title: Code";
    titleInput.id="titleInput";
    let textAreaInput      = document.createElement("textarea");
    textAreaInput.placeholder="Details: e.g. code at 2pm";
    textAreaInput.id="textAreaInput";

    //Can be replaced with renderButton function
    let addButton          = document.createElement("button");
    addButton.id="popUpAdd";
    addButton.className=" 	fa fa-plus-square-o"
    let closeButton        = document.createElement("span");
    closeButton.className  = "modal-close  	fa fa-close";
    ///////////////////////////////////////////////////////
    let calendarButton = renderButton("calendar","","fa fa-calendar");

    let buttonDiv = document.createElement("div");
    buttonDiv.id="buttonDiv";



    inputDiv.appendChild(titleInput);
    inputDiv.appendChild(textAreaInput);
    modal.appendChild(inputDiv);
    buttonDiv.appendChild(addButton);
    buttonDiv.appendChild(calendarButton);
    modal.appendChild(buttonDiv);
    modal.appendChild(closeButton);
    modal_bg.appendChild(modal);

    return modal_bg;

}
function togglePopUp(){
    let modalbg = document.querySelector(".modal-bg");
    let addButton = document.getElementById("add");
    addButton.addEventListener("click",()=>{
            modalbg.classList.add("bg-active");
    });

}
function closePopUp(){
    let modalbg = document.querySelector(".modal-bg");
    let closeButton = document.querySelector(".modal-close");
    closeButton.addEventListener("click",()=>{
        modalbg.classList.remove("bg-active");
        resetPopUp();
});

}
function resetPopUp(){
    let titleInput = document.getElementById("titleInput");
    let textAreaInput= document.getElementById("textAreaInput");
    titleInput.value   ="";
    textAreaInput.value="";

}




function renderPage(){
    const mainContent = document.getElementById("main-content");
    let header = renderHeader("header","To-Do List");
    mainContent.appendChild(header);
    let horNav = renderHorNav("horNav");
    mainContent.appendChild(horNav);
    let verNav = renderVerNav("verNav");
    mainContent.appendChild(verNav);
    let contentArea = renderContentArea("content-area");
    mainContent.appendChild(contentArea);
    let popUp = createPopUp();
    mainContent.appendChild(popUp);
    togglePopUp();
    closePopUp();
}

// export default renderHeader;
export default renderPage;
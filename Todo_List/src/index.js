import renderPage from "./modules/renderPage";
import ToDo from "./modules/createToDo";



renderPage();

let newToDo = ToDo("NoTitle","NoDescription","Probably Tomorrow","NoPriority");
newToDo.printToDo();

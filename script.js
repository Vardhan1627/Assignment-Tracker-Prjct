function getAssignments(){
return JSON.parse(localStorage.getItem("assignments")) || [];
}

function saveAssignments(assignments){
localStorage.setItem("assignments",JSON.stringify(assignments));
}
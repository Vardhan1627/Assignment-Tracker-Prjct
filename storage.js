function getAssignments(){
return JSON.parse(localStorage.getItem("assignments")) || [];
}

function saveAssignments(data){
localStorage.setItem("assignments",JSON.stringify(data));
}

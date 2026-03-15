let assignments=getAssignments();

let total=assignments.length;

let completed=assignments.filter(a=>a.completed).length;

let pending=total-completed;

document.getElementById("total").innerText=total;

document.getElementById("completed").innerText=completed;

document.getElementById("pending").innerText=pending;
function addAssignment(){

let title=document.getElementById("title").value;
let subject=document.getElementById("subject").value;
let dueDate=document.getElementById("dueDate").value;
let priority=document.getElementById("priority").value;

let assignments=getAssignments();

assignments.push({
title,
subject,
dueDate,
priority,
completed:false
});

saveAssignments(assignments);

displayAssignments();
}

function displayAssignments(){

let list=document.getElementById("assignmentList");
list.innerHTML="";

let assignments=getAssignments();

assignments.forEach((a,index)=>{

let li=document.createElement("li");

li.innerHTML=`
${a.title} | ${a.subject} | ${a.dueDate} | ${a.priority}

<div>
<button onclick="complete(${index})">✔</button>
<button onclick="remove(${index})">❌</button>
</div>
`;

if(a.completed){
li.classList.add("completed");
}

list.appendChild(li);

});
}

function complete(index){

let assignments=getAssignments();
assignments[index].completed=true;

saveAssignments(assignments);
displayAssignments();

}

function remove(index){

let assignments=getAssignments();

assignments.splice(index,1);

saveAssignments(assignments);

displayAssignments();

}

displayAssignments();
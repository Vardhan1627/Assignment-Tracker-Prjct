let assignments=getAssignments();

displayAssignments();

function addAssignment(){

let title=document.getElementById("title").value;
let subject=document.getElementById("subject").value;
let dueDate=document.getElementById("dueDate").value;
let priority=document.getElementById("priority").value;
let notes=document.getElementById("notes").value;

if(title==""||subject==""){
alert("Enter assignment details");
return;
}

assignments.push({
title,
subject,
dueDate,
priority,
notes,
completed:false
});

saveAssignments(assignments);

displayAssignments();

}

function displayAssignments(){

let list=document.getElementById("assignmentList");

list.innerHTML="";

assignments.forEach((a,index)=>{

let li=document.createElement("li");

li.innerHTML=`

<div>

<b>${a.title}</b>

<p>Subject: ${a.subject}</p>

<p>${daysLeft(a.dueDate)}</p>

<p class="priority-${a.priority.toLowerCase()}">Priority: ${a.priority}</p>

</div>

<div class="buttons">

<button class="complete" onclick="complete(${index})">✔</button>

<button class="delete" onclick="removeAssignment(${index})">✖</button>

</div>

`;

list.appendChild(li);

});

}

function complete(index){

assignments[index].completed=true;

saveAssignments(assignments);

displayAssignments();

}

function removeAssignment(index){

assignments.splice(index,1);

saveAssignments(assignments);

displayAssignments();

}

function searchAssignments(){

let input=document.getElementById("search").value.toLowerCase();

let list=document.getElementById("assignmentList").children;

for(let item of list){

let text=item.innerText.toLowerCase();

item.style.display=text.includes(input)?"":"none";

}

}

document.getElementById("darkToggle").onclick=function(){

document.body.classList.toggle("dark");

};
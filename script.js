<<<<<<< HEAD
function getAssignments(){
return JSON.parse(localStorage.getItem("assignments")) || [];
}

function saveAssignments(assignments){
localStorage.setItem("assignments",JSON.stringify(assignments));
=======
function addAssignment(){

    let title=document.getElementById("title").value;
    let dueDate=document.getElementById("dueDate").value;

    if(title=="" || dueDate==""){
        alert("Please enter assignment details");
        return;
    }

    let li=document.createElement("li");

    li.innerHTML=`
        ${title} - ${dueDate}
        <button class="delete" onclick="deleteAssignment(this)">Delete</button>
    `;

    document.getElementById("assignmentList").appendChild(li);

    document.getElementById("title").value="";
    document.getElementById("dueDate").value="";
}

function deleteAssignment(button){
    button.parentElement.remove();
>>>>>>> 7ecfe03862b5f269a107af7a5de863d2063bf242
}
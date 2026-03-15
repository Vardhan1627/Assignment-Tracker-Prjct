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
}
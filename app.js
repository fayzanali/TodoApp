function reset()
{
    document.getElementById('todo').value=""
}

function create(practice)
{
    if(document.getElementById('todo').value =="")
    {
        alert("You can not leave field empty")
    }
    else
    {

    var button = document.createElement("button")
    var button1 = document.createElement("button")
    var table=document.getElementById(practice)
    var row = table.insertRow() 
    var cell2 = row.insertCell()
    var cell3 = row.insertCell()
    button.innerHTML="Edit"
    button1.innerHTML="Delete"
    
 button.setAttribute("class","btn btn-primary")
 button.setAttribute("onclick","edit(this)")
 button1.setAttribute("class","btn btn-danger")
 button1.setAttribute("onclick","deleteItem(this)")
 cell2.setAttribute("scoped","row")
 cell2.innerHTML = document.getElementById('todo').value
 cell3.appendChild(button)
 cell3.appendChild(button1)

 
 reset()
    }
}


function deleteItem(index)
{
index.parentNode.parentNode.remove()
}

function edit(index)
{
    index.parentNode.parentNode.childNodes[0].innerText=prompt("Enter new to do",index.parentNode.parentNode.childNodes[0].innerText)

}

function deleteAll()
{
    var tb = document.getElementById('practice');
    while(tb.rows.length > 1) {
    tb.deleteRow(1);
  }
}
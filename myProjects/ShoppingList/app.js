// DOM variables
var form = document.getElementById('addForm');
var itemList = document.getElementById('items'); 
var filter = document.getElementById('filter'); 
var selectAll = document.getElementById('selectAll'); 
var removeSel = document.getElementById('removeSel')

// Event Listeners
form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem); 
filter.addEventListener('keyup',filterItem); 
selectAll.addEventListener('click', selectAllItems); 
removeSel.addEventListener('click', removeSelItems); 

// selectAll function
function selectAllItems(e){
  e.preventDefault(); 
  var items = itemList.getElementsByTagName('li');  
  Array.from(items).forEach(function(item){
    var checkBox = item.firstElementChild;
    if(checkBox.checked == false){
        checkBox.checked = true; 
    }
  });
}

// removeSel function
function removeSelItems(e){
    e.preventDefault(); 
    var items = itemList.getElementsByTagName('li');  
    if(confirm('Are you sure?')){
        Array.from(items).forEach(function(item){
            var checkBox = item.firstElementChild;
            if(checkBox.checked == true){    
             itemList.removeChild(item); 
            }
          });
    }
}

// Add Function
function addItem(e){
    e.preventDefault(); 
    // Get user input
    var newItem = document.getElementById('item').value; 
    // Create new li to put into list 
    var li = document.createElement('li'); 
    li.className = 'list-group-item'; 
    // Append user input into li
    li.appendChild(document.createTextNode(newItem)); 

    // Create delete button for li
    var del = document.createElement('button'); 
    del.className = 'mr-2 btn btn-danger btn-sm float-right delete';
    del.appendChild(document.createTextNode('X')); 
    
    // Create checkbox 
    var check = document.createElement('input');
    check.type = 'checkbox'; 
    check.className = 'float-right checkMe'; 
   
    li.appendChild(check);
    li.appendChild(del);

    // Append new li to list
    itemList.appendChild(li); 
}

// Remove Function
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement; 
            itemList.removeChild(li); 
        }
    }
}

// Filter Function
function filterItem(e){
    // Convert user input into lowercase
    var text = e.target.value.toLowerCase(); 
    // Get all elements from itemList
    var items = itemList.getElementsByTagName('li'); 

    // Convert items to array
    Array.from(items).forEach(myFunction); 

    function myFunction(item){
        var itemName = item.firstChild.textContent; 
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block'; 
        }
        else{
            item.style.display = 'none';
        }
    }
}
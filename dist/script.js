let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit Event
form.addEventListener('submit', addItem);
//delete item

//filter event
filter.addEventListener('keyup', filterItem);

// Add item
function addItem(e) {
     e.preventDefault();

//get input value
let newitem = document.getElementById('dig').value;

//create new li element
let li = document.createElement('li');
//add class
li.className = 'list-group-item';
//add text node with input value
li.appendChild(document.createTextNode(newitem));

//create 

itemList.appendChild(li);
document.getElementById('dig').value = " ";

}
//remove item 
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//filter item
function filterItem(e){
    //convert to lowercase
    var text = e.target.value.toLowerCase();
    // get itemlist
    let items = itemList.getElementsByTagName('li');
    // convert iyt into array
    Array.from(items).forEach(function(items){
        var itemName = items.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            items.style.display = 'block';
        }else{
            items.style.display = 'none';
        }
    });
}
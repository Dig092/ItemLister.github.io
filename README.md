# ItemLister.github.io
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Add Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>

    <title>Item lister</title>
    <style>
        li{
            border: 2px solid grey;
            margin: 1px;
            padding-left: 2px;
            padding: 1px;
        }
    </style>
</head>

<body class="bg-gray-200">
    <div class="container lg:w-full xl:w-full mx-auto px-4 " id="main">
        <div class="header flex justify-between bg-green-600 mt-4 mb-4 w-full position-relative">
            <div class="float-left px-3 py-3 ">
                <h1 class="text-3xl font-bold text-white">Item Lister</h1>
            </div>
            <div class="input px-3 py-3">
                <input class="px-4 py-1 w" type="text" placeholder="Search Items..." id="filter">
            </div>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-8">
            <div class="mb-8">
                <h2 class="text-2xl font-bold mb-4">Add Items</h2>
                <form id="addForm" class="flex">
                    <input type="text" id="dig" class="border rounded py-2 px-3 w-full">
                    <input class="bg-indigo-500 text-white ml-2 py-2 px-4 rounded hover:bg-indigo-600"
                        id="btn" type="submit">
                </form>
            </div>
            <div>
                <h2 class="text-2xl font-bold mb-4">Items</h2>
                <ul id="items" class="list-group list-none">
                    <li class="list-group-item " id="item-1">Your Items</li>
                    
                </ul>
                <br>
                <button class="btn bg-indigo-500 text-white py-2 px-4 block hover:bg-indigo-400 w-full"
                    id="button">Done</button>
            </div>
        </div>

    </div>

    <script>
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
    </script>
</body>

</html>
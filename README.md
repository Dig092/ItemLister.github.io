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

    <script src="script.js"></script>
</body>

</html>

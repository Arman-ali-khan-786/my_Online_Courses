var list = document.getElementById('todo-list')
var inputBox = document.getElementById('list-box')
var addbtn = document.getElementById('add-item')
var btnUpdate = document.getElementById('update-item')
var btnRemove = document.getElementById('remove-item')

var currentInputValue= ''
inputBox.addEventListener('input' , function(e){
    console.log(e.target.value)
    currentInputValue = e.target.value;
})
inputBox.addEventListener('keyup' , function(e){
    if(e.keyCode == 13){
        addListItem();
    }
} )

function createNewNode(){
    var newList = document.createElement('li');
    var textnde = document.createTextNode(currentInputValue)
    newList.appendChild(textnde)
    return newList
}
function addListItem(){
    if(currentInputValue !== undefined && currentInputValue !== null && currentInputValue !== ''){
        list.append(createNewNode())
        inputBox.value = ''
        currentInputValue = ''
    }else{
        alert("Enter a valid TODO item")
    }
}
addbtn.addEventListener('click' , createTODOitemAtBackend)

btnUpdate.addEventListener('click', function(){
    if(currentInputValue !== undefined && currentInputValue !== null && currentInputValue !== ''){
        var firstelement = list.firstChild
        var newListElement = createNewNode()
        list.replaceChild(newListElement, firstelement)
        inputBox.value = ''
        currentInputValue = ''
    }else{
        alert("Enter a valid TODO item")
    }
})

btnRemove.addEventListener('click' , function(){
    var firstelement = list.firstChild
    list.removeChild(firstelement)

})

function CreatetodoDynamically(title){
    var newList = document.createElement('li');
    var textnde = document.createTextNode(title)
    newList.appendChild(textnde)
    return newList
}

function getTODOListfromBackend(){
    var http = new XMLHttpRequest();
    http.onreadystatechange = function (){
        if(this.readyState === 4){
           if(this.status === 200){
               var response = JSON.parse(this.responseText)
               for(var i = 0 ; i < response.length ; i++){
                   //console.log(response[i].id,response[i].title)
                   console.log(CreatetodoDynamically(response[i].title))
                   list.appendChild(CreatetodoDynamically(response[i].title))
               }
           }else{
               alert("called failed")
           }
        }

    }
    http.open('GET','https://jsonplaceholder.typicode.com/todos', true) // to make it asynchronus ----> true
    http.send(); // to trigger the function
}
getTODOListfromBackend()

function createTODOitemAtBackend(){
    var http = new XMLHttpRequest();
    http.open('POST' ,'https://jsonplaceholder.typicode.com/todos', true)
    http.onreadystatechange = function (){
        if(this.readyState === 4){
           if(this.status === 201){
               var response = JSON.parse(this.responseText)
              list.appendChild(CreatetodoDynamically(currentInputValue))
               console.log("item added")
            }
            else{
               alert("called failed")
           }
        }
    }
    var obj = JSON.stringify({
        "userId" : 1,
        "id":    1,
        "title" : currentInputValue,
        "completed" : false
    })
    http.send(obj);
}
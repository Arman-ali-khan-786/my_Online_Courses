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
addbtn.addEventListener('click' , addListItem)

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

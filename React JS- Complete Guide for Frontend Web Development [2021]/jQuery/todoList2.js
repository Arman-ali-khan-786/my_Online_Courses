$(document).ready(function(){
    var list = $('#todo-list')  // selecting using jQuery
    var inputBox = $('#list-box')
    var btnUpdate = document.getElementById('update-item')
    var btnRemove = document.getElementById('remove-item')

    var currentInputValue= ''
    inputBox.on({
        'input' : function(e){
            console.log(e.target.value)
            currentInputValue = e.target.value;
        },
        'keyup' : function(e){
            if(e.keyCode == 13){
                addListItem();
            }
        }
    })

    function createNewNode(){
        var newList = document.createElement('li');
        var textnde = document.createTextNode(currentInputValue)
        newList.appendChild(textnde) 
        return newList
    }
    function addListItem(){
        if(currentInputValue !== undefined && currentInputValue !== null && currentInputValue !== ''){
            list.append(createNewNode())  // jQuery has append instead of appendchild
            clearInput()
        }else{
            alert("Enter a valid TODO item")
        }
    }
    $('#add-item').click() // event handling by using jQuery 

    btnUpdate.addEventListener('click', function(){
        if(currentInputValue !== undefined && currentInputValue !== null && currentInputValue !== ''){
            var firstelement = list.firstChild
            var newListElement = createNewNode()
            $('li:first').replace(newListElement, firstelement)
        }else{
            alert("Enter a valid TODO item")
        }
    })

    btnRemove.addEventListener('click' , function(){
        $('li:first').remove()

    })

    function CreatetodoDynamically(title){
        var newList = document.createElement('li');
        var textnde = document.createTextNode(title)
        newList.appendChild(textnde)
        return newList
    }
    $.get("https://jsonplaceholder.typicode.com/todos",function (data,status){
                    //var response = JSON.parse(this.responseText)
                    var response = data;
                    for(var i = 0 ; i < response.length ; i++){
                       // console.log(response[i].id,response[i].title)
                       // console.log(CreatetodoDynamically(response[i].title))
                        list.append(CreatetodoDynamically(response[i].title))
                    }
     });

    // function getTODOListfromBackend(){
    //     var http = new XMLHttpRequest();
    //     http.onreadystatechange = function (){
    //         if(this.readyState === 4){
    //         if(this.status === 200){
    //             var response = JSON.parse(this.responseText)
    //             for(var i = 0 ; i < response.length ; i++){
    //                 //console.log(response[i].id,response[i].title)
    //                 console.log(CreatetodoDynamically(response[i].title))
    //                 list.append(CreatetodoDynamically(response[i].title))
    //             }
    //         }else{
    //             alert("called failed")
    //         }
    //         }

    //     }
    //     http.open('GET','https://jsonplaceholder.typicode.com/todos', true) // to make it asynchronus ----> true
    //     http.send(); // to trigger the function
    // }
    // getTODOListfromBackend()
    function clearInput(){
        inputBox.val('')
        currentInputValue = ''
    }

    // function createTODOitemAtBackend(){
    //     var http = new XMLHttpRequest();
    //     http.open('POST' ,'https://jsonplaceholder.typicode.com/todos', true)
    //     http.onreadystatechange = function (){
    //         if(this.readyState === 4){
    //         if(this.status === 201){
    //             var response = JSON.parse(this.responseText)
    //             list.append(CreatetodoDynamically(currentInputValue))
    //             clearInput()
    //             console.log("item added")
    //             }
    //             else{
    //             alert("called failed")
    //                   }
    //         }
    //         }
    //     }
    // }
        var obj = {
            "userId" : 1,
            "id":    1,
            "title" : currentInputValue,
            "completed" : false
        }
        $.post('https://jsonplaceholder.typicode.com/todos',obj,function(data,status){
            var response = data
            list.append(CreatetodoDynamically(response.id, currentInputValue))
            clearInput()

        })
})

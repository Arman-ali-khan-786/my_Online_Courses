// this is Promise object creation

const postListPromise = new Promise((resolve, reject) => {
    console.log("Sending List call")
    $.get('https://jsonplaceholder.typicode.com/posts', (data) => {
        //console.log("Get Post List Response => ", data)
        resolve(data);
        //resolve(200);
    }).fail((err)=>{
       // console.log(err)    or
       reject(new Error(`Call failed for GET Post List Request with status ${err.status}`))
    })

})

// chaining
 
const postDetailsPromise =(data) => new Promise((resolve, reject)=>{
    console.log("Sending Details call")
        $.get(`https://jsonplaceholder.typicode.com/psts/${data[0].id}`, (data) => {
            resolve(data)
        }).fail(err =>{
            reject(new Error(`Details call Failed and status ${err.status}`))
        })
    })


// to know is the responce is success or failed by using then() and catch() method
postListPromise
.then(postDetailsPromise)
.then((response) => {
    console.log("Call Success");
    console.log('Then Response =>',response)
})
.catch((err)=>{
    console.log("Call Failed")
    console.log("Catch Error => ",err)
})
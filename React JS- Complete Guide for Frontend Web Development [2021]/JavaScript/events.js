var btn = document.getElementById('submit-btn')
var bg =  document.getElementById('body')
var heading = document.getElementById('main-heading')
var sidebar = document.getElementById("sidebar")
var baricon = document.getElementById("font")
function btnclick(){
    bg.style.backgroundColor = "rgb(" + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) + ")"
    heading.classList.add('big')
    setTimeout(function(){
        heading.classList.remove('big')
    },1500)
}
// btn.onclick = btnclick (  method 1)
btn.addEventListener('click' , btnclick)
baricon.addEventListener('click' , function(){
    if(sidebar.classList.contains('show')){
        sidebar.classList.remove('show')
        sidebar.classList.add('hide')
    }else{
        sidebar.classList.remove('hide')
        sidebar.classList.add('show')
    }
})
var btninc = document.getElementById('leftbtn')
var btndes = document.getElementById('rightbtn')
var msg = document.getElementById('msg')
var initialmsgsize = msg.style.fontSize
initialmsgsize = parseInt(initialmsgsize.substr(0 , (initialmsgsize.length-2)))
btninc.addEventListener('click', function(){
    initialmsgsize+=10
    msg.style.fontSize = parseInt(initialmsgsize)+"px"
})
btndes.addEventListener('click', function(){
    initialmsgsize-=10
    msg.style.fontSize = parseInt(initialmsgsize)+"px"
})


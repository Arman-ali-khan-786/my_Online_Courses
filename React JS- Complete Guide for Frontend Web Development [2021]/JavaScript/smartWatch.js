// Showing time
var showing = document.getElementById('time')
function showtime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "am";
    if(h>=12 && h<=24){
        h=h-12;
        session = "pm"
    }
    if(session === 'pm' && h>=12){
        session = "am"
    }
    h = (h<10)? "0" + h : h;
    m = (m<10)? "0" + m : m;
    s = (s<10)? "0" + s : s;
    var time = h + ":" + m + ":" + s +" "+ session;
    showing.innerText = time
    setInterval(showtime, 1000 )
}
showtime();

// changing skin color

var watch = document.getElementById('watch-img')
var blue = document.getElementById('blue')
blue.addEventListener('click' , ()=> {
    watch.src = "blueSkin.png"
})
var red = document.getElementById('red')
red.addEventListener('click' , ()=> {
    watch.src = "redSkin.png"
})
var purple = document.getElementById('purple')
purple.addEventListener('click' , ()=> {
    watch.src = "purpleSkin.png"
})
var black = document.getElementById('black')
black.addEventListener('click' , ()=> {
    watch.src = "blackSkin.png"
})
var pink = document.getElementById('pink')
pink.addEventListener('click' , ()=> {
    watch.src = "pinkSkin.png"
})

// features funtion
 var heartRate = document.getElementById('hb')
 var Time = document.getElementById('ftime')
 heartRate.addEventListener('click', ()=> {
     alert('hi')

 })
 time.addEventListener('click', ()=> {
    showtime()

})
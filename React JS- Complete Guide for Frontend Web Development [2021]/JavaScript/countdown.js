var countdownele = document.getElementById("countdown")
var initialcount = countdownele.innerHTML;
var backgroundImgele = document.getElementById('bg-img')
var interval = setInterval(function(){
    countdownele.innerHTML = initialcount>0 ? initialcount-=1 : 0
    var bg_path = initialcount%2 === 0 ? 'https://cdn.pixabay.com/photo/2020/05/04/10/21/background-5128586_960_720.jpg':'https://wallpaperaccess.com/full/187161.jpg'
    backgroundImgele.src = bg_path;
    countdownele.style.fontSize = initialcount*10+'px'
    backgroundImgele.style.width = initialcount*10+'%'
    console.log("interval")
    if(initialcount<=0){
        clearInterval(interval);
        alert("all gone u should go as well")
    }
    
}, 1000);
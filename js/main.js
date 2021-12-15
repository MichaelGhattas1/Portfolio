$(document).ready ( function(){
    var mixer = mixitup('.box-list')
})
let CounterOffset = $(".skills").offset().top 
let AboutOffset = $("#About").offset().top
console.log(AboutOffset)
$(window).scroll(function(){
    let x = $(window).scrollTop()
    if (x > AboutOffset )
    {
        $("#toTop").addClass('d-flex')
        $("#toTop").removeClass('d-none')
    }
    if (x < AboutOffset )
    {
        $("#toTop").addClass('d-none')
        $("#toTop").removeClass('d-flex')
    }
    if(x > CounterOffset-200) 
    {
     let x=  setInterval(() => {
         if(count<=97)
         {
            welcome("#htmlCounter")
         }
         else clearInterval(x)  
        }, 200);
    }
    if(x > CounterOffset-200) 
    {
     let x=  setInterval(() => {
         if(count<=95)
         {
            welcome("#cssCounter")
         }
         else clearInterval(x)  
        }, 200);
    }
    if(x > CounterOffset-200) 
    {
     let x=  setInterval(() => {
         if(count <=95 )
         {
            welcome("#jsCounter")
         }
         else clearInterval(x)  
        }, 200);
    }
    if(x > CounterOffset-200) 
    {
     let x=  setInterval(() => {
         if(count<=92)
         {
            welcome("#ngCounter")
         }
         else clearInterval(x)  
        }, 200);
    }
})
let count = 0
function welcome (x){
    count ++
    $(x).html(count)
}

$('#toTop').click(function(){
    $(window).scrollTop(0)
})
particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
  particlesJS.load('particles-j', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
  particlesJS.load('particles-s', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
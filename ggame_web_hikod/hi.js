window.addEventListener('scroll',function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky',window.ScrollY > 0);
});
 

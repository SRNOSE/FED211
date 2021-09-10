$(document).ready(function (){
    $('.navbar-toggleBtn').click(function (){
        $('.lnb').show();
        $('.gradeexit').show();
        $('.navbar-toggleBtn').hide();
    });
    $('.gradeexit').click(function (){
        $('.gradeexit').hide();
        $('.lnb').hide();
        $('.navbar-toggleBtn').show();
    });
});




// $(document).ready(function (){
//     $('.total').click(function (){
//         $('.nav-menu').show();
//         $('.close').show();
//     });
//     $('.close').click(function (){
//         $('.nav-menu').hide();
//         $('.close').hide();
//     });
// });



// const toggleBtn = document.querySelector('.navbar-toggleBtn');
// const lnb = document.querySelector('.lnb');
// const icons = document.querySelector('.navbar-icons');

//     toggleBtn.addEventListener('click',() => {
//     lnb.classList.toggle('active');
   
// });













// $(document).ready(function(){
//     $('.total').click(function(){
//         $(this).toggleClass('on');

//     });
// });
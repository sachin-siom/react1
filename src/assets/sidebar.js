import $ from 'jquery';


// $(document).ready(function () {
//     $('#sidebarCollapse').on('click', function () {
//         $('#sidebar').toggleClass('active');
//     });
    
// });

$(document).ready(function () {
    if ($(window).width() > 768) {
        $('#sidebar').addClass('active');
    }
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});
$('#content-menu').on('click', () => {
    $('#content-menu').css('display', 'none');
    $('#content-close').fadeIn();
    $('#nav-right').fadeIn();
})

$('#content-close').on('click', () => {
    $('#content-menu').fadeIn(1500);
    $('#content-close').css('display', 'none');
    $('#nav-right').fadeOut();
})
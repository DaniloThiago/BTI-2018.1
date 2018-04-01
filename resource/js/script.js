$('#menu a').click(function (e) {
    let name = $(this).data('name');
    if (!name) return;
    $('.body').removeClass('active');
    $('#' + name).addClass('active');
});
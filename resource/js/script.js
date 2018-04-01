$('#menu a').click(function (e) {
    let name = $(this).data('name');
    if (!name) return;
    $('.materias').removeClass('active');
    $('#' + name).addClass('active');
});
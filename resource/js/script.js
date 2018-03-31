$('#menu a').click(function (e) {
    $('.body').removeClass('active');
    let id = $(e.target.dataset)[0].sem;
    $('#' + id).addClass('active');
});
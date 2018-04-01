$('#menu a').click(function (e) {
	let name = $(this).data('name');
	$(this).blur();
	if (!name) return;
	$('.materias').removeClass('active');
	$('#' + name).addClass('active');
});
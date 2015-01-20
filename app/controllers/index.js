$.scrollableView.addEventListener('scroll', function(e){
	$.pageNumber.text = $.scrollableView.currentPage;
});

$.index.open();

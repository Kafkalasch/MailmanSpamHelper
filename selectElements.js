var setDiscard = function(searchText){
	$("td").filter(function(){return $(this).text() === searchText;}).each(function(){
		$(this).parent().next().find("INPUT:last").attr("checked", true);
	});
};

var addToSenderFilters = function(endText){
	$("td").filter(function(){return $(this).text().endsWith(endText);}).each(function(){
		$(this).find("INPUT").attr("checked", true);
	});
};

setDiscard("Action to take on all these held messages:");
addToSenderFilters("to one of these sender filters:");

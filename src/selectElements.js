
var setDiscard = function(searchText){
    const filteredTds = getTdsMatchingText(searchText);
    filteredTds.each(
        function(idx, element){
		    $(element).parent().next().find("INPUT:last").attr("checked", true);
        }
    );
};

const getTdsMatchingText = function(searchText){
    const filteredTds = $("td")
        .filter(
            (idx, element) => $(element).text() === searchText
        );
    return filteredTds;
}

var addToSenderFilters = function(endText){
    const filteredTds = getTdsEndingWithText(endText);
    filteredTds.each(
        (idx, element) => $(element).find("INPUT").attr("checked", true)
    );
};

const getTdsEndingWithText = function(endText){
    const filteredTds = $("td")
        .filter(
            (idx, element) => {
                return $(element).text().endsWith(endText)
            }
        );
    return filteredTds;
}

setDiscard("Action to take on all these held messages:");
setDiscard("Was soll mit diesen Nachrichten geschehen?");

addToSenderFilters("to one of these sender filters:");
addToSenderFilters("dem Sender-Filter hinzufügen?");


$(document).ready(function(){
    responsiveTable();
});

function responsiveTable() {
    $("table.content-table").each(function(){
        var table = $(this);
        var headers = table.find("thead th");

        table.find("tbody td").each(function(index){
            var colIndex = index % headers.length;
            var headerText = headers.eq(colIndex).text();
            var span = $("<span>", { "class": "mobile-th", text: headerText });
            $(this).prepend(span);
        });
    });
}

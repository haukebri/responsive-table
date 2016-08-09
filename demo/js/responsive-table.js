$(document).ready(function(){
    responsiveTable();
});

function responsiveTable() {
    var nth = 1;
    $(".content-table td").each(function(){
        var that  = $(this);
        var table = that.closest('table');
        var headContent = table.find("th:nth-child("+nth+")").html();
        var maxNth = table.find("th").length;

        that.prepend('<span class="mobile-th">' + headContent + "</span>");

        // count th's
        if (nth == maxNth) {
            nth = 1;
        } else {
            nth++;
        }
    });
}
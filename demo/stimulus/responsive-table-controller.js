/**
 * ResponsiveTableController — A Stimulus controller that makes HTML tables responsive.
 *
 * Stimulus embraces HTML-first design: the table is written as plain server-rendered
 * markup, and the controller reads <thead> labels to inject <span class="mobile-th">
 * elements into each <td> — the same approach as the jQuery version.
 *
 * Usage:
 *   <table data-controller="responsive-table" class="content-table">
 *     <thead>…</thead>
 *     <tbody>…</tbody>
 *   </table>
 */
const { Application, Controller } = window.Stimulus || Stimulus;

class ResponsiveTableController extends Controller {
    connect() {
        this.makeResponsive();
    }

    makeResponsive() {
        var headers = Array.from(this.element.querySelectorAll("thead th")).map(function (th) {
            return th.textContent.trim();
        });

        this.element.querySelectorAll("tbody td").forEach(function (td) {
            if (td.querySelector(".mobile-th")) return;

            var colIndex = Array.from(td.parentElement.children).indexOf(td);
            var span = document.createElement("span");
            span.className = "mobile-th";
            span.textContent = headers[colIndex] || "";
            td.insertBefore(span, td.firstChild);
        });
    }
}

const application = Application.start();
application.register("responsive-table", ResponsiveTableController);

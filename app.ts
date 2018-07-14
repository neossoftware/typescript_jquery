/// <reference path="node_modules/@types/jquery/index.d.ts" />
class InvoiceTemplate {
    constructor(element: HTMLElement) {
        $(function () {
            $.get("template.html", function (data) {
                $(element).append(data);
            });
        });
    }
}
 
window.onload = () => {
    var el = document.getElementById('content');
    var example = new InvoiceTemplate(el);
 
};
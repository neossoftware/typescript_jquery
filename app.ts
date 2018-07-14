/// <reference path="node_modules/@types/jquery/index.d.ts" />
class InvoiceTemplate {
    constructor(element: HTMLElement) {
        $(function () {
            $.get("template.html", function (data) {
                $(element).append(data);
            });
        });
    }

     onClickButton() {
        console.log('Boton presionado');
    }
}
 
window.onload = () => {
   
    //var el = document.getElementById('content');
    let el = $('#content')[0];
    var example = new InvoiceTemplate(el);
    $('#otro').append("cadena");
    $('#btnAceptar').on("click", function() {
       example.onClickButton();
    });
   
 
};
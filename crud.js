/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var objPersona= {
    0:{id:0,nombre:'gianmarco',edad:24,peso:'55kg'},
    1:{id:1,nombre:'Flor',edad:24,peso:'55kg'},
    2:{id:3,nombre:'Pedro',edad:17,peso:'50kg'},
    3:{id:4,nombre:'Juan',edad:18,peso:'65kg'},
    
};
$(document).ready(function (){
    cargarObjeto(objPersona);
});
function cargarObjeto(data){
    onResponseDataTable(data);
    cargarDataTable();
}
function crearObjeto(){
    var objeto=objPersona;
    var nombre=$("#txtNombre").val();
    var edad=$("#txtEdad").val();
    var peso=$("#txtPeso").val();
    var objTmp={
        nombre:nombre,
        edad:edad,
        peso:peso
    }
    objPersona[objPersona.size]=objTmp;
    
    cargarObjeto(objPersona);
}
function onResponseDataTable(data){
    $("#dataList").empty();
     var cuerpo_total = '';
    var cuerpo = '';
    var cabeza = '<table id="dataTable" class="table table-striped table-bordered"><thead>' +
            " <tr>" +
            "<th style='text-align:center;'>Nombre</th>" +
            "<th style='text-align:center;'>Edad</th>" +
            "<th style='text-align:center;'>Peso</th>" +
            "<th style='text-align:center;'>Acciones</th>" +
            "</tr>" +
            "</thead>";
    $.each(data, function (index, item) {

        cuerpo = "<tr>" +
                "<td style='text-align:center;'>" + item.nombre + "</td>" +
                "<td style='text-align:center;'>" + item.edad + "</td>" +
                "<td style='text-align:center;'>" + item.peso + "</td>" +
               "<td style='text-align:center;'>" +
                "<a href='#' onclick='cargarDivGetBien(" + item.id + ")'><b><i class='fa fa-edit' style='color:#E8BA2F;'>editar</i><b></a>&nbsp;\n" +
                "<a href='#' onclick='confirmarDeleteBien(" + item.id + ", \"" + item.nombre + "\")'><b><i class='fa fa-trash-o' style='color:#cb2a2a;'>eliminar</i><b></a>" +
                "</td>" +
                "</tr>";
        cuerpo_total = cuerpo_total + cuerpo;
    });

    var pie = '</table>';
    var html = cabeza + cuerpo_total + pie;
    $("#dataList").append(html);
}
function cargarDataTable(){
    $('#dataTable').dataTable({
                    "language": {
                        "sProcessing": "Procesando...",
                        "sLengthMenu": "Mostrar _MENU_ registros",
                        "sZeroRecords": "No se encontraron resultados",
                        "sEmptyTable": "Ning\xfAn dato disponible en esta tabla",
                        "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                        "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                        "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
                        "sInfoPostFix": "",
                        "sSearch": "Buscar:",
                        "sUrl": "",
                        "sInfoThousands": ",",
                        "sLoadingRecords": "Cargando...",
                        "oPaginate": {
                            "sFirst": "Primero",
                            "sLast": "Último",
                            "sNext": "Siguiente",
                            "sPrevious": "Anterior"
                        },
                        "oAria": {
                            "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                        }
//          "scrollY": "200px",
//        "dom": "frtiS",
//        "deferRender": true
                    }
                });
}
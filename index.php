<!DOCTYPE html>
<html>
    <head>
        <title>crud js</title>
        <script src="jquery.js" type="text/javascript"></script>
        <script src="bootstrap.min.js" type="text/javascript"></script>
        <link href="bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <link href="animate.css" rel="stylesheet" type="text/css"/>
        <link href="glyphicons.css" rel="stylesheet" type="text/css"/>

        <script src="assets/datatables/jquery.dataTables.min.js" type="text/javascript"></script>
        <script src="assets/datatables/dataTables.bootstrap.js" type="text/javascript"></script>
        <link href="assets/datatables/jquery.dataTables.min.css" rel="stylesheet" type="text/css"/>
        <script src="crud.js" type="text/javascript"></script>
    </head>
    <body>
        <div class="container-fluid">
        <div class="row">
            <div class="panel-heading">
                <form class="form-inline">
                    <div class="row">
                        <div class="form-group col-md-6 ">
                            <label>Nombre</label>
                            <div class="input-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <input type="text" id="txtNombre" name="txt_codigo" class="form-control" value="" maxlength="8"/>
                            </div>
                            
                        </div>
                        <div class="form-group col-md-6">
                            <label>Edad</label>
                            <div class="input-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <input type="text" id="txtEdad" name="txtEdad" class="form-control" required="" aria-required="true" value=""/>
                            </div>
                           
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6 ">
                            <label>Peso</label>
                            <div class="input-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <input type="text" id="txtPeso" name="txt_codigo" class="form-control" value="" maxlength="8"/>
                            </div>
                            
                        </div>
                        <div class="form-group col-md-6">
                            <label>&nbsp;</label>
                             <div class="input-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <button type="button" onclick="crearObjeto()" value="enviar" name="env" id="env" class="btn btn-info w-sm " style="border-radius: 0px;"><i class="fa fa-send-o"></i>&ensp;Enviar</button>&nbsp;&nbsp;
                             </div>
                           
                        </div>
                    </div>
                </form>
            </div>
            <div class="panel panel-body">
                <div class="col-md-12">
                    <div id="dataList">

                    </div>
                </div>
            </div>
        </div>
        </div>
    </body>

</html>
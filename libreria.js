var personas =  new Array();

function RefrescarCaptcha(){

  var url1 = $('#capch').attr('src');
  console.log(url1);
  let base64image1 = getBase64Image(url1).then(function(base64image) {
    document.getElementById('capch')
    .setAttribute(
      'src', 'data:image/png;base64,'+base64image1
      );

  }, function(reason) {

  });

  //  var url2 = $('#capch2').attr('src');
  // let base64image2 = getBase64Image(url2).then(function(base64image) {
  //   document.getElementById('capch2')
  //   .setAttribute(
  //     'src', 'data:image/png;base64,'+base64image2
  //     );

  // }, function(reason) {

  // });

  //  var url3 = $('#capch3').attr('src');
  // let base64image3 = getBase64Image(url3).then(function(base64image) {
  //   document.getElementById('capch3')
  //   .setAttribute(
  //     'src', 'data:image/png;base64,'+base64image3
  //     );

  // }, function(reason) {

  // });

}


$(document).ready(function () {
    recargarCapcha(); 
    $('#frm-formulario').validator().on('submit', function (e) {
        if (e.isDefaultPrevented()) {
            $('#modalMensajeRecibido').html("Existen campos obligatorios que no han sido llenados");
            $('#modalMensajeInformativo').modal({
                show: 'true'
            });
        }
        var Ctipodoc = CryptoJS.AES.encrypt(JSON.stringify($('#cbo_tipodoc').val()), "N9tJJ6DyRFbM6jcndRtG", {format: CryptoJSAesJson}).toString();
        $('#cbo_tipodoc').val('');
        $('#hdd_tipodoc').val(Ctipodoc);
        var Cnombres = CryptoJS.AES.encrypt(JSON.stringify($('#txt_nombres').val()), "N9tJJ6DyRFbM6jcndRtG", {format: CryptoJSAesJson}).toString();
        $('#txt_nombres').val(Cnombres);
        var Capepat = CryptoJS.AES.encrypt(JSON.stringify($('#txt_apepat').val()), "N9tJJ6DyRFbM6jcndRtG", {format: CryptoJSAesJson}).toString();
        $('#txt_apepat').val(Capepat);
        var Capemat = CryptoJS.AES.encrypt(JSON.stringify($('#txt_apemat').val()), "N9tJJ6DyRFbM6jcndRtG", {format: CryptoJSAesJson}).toString();
        $('#txt_apemat').val(Capemat);
        var Cdocumento = CryptoJS.AES.encrypt(JSON.stringify($('#txt_documento').val()), "N9tJJ6DyRFbM6jcndRtG", {format: CryptoJSAesJson}).toString();
        $('#txt_documento').val(Cdocumento);
        var Cubigeo = CryptoJS.AES.encrypt(JSON.stringify($('#txt_ubigeo').val()), "N9tJJ6DyRFbM6jcndRtG", {format: CryptoJSAesJson}).toString();
        $('#txt_ubigeo').val(Cubigeo);
    });
    

    //Mensaje al pulsar F5
    document.onkeydown = function (e) {
    if (e.keyCode === 116) {
	var str = "¿Quiere volver a cargar el sitio web?";
    var result = str.bold();
    return confirm("¿Quiere volver a cargar el sitio web?\nEs posible que los cambios no se guarden.")}};
    
    $("#txt_documento").filter_input({ regex: '[0-9]' });
    $("#txt_documentoOtro").filter_input({ regex: '[0-9]' });
    $("#txt_ubigeo").filter_input({ regex: '[0-9]' });
    $("#txt_nombres").filter_input({ regex: "[a-zA-ZáéíóúñÁÉÍÓÚüÜ' \]|-" });
    $("#txt_apepat").filter_input({ regex: "[a-zA-ZáéíóúñÁÉÍÓÚÑüÜ' \]|-" });
    $("#txt_apemat").filter_input({ regex: "[a-zA-ZáéíóúñÁÉÍÓÚÑüÜ' \]|-" });
    $("#txt_correo").filter_input({ regex: '[0-9a-zA-Z_@.]|-' });
    $("#txt_confirmar").filter_input({ regex: '[0-9a-zA-Z_@.]|-' });
    $("#txt_formacion").filter_input({ regex: '[0-9a-zA-ZáéíóúñÁÉÍÓÚÑ. \]' });
    $("#txt_telefono").filter_input({ regex: '[0-9]' });
    $("#txt_direccion").filter_input({ regex: '[0-9a-zA-ZáéíóúñÁÉÍÓÚÑ,:.#° \]' });
    $("#txt_institucion").filter_input({ regex: '[0-9a-zA-ZáéíóúñÁÉÍÓÚÑ,:.#° \]' });
    $("#txt_descripcion").filter_input({ regex: '[0-9a-zA-ZáéíóúñÁÉÍÓÚÑ,:.#° \]' });
    $("#txtcaptcha1").filter_input({ regex: '[0-9a-zA-Z]' });
    $("#txtcaptcha2").filter_input({ regex: '[0-9a-zA-Z]' });
    $("#txtcaptcha3").filter_input({ regex: '[0-9a-zA-Z]' });
   
    $(".chosen-select").chosen({
        placeholder_text_multiple: "Seleccione uno o varios",
        no_results_text: "No hay resultado para la búsqueda",
        width: "100%"
    });
                
    var cbo_tipodoc = $("#cbo_tipodoc").val();
    if(cbo_tipodoc == ""){
        $("#divNDocumento").hide();
    }else{
        $("#divNDocumento").show();
        $("#txt_documento").blur();
        $("#txt_documento").focus();
    }
    if (cbo_tipodoc == 1) {

        $("#txt_nombres").attr("disabled", "disabled");
        $("#txt_apepat").attr("disabled", "disabled");
        $("#txt_apemat").attr("disabled", "disabled");
        $("#grup-cap").show();
        $("#txt_documento").filter_input({ regex: '[0-9]' });
    } else {             
        $("#txt_nombres").removeAttr("disabled");
        $("#txt_apepat").removeAttr("disabled");
        $("#txt_apemat").removeAttr("disabled");
        $("#grup-cap").hide();           
        $("#txt_documento").filter_input({ regex: '[0-9a-zA-Z]' });
    }
    
    $("#cbo_tipodoc").change(function () {
        var cbo_tipodoc = $("#cbo_tipodoc").val();
        if(cbo_tipodoc == ""){
            $("#divNDocumento").hide();
        }else{
            $("#divNDocumento").show();
            $("#txt_documento").blur();
            $("#txt_documento").focus();
        }
        
        if (cbo_tipodoc == 1) {
            $("#txt_nombres").val("");
            $("#txt_apepat").val("");
            $("#txt_apemat").val("");
            $("#txtcaptcha").val("");
            $("#txt_documento").val("");
            $("#txt_ubigeo").attr("required","true");
            $("#txtcaptcha").attr("required","true");
            $("#txt_nombres").attr("disabled", "disabled");
            $("#txt_nombres").attr("required", "false");
            $("#txt_apepat").attr("disabled", "disabled");
            $("#txt_apepat").removeAttr("required");
            $("#txt_apemat").attr("disabled", "disabled");
            $("#txt_apemat").removeAttr("required");
            $("#txt_documento").attr("minlength", "8");
            $("#txt_documento").attr("maxlength", "8");
            $("#grup-cap").show();
            $("#txt_documento").filter_input({ regex: '[0-9]' });
        } else {
            $("#txt_nombres").val("");
            $("#txt_apepat").val("");
            $("#txt_apemat").val("");
            $("#txtcaptcha").val("");
            $("#txt_nombres").removeAttr("disabled");
            $("#txt_apepat").removeAttr("disabled");
            $("#txt_apepat").attr("required", "true");
            $("#txt_apemat").removeAttr("disabled");
            $("#txt_apemat").removeAttr("required");
           $("#txt_documento").val("");
            $("#txt_documento").attr("minlength", "12");
            $("#txt_documento").attr("maxlength", "12");
            $("#txt_ubigeo").removeAttr("required");
            $("#txtcaptcha").removeAttr("required");
            $("#grup-cap").hide();
            $("#txt_documento").filter_input({ regex: '[0-9a-zA-Z]' });
        }
    });
    
    $("#cbo_tipodocOtro").change(function () {
        var cbo_tipodocotro = $("#cbo_tipodocOtro").val();
        $("#txt_documentoOtro").val('');
        $("#txt_documentoOtro").blur();
        if (cbo_tipodocotro == 1) {
            $("#txt_documentoOtro").attr("minlength", "8");
            $("#txt_documentoOtro").attr("maxlength", "8");
            $("#divCaptcha2").show();
            $("#txt_documentoOtro").filter_input({ regex: '[0-9]' });
        } else {
            $("#txt_documentoOtro").attr("minlength", "12");
            $("#txt_documentoOtro").attr("maxlength", "12");
            $("#divCaptcha2").hide();
            $("#txt_documentoOtro").filter_input({ regex: '[0-9a-zA-Z]' });
        }
    });
    
    $("#btnDatosSiguiente").click(function () {
        frmDatosSiguiente();        
    });
    
    $("#btnPropositoAtras").click(function () {
        frmPropositoAtras();        
    });
    
    $("#btnPropositoSiguiente").click(function () {
        frmPropositoSiguiente();        
    });
    
    $("#btnCaracteristicasAtras").click(function () {
        frmCaracteristicasAtras();        
    });
    
    $("#btnCaracteristicasSiguiente").click(function () {
        frmCaracteristicasSiguiente();        
    });
    
    $("#btnCompromisoAtras").click(function () {
        frmCompromisoAtras();        
    });
    
    $("#btnCompromisoSiguiente").click(function () {
        frmCompromisoSiguiente();        
    });
    
    $("#btnagregarNivel").click(function () {
        agregarNivel();        
    });
    
    $("#btncapch").click(function () {
        recargarCapcha();  
        limpiarCapcha1();      
    });
    
    $("#btncapch2").click(function () {
        recargarCapcha2();
        limpiarCapcha2();        
    });
    
    $("#btncapch3").click(function () {
        recargarCapcha3(); 
        limpiarCapcha3();       
    });



    
    
    
    $("#btn_consultar").click(function () {
        if ($("#txt_documento").val().length != 8)
        {
            $('#modalMensajeRecibido').html("Ingrese un documento válido");
            $('#modalMensajeInformativo').modal({
                show: 'true'
            });
        }else if ($("#txt_ubigeo").val().length != 6)
        {
            $('#modalMensajeRecibido').html("Ingrese un Ubigeo válido");
            $('#modalMensajeInformativo').modal({
                show: 'true'
            });
        }else if ($("#txtcaptcha").val().length != 6)
        {
            $('#modalMensajeRecibido').html("El código de verificación debe tener 6 caracteres");
            $('#modalMensajeInformativo').modal({
                show: 'true'
            });
        }else{
            $("#btn_consultar").attr("disabled", "disabled");


            var dni = $("#txt_documento").val();
            dni = CryptoJS.AES.encrypt(JSON.stringify(dni), "N9tJJ6DyRFbM6jcndRtG", {format: CryptoJSAesJson}).toString();
            var captcha = $("#txtcaptcha").val();
            var ubigeo = $("#txt_ubigeo").val();
            ubigeo = CryptoJS.AES.encrypt(JSON.stringify(ubigeo), "N9tJJ6DyRFbM6jcndRtG", {format: CryptoJSAesJson}).toString();



          /*  var dni = $("#txt_documento").val();
            var captcha = $("#txtcaptcha").val();
            var ubigeo = $("#txt_ubigeo").val();*/

            $.ajax({
                type: "POST",
                url: PATHURL + 'main_umc/service',
                data: {dni: dni, captcha: captcha, ubigeo: ubigeo},
                dataType: "json",
                success: function (data) {
                    var result = JSON.parse(CryptoJS.AES.decrypt(data.AP_RESULTS, "N9tJJ6DyRFbM6jcndRtG", {format: CryptoJSAesJson}).toString(CryptoJS.enc.Utf8));
                    recargarCapcha();
                    if (result == 3){
                        $(location).attr('href',PATHURL+'main_umc/expiro');
                    }else if (result != 1) {
                        $('#modalMensajeRecibido').html(limpiarCaracteres(data.AP_MENSAJE));
                        $('#modalMensajeInformativo').modal({
                                show: 'true'
                        });
                        $("#txt_nombres").val("");
                        $("#txt_apepat").val("");
                        $("#txt_apemat").val("");
                    } else {
                         $("#txt_nombres").val(limpiarCaracteres(JSON.parse(CryptoJS.AES.decrypt(data.AP_NOMBRES, "N9tJJ6DyRFbM6jcndRtG", {format: CryptoJSAesJson}).toString(CryptoJS.enc.Utf8))));
                        $("#txt_correo").focus();
                        $("#txt_nombres").blur();
                        $("#txt_apepat").val(limpiarCaracteres(JSON.parse(CryptoJS.AES.decrypt(data.AP_PATERNO, "N9tJJ6DyRFbM6jcndRtG", {format: CryptoJSAesJson}).toString(CryptoJS.enc.Utf8))));
                        $("#txt_correo").focus();
                        $("#txt_apepat").blur();
                        $("#txt_apemat").val(limpiarCaracteres(JSON.parse(CryptoJS.AES.decrypt(data.AP_MATERNO, "N9tJJ6DyRFbM6jcndRtG", {format: CryptoJSAesJson}).toString(CryptoJS.enc.Utf8))));
                        $("#txt_correo").focus();
                        $("#txt_apemat").blur();
                        
                        $("#txtcaptcha").val("");
                        $("#txtcaptcha").removeAttr("required");
                        $("#txtcaptcha").blur();
                    }
                    $("#btn_consultar").removeAttr("disabled");
                }
            });
        }
    });
    
    $("#btn_agregarPersona").click(function () {
        if($('#cbo_tipodocOtro').val() == ""){
            $('#modalMensajeRecibido').html("Seleccione tipo de documento");
            $('#modalMensajeInformativo').modal({
                show: 'true'
            });
        }else if ($('#cbo_tipodocOtro').val() == "1" && $("#txt_documentoOtro").val().length != 8){
            $('#modalMensajeRecibido').html("Ingrese un documento válido");
            $('#modalMensajeInformativo').modal({
                show: 'true'
            });
        }else if ($('#cbo_tipodocOtro').val() != "1" && $("#txt_documentoOtro").val().length != 12){
            $('#modalMensajeRecibido').html("Ingrese un documento válido");
            $('#modalMensajeInformativo').modal({
                show: 'true'
            });
        }else if($('#cbo_tipodocOtro').val() == "1" && $('#txtcaptcha2').val().length != 6){
            $('#modalMensajeRecibido').html("El código de verificación debe tener 6 caracteres");
            $('#modalMensajeInformativo').modal({
                show: 'true'
            });
        }else{
            if($('#txt_PDNI').length){
                limpiarEspacios("#txt_Paterno");
                limpiarEspacios("#txt_Materno");
                limpiarEspacios("#txt_PNombres");
            }
            
            if(verificarDuplicado($('#txt_documentoOtro').val())){
                $('#modalMensajeRecibido').html("El número de documento ya fue registrado");
                $('#modalMensajeInformativo').modal({show: 'true'});
            }else if($('#txt_PDNI').length && ($('#txt_PDNI').val() == $('#txt_documentoOtro').val())){
                $('#modalMensajeRecibido').html("El número de documento ya fue registrado");
                $('#modalMensajeInformativo').modal({show: 'true'});
            }else if ($('#txt_PDNI').length && ($('#txt_Paterno').val().length < 2 ||  $('#txt_PNombres').val().length < 2)){
                $('#modalMensajeRecibido').html("Debe completar los datos de la persona con documento "+$('#txt_PDNI').val());
                $('#modalMensajeInformativo').modal({show: 'true'});
            }else{
                if ($('#txt_PDNI').length && $('#txt_Paterno').val().length >= 2 && $('#txt_PNombres').val().length >= 2){
                    var p = { };
                    p["tipodoc"] = $('#txt_PtipoDoc').val();
                    p["nrodoc"] = $('#txt_PDNI').val();
                    p["paterno"] = $('#txt_Paterno').val();
                    p["materno"] = $('#txt_Materno').val();
                    p["nombres"] = $('#txt_PNombres').val();
                    personas.push(p);
                    agregarPersonas();
                }
                if(personas.length == 5){
                    $('#modalMensajeRecibido').html("No es posible registrar más de 5 personas");
                    $('#modalMensajeInformativo').modal({show: 'true'});
                }else{
                    if($('#cbo_tipodocOtro').val() == "1"){
                        $("#btn_agregarPersona").attr("disabled", "disabled");
                        $('#divPersonas').html("<img width=\"20\" src=\""+PATHURL+"img/spin.gif\" /> Cargando datos...");
                        var dni = $("#txt_documentoOtro").val();
                        var n = personas.length;
                        var captcha = $("#txtcaptcha2").val();
                        $.ajax({
                            type: "POST",
                            url: PATHURL + 'main_umc/service2',
                            data: {dni: dni, n:n, captcha:captcha},
                            dataType: "json",
                            success: function (data) {
                                if (data.AP_RESULTS == 3){
                                    $(location).attr('href',PATHURL+'main_umc/expiro');
                                }else{
                                    recargarCapcha2();
                                    $('#txtcaptcha2').val('');
                                    $('#txtcaptcha2').blur();
                                    if (data.AP_RESULTS != 1) {
                                        $('#modalMensajeRecibido').html(limpiarCaracteres(data.AP_MENSAJE));
                                        $('#modalMensajeInformativo').modal({
                                                show: 'true'
                                        });
                                    } else {
                                        var p = { };
                                        p["tipodoc"] = "1";
                                        p["nrodoc"] = limpiarCaracteres(data.AP_NUMDOC);
                                        p["paterno"] = limpiarCaracteres(data.AP_PATERNO);
                                        p["materno"] = limpiarCaracteres(data.AP_MATERNO);
                                        p["nombres"] = limpiarCaracteres(data.AP_NOMBRES);
                                        personas.push(p);
                                    }
                                    agregarPersonas();
                                    $("#btn_agregarPersona").removeAttr("disabled");
                                }
                            }
                        });
                    }else{
                        var estructura = $('#divPersonas').html();
                        estructura += "<div class=\"row\">";
                            estructura += "<div class=\"col-sm-12\">";
                                estructura += "<input type=\"hidden\" id=\"txt_PtipoDoc\" value=\""+$("#cbo_tipodocOtro").val()+"\" />";
                                estructura += "<div class=\"col-md-3 form-group has-feedback\" style=\"margin: 0px;\">";
                                    estructura += "<input type=\"text\" name=\"txt_PDNI\" id=\"txt_PDNI\" value=\""+$("#txt_documentoOtro").val()+"\" class=\"form-control\" minlength=\"8\" maxlength=\"8\" placeholder=\"Ingrese documento\" autocomplete=\"off\" disabled=\"disabled\" />";
                                    estructura += "<span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>";
                                    estructura += "<div class=\"help-block with-errors\"></div>";
                                estructura += "</div>";
                                estructura += "<div class=\"col-md-3 form-group has-feedback\" style=\"margin: 0px;\">";
                                    estructura += "<input type=\"text\" name=\"txt_Paterno\" id=\"txt_Paterno\" value=\"\" class=\"form-control\" minlength=\"2\" maxlength=\"50\" placeholder=\"Apellido paterno\" autocomplete=\"off\" required />";
                                    estructura += "<span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>";
                                    estructura += "<div class=\"help-block with-errors\"></div>";
                                estructura += "</div>";
                                estructura += "<div class=\"col-md-3 form-group has-feedback\" style=\"margin: 0px;\">";
                                    estructura += "<input type=\"text\" name=\"txt_Materno\" id=\"txt_Materno\" value=\"\" class=\"form-control\" minlength=\"2\" maxlength=\"50\" placeholder=\"Apellido materno\" autocomplete=\"off\">";
                                    estructura += "<span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>";
                                    estructura += "<div class=\"help-block with-errors\"></div>";
                                estructura += "</div>";
                                estructura += "<div class=\"col-md-3 form-group has-feedback\" style=\"margin: 0px;\">";
                                    estructura += "<input type=\"text\" name=\"txt_PNombres\" id=\"txt_PNombres\" value=\"\" class=\"form-control\" minlength=\"2\" maxlength=\"50\" placeholder=\"Ingrese nombres\" autocomplete=\"off\" required />";
                                    estructura += "<span class=\"glyphicon form-control-feedback\" aria-hidden=\"true\"></span>";
                                    estructura += "<div class=\"help-block with-errors\"></div>";
                                estructura += "</div>";
                            estructura += "</div>";
                        estructura += "</div>";
                        estructura += "<div class=\"text-right\">";
                            estructura += "<a style=\"cursor: pointer;\" id=\"pe_12345678\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span> Eliminar Persona</a>";
                        estructura += "</div>";
                        
                        $('#divPersonas').html(estructura);
                        $("#pe_12345678").click(function () {
                            eliminarPersona('12345678');
                        });
                        $("#txt_Paterno").filter_input({ regex: '[a-zA-ZáéíóúñÁÉÍÓÚÑ \]' });
                        $("#txt_Materno").filter_input({ regex: '[a-zA-ZáéíóúñÁÉÍÓÚÑ \]' });
                        $("#txt_PNombres").filter_input({ regex: '[a-zA-ZáéíóúñÁÉÍÓÚÑ \]' });
                        $('#frm-formulario').validator('update');
                    }
                    $("#txt_documentoOtro").val('');
                    $("#txt_documentoOtro").blur();
                }
            }
        }
    });
    
    $("#cbo_pais").change(function(){
        var cbo_pais = $("#cbo_pais").val();
        if(cbo_pais == 9233000000){
            $("#divPeru").show();
            $("#cbo_departamento").attr("required","true");
            $("#cbo_provincia").attr("required","true");
            $("#cbo_distrito").attr("required","true");
        }else{
            $("#divPeru").hide();
            $('#cbo_departamento').find('option:first').attr('selected', 'selected').parent('select');
            var cmb = '<option value="">Seleccionar</option>';
            $("#cbo_provincia").html(cmb);
            $("#cbo_distrito").html(cmb);
            $("#cbo_departamento").removeAttr("required");
            $("#cbo_provincia").removeAttr("required");
            $("#cbo_distrito").removeAttr("required");
        }
    });
	
    var cbo_pais = $("#cbo_pais").val();
    if(cbo_pais == 9233000000){
            $("#divPeru").show();
            $("#cbo_departamento").attr("required","true");
            $("#cbo_provincia").attr("required","true");
            $("#cbo_distrito").attr("required","true");
    }else{
            $("#divPeru").hide();
            $('#cbo_departamento').find('option:first').attr('selected', 'selected').parent('select');
            var cmb = '<option value="">Seleccionar</option>';
            $("#cbo_provincia").html(cmb);
            $("#cbo_distrito").html(cmb);
            $("#cbo_departamento").removeAttr("required");
            $("#cbo_provincia").removeAttr("required");
            $("#cbo_distrito").removeAttr("required");
    }
    
    $("#cbo_departamento").change(function () {
        var departamento = $("#cbo_departamento").val();
        var cmb = '<option value="">Seleccionar</option>';
        $("#cbo_provincia").html(cmb);
        $("#cbo_distrito").html(cmb);
        $.ajax({
            type: "POST",
            url: PATHURL + 'main_umc/listaprovincia',
            data: {departamento: departamento},
            dataType: "json",
            success: function (data) {
                if (data.AP_RESULTS == 3){
                    $(location).attr('href',PATHURL+'main_umc/expiro');
                }else{
                    $.each(data, function (key, val) {
                        cmb += "<option value=" + limpiarCaracteres(val["codigo"]) + ">" + limpiarCaracteres(val["nombre"]) + "</option>";
                    });
                    $("#cbo_provincia").html(cmb);
                }
            }
        });
    });
	
	var departamento = $("#cbo_departamento").val();
	if(departamento != ""){
		var TIPO_PROVINCIA = $('#TIPO_PROVINCIA').val();
		var cmb = '<option value="">Seleccionar</option>';
        $("#cbo_provincia").html(cmb);
        $("#cbo_distrito").html(cmb);
        $.ajax({
            type: "POST",
            url: PATHURL + 'main_umc/listaprovincia',
            data: {departamento: departamento},
            dataType: "json",
            success: function (data) {
                if (data.AP_RESULTS == 3){
                    $(location).attr('href',PATHURL+'main_umc/expiro');
                }else{
                    $.each(data, function (key, val) {
                        if(TIPO_PROVINCIA == val["codigo"])
                            cmb += "<option value=" + limpiarCaracteres(val["codigo"]) + " selected >" + limpiarCaracteres(val["nombre"]) + "</option>";
                        else
                            cmb += "<option value=" + limpiarCaracteres(val["codigo"]) + " >" + limpiarCaracteres(val["nombre"]) + "</option>";
                    });
                    $("#cbo_provincia").html(cmb);
                    $('#cbo_provincia').blur();
                    var provincia = $("#cbo_provincia").val();
                    if(provincia != ""){
                        var TIPO_DISTRITO = $('#TIPO_DISTRITO').val();
                        var cmb = '<option value="">Seleccionar</option>';
                        $("#cbo_distrito").html(cmb);
                        $.ajax({
                                type: "POST",
                                url: PATHURL + 'main_umc/listadistrito',
                                data: {provincia: provincia},
                                dataType: "json",
                                success: function (data) {
                                    if (data.AP_RESULTS == 3){
                                        $(location).attr('href',PATHURL+'main_umc/expiro');
                                    }else{
                                        $.each(data, function (key, val) {
                                            if(TIPO_DISTRITO == val["codigo"])
                                                cmb += "<option value=" + limpiarCaracteres(val["codigo"]) + " selected >" + limpiarCaracteres(val["nombre"]) + "</option>";
                                            else
                                                cmb += "<option value=" + limpiarCaracteres(val["codigo"]) + ">" + limpiarCaracteres(val["nombre"]) + "</option>";
                                        });
                                        $("#cbo_distrito").html(cmb);
                                        $('#cbo_distrito').blur();
                                    }
                                }
                        });	
                    }
                }
            }
        });
	}
        
    
    $("#cbo_provincia").change(function () {
        var provincia = $("#cbo_provincia").val();
        var cmb = '<option value="">Seleccionar</option>';
        $("#cbo_distrito").html(cmb);
        $.ajax({
            type: "POST",
            url: PATHURL + 'main_umc/listadistrito',
            data: {provincia: provincia},
            dataType: "json",
            success: function (data) {
                if (data.AP_RESULTS == 3){
                    $(location).attr('href',PATHURL+'main_umc/expiro');
                }else{
                    $.each(data, function (key, val) {
                        cmb += "<option value=" + limpiarCaracteres(val["codigo"]) + ">" + limpiarCaracteres(val["nombre"]) + "</option>";
                    });
                    $("#cbo_distrito").html(cmb);
                }
            }
        });
    });

	
    $("#cbo_nivel_1").change(function () {
        var nivel = $("#cbo_nivel_1").val();
       // console.log(nivel);

        var cmb = '';
        $.ajax({
            type: "POST",
            url: PATHURL + 'main_umc/listaAnioEvaluado',
            data: {nivel: nivel},
            dataType: "json",
            success: function (data) {
                if (data.AP_RESULTS == 3){
                    $(location).attr('href',PATHURL+'main_umc/expiro');
                }else{
                    
                    $.each(data, function (key, val) {
                        cmb += "<option value=" + limpiarCaracteres(val["valor_campo"]) + ">" + limpiarCaracteres(val["valor_campo"]) + "</option>";
                    });
                    $("#cbo_anio_1").html(cmb);
                    $(".chosen-select").trigger('chosen:updated');
                }

            }
        });
    });	

     $("#cbo_evaluacion").change(function () {


        eliminarTodos();

        var nivel = $("#cbo_evaluacion").val();
        var cmb='<option value="">Seleccione</option>';

        $('#cbo_anio_1').chosen({
				placeholder_text_multiple: "Seleccione uno o varios",
				no_results_text: "No hay resultado para la búsqueda",
    			width: "90%"
			});
       // var cmb2= '<option value="">Seleccione</option>';
        //$("#cbo_anio_1_chosen").value = ""
        //console.log(nivel);

        $.ajax({
            type: "POST",
            url: PATHURL + 'main_umc/listaNivelGrado',
            data: {nivel: nivel},
            dataType: "json",
            success: function (data) {
                if (data.AP_RESULTS == 3){
                    $(location).attr('href',PATHURL+'main_umc/expiro');
                }else{
                   
                    $.each(data, function (key, val) {
                      // cmb2 += "<option value=" + limpiarCaracteres(val["valor_campo"]) + ">" + limpiarCaracteres(val["valor_campo"]) + "</option>";
                        
                        cmb += "<option value=" + val["codigo_campo"] + ">" + val["valor_campo"] + "</option>";
                    });
                    $("#cbo_nivel_1").html(cmb); 
                    $(".chosen-select").trigger('chosen:updated');

                   
                   // $("#cbo_anio_1_chosen").html(cmb2);
                  // $(".chosen-select").trigger('chosen:updated');
                }
            }
        });
         });

        

         $("#cbo_evaluacion").change(function () {
        //opciones
        var nivel = $("#cbo_evaluacion").val();
        var mensaje1='';

        if(nivel !=0){

            switch (nivel) {
        case '1': mensaje1="<b>Evaluación Censal de Estudiantes (ECE)</b>"; break;
        case '2': mensaje1="<b>Evaluación Muestral (EM)</b>"; break;
        case '3': mensaje1="<b>El Estudio Virtual de Aprendizajes – EVA 2021</b>"; break;
        case '4': mensaje1="<b>Evaluación PISA</b>"; break;
        case '5': mensaje1="<b>Estudio Internacional de Cívica y Ciudadanía (ICCS)</b>"; break;
        case '6': mensaje1="<b>Evaluación del Laboratorio Latinoamericano de Evaluación de la Calidad de la Educación (LLECE)</b>"; break;
                 
      default:
       console.log(`ERROR`);
        }

        }
        



       if(nivel !=0){

 $.ajax({
            type: "POST",
            url: PATHURL + 'main_umc/getMensaje',
            data: {nivel: nivel},
            dataType: "json",
            success: function (data) {
                if (data.AP_RESULTS == 3){
                    $(location).attr('href',PATHURL+'main_umc/expiro');
                }else {
                    
                    mensaje1 += "<div style= \"text-align:justify;\">" + data[0][1]+  "</div>";
                   //para el link del parrafo
                 //  switch (nivel) {
               //  case '1': mensaje1="<a href=+"http://umc.minedu.gob.pe/evaluaciones-muestrales/"+>Website</a>"; break;
               // case '2': mensaje1="<b>Evaluación Muestral (EM)</b>"; break;
                    $("#message").html(mensaje1);
                   // $(".chosen-select").trigger('chosen:updated');
                }
            }
        });


       }
       



    });	


        $("#cbo_evaluacion").change(function () {
        //seleccionar opciones radio
        var nivel = $("#cbo_evaluacion").val();
        var mensj='';

        if(nivel !=0){

            switch (nivel) {
        case '1': 
             mensj=  "<b>Evaluación Censal de Estudiantes (ECE)</b>";
             $('#op1').show();
             $('#op2').show();
             $('#op3').hide(); 

             break;
        case '2': 
            mensj=  "<b>Evaluación Muestral (EM)</b>"; 
            $('#op1').hide();
            $('#op2').show();
            $('#op3').hide();
            break;
        case '3': 
            mensj="<b>El Estudio Virtual de Aprendizajes – EVA 2021</b>"; 
            $('#op1').hide();
            $('#op2').show();
            $('#op3').hide();
            break;
        case '4': 
            mensj="<b>Evaluación PISA</b>"; 
            $('#op1').hide();
            $('#op2').hide();
            $('#op3').show();
            break;
        case '5': 
            mensj="<b>Estudio Internacional de Cívica y Ciudadanía (ICCS)</b>";
            $('#op1').hide();
            $('#op2').hide();
            $('#op3').show(); 
            break;
        case '6': 
            mensj="<b>Evaluación del Laboratorio Latinoamericano de Evaluación de la Calidad de la Educación (LLECE)</b>";  
            $('#op1').hide();
            $('#op2').hide();
            $('#op3').show();
            break;
                 
      default:
       console.log(`ERROR`);
        }
        }
        
      $("#mensj").html(mensj);
      });	






	var nivel = $("#cbo_evaluacion").val();
	if(nivel != ""){
		var cmb = '';
        $.ajax({
            type: "POST",
            url: PATHURL + 'main_umc/listaAnioEvaluado',
            data: {nivel: nivel},
            dataType: "json",
            success: function (data) {
                if (data.AP_RESULTS == 3){
                    $(location).attr('href',PATHURL+'main_umc/expiro');
                }else{
                    var valSeleccion_1 = "";
                    if($('#seleccionados_1').val() != ""){
                            valSeleccion_1 = $('#seleccionados_1').val().split(',');
                    }
                    $.each(data, function (key, val) {
                        existe = 0;
                        for(i=0;i<valSeleccion_1.length;i++){
                            if(valSeleccion_1[i] == val["valor_campo"]){
                                existe = 1;
                                break;
                            }
                        };
                        if(existe == 1){
                                cmb += "<option value=" + limpiarCaracteres(val["valor_campo"]) + " selected>" + limpiarCaracteres(val["valor_campo"]) + "</option>";
                        }else{
                                cmb += "<option value=" + limpiarCaracteres(val["valor_campo"]) + ">" + limpiarCaracteres(val["valor_campo"]) + "</option>";
                        }
                    });
                    $("#cbo_anio_1").html(cmb);
                    $(".chosen-select").trigger('chosen:updated');
                    if(parseInt($("#idNivelReturn").val())>1){
                            $('#cbo_nivel_'+nivel).attr('disabled', 'disabled');
                            $('#cbo_anio_'+nivel).attr('disabled', 'disabled').trigger("chosen:updated");
                            agregarNivel();
                            llenarDataCaracteristicas();
                    }
                }
            }
        });
	}
	
	$('.input-file').change(function (){
            var sizeByte = this.files[0].size;
            var siezekiloByte = parseInt(sizeByte / 1024);

            if(siezekiloByte > $(this).attr('size')){
                $('#modalMensajeRecibido').html('El tamaño supera el límite permitido de 1MB');
                   $('#modalMensajeInformativo').modal({
                   show: 'true'
                });
                $(this).val('');
            }
            else{
                checkfile(this);
            }
        });
	
	$("#idNivel").val('1');
	llenarDataPersonas();
});

function llenarDataCaracteristicas(){
	var nivel = $("#cbo_nivel_"+$('#idNivel').val()).val();
	if(nivel != ""){
		var cmb = '';
        $.ajax({
            type: "POST",
            url: PATHURL + 'main_umc/listaAnioEvaluado',
            data: {nivel: nivel},
            dataType: "json",
            success: function (data) {
                if (data.AP_RESULTS == 3){
                    $(location).attr('href',PATHURL+'main_umc/expiro');
                }else{
                    var valSeleccion = "";
                    if($('#seleccionados_'+$('#idNivel').val()).val() != ""){
                        valSeleccion = $('#seleccionados_'+$('#idNivel').val()).val().split(',');
                    }
                    $.each(data, function (key, val) {
                        existe = 0;
                        for(i=0;i<valSeleccion.length;i++){
                            if(valSeleccion[i] == val["valor_campo"]){
                                existe = 1;
                                break;
                            }
                        };
                        if(existe == 1){
                                cmb += "<option value=" + limpiarCaracteres(val["valor_campo"]) + " selected>" + limpiarCaracteres(val["valor_campo"]) + "</option>";
                        }else{
                                cmb += "<option value=" + limpiarCaracteres(val["valor_campo"]) + ">" + limpiarCaracteres(val["valor_campo"]) + "</option>";
                        }
                    });
                    $("#cbo_anio_"+$('#idNivel').val()).html(cmb);
                    $(".chosen-select").trigger('chosen:updated');
                    if(parseInt($("#idNivel").val())<parseInt($("#idNivelReturn").val())){
                        $('#cbo_nivel_'+nivel).attr('disabled', 'disabled');
                        $('#cbo_anio_'+nivel).attr('disabled', 'disabled').trigger("chosen:updated");
                        agregarNivel();
                        llenarDataCaracteristicas();
                    }
                } 
            }
        });
	}
}

function llenarDataPersonas(){
    if($('#selPersona').val() != ""){
        var item = $('#selPersona').val().split('$');
        for(i=0;i<item.length;i++){
            var per = item[i].split('|');
            var p = { };
            p["tipodoc"] = per[0];
            p["nrodoc"] = per[1];
            p["paterno"] = per[2];
            p["materno"] = per[3];
            p["nombres"] = per[4];
            personas.push(p);
        }
        agregarPersonas();
    }
}

function recargarCapcha(){

    $('#capch').attr('src', '');
    var random = Math.floor(Math.random() * 10000) + 1;
    var capcha = PATHURL + 'main_umc/captcha/' + random;
    let base64image = getBase64Image(capcha).then(function(base64image) {
          document.getElementById('capch')
          .setAttribute(
            'src', 'data:image/png;base64,'+base64image
            );
      }, function(reason) {

    });
};

function recargarCapcha2(){

     $('#capch2').attr('src', '');
     var random = Math.floor(Math.random() * 10000) + 1;
     var capcha = PATHURL + 'main_umc/captcha/' + random;
     let base64image = getBase64Image(capcha).then(function(base64image) {
      document.getElementById('capch2')
      .setAttribute(
        'src', 'data:image/png;base64,'+base64image
        );
    }, function(reason) {

    });
};

function recargarCapcha3(){

     $('#capch3').attr('src', '');
     var random = Math.floor(Math.random() * 10000) + 1;
     var capcha = PATHURL + 'main_umc/captcha/' + random;
     let base64image = getBase64Image(capcha).then(function(base64image) {
      document.getElementById('capch3')
      .setAttribute(
        'src', 'data:image/png;base64,'+base64image
        );
    }, function(reason) {

    });
};

function limpiarCapcha1(){

    $('#txtcaptcha').val('');
    $('.form-control-feedback').removeClass('glyphicon-ok');
    $('.form-group.has-feedback').removeClass('has-success');
};

function limpiarCapcha2(){

    $('#txtcaptcha2').val('');
    $('.form-control-feedback').removeClass('glyphicon-ok');
    $('.form-group.has-feedback').removeClass('has-success');
};

function limpiarCapcha3(){

    $('#txtcaptcha3').val('');
    $('.form-control-feedback').removeClass('glyphicon-ok');
    $('.form-group.has-feedback').removeClass('has-success');
};





// function recargarCapcha(){
//     var random = Math.floor(Math.random() * 10000) + 1;
//     var capcha = $("#capch").attr("src") + '/' + random;
//     $("#capch").attr("src", capcha);
// };

// function recargarCapcha2(){
//     var random = Math.floor(Math.random() * 10000) + 1;
//     var capcha = $("#capch2").attr("src") + '/' + random;
//     $("#capch2").attr("src", capcha);
// };

// function recargarCapcha3(){
//     var random = Math.floor(Math.random() * 10000) + 1;
//     var capcha = $("#capch3").attr("src") + '/' + random;
//     $("#capch3").attr("src", capcha);
// };

function getBase64Image (imgUrl) {
    return new Promise(
      function(resolve, reject) {

        var img = new Image();
        img.src = imgUrl;
        img.setAttribute('crossOrigin', 'anonymous');

        img.onload = function() {
          var canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          var ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          var dataURL = canvas.toDataURL("image/png");
          resolve(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));
      }
      img.onerror = function() {
          reject("The image could not be loaded.");
      }

  });
}

function frmDatosSiguiente(){
    $('#msaje_exito').hide();
    $('#cbo_tipodoc').blur();
    limpiarEspacios("#txt_nombres");
    limpiarEspacios("#txt_apepat");
    limpiarEspacios("#txt_apemat");
    $('#txt_correo').blur();
    $('#txt_confirmar').blur();
    limpiarEspacios("#txt_formacion");
    $('#txt_telefono').blur();
    limpiarEspacios("#txt_direccion");
    $('#cbo_pais').blur();
    if($("#cbo_pais").val() == 9233000000){
        $('#cbo_departamento').blur();
        $('#cbo_provincia').blur();
        $('#cbo_distrito').blur();
    }
    limpiarEspacios("#txt_institucion");
    $('#cbo_tema').blur();
    
    var texto = "";
    if(!$("#val_cbo_tipodoc").hasClass("has-success") || $('#cbo_tipodoc').val() == ""){
        texto += "Seleccione una opción para Tipo de documento<br>";
    }
    if(!$("#divNDocumento").hasClass("has-success") || $('#txt_documento').val() == ""){
        texto += "Ingrese número documento<br>";
    }
    
    if(!$("#val_txt_nombres").hasClass("has-success") || $('#txt_nombres').val() == ""){
        texto += "Ingrese Nombres<br>";
    }
    /*
    if($('#cbo_tipodoc').val() != "1"){
        if(!$("#val_txt_apepat").hasClass("has-success") || $('#txt_apepat').val() == ""){
            texto += "Ingrese Apellido Paterno<br>";
        }
        if(!$("#val_txt_apemat").hasClass("has-success") || $('#txt_apemat').val() == ""){
            texto += "Ingrese Apellido Materno<br>";
        }
    }*/
    if(!$("#val_txt_correo").hasClass("has-success") || $('#txt_correo').val() == ""){
        texto += "Ingrese y/o Confirmar correo electrónico<br>";
    }
    if(!$("#val_txt_formacion").hasClass("has-success") || $('#txt_formacion').val() == ""){
        texto += "Ingrese formación profesional<br>";
    }
    if(!$("#val_txt_telefono").hasClass("has-success") || $('#txt_telefono').val() == ""){
        texto += "Ingrese número de teléfono<br>";
    }
    if(!$("#val_txt_direccion").hasClass("has-success") || $('#txt_direccion').val() == ""){
        texto += "Ingrese dirección<br>";
    }
    if(!$("#val_cbo_pais").hasClass("has-success") || $('#cbo_pais').val() == ""){
        texto += "Seleccione una opción para País<br>";
    }
    if( ($("#cbo_pais").val() == 9233000000) && (!$("#val_cbo_departamento").hasClass("has-success") || $('#cbo_departamento').val() == "") ){
        texto += "Seleccione una opción para Departamento<br>";
    }
    if( ($("#cbo_pais").val() == 9233000000) && (!$("#val_cbo_provincia").hasClass("has-success") || $('#cbo_provincia').val() == "") ){
        texto += "Seleccione una opción para Provincia<br>";
    }
    if( ($("#cbo_pais").val() == 9233000000) && (!$("#val_cbo_distrito").hasClass("has-success") || $('#cbo_distrito').val() == "") ){
        texto += "Seleccione una opción para Distrito<br>";
    }
    if(!$("#val_txt_institucion").hasClass("has-success") || $('#txt_institucion').val() == ""){
        texto += "Ingrese institución para la que labora o estudia<br>";
    }
    if(!$("#val_cbo_tema").hasClass("has-success") || $('#cbo_tema').val() == ""){
        texto += "Seleccione una opción para Elegir un tema";
    }
    if(texto != ""){
        $('#modalMensajeRecibido').html(texto);
            $('#modalMensajeInformativo').modal({
            show: 'true'
        });
    }else{
        $("#frmDatos").fadeOut(500);
        setTimeout(function(){
            $("#frmProposito").fadeIn(500);
        }, 500);
    }
}

function frmPropositoAtras(){
    $("#frmProposito").fadeOut(500);
    setTimeout(function(){
        $("#frmDatos").fadeIn(500);
    }, 500);
}

function frmPropositoSiguiente(){
    limpiarEspacios("#txt_descripcion");
    
    var texto = "";
    if($("input:radio[name='proposito']:checked").val() == undefined){
        texto += "Seleccione una opción para Propósito de la solicitud<br>";
    }
    if(!$("#val_txt_descripcion").hasClass("has-success") || $('#txt_descripcion').val() == "" || $('#txt_descripcion').val().length < 120){
        var c = $('#txt_descripcion').val().length;
        var carac = "caracteres";
        if(c == "1"){
            carac = "caracter";
        }
        texto += "La descripción contiene "+c+" "+carac+", debería contener mínimo 120";
    }
    if(texto != ""){
        $('#modalMensajeRecibido').html(texto);
            $('#modalMensajeInformativo').modal({
            show: 'true'
        });
    }else{
        agregarPersonas();
        recargarCapcha2();
        $("#frmProposito").fadeOut(500);
            setTimeout(function(){
            $("#frmCaracteristicas").fadeIn(500);
        }, 500);
    }
}

function frmCaracteristicasAtras(){
    $("#frmCaracteristicas").fadeOut(500);
    setTimeout(function(){
        $("#frmProposito").fadeIn(500);
    }, 500);
}0

function frmCaracteristicasSiguiente(){
    //alert($('#cbo_anio_1').val());
    if($('#txt_PDNI').length){
        limpiarEspacios("#txt_Paterno");
        limpiarEspacios("#txt_Materno");
        limpiarEspacios("#txt_PNombres");
    }
    
    var texto = "";
    for(var i=1;i<=parseInt($('#idNivel').val());i++){
        if($('#cbo_nivel_'+i).val() == ""){
            texto += "Seleccione una opción para Nivel y grado ("+i+")<br>";
        }
        if($('#cbo_anio_'+i).chosen().val() == ""){
            texto += "Seleccione por lo menos un año en Año evaluado ("+i+")<br>";
        }
    }
    if($("input:radio[name='pedido']:checked").val() == undefined){
        texto += "Seleccione una opción para Tipo de pedido<br>";
    }
    
    if ($('#txt_PDNI').length && ($('#txt_Paterno').val().length < 2 || $('#txt_PNombres').val().length < 2)){
        $('#modalMensajeRecibido').html("Debe completar los datos de la persona con documento "+$('#txt_PDNI').val());
        texto += "Debe completar los datos de la persona con documento "+$('#txt_PDNI').val()+"<br>";
    }
    if(personas.length > 5){
        texto += "No es posible registrar más de 5 personas";
    }	
    if(texto != ""){
        $('#modalMensajeRecibido').html(texto);
        $('#modalMensajeInformativo').modal({
            show: 'true'
        });
    }else{
        if ($('#txt_PDNI').length && $('#txt_Paterno').val().length >= 2 &&  $('#txt_PNombres').val().length >= 2){
            var p = { };
            p["tipodoc"] = $('#txt_PtipoDoc').val();
            p["nrodoc"] = $('#txt_PDNI').val();
            p["paterno"] = $('#txt_Paterno').val();
            p["materno"] = $('#txt_Materno').val();
            p["nombres"] = $('#txt_PNombres').val();
            personas.push(p);
            agregarPersonas();
        }
        $("#frmCaracteristicas").fadeOut(500);
        setTimeout(function(){
            $("#frmCompromiso").fadeIn(500);
        }, 500);
        agregarDatosCompromiso();
        recargarCapcha3();
        $('#txtcaptcha3').val('');
    }
}

function frmCompromisoAtras(){
    $("#frmCompromiso").fadeOut(500);
    setTimeout(function(){
        $("#frmCaracteristicas").fadeIn(500);
    }, 500);
}

function frmCompromisoSiguiente(){
    var texto = "";
    
    if(!$('#chkAcepto').prop('checked')){
        texto += "Debe aceptar el compromiso de confidencialidad<br>";
    }
    if($('#txtcaptcha3').val().length != 6){
        texto += "El código captcha debe contener 6 dígitos";
    }
    if(texto != ""){
        $('#modalMensajeRecibido').html(texto);
        $('#modalMensajeInformativo').modal({
            show: 'true'
        });
    }else{
        var nivel = $('#idNivel').val();
        for(var i=1; i<=nivel;i++){
            $('#cbo_nivel_'+i).removeAttr('disabled');
            $('#cbo_anio_'+i).removeAttr('disabled').trigger("chosen:updated");
            $('#txt_anio_'+i).val($('#cbo_anio_'+i).val());
        }
        
        var $n = 1;
        var cadena = "";
        $.each(personas, function(key, value){
            if($n>1){
                cadena += "$";
            }
            cadena += value["tipodoc"]+"|"+value["nrodoc"]+"|"+value["paterno"]+"|"+value["materno"]+"|"+value["nombres"];
            $n++;
        });

        $('#txt_personas').val(cadena);

        if (validacaptcha3() == true) {

            $('#frm-formulario').validator('update');
            $("#frm-formulario").submit();    
        }
        
    }
}

function agregarNivel(){
	if($('#cbo_nivel_'+$('#idNivel').val()).val() == "" || $('#cbo_anio_'+$('#idNivel').val()).chosen().val() == null){
		$('#modalMensajeRecibido').html('Para AGREGAR UNO NUEVO, debe completar los datos de Nivel y Año');
            $('#modalMensajeInformativo').modal({
            show: 'true'
        });
	}else{
		$('#divMensaje').show();
		var nivel = $('#idNivel').val();
		for(var i=2; i<=nivel;i++){
			$('#icon_'+i).html('');
		}
		if((parseInt(nivel)+2) <= $('#cbo_evaluacion option').length){
			var cmb = "";
		
			$('#cbo_nivel_'+nivel).attr('disabled', 'disabled');
			$('#cbo_anio_'+nivel).attr('disabled', 'disabled').trigger("chosen:updated");

			nivel++;

			cmb += "<div class=\"row\">";
			cmb += "<div class=\"col-sm-6\">";
			cmb += "<div class=\"form-group has-feedback\">";
			cmb += "<label for=\"inputNivel\" class=\"col-md-3 control-label\" style=\"padding-right: 10px;\">Nivel y grado<span class=\"span_requerido\">*</span></label>";
			cmb += "<div class=\"col-md-9\">";
			cmb += "<select class=\"form-control\" id=\"cbo_nivel_"+nivel+"\" name=\"cbo_nivel_"+nivel+"\" required>";
			$("#cbo_nivel_"+(nivel-1)+" option").each(function()
			{
				if($(this).val() != $('#cbo_nivel_'+(nivel-1)).val()){
					if($('#selCbo_'+nivel).val() == $(this).val()){
						cmb += "<option value=\""+$(this).val()+"\" selected>"+$(this).text()+"</option>";	
					}else{
						cmb += "<option value=\""+$(this).val()+"\">"+$(this).text()+"</option>";	
					}
				}
			});
			cmb += "</select>";
			cmb += "<div class=\"help-block with-errors\"></div>";
			cmb += "</div>";
			cmb += "</div>";
			cmb += "</div>";
			cmb += "<div class=\"col-sm-6\">";
			cmb += "<div class=\"form-group\">";
			cmb += "<label for=\"inputAnio\"  class=\"col-md-4 control-label\">Año evaluado<span class=\"span_requerido\">*</span></label>";
			cmb += "<div class=\"col-md-8\">";
			cmb += "<select class=\"form-control chosen-select\" id=\"cbo_anio_"+nivel+"\" multiple ></select>";
                        cmb += "<input type=\"hidden\" id=\"txt_anio_"+nivel+"\" name=\"txt_anio_"+nivel+"\" value=\"\"/>";
			cmb += "<div id=\"icon_"+nivel+"\" style=\"float: right;\"><a class=\"deleteButton\" id=\"btneliminarNivel\" title=\"Eliminar Nivel y grado\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span></a></div>";
			cmb += "</div>";
			cmb += "</div>";
			cmb += "</div>";
			cmb += "</div>";
			cmb += "<hr style=\"margin-top: 0px;\">";
			cmb += "<div id=\"divNivel"+(nivel+1)+"\"></div>";

			$('#idNivel').val(nivel);
			$('#divNivel'+nivel).html(cmb);
			$('#cbo_anio_'+nivel).chosen({
				placeholder_text_multiple: "Seleccione uno o varios",
				no_results_text: "No hay resultado para la búsqueda",
    			width: "90%"
			});
                        $("#cbo_nivel_"+nivel).change(function () {
                            cargarListaAnio(nivel);
                        });
                        $("#btneliminarNivel").click(function () {
                            eliminarNivel();        
                        });
			$('#frm-formulario').validator('update');
			if((nivel+1) == $('#cbo_evaluacion option').length){
				$('#divAgregar').hide();	
			}
		}else{
			$('#divAgregar').hide();
		}
		
	}
}


function cargarListaAnio(cbo){
	var nivel = $("#cbo_nivel_"+cbo).val();
	var cmb = '';
	$.ajax({
		type: "POST",
		url: PATHURL + 'main_umc/listaAnioEvaluado',
		data: {nivel: nivel},
		dataType: "json",
		success: function (data) {
                    if (data.AP_RESULTS == 3){
                        $(location).attr('href',PATHURL+'main_umc/expiro');
                    }else{
                        $.each(data, function (key, val) {
                            cmb += "<option value=" + limpiarCaracteres(val["valor_campo"]) + ">" + limpiarCaracteres(val["valor_campo"]) + "</option>";
			});
			$("#cbo_anio_"+cbo).html(cmb);
			$("#cbo_anio_"+cbo).trigger('chosen:updated');
                    }
		}
	});
}

function eliminarNivel(){
	$('#divNivel'+$('#idNivel').val()).html('');
	$('#idNivel').val(parseInt($('#idNivel').val())-1);
	$('#cbo_nivel_'+$('#idNivel').val()).removeAttr('disabled');
	$('#cbo_anio_'+$('#idNivel').val()).removeAttr('disabled').trigger("chosen:updated");
	$('#icon_'+$('#idNivel').val()).html("<a class=\"deleteButton\" id=\"btneliminarNivel\" title=\"Eliminar Nivel y grado\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span></a>");
	$('#divAgregar').show();
	if($('#idNivel').val() == '1'){
	   $('#divMensaje').hide();
	}
        $("#btneliminarNivel").click(function () {
            eliminarNivel();        
        });
	$('#frm-formulario').validator('update');
}



function eliminarTodos(){
        var nivel = $('#idNivel').val();

    for (var i = 0; i < nivel; i++) {


    $('#divNivel'+i).html('');
    $('#cbo_nivel_'+i).removeAttr('disabled');
    $('#cbo_anio_'+i).removeAttr('disabled').trigger("chosen:updated");
    $('#icon_'+i).html("<a class=\"deleteButton\" id=\"btneliminarNivel\" title=\"Eliminar Nivel y grado\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span></a>");


    }
    $('#idNivel').val(1);


    $('#divAgregar').show();
    if($('#idNivel').val() == '1'){
       $('#divMensaje').hide();
    }
        $("#btneliminarNivel").click(function () {
            eliminarNivel();        
        });
    $('#frm-formulario').validator('update');
    $("#cbo_nivel_1").val("");
    $("#cbo_nivel_1").trigger("change");
}




function agregarPersonas(){
    var temp = new Array();
    $.each(personas, function(key, value){
        if($('#txt_documento').val() != value["nrodoc"]){
            var p = { };
            p["tipodoc"] = value["tipodoc"];
            p["nrodoc"] = value["nrodoc"];
            p["paterno"] = value["paterno"];
            p["materno"] = value["materno"];
            p["nombres"] = value["nombres"];
            temp.push(p);
        }
    });
    personas = temp;
    
    var estructura = "";
    $.each( personas, function( key, value ) {
        estructura += "<div class=\"row\" style=\"margin-bottom: 10px;\">";
            estructura += "<div class=\"col-sm-12\">";
                estructura += "<div class=\"col-md-3 form-group\" style=\"margin: 0px;\">";
                    estructura += "<input type=\"text\" value=\""+limpiarCaracteres(value["nrodoc"])+"\" class=\"form-control\" minlength=\"8\" maxlength=\"8\" disabled=\"disabled\" />";
                estructura += "</div>";
                estructura += "<div class=\"col-md-3 form-group\" style=\"margin: 0px;\">";
                    estructura += "<input type=\"text\" value=\""+limpiarCaracteres(value["paterno"])+"\" class=\"form-control\" minlength=\"2\" maxlength=\"50\" disabled=\"disabled\" />";
                estructura += "</div>";
                estructura += "<div class=\"col-md-3 form-group\" style=\"margin: 0px;\">";
                    estructura += "<input type=\"text\" value=\""+limpiarCaracteres(value["materno"])+"\" class=\"form-control\" minlength=\"2\" maxlength=\"50\" disabled=\"disabled\" />";
                estructura += "</div>";
                estructura += "<div class=\"col-md-3 form-group\" style=\"margin: 0px;\">";
                    estructura += "<input type=\"text\" value=\""+limpiarCaracteres(value["nombres"])+"\" class=\"form-control\" minlength=\"2\" maxlength=\"50\" disabled=\"disabled\" />";
                estructura += "</div>";
            estructura += "</div>";
        estructura += "</div>";
        estructura += "<div class=\"text-right\" style=\"margin-bottom: 10px;\">";
            estructura += "<a style=\"cursor: pointer;\" id=\"pe_"+value["nrodoc"]+"\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span> Eliminar Persona</a>";
        estructura += "</div>";
    });
    $('#divPersonas').html(estructura);
    $.each( personas, function( key, value ) {
        $("#pe_"+value['nrodoc']).click(function () {
            eliminarPersona(value['nrodoc']);
        });
    });
}



function verificarDuplicado(nro){
    var rpta = false;
    if(nro == $('#txt_documento').val()){
        rpta = true;
    }
    if(rpta == false){
        $.each(personas, function(key, value){
            if(value["nrodoc"] == nro){
                rpta = true;   
            }
        });
    }
    return rpta;
}

function eliminarPersona(nro){
    for(i=0;i<personas.length;i++){
        if(personas[i]["nrodoc"] == nro){
            break;
        }
    }
    if(nro != "12345678"){
        $.ajax({
            type: "POST",
            url: PATHURL + 'main_umc/eliminarPersona',
            data: {doc: nro, n:(i+1)},
            dataType: "json"
        });
    }
    if ($('#txt_PDNI').length && $('#txt_Paterno').val().length >= 2 && $('#txt_Materno').val().length >= 2 && $('#txt_PNombres').val().length >= 2){
        var pe = { };
        pe["tipodoc"] = $('#txt_PtipoDoc').val();
        pe["nrodoc"] = $('#txt_PDNI').val();
        pe["paterno"] = $('#txt_Paterno').val();
        pe["materno"] = $('#txt_Materno').val();
        pe["nombres"] = $('#txt_PNombres').val();
        personas.push(pe);
        agregarPersonas();
    }
    var temp = new Array();
    $.each(personas, function(key, value){
        if(nro != value["nrodoc"]){
            var p = { };
            p["tipodoc"] = value["tipodoc"];
            p["nrodoc"] = value["nrodoc"];
            p["paterno"] = value["paterno"];
            p["materno"] = value["materno"];
            p["nombres"] = value["nombres"];
            temp.push(p);
        }
    });
    personas = temp;
    agregarPersonas();
}

function agregarDatosCompromiso(){
    $('#divC_Apellidos').html($('#txt_apepat').val()+" "+$('#txt_apemat').val());
    $('#divC_Nombres').html($('#txt_nombres').val());
    $('#divC_DNI').html($('#txt_documento').val());

    var cmb = "";
    $.each(personas, function(key, value){
        cmb += "<div class=\"row\">";
            cmb += "<div class=\"col-xs-4 text-center\" style=\"word-break: break-word;\">"+value["paterno"]+" "+value["materno"]+"</div>";
            cmb += "<div class=\"col-xs-4 text-center\" style=\"word-break: break-word;\">"+value["nombres"]+"</div>";
            cmb += "<div class=\"col-xs-4 text-center\" style=\"word-break: break-word;\">"+value["nrodoc"]+"</div>";
        cmb += "</div>";  
    });
    $('#divMasPersonas').html(cmb);
}

function checkfile(sender) {
    var validExts = new Array(".xlsx", ".xls");
    var fileExt = sender.value;
    fileExt = fileExt.substring(fileExt.lastIndexOf('.'));
    if (validExts.indexOf(fileExt) < 0) {
		$('#modalMensajeRecibido').html('Archivo inválido. Solo se permite archivos tipo EXCEL');
            $('#modalMensajeInformativo').modal({
            show: 'true'
        });
		$('#archivo').val('');
      return false;
    }
    else return true;
}

function limpiarCaracteres(texto){
    return texto.replace(/[^a-zA-ZáéíóúñÁÉÍÓÚÑ 0-9.üÜ'-]+/g,'');
}

function limpiarEspacios(objeto){
    cad = $(objeto).val();
    cad = cad.replace(/([\ \t]+(?=[\ \t])|^\s+|\s+$)/g, '');
    $(objeto).val(cad);
    $(objeto).blur();
}

function validacaptcha3() {



     $.ajax({

                            type: "POST",
                            url: PATHURL + 'main_umc/service3',
                            data: {captcha:$("#txtcaptcha3").val()},
                            dataType: "json",
                            success: function (data) {
                                if (data.AP_RESULTS == 3){
                                    $(location).attr('href',PATHURL+'main_umc/expiro');
                                    return false;
                                }else if  (data.AP_RESULTS == 2){
                                    recargarCapcha3();
                                    $('#txtcaptcha3').val('');
                                    $('#txtcaptcha3').blur();
                                     $('#modalMensajeRecibido').html(limpiarCaracteres(data.AP_MENSAJE));
                                     $('#modalMensajeInformativo').modal({
                                                show: 'true'
                                     });
                                     return false;
                                    
                                   
                                }else{


                                       $('#frm-formulario').validator('update');
                                       $("#frm-formulario").submit();    
        
                                    return true;


                                }
                            }
                        });
   
}

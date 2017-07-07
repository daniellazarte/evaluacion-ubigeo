
    var arrUbigeo = ["01 Lima//",
                     "01 Lima/50 Lima/",
                     "01 Lima/51 Barranca/",
                     "01 Lima/50 Lima/202 La Molina",
                     "01 Lima/50 Lima/203 San Isidro",
                     "02 Arequipa//",
                     "02 Arequipa/63 Arequipa/",
                     "02 Arequipa/64 Caylloma/",
                     "02 Arequipa/63 Arequipa/267 Cercado"];

    $(document).ready(function () {
        $("#selDepartamento").append('<option value=-1>-----Seleccione-----</option>');
        $("#selProvincia").append('<option value=-1>-----Seleccione-----</option>');
        $("#selDistrito").append('<option value=-1>-----Seleccione-----</option>');

        //Cargar los Departamentos
        for (var i = 0; i < arrUbigeo.length; i++) {
            if (arrUbigeo[i].split("/")[1] == '') {
                $("#selDepartamento").append('<option value=' + arrUbigeo[i].split("/")[0].substring(0, 3) + '>' + arrUbigeo[i].split("/")[0].substring(3, arrUbigeo[i].split("/")[0].length) + '</option>');
            }
        };

        //Cargar las Provincias
        $("#selDepartamento").change(function (event) {
            var id = $("#selDepartamento").find(':selected').val();

            $("#selProvincia option").remove();
            $("#selDistrito option").remove();
            $("#selProvincia").append('<option value=-1>-----Seleccione-----</option>');
            $("#selDistrito").append('<option value=-1>-----Seleccione-----</option>');

            for (var i = 0; i < arrUbigeo.length; i++) {
                if (arrUbigeo[i].split("/")[2] == '' && arrUbigeo[i].split("/")[1] != '' && arrUbigeo[i].split("/")[0].substring(0, 3).trim() == id.trim()) {
                    $("#selProvincia").append('<option value=' + arrUbigeo[i].split("/")[1].substring(0, 3) + '>' + arrUbigeo[i].split("/")[1].substring(3, arrUbigeo[i].split("/")[1].length) + '</option>');
                }
            };
        });

        //Cargar los Distritos
        $("#selProvincia").change(function (event) {
            var idDep = $("#selDepartamento").find(':selected').val();
            var idPro = $("#selProvincia").find(':selected').val();

            $("#selDistrito option").remove();
            $("#selDistrito").append('<option value=-1>-----Seleccione-----</option>');

            for (var i = 0; i < arrUbigeo.length; i++) {
                if (arrUbigeo[i].split("/")[2] != '' && arrUbigeo[i].split("/")[1] != '' &&
                    arrUbigeo[i].split("/")[0].substring(0, 3).trim() == idDep.trim() &&
                    arrUbigeo[i].split("/")[1].substring(0, 3).trim() == idPro.trim()) {
                    $("#selDistrito").append('<option value=' + arrUbigeo[i].split("/")[2].substring(0, 3) + '>' + arrUbigeo[i].split("/")[2].substring(3, arrUbigeo[i].split("/")[2].length) + '</option>');
                }
            };
        });
    });

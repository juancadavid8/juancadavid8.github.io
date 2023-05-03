$(function() {
    // Array para almacenar los productos
    var productos = [];

    // Función para actualizar la tabla de productos
    function actualizarTabla() {
        // Obtenemos la tabla
        var tabla = $("table");

        // Limpiamos la tabla
        tabla.find("tbody").empty();

        // Agregamos los productos a la tabla
        for (var i = 0; i < productos.length; i++) {
            var producto = productos[i];
            var row = "<tr>";
            row += "<td>" + producto.id + "</td>";
            row += "<td>" + producto.nombre + "</td>";
            row += "<td>" + producto.descripcion + "</td>";
            row += "<td>" + producto.precio + "</td>";
            row += "<td>";
            row += "<button type='button' class='btn btn-danger btnEliminarProducto' data-id='" + producto.id + "'>Eliminar</button>";
            row += "</td>";
            row += "</tr>";
            tabla.find("tbody").append(row);
        }
    }

    // Función para agregar un producto
    function agregarProducto() {
        // Obtenemos los valores del formulario
        var nombre = $("#nombre").val();
        var descripcion = $("#descripcion").val();
        var precio = $("#precio").val();

        // Creamos el objeto producto
        var producto = {
            id: productos.length + 1,
            nombre: nombre,
            descripcion: descripcion,
            precio: precio
        };

        // Agregamos el producto al array
        productos.push(producto);

        // Actualizamos la tabla de productos
        actualizarTabla();

        // Cerramos el modal
        $("#agregarProducto").modal("hide");
    }

    // Evento para el botón de agregar producto
    $("#btnAgregarProducto").click(agregarProducto);

    // Evento para el botón de eliminar producto
    $("table").on("click", ".btnEliminarProducto", function() {
        // Obtenemos el id del producto a eliminar
        var id = $(this).data("id");

        // Filtramos el array de productos para obtener el producto a eliminar
        productos = productos.filter(function(producto) {
            return producto.id !== id;
        });

        // Actualizamos la tabla de productos
        actualizarTabla();
    });
});
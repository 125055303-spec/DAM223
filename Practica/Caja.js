let pedidos =[];
let totalAcumulado = 0;

function agregarPedido(producto,precio){ 
    pedidos[pedidos.length]={
        producto:producto,
        precio:precio
    }
    totalAcumulado += precio;
}
agregarPedido("Matcha Latte Helado",100);
agregarPedido("Caramel Frappuccino", 95);

// Mostrar los pedidos en la página
let lista = document.getElementById("listaPedidos");

for (let i = 0; i < pedidos.length; i++) {
    let pedido = document.createElement("p");

    pedido.textContent =
        pedidos[i].producto + " - $" + pedidos[i].precio;

    lista.appendChild(pedido);
}

// Mostrar el total
document.getElementById("total").textContent =
    "Total acumulado: $" + totalAcumulado;
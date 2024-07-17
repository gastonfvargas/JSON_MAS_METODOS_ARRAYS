 
const bicicletasArray = require('./datosBici'); // Importa el array de bicicletas desde datosBici.js

const dhBici = {
    bicicletas: bicicletasArray,
    buscarBici: function (Id) { const bicicletaEncontrada = this.bicicletas.find(bicicleta => bicicleta.Id === Id);
        return bicicletaEncontrada || null;
    },
    venderBici: function (Id) { const bicicletaEncontrada = this.buscarBici(Id);
        return bicicletaEncontrada ? ((bicicletaEncontrada.vendida = 'si'), bicicletaEncontrada) : 'Bicicleta no encontrada';
    },
    biciParaLaVenta: function () { return this.bicicletas.filter(bicicleta => bicicleta.vendida === 'no');
    },

    totalDeVentas: function () {  return this.bicicletas.reduce((total, bicicleta) => bicicleta.vendida === 'si' ? total + bicicleta.precio : total, 0);
    }
};
// Prueba de las funciones
console.log("Buscar Bicicleta:");
console.log(dhBici.buscarBici(2),dhBici.buscarBici(4)); // Buscar una bicicleta por ID

console.log("\nVender Bicicleta:");
console.log(dhBici.venderBici(2),dhBici.venderBici(4))

const cantidad = dhBici.bicicletas.filter(bicicleta => bicicleta.vendida === 'si');
console.log('Cantidad de bicicletas vendidas:', cantidad.length);

console.log("\nBicicletas para la Venta:");
console.log(dhBici.biciParaLaVenta()); 

console.log("\nTotal de Ventas:");
console.log(dhBici.totalDeVentas());

// desafio extra
function aumentoBici(porcentaje) {
    return dhBici.bicicletas.map(bicicleta => {
        const aumentoPrecio = (bicicleta.precio * (1 + porcentaje / 100)).toFixed(2);
        return { ...bicicleta, precio: parseFloat(aumentoPrecio) }; // Convertir el resultado nuevamente a número
    });
}

function biciPorRodado(rodado) {
    return dhBici.bicicletas.filter(bicicleta => bicicleta.rodado === rodado);
}
function listarTodasLasBici() {
    console.log("Listado de todas las bicicletas:");
    dhBici.bicicletas.forEach(bicicleta => {
        console.log(`ID: ${bicicleta.Id}, Modelo: ${bicicleta.modelo}, Rodado: ${bicicleta.rodado}, Precio: ${bicicleta.precio}, Vendida: ${bicicleta.vendida}`);
    });
}
console.log("\nAumento de precios:");
const bicicletasConAumento = aumentoBici(15); 
console.log(bicicletasConAumento);

console.log("\nBicicletas con rodado:");
const bicicletasRodado = biciPorRodado(26);
console.log(bicicletasRodado);

listarTodasLasBici();
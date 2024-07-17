const fs = require("fs")
const path = require("path")
const rutaArchivo = path.join(__dirname, "bicicletas.json");
try {
     const contenido = fs.readFileSync(rutaArchivo, "utf-8")
     const bicicletasArray = JSON.parse(contenido)
     module.exports =  bicicletasArray;
} catch (error) {
    console.error("Ocurrió un error al leer el archivo:", error);
}



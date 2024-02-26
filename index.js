 const dado = {
    lanzarDado: function(tipo){
        return Math.floor(Math.random() * tipo) + 1;
    },
    
    lanzarDadoVeces: function(veces, tipo) {
        const resultado = [];
        Array.from({length: veces}).forEach(() => {
            resultado.push(this.lanzarDado(tipo));
        })      
        return resultado.sort((a, b) => a - b);
    }
};

let tipo = prompt("De cuantas caras va a ser el dado?\n \nESC o esc para salir")


while(tipo !== "ESC" && tipo !== "esc"){
    
        const cantidad = prompt("Cuantas veces vas a lanzar el dado?");
        const resultados = dado.lanzarDadoVeces(cantidad, tipo);
        alert(`Resultados de lanzar el dado ${cantidad} veces:\n${resultados.join(", ")}`);
   
    
        tipo = prompt("De cuantas caras va a ser el dado?\n \nESC para salir")
}



        

 
    
    

export default class App {
    sumatoriaSerieUno(numero){
        let resultado = 0;
        for(let i=1;i<=numero;i++){
            resultado = resultado + (1/i);
        }
        return(resultado);
    }

    sumatoriaSerieDos(numero){
        let resultado = 1, i=2,opc=true;
        while(i<=numero){
            if(opc == true){
                resultado = resultado + (1/i);
                opc = false;
            }
            else{
                resultado = resultado - (1/i);
                opc=true;
            }
            i++;
        }
        return(resultado);
    }

    esPrimo(numero){
        let i=1,contador=0,resultado;
        do{
            if(numero % i == 0)
                contador++;
            i++;
        }while(i<=numero)
        if(contador == 2)
            return(true);
        else
            return(false);
    }
}

let app = new App();
// Prueba metodo sumatoriaSerieUno
console.log("Sumatoria de 6: "+app.sumatoriaSerieUno(6));
console.log("Sumatoria de 2: "+app.sumatoriaSerieUno(2));

// Prueba metodo sumatoriaSerieDos
console.log("Sumatoria de 6: "+app.sumatoriaSerieDos(6));
console.log("Sumatoria de 2: "+app.sumatoriaSerieDos(2));

// Prueba metodo esPrimo
console.log("El numero 3 es primo?: "+app.esPrimo(3));
console.log("El numero 4 es primo?: "+app.esPrimo(4));
console.log("El numero 7 es primo?: "+app.esPrimo(7));
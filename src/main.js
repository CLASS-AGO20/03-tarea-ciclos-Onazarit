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

    obtenerMultiplos(inicio, fin){
        let i = inicio,string = "";
        do{
            if(i % 3 == 0)
                string = string + i;
            i++;
        }while(i<=fin)
        return(string);
    }

    obtenerImpares(numero1, numero2){
        let mayor, menor,string="",opc=false;
        if (numero1 > numero2){
            mayor = numero1;
            menor = numero2;
        }
        else{
            mayor = numero2;
            menor = numero1;
        }
        for(let i = mayor;i>=menor;i--){
            if(i % 2 != 0){
                if(opc == true)
                string = string +","+ i ;
                else{
                    string = string + i ;
                    opc = true;
                }
            }
        }
        return(string);
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

// Prueba metodo obtenerMultiplos
console.log("Del 10 al 25: "+app.obtenerMultiplos(10,25));
console.log("Del 28 al 40: "+app.obtenerMultiplos(28,40));

// Prueba metodo obtenerImpares
console.log("Ciclo 5 y 10: "+app.obtenerImpares(5,10));
console.log("Ciclo 10 y 5: "+app.obtenerImpares(10,5));
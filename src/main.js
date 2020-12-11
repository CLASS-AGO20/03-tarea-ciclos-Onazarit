export default class App {
    sumatoriaSerieUno(numero){
        let resultado = 0;
        for(let i=1;i<=numero;i++){
            resultado = resultado + (1/i);
        }
        return(resultado);
    }
}

let app = new App();
// Prueba metodo sumatoriaSerieUno
console.log("Sumatoria de 6: "+app.sumatoriaSerieUno(6));
console.log("Sumatoria de 2: "+app.sumatoriaSerieUno(2));
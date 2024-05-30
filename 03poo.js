class CuentaBancaria{
    constructor(saldoInicial){
      this.saldo = saldoInicial;
    }
    depositar(cantidad){
     this.saldo += cantidad;
    }
    retirar(cantidad){
        if(cantidad <= this.saldo){
            this.saldo -= cantidad;
            return cantidad;
        }else{
            return'Fondos Insuficientes';  
        }
    }
    verSaldo(){
        return this.saldo;
    }
}

//se crea la instancia de la cuenta inicial de la clase de cuenta bancaria 
const cuenta = new CuentaBancaria(1000);

// Función para actualizar el saldo y mostrar las transacciones
function actualizarPantalla(transaccion, cantidad) {
    const output = document.getElementById('output2');
    const nuevoParrafo = document.createElement('p');
    nuevoParrafo.textContent = `${transaccion}: $${cantidad.toFixed(2)} - Saldo actual: $${cuenta.verSaldo().toFixed(2)}`;
    output.appendChild(nuevoParrafo);
}

// Mostrar el saldo inicial
window.onload = function() { //esto tiene una funcion que cuando se carga todo lo del html se ejecuta
    const output = document.getElementById('output2');
    const saldoInicial = document.createElement('p');
    saldoInicial.textContent = `Saldo inicial: $${cuenta.verSaldo().toFixed(2)}`;
    output.appendChild(saldoInicial);
}

document.getElementById('transactionForm').addEventListener('submit',function(event){
    event.preventDefault();
    const amount = parseFloat(document.getElementById("amount").value);
    const transactionType = document.getElementById('transactionType').value;
    
    if(transactionType === 'deposit'){
        cuenta.depositar(amount);
        actualizarPantalla('Depósito', amount); 
    }else if(transactionType === 'withdrawal'){
        const withdrawalResult = cuenta.retirar(amount);
        if (typeof withdrawalResult === 'string'){
            alert(withdrawalResult);
        }else {
            actualizarPantalla('Retiro', amount);
        }
    }
 //necesito que haga 2 cosas siempre aparezca el saldo y cuando se da retirar o depositar pero que no se borre el dato tengo que pensar mil a{os y programar 5 min 

})
let inputCelsius = document.querySelector('#celsius');
let inputFahrenheit = document.querySelector('#fahrenheit');
let inputKelvin = document.querySelector('#kelvin');
let celsius = 0.0;
let fahrenheit = 0.0;
let kelvin = 0.0;

//Las expresiones regulares sirven para dar la estructura que se espera de una entrada de datos,
    //Comienza con /^ y termina con $/, para decir que revise por completo el string
    //en corchetes se ponen los valores posible sin limite de cantidad y lo que si sea necesario solo un dígito
    //se escribe fuera de corchetes, el operador suma significa que no tiene en cuenta la cantidad de dígitos
    //si se desea usar símbolos reservados es necesario poner \, la linea | significa or
let expresionRegular = /^[-]?[0-9]+(\.)?([0-9]+)?$/;


//Evento de escucha para cuando hay un cambio dentro del input de Celsius
inputCelsius.addEventListener('input', function(event){
    
    if(expresionRegular.test(inputCelsius.value)){
        
        celsius = parseFloat(inputCelsius.value);
        fahrenheit = celsius * 1.8 + 32;
        kelvin = celsius + 273.15;

        inputFahrenheit.value = fahrenheit.toFixed(2);
        inputKelvin.value = kelvin.toFixed(2);
        inputCelsius.setCustomValidity("");

    }else{
        inputCelsius.setCustomValidity("El valor que ingresaste no es valido, solo se admite ##.## o ##");
        inputCelsius.reportValidity();
        inputFahrenheit.value = "";
        inputKelvin.value = "";

    }
});

//Evento de escucha para cuando hay un cambio dentro del input de Fahrenheit
inputFahrenheit.addEventListener('input', function(event){
    
    if(expresionRegular.test(inputFahrenheit.value)){
        
        fahrenheit = parseFloat(inputFahrenheit.value);
        celsius = (fahrenheit - 32)/1.8;
        kelvin = 5/9*(fahrenheit - 32) + 273;

        inputCelsius.value = celsius.toFixed(2);
        inputKelvin.value = kelvin.toFixed(2);
        inputFahrenheit.setCustomValidity("");

    }else{
        inputFahrenheit.setCustomValidity("El valor que ingresaste no es valido, solo se admite ##.## o ##");
        inputFahrenheit.reportValidity();
        inputCelsius.value = "";
        inputKelvin.value = "";

    }
});

inputKelvin.addEventListener('input', function(event){
    //Evento de escucha para cuando hay un cambio dentro del input de kelvin
    
    if(expresionRegular.test(inputKelvin.value)){
        
        kelvin = parseFloat(inputKelvin.value);
        fahrenheit = 9/5*(kelvin - 273) + 32;
        celsius = kelvin - 273.15;

        inputFahrenheit.value = fahrenheit.toFixed(2);
        inputCelsius.value = celsius.toFixed(2);
        inputKelvin.setCustomValidity("");

    }else{
        inputKelvin.setCustomValidity("El valor que ingresaste no es valido, solo se admite ##.## o ##");
        inputKelvin.reportValidity();
        inputFahrenheit.value = "";
        inputCelsius.value = "";

    }
});
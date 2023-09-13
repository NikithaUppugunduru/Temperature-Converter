const celsius=document.getElementById("Celsius");
const fahrenheit=document.getElementById("Fahrenheit");
const kelvin=document.getElementById("Kelvin");
function computeTemp(){
   const currentValue= +event.target.value;

   switch(event.target.name)
   {
    case "Celsius":
        kelvin.value= currentValue+273.15;
        fahrenheit.value=currentValue*1.8+32;
        break;
    case "Fahrenheit":
        kelvin.value=(currentValue-32)/1.8+273.15;
        celsius.value=(currentValue-32)/1.8;
        break;
    case "Kelvin":
        celsius.value=currentValue-273.15;
        fahrenheit.value=(currentValue-273.15)*1.8+32;
        break;
    
   }
}
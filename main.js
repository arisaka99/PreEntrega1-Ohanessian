const cincokg = 10000;
const sietekg= 14000;
const diezkg = 20000

 alert("Te damos la bienvenida a nuestro sitio web de venta de café mayorista")

for (let i = 0; i <5; i++){
 let cafekg=parseInt(prompt("Seleccione el kilogramo de las unidades a comprar (5, 7, 10)"))

 if (cafekg==5) {
    (cafekg=cincokg)
    let cantidad=parseint=prompt("Cuantas unidades desea comprar? (entre 1 y 10)");{
        if (cantidad>=1&&cantidad<=10){
            alert("El valor de su orden es de "+ cantidad + " unidad(es) de 5kg de café, costando $"  + cafekg*cantidad)
            console.log("La transaccion realizada fue de $"+cafekg*cantidad)
            break}
        
        else if ((cantidad<=1)||(cantidad>=10)||(cantidad=isNaN));{
            alert("Error. Su orden debe ser numerica y entre 1 y 10")
        }
    }
 }

 else if (cafekg==7) {
    (cafekg=sietekg)
    let cantidad=parseint=prompt("Cuantas unidades desea comprar? (entre 1 y 10)");{
        if (cantidad>=1&&cantidad<=10){
            alert("El valor de su orden es de "+ cantidad + " unidad(es) de 7kg de café, costando $"  + cafekg*cantidad)
            console.log("La transaccion realizada fue de $"+cafekg*cantidad)
            break}
        
        else if ((cantidad<=1)||(cantidad>=10)||(cantidad=isNaN));{
            alert("Error. Su orden debe ser numerica y entre 1 y 10")
        }
    }
 }

 else if (cafekg==10) {
    (cafekg=diezkg)
    let cantidad=parseint=prompt("Cuantas unidades desea comprar? (entre 1 y 10)");{
        if (cantidad>=1&&cantidad<=10){
            alert("El valor de su orden es de "+ cantidad + " unidad(es) de 10kg de café, costando $"  + cafekg*cantidad)
            console.log("La transaccion realizada fue de $"+cafekg*cantidad)
            break}
        
        else if ((cantidad<=1)||(cantidad>=10)||(cantidad=isNaN));{
            alert("Error. Su orden debe ser numerica y entre 1 y 10")
        }
    }
 }

else if ((cafekg=isNaN)||(cafekg!=5,7,10)){
    ;alert("Error. Debe ser un numero y/o valido")
    }
}


// estoy feliz de haber podido finalizar la pre-entrega, tarde 6 horas y 3 de ellas se me fueron intentando utilizar 
// while, que por alguna razon no pude hacer funcionar. de todas maneras, estoy satisfecho con mi resultado por ahora


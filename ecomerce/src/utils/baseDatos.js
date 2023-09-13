const productos = [
    {id:'1', nombre:'producto 1', categoria:'remeras', precio:'6000', stock:'2', descripcion:'remera dc negra',imagen:'../../../public/img/remeras/remera1.png'},
    {id:'2', nombre:'producto 2', categoria:'remeras', precio:'5800', stock:'5', descripcion:'remera quicksilver azul',imagen:'../../../public/img/remeras/remera2.png'},
    {id:'3', nombre:'producto 3', categoria:'remeras', precio:'6200', stock:'3', descripcion:'remera dc colorida',imagen:'/ecomerce/public/img/Remeras/Remeras3.png'},
    {id:'4', nombre:'producto 4', categoria:'remeras', precio:'6300', stock:'2', descripcion:'remera dc black and white',imagen:'../../../public/img/Remeras/Remera4.png'},
    {id:'5', nombre:'producto 5', categoria:'remeras', precio:'6900', stock:'4', descripcion:'remera quicksilver negra',imagen:'../../../public/img/remeras/remera5.png'},
    {id:'6', nombre:'producto 6', categoria:'remeras', precio:'7000', stock:'6', descripcion:'remera quicksilver azul',imagen:'../../../public/img/remeras/remera6.png'},
    {id:'7', nombre:'producto 7', categoria:'gorras', precio:'2000', stock:'2', descripcion:'gorra polo beige',imagen:'../../../public/img/gorras/gorras1.png'},
    {id:'8', nombre:'producto 8', categoria:'gorras', precio:'1800', stock:'5', descripcion:'gorra polo verde',imagen:'../../../public/img/gorras/gorras2.png'},
    {id:'9', nombre:'producto 9', categoria:'gorras', precio:'2200', stock:'3', descripcion:'gorra polo rosa',imagen:'../../../public/img/gorras/gorras3.png'},
    {id:'10', nombre:'producto 10', categoria:'gorras', precio:'2300', stock:'2', descripcion:'gorra polo marron',imagen:'../../../public/img/gorras/gorras4.png'},
    {id:'11', nombre:'producto 11', categoria:'gorras', precio:'1900', stock:'4', descripcion:'gorra polo negra',imagen:'../../../public/img/gorras/gorras5.png'},
    {id:'12', nombre:'producto 12', categoria:'gorras', precio:'3000', stock:'6', descripcion:'gorra adidas negra',imagen:'../../../public/img/gorras/gorras6.png'},
    {id:'13', nombre:'producto 13', categoria:'buzos', precio:'8000', stock:'2', descripcion:'buzo canguro negro',imagen:'../../../public/img/buzos/buzo1.png'},
    {id:'14', nombre:'producto 14', categoria:'buzos', precio:'8800', stock:'5', descripcion:'buzo canguro lacoste verde',imagen:'../../../public/img/buzos/buzo2.png'},
    {id:'15', nombre:'producto 15', categoria:'buzos', precio:'9200', stock:'8', descripcion:'buzo canguro azul',imagen:'../../../public/img/buzos/buzo3.png'},
    {id:'16', nombre:'producto 16', categoria:'buzos', precio:'9300', stock:'2', descripcion:'buzo overzide blanco',imagen:'../../../public/img/buzos/buzo4.png'},
    {id:'17', nombre:'producto 17', categoria:'buzos', precio:'9900', stock:'4', descripcion:'buzo capucha blanco',imagen:'../../../public/img/buzos/buzo5.png'},
    {id:'18', nombre:'producto 18', categoria:'buzos', precio:'9000', stock:'7', descripcion:'buzo deportivo wilson gris',imagen:'../../../public/img/buzos/buzo6.png'},
]

export default productos





























/*const productos = [remerass,gorras,pantalones,buzos]

const remerass =     
[
    {id:'1', nombre:'producto 1', precio:'6000', stock:'20', descripcion:'',imagen:'/ecomerce/public/img/remerass/remeras1.png'},
    {id:'2', nombre:'producto 2', precio:'5800', stock:'10', descripcion:'',imagen:'/ecomerce/public/img/remerass/remeras2.png'},
    {id:'3', nombre:'producto 3', precio:'6200', stock:'18', descripcion:'',imagen:'/ecomerce/public/img/remerass/remeras3.png'},
    {id:'4', nombre:'producto 4', precio:'6300', stock:'22', descripcion:'',imagen:'/ecomerce/public/img/remerass/remeras4.png'},
    {id:'5', nombre:'producto 5', precio:'6000', stock:'21', descripcion:'',imagen:'/ecomerce/public/img/remerass/remeras5.png'},
    {id:'6', nombre:'producto 6', precio:'5900', stock:'11', descripcion:'',imagen:'/ecomerce/public/img/remerass/remeras6.png'},
]

const gorras = 
[
    {id:'1', nombre:'producto 1', precio:'6000', stock:'20', descripcion:'', imagen:'/ecomerce/public/img/Gorras/Gorras1.png'},
    {id:'2', nombre:'producto 2', precio:'5800', stock:'10', descripcion:'', imagen:'/ecomerce/public/img/Gorras/Gorras2.png'},
    {id:'3', nombre:'producto 3', precio:'6200', stock:'18', descripcion:'', imagen:'/ecomerce/public/img/Gorras/Gorras3.png'},
    {id:'4', nombre:'producto 4', precio:'6300', stock:'22', descripcion:'', imagen:'/ecomerce/public/img/Gorras/Gorras4.png'},
    {id:'5', nombre:'producto 5', precio:'6000', stock:'21', descripcion:'', imagen:'/ecomerce/public/img/Gorras/Gorras5.png'},
    {id:'6', nombre:'producto 6', precio:'5900', stock:'11', descripcion:'', imagen:'/ecomerce/public/img/Gorras/Gorras6.png'},
]

const pantalones = 
[
    {id:'1', nombre:'producto 1', precio:'6000', stock:'20', descripcion:''},
    {id:'2', nombre:'producto 2', precio:'5800', stock:'10', descripcion:''},
    {id:'3', nombre:'producto 3', precio:'6200', stock:'18', descripcion:''},
    {id:'4', nombre:'producto 4', precio:'6300', stock:'22', descripcion:''},
    {id:'5', nombre:'producto 5', precio:'6000', stock:'21', descripcion:''},
    {id:'6', nombre:'producto 6', precio:'5900', stock:'11', descripcion:''},
]

const buzos =     
[
    {id:'1', nombre:'producto 1', precio:'6000', stock:'20', descripcion:'', imagen:'/ecomerce/public/img/Buzos/Buzo1.png'},
    {id:'2', nombre:'producto 2', precio:'5800', stock:'10', descripcion:'', imagen:'/ecomerce/public/img/Buzos/Buzo2.png'},
    {id:'3', nombre:'producto 3', precio:'6200', stock:'18', descripcion:'', imagen:'/ecomerce/public/img/Buzos/Buzo3.png'},
    {id:'4', nombre:'producto 4', precio:'6300', stock:'22', descripcion:'', imagen:'/ecomerce/public/img/Buzos/Buzo4.png'},
    {id:'5', nombre:'producto 5', precio:'6000', stock:'21', descripcion:'', imagen:'/ecomerce/public/img/Buzos/Buzo5.png'},
    {id:'6', nombre:'producto 6', precio:'5900', stock:'11', descripcion:'', imagen:'/ecomerce/public/img/Buzos/Buzo6.png'},
]

export default {remerass,gorras,pantalones,buzos,productos}*/


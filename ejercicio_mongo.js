//1) crear una base de datos llamada empresas
//2) Crear las colecciones "usuarios","empresas","inventario".
//3) Crear 10 usuarios con las propiedades: nombre, apellido, edad, sexo, salario, empresa.

//use empresas
db.usuarios.find()
db.usuarios.insertMany([

    {
        nombre:"Jose",
        apellido: "Romero",
        edad: 25,
        sexo: "M",
        salario: 850,
        empresa: "MMA"
    },
    {
        nombre:"Antonia",
        apellido: "Rivero",
        edad: 35,
        sexo: "F",
        salario: 1850,
        empresa: "MMA"
    },
    {
        nombre:"Miguel",
        apellido: "Santos",
        edad: 55,
        sexo: "M",
        salario: 850,
        empresa: "MMA"
    },
    {
        nombre:"Silvana",
        apellido: "Ricas",
        edad: 35,
        sexo: "F",
        salario: 1500,
        empresa: "ZTE"
    },
    {
        nombre:"Yulimar",
        apellido: "Rojas",
        edad: 20,
        sexo: "F",
        salario: 650,
        empresa: "ZTE"
    },
    {
        nombre:"Pepe",
        apellido: "Sulvaran",
        edad: 28,
        sexo: "M",
        salario: 1000,
        empresa: "ZTE"
    },
    {
        nombre:"Leomar",
        apellido: "Carreño",
        edad: 30,
        sexo: "M",
        salario: 1100,
        empresa: "XYZ"
    },
    {
        nombre:"Rolando",
        apellido: "Carreño",
        edad: 30,
        sexo: "M",
        salario: 1100,
        empresa: "XYZ"
    },
    {
        nombre:"Fabiola",
        apellido: "Manrrique",
        edad: 38,
        sexo: "F",
        salario: 2100,
        empresa: "XYZ"
    },
    {
        nombre:"Tania",
        apellido: "Zampra",
        edad: 52,
        sexo: "F",
        salario: 4100,
        empresa: "XYZ"
    }
])

//4) CRear 10 empresas con las propiedades: nombre, area, cntaidad de empleados, fecha de fundacion.

//use empresas
db.empresas.insertMany([

    {
        nombre:"XYZ",
        area: "Tecnología",
        cantidad_empleados: 30,
        fecha_fundación: 2001
    },
    {
        nombre:"ZTE",
        area: "Análisis de datos",
        cantidad_empleados: 120,
        fecha_fundación: 20010
    },
        {
        nombre:"MMA",
        area: "Fabricación de coches",
        cantidad_empleados: 1500,
        fecha_fundación: 1980
    },
    {
        nombre:"ABC",
        area: "Detergentes",
        cantidad_empleados: 1800,
        fecha_fundación: 1995
    },
    {
        nombre:"TOTAL",
        area: "Calzado",
        cantidad_empleados: 320,
        fecha_fundación: 2009
    },
    {
        nombre:"Carnicos",
        area: "Carniceria",
        cantidad_empleados: 80,
        fecha_fundación: 2020
    },
        {
        nombre:"Textiles MYY",
        area: "Ropa",
        cantidad_empleados: 600,
        fecha_fundación: 2000
    },
    {
        nombre:"OKILL",
        area: "Tecnología",
        cantidad_empleados: 30,
        fecha_fundación: 2010
    },
    
    {
        nombre:"Nenuco",
        area: "Perfumes",
        cantidad_empleados: 120,
        fecha_fundación: 2006
    },
        {
        nombre:"BookFace",
        area: "Librería",
        cantidad_empleados: 11,
        fecha_fundación: 2023
    }
])

//5) Crear 10 invetarios con las propiedades: lista de productos fisicos(nombre, precio),
// lista de productos digitales(nombre,precio), inversion de inventario, costo de venta.
//use empresas
db.inventario.insertMany([

    {
        lista_productos_fisicos:[{nombre:"zapatos"},{precio:120}],
        lista_productos_digitales: [{nombre:"canciones"},{precio:1500}],
        inversion_inventario: 15000,
        costo_venta: 150
    },
    {
        lista_productos_fisicos:[{nombre:"televisores"},{precio:250}],
        lista_productos_digitales: [{nombre:"guias"},{precio:20}],
        inversion_inventario: 1500,
        costo_venta: 10
    },
    {
        lista_productos_fisicos:[{nombre:"tablet"},{precio:100}],
        lista_productos_digitales: [{nombre:"pdf"},{precio:5}],
        inversion_inventario: 800,
        costo_venta: 10
    },
    {
        lista_productos_fisicos:[{nombre:"moviles"},{precio:150}],
        lista_productos_digitales: [{nombre:"videos"},{precio:120}],
        inversion_inventario: 1500,
        costo_venta: 50
    },
    {
        lista_productos_fisicos:[{nombre:"router"},{precio:45}],
        lista_productos_digitales: [{nombre:"fotografias"},{precio:60}],
        inversion_inventario: 1000,
        costo_venta: 50
    },
    {
        lista_productos_fisicos:[{nombre:"cornetas"},{precio:13}],
        lista_productos_digitales: [{nombre:"notas de voz"},{precio:5}],
        inversion_inventario: 200,
        costo_venta: 2
    },
    {
        lista_productos_fisicos:[{nombre:"audífonos"},{precio:60}],
        lista_productos_digitales: [{nombre:"audiolibros"},{precio:15}],
        inversion_inventario: 600,
        costo_venta: 5
    },
    {
        lista_productos_fisicos:[{nombre:"micrófonos"},{precio:60}],
        lista_productos_digitales: [{nombre:"cortos animados"},{precio:150}],
        inversion_inventario: 600,
        costo_venta: 30
    },
    {
        lista_productos_fisicos:[{nombre:"Vacas"},{precio:800}],
        lista_productos_digitales: [{nombre:"stickers"},{precio:2}],
        inversion_inventario: 8000,
        costo_venta: 0.5
    },
        {
        lista_productos_fisicos:[{nombre:"carros"},{precio:25000}],
        lista_productos_digitales: [{nombre:"logos"},{precio:150}],
        inversion_inventario: 2500000,
        costo_venta: 800
    }
])

//6) Trae todos los usuarios que formen parte de una empresa con la informacion de la empresa.

db.usuarios.find()
db.empresas.find()
db.inventario.find()


db.empresas.aggregate([
    {
        $lookup:{
            from: "usuarios", // Coleccion a la que nos unimos
            localField: "nombre", // Campo local que coincide con ForeignField
            foreignField: "empresa", // Campo en la coleccion "users" con el que coincide localField
            as: "empleados_de_empresa" // Nombre del nuevo campo que contendra los documentos combinados
        }
    }
])

//7) Trae todos los usuarios mayores de 35 annos y dales un bono de 150$.

db.usuarios.update(
    {edad:{$gt:35}},
    {$push:{Bonificacion:150}},
    {multi:true}
)

db.usuarios.find({edad:{$gt:35}})


//8) Trae todas las empresas que tengan una cantidad de empleados mayores a 50.
db.empresas.find()
db.empresas.find({cantidad_empleados:{$gt:50}})

//9) Trae todos los usuarios cuyo nombre empiece por "J".
db.usuarios.find()
db.usuarios.find({nombre:/^J/i})

//10) Borra solo dos usuarios cuya edad sea menor a 20.
db.usuarios.remove({edad:{$lt:20}}) //no tengo usuarios menores de 20 años

const express = require('express');
const app = express();
const port = 3000;

const productos = [];
const vehiculos = [];
const marcaVehiculos = ['audi', 'bmw', 'mercedes benz', 'volvo', 'jeep']
const color = ['negro', 'azul', 'rojo', 'gris']

function calcularImpuestosVehiculo(vehiculo){
  if(vehiculo.tipo === 'Gasolina'){
    if(vehiculo.valor <= 50000000){
      return vehiculo.valor * 0.1
    } else if(vehiculo.valor <= 100000000){
      return vehiculo.valor * 0.015
    }else if(vehiculo.valor <= 150000000){
      return vehiculo.valor * 0.025
    }else{
      return vehiculo.valor * 0.035
    }
  }else if(vehiculo.tipo === 'Electrico'){
    return vehiculo.valor * 0.1
  }
}

productos.push({
  id: 1,
  nombre: 'Pan Integral Oganico',
  valor: 5000,
  fechaVencimiento: '2024-12-31',
  categoria : 'Alimentos',
  descripcion: 'Hecho con los mejores granos orgánicos, este pan ofrece un sabor y textura inigualables para una dieta saludable.'
});

productos.push({
  id: 2,
  nombre: 'Cargador Solar Portatil',
  valor: 25000,
  fechaVencimiento: 'Sin Fecha',
  categoria : 'Tecnologia',
  descripcion: 'Cargador portátil con paneles solares eficientes, ideal para cargar dispositivos móviles sin acceso a la red eléctrica.'
});

productos.push({
  id: 3,
  nombre: 'Camiseta Termica',
  valor: 45000,
  fechaVencimiento: 'Sin Fecha',
  categoria : 'Ropa',
  descripcion: 'Camiseta fabricada con materiales que regulan la temperatura corporal, perfecta para deportes en cualquier clima.'
});

productos.push({
  id: 4,
  nombre: 'Café',
  valor: 15000,
  fechaVencimiento: '2024-12-31',
  categoria : 'Alimentos',
  descripcion: 'Selección premium de café arábica, cultivado en las alturas de Chiapas, con notas de chocolate y nuez.'
});

productos.push({
  id: 5,
  nombre: 'Juego de Sartenes',
  valor: 50000,
  fechaVencimiento: 'Sin Fecha',
  categoria : 'Cocina',
  descripcion: 'Set de tres sartenes antiadherentes de alta calidad, ideales para cocinar saludablemente con mínimo aceite.'
});

productos.push({
  id: 6,
  nombre: 'Smartphone',
  valor: 500000,
  fechaVencimiento: 'Sin Fecha',
  categoria : 'Tecnologia',
  descripcion: 'Teléfono inteligente con la última tecnología en procesamiento y cámara de alta definición.'
});

productos.push({
  id: 7,
  nombre: 'Aceite',
  valor: 15000,
  fechaVencimiento: '2024-12-31',
  categoria : 'Alimentos',
  descripcion: 'Aceite de oliva'
});

productos.push({
  id: 8,
  nombre: ' Kit de Herramientas Multifunción',
  valor: 60000,
  fechaVencimiento: 'Sin Fecha',
  categoria : 'Tecnologia',
  descripcion: 'Kit completo de herramientas para reparaciones domésticas y proyectos de bricolaje.'
});

productos.push({
  id: 9,
  nombre: 'Paquete de Calcetines de Compresión',
  valor: 25000,
  fechaVencimiento: 'Sin Fecha',
  categoria : 'Ropa',
  descripcion: 'Calcetines diseñados para mejorar la circulación y reducir la fatiga durante actividades prolongadas.'
});

productos.push({
  id: 10,
  nombre: 'Bolsa de Dormir',
  valor: 150000,
  fechaVencimiento: 'Sin Fecha',
  categoria :'Tecnologia',
  descripcion: 'Bolsa de dormir compacta y ligera, ideal para excursiones y acampadas en condiciones climáticas variables.'
});

productos.push({
  id: 11,
  nombre: 'Pasta Dental',
  valor: 5000,
  fechaVencimiento: '2024-12-31',
  categoria : 'Higiene',
  descripcion: 'Pasta dental que blanquea y purifica los dientes, eliminando manchas y bacterias eficazmente.'
});

productos.push({
  id: 12,
  nombre: 'Reloj Inteligente',
  valor: 120000,
  fechaVencimiento: 'Sin Fecha',
  categoria : 'Tecnologia',
  descripcion: 'Reloj inteligente con funciones avanzadas de seguimiento de la salud y la actividad física.'
});

productos.push({
  id: 13,
  nombre: 'Mochila de Hidratación Montaña',
  valor: 150000,
  fechaVencimiento: 'Sin Fecha',
  categoria : 'Tecnologia',
  descripcion: 'Mochila diseñada para largas caminatas, incluye un sistema de hidratación integrado con capacidad de 2 litros, perfecta para mantenerse hidratado en cualquier aventura.'
});

productos.push({
  id: 14,
  nombre: 'Linterna LED Recargable',
  valor: 75000,
  fechaVencimiento: 'Sin Fecha',
  categoria : 'Tecnologia',
  descripcion: 'Linterna robusta y potente, con capacidad de recarga USB, ofrece iluminación de largo alcance y es esencial para cualquier tipo de excursión nocturna.'
});

productos.push({
  id: 15,
  nombre: 'Tienda de Campaña Ligera',
  valor: 220000,
  fechaVencimiento: 'Sin Fecha',
  categoria : 'Tecnologia',
  descripcion: 'Tienda de campaña para dos personas, ultraligera y fácil de montar, ideal para trekking y campamentos en terrenos variados.'
});

for(let i = 1; i <= 15; i++){
  vehiculos.push({
    id: i,
    marca: marcaVehiculos[Math.floor(Math.random() * marcaVehiculos.length)],
    valor: Math.floor(Math.random() * 100000000),
    cilindraje: Math.floor(Math.random() * 5000) + 1000,
    tipo: Math.random() < 0.5 ? 'electrico' : 'gasolina',
    linea : `linea ${i}`,
    color: color[Math.floor(Math.random() * color.length)]
  });
}

//ENDPOITN PARA LISTAR TODOS LOS PRODUCTOS DEL ARRAY
app.get('/productos', (req, res) => {
  res.json(productos)
});

//ENDPOITN PARA LISTAR LOS PRODUCTOS POR CATEGORIA
app.get('/productos/:categoria', (req, res) => {
  const categoria = req.params.categoria;
  const productosPorCategoria = productos.filter(producto => producto.categoria === categoria);

  res.json(productosPorCategoria)
});

//ENDPOINT PARA LISTAR TODOS LOS VEHICULOS
app.get('/vehiculos', (req, res) => {
  res.json(vehiculos)
});

//ENDPOINT PARA LISTAR LOS PRODUCTOS CON VALOR MAYOR A 10000
app.get('/mayores10000', (req, res) => {
  const productosMayoresDe10000 = productos.filter(producto => producto.valor > 10000)

  res.json(productosMayoresDe10000)
});

//ENDPOINT PARA LISTAR LOS PRODUCTOS Y CALCULAR SU IVA
app.get('/iva', (req, res) => {
  const productosConIva = productos.map(producto => {
    return {
      id: producto.id,
      nombre: producto.nombre,
      valor: producto.valor,
      valorIva: producto.valor * 0.19
    }
  });
  res.json(productosConIva)
});

//ENDPOINT PARA LISTAR LOS VEHICULOS POR MARCA
app.get('/vehiculos/:marca', (req, res) => {
  const marca = req.params.marca;
  const vehiculosPorMarca = vehiculos.filter(vehiculos => vehiculos.marca === marca)

  res.json(vehiculosPorMarca)
});

//ENDPOINT PARA CALCUULAR IMPUESTOS DEL VEHICULOS
app.get('/impuesto', (req, res) => {
  const vehiculosConImpuesto = vehiculos.map(vehiculo => {
    const vehiculoConImpuesto = {...vehiculo};
    vehiculoConImpuesto.impuesto = calcularImpuestosVehiculo(vehiculo);
    return vehiculoConImpuesto;
  })

  res.json(vehiculosConImpuesto)
})

//ENDPOINT PARA TRAER PRODUCTO POR ID
app.get('/producto/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const productoPorId = productos.find(producto => producto.id === id)
  res.json(productoPorId)
})

//ENDPOINT PARA TRAER vehiculo POR ID
app.get('/vehiculo/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const vehiculoPorId = vehiculos.find(producto => producto.id === id)
  res.json(vehiculoPorId)
})

//VEHICULO POR MARCA
app.get('/vehiculo/:marca', (req, res) => {
  const marca = parseInt(req.params.marca);
  const vehiculoPorMarca = vehiculos.find(vehiculo => vehiculo.marca === marca)
  res.json(vehiculoPorMarca)
})

//TIPO DE VEHICULO
app.get('/vehiculo/:tipo', (req, res) => {
  const tipo = parseInt(req.params.tipo);
  const vehiculoPorTipo = vehiculos.find(vehiculo => vehiculo.tipo === tipo)
  res.json(vehiculoPorTipo)
})

//PRODUCTO POR NOMBRE
app.get('/producto/:name', (req, res) => {
  const name = parseInt(req.params.name);
  const productoPorNombre = productos.find(producto => producto.nombre === name)
  res.json(productoPorNombre)
})

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

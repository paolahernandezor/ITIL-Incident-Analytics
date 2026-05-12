const fs = require('fs');

const categorias = ['Software', 'Hardware', 'Redes', 'Seguridad', 'Base de Datos'];
const prioridades = ['Critica', 'Alta', 'Media', 'Baja'];
const incidentes = [];

// Generamos 200 incidentes para tener "Big Data"
for (let i = 1; i <= 200; i++) {
    const prioridad = prioridades[Math.floor(Math.random() * prioridades.length)];
    const categoria = categorias[Math.floor(Math.random() * categorias.length)];
    
    // Simulación de tiempos de resolución (en horas)
    // Las críticas se resuelven rápido pero cuestan más
    const tiempoResolucion = prioridad === 'Critica' ? (Math.random() * 4).toFixed(1) : (Math.random() * 48).toFixed(1);
    
    incidentes.push({
        id: `INC-${1000 + i}`,
        fecha: new Date(2026, 3, Math.floor(Math.random() * 30) + 1).toISOString().split('T')[0],
        categoria: categoria,
        prioridad: prioridad,
        tiempo_resolucion_hrs: parseFloat(tiempoResolucion),
        costo_reparacion: Math.floor(Math.random() * 500) + 50,
        satisfaccion_cliente: Math.floor(Math.random() * 5) + 1
    });
}

fs.writeFileSync('data_incidentes.json', JSON.stringify(incidentes, null, 2));
console.log("¡Sistema de Incidentes generado! 200 registros creados.");
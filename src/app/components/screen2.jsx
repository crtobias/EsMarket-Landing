
export default function Screen2() {
    return (
      <div className="mt-4 mb-4 flex flex-col items-center justify-center bg-blanco px-6 text-center">
        
        {/* Título con mejor tamaño y separación */}
        <h3 className="text-verde text-lg md:text-2xl font-semibold max-w-xl">
          Gestioná tu negocio de manera eficiente
        </h3>
        
        {/* Descripción */}
        <p className="text-verde text-sm md:text-base mt-2 max-w-lg">
          Optimizá la administración de tu negocio con herramientas clave que te permitirán tener el control total de cada aspecto.
        </p>
  
        {/* Lista de Beneficios */}
        <div className="mt-6 space-y-6 text-sm md:text-base text-verde max-w-lg">
          <p>✅ <span className="font-semibold">Control de stock:</span> Mantené un registro preciso de tus productos, evitando faltantes y optimizando la reposición.</p>
          <p>✅ <span className="font-semibold">Control de ventas:</span> Registrá cada transacción en tiempo real para analizar tu desempeño y tomar mejores decisiones.</p>
          <p>✅ <span className="font-semibold">Control de empleados:</span> Gestioná turnos, roles y desempeño del equipo para mejorar la productividad.</p>
          <p>✅ <span className="font-semibold">Historial de ventas:</span> Accedé a informes detallados de tus ventas para evaluar tendencias y mejorar estrategias.</p>
        </div>
  
        {/* Información adicional con iconos */}
        <p className="text-verde text-sm md:text-base mt-8 max-w-lg">
          📱 <span className="font-semibold">Accedé desde cualquier dispositivo</span> sin perder datos, garantizando accesibilidad y seguridad en todo momento.
        </p>
        <p className="text-verde text-sm md:text-base mt-4 mb-6 max-w-lg">
          🔹 Llevá tu negocio al siguiente nivel con una gestión inteligente y eficiente.
        </p>
  
      </div>
    );
  }
  
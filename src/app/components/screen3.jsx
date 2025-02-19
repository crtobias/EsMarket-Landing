

export default function Screen3() {
    const data = [
      {
        text: "Actualización beta: Es Market 0.1.0 ya está listo para probarse.",
        date: "19/2/2025"
      },
      // Puedes agregar más objetos en el futuro
    ];
  
    return (
        <div className="mt-10 mb-10 flex flex-col min-w-full bg-blanco items-center justify-center">
          
          {/* Título con animación fade-in */}
          <h2 className="text-amarillo font-semibold text-xl sm:text-2xl md:text-3xl mb-10 animate__animated animate__fadeIn">
            Últimas Novedades
          </h2>
      
          {/* Descripción con cambio de tamaño de letra */}
          <p className="text-verde w-3/4 text-center mb-16 text-sm sm:text-base md:text-base">
            Descubrí las novedades más recientes de tu gestor de mercados favorito.
          </p>
      
          {/* Listado de novedades */}
          {data.map((item, index) => (
            <div
              key={index}
              className="flex gap-5 p-4 border-b border-t border-gray-500 w-3/4 hover:bg-gray-100 transition-colors duration-300 ease-in-out"
            >
              {/* Texto principal de cada ítem */}
              <p className="text-verde font-semibold text-sm sm:text-base text-center w-3/4">
                {item.text}
              </p>
              
              {/* Fecha con cambio de tamaño de texto */}
              <p className="text-sm text-gray-500 w-1/4 sm:text-base">{item.date}</p>
            </div>
          ))}
      
        </div>
      );
      
  }
  
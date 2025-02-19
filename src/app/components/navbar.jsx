import Image from "next/image";
import icon from "../../../public/iconmarket.png";


export default function Navbar() {
    return (
      <div className="flex justify-between items-center bg-blanco border-b shadow-md px-6 py-4 w-full fixed top-0 z-50">
        {/* Contenedor del logo y versión (Alineado a la izquierda) */}
        <div className="flex items-center gap-2">
          <h1 className="text-verde font-bold text-lg md:text-2xl">Es Market</h1>
          <p className="text-amarillo text-sm md:text-base">0.1.0v</p>
        </div>
  
        {/* Imagen a la derecha con animación */}
        <Image
          src={icon}
          width={50}
          height={50}
          alt="Icono Es Market"
          className="hover:scale-110 transition-all duration-200"
        />
      </div>
    );
  }
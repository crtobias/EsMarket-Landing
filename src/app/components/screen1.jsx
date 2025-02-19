import Image from "next/image";
import icon from "../../../public/iconmarket.png";



export default function Screen1() {
  return (
    <div className=" gap-6 h-screen -mt-12 border flex flex-col items-center justify-center bg-blanco text-center px-6">
      {/* Ícono con animación */}
      <Image
        src={icon}
        width={150}
        height={150}
        alt="Icono Es Market"
        className="animate-fadeIn mb-16"
      />

      {/* Título */}
      <h2 className="text-2xl md:text-3xl text-amarillo font-semibold ">
        La app gratuita para tu comercio
      </h2>

      {/* Descripción */}
      <p className="text-verde text-sm md:text-base  max-w-lg">
        Tu negocio en un solo lugar. Controla stock, ventas, empleados y precios fácilmente. ¡Todo gratis!
      </p>

      {/* Botón con efecto */}
      <a href="https://drive.usercontent.google.com/download?id=1hepafFJDRcUuMRuNQOnhU1h2DjQdW543&export=download&authuser=1&confirm=t&uuid=7005b92e-7fc3-47ef-aa14-1ffeba188c92&at=AEz70l6Ofz3yf5x0ua_iSai1RHgD%3A1740000450072"
        target="_blank"
        rel="noopener noreferrer">
        <button className="bg-verdeoscuro mt-14 text-white p-3 rounded-lg shadow-lg transition-all duration-300 hover:bg-verde hover:scale-110">
          Descargar Apk
        </button>
      </a>



      <a href="https://drive.google.com/file/d/1hepafFJDRcUuMRuNQOnhU1h2DjQdW543/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer">
        <p className="mt-10 text-verde opacity-30 font-thin text-sm hover:opacity-100 transition-opacity duration-300">
          Archivo en drive
        </p>
      </a>


    </div>
  );
}
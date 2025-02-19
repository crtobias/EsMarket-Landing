import Image from "next/image";
import icon from "../../../public/iconmarket.png";



export default function Footer() {
    return (
        <div className="border-t  border-gray-400 h-9 mt-4 flex flex-row justify-between min-w-full bg-blanco p-10 items-center">
          
          {/* Contenedor de los textos con espaciado y tamaño responsivo */}
          <div className="flex flex-col text-black gap-2 sm:text-base md:text-lg">
            <p className="text-sm sm:text-base hover:text-verdeoscuro transition-colors duration-300">
              📍 Ubicación: Buenos Aires, Argentina
            </p>
            <p className="text-sm sm:text-base hover:text-verdeoscuro transition-colors duration-300">
              📧 Contacto: tgonzalezarriola@gmail.com
            </p>
          </div>
      
          {/* Icono con animación de suavizado y tamaño responsivo */}
          <Image
            src={icon}
            width={50}
            height={50}
            alt="Icon Es Market"
            className="transform transition duration-300 hover:scale-110"
          />
        </div>
      );
      
}
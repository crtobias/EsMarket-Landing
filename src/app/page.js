
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Screen1 from "./components/screen1";
import Screen2 from "./components/screen2";
import Screen3 from "./components/screen3";

export default function Home() {
  return (
    <div className="bg-blanco p-4 flex flex-col items-center justify-center min-h-screen">


      {/* Navbar */}
      <div className="w-full fixed top-0 z-50 bg-blanco shadow-md">
        <Navbar />
      </div>

      {/* Espaciado para evitar que el Navbar tape contenido */}
      <div className="pt-16 w-full max-w-4xl">
        <Screen1 />
        <Screen2 />
        <Screen3 />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}


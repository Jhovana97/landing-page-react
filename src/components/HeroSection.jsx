import { Link } from "react-router-dom";

export default function HeroSection() {
    return (
        <section className="h-[calc(100vh-96px)] flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-transparent">
            {/* Texto */}
            <div className="max-w-xl text-center md:text-left">
                <h1 className="text-5xl md:text-6xl font-extrabold text-sky-900 mb-2">
                    Jhovana Landing
                </h1>
                <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
                    ¡CREATIVA!
                </h2>
                <p className="text-sky-950 mb-6 text-lg">
                    Bienvenida a mi espacio donde combino arte, código y aprendizaje.
                    Aquí encontrarás mis proyectos, ideas y clases de programación.
                    ¡Explora y conecta conmigo!
                </p>

                <Link
                    to="/proyectos"
                    className="bg-sky-800 text-white px-6 py-3 rounded-md shadow hover:bg-sky-900 font-semibold transition"
                >
                    Ver mis proyectos
                </Link>

                {/* Íconos */}
                <div className="flex justify-center md:justify-start space-x-6 mt-8 text-3xl">
                    <i className="bx bxl-github text-sky-900 hover:text-blue-700 transition cursor-pointer"></i>
                    <i className="bx bxl-linkedin text-sky-900 hover:text-blue-500 transition cursor-pointer"></i>
                    <i className="bx bxl-behance text-sky-900 hover:text-pink-500 transition cursor-pointer"></i>
                </div>
            </div>

            {/* Imagen */}
            <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
                <img
                    src="https://enviworldbox.com/wp-content/uploads/2024/01/chica-guapa-alegre-divertida-que-muestra-promocion-increible-apuntando-esquina-superior-izquierda-sosteniendo-mano-cadera-sonriendo-ampliamente-asombro-curiosidad-pie-fondo-blanco-entusiasta-892x1024.png"
                    className="rounded-[40%] shadow-lg max-h-[500px] object-cover"
                    alt="Hero"
                />
                
            </div>
        </section>
    );
}

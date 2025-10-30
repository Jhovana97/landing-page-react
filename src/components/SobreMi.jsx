// src/components/SobreMi.jsx
import { motion } from "framer-motion";

export default function SobreMi() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-yellow-100 via-pink-50 to-sky-100 px-10 py-16">
            
            {/* Contenedor principal: avatar + texto */}
            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl">
                {/* Avatar animado */}
                <motion.img
                    src="https://cdn-icons-png.flaticon.com/512/706/706830.png"
                    alt="Avatar artista"
                    className="w-56 h-56 rounded-full shadow-2xl border-4 border-yellow-300 mb-8 md:mb-0 md:mr-12"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                />

                {/* Texto animado */}
                <motion.div
                    className="max-w-xl text-center md:text-left"
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                >
                    <h2 className="text-4xl font-extrabold text-sky-900 mb-4">
                        Sobre mí 🌸
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        ¡Hola! Soy <span className="font-semibold text-sky-800">Jhovana</span>,
                        una mente curiosa y creativa apasionada por el arte, la tecnología
                        y la enseñanza. Me encanta combinar colores, ideas y código para
                        crear experiencias únicas.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Actualmente estoy explorando el desarrollo web con
                        <span className="font-semibold text-pink-600"> React</span> y
                        <span className="font-semibold text-yellow-600"> Tailwind CSS</span>,
                        buscando siempre formas innovadoras de enseñar y compartir
                        conocimiento.
                    </p>
                </motion.div>
            </div>

            {/* Timeline animado debajo */}
            <motion.div
                className="w-full max-w-5xl mt-10 text-left border-l-4 border-sky-300 pl-6 space-y-4"
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            >
                <p>🎓 2023 - Comencé mi camino en el desarrollo web</p>
                <p>💡 2024 - Creé mis primeros proyectos con React</p>
                <p>🚀 2025 - Empecé a enseñar programación creativa</p>
            </motion.div>

            {/* Habilidades/tecnologías animadas */}
            {/* <motion.div
                className="mt-10 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
            >
                <h3 className="text-2xl font-bold text-sky-900 mb-6">Mis habilidades</h3>
                <div className="flex justify-center gap-8 text-4xl text-sky-700">
                    <i className="bx bxl-html5 hover:text-orange-500 transition"></i>
                    <i className="bx bxl-css3 hover:text-blue-500 transition"></i>
                    <i className="bx bxl-javascript hover:text-yellow-400 transition"></i>
                    <i className="bx bxl-react hover:text-sky-500 transition"></i>
                    <i className="bx bxl-git hover:text-red-500 transition"></i>
                </div>
            </motion.div> */}

        </section>
    );
}

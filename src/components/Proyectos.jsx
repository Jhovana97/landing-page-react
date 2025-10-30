import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Proyectos() {
    const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

    const proyectos = [
        {
            id: 1,
            titulo: "Landing Creativa",
            descripcion:
                "Una página colorida hecha con React y Tailwind, ideal para mostrar creatividad y diseño.",
            detalles:
                "Este proyecto fue mi primer experimento con React y Tailwind. Está diseñado como una landing page moderna, con animaciones suaves, íconos y estructura responsive.",
            imagen: "https://cdn-icons-png.flaticon.com/512/906/906343.png",
            link: "#",
        },
        {
            id: 2,
            titulo: "App de Tareas",
            descripcion:
                "Aplicación para organizar tareas diarias, creada con React y almacenamiento local.",
            detalles:
                "Permite crear, marcar y eliminar tareas. Utiliza hooks como useState y useEffect para manejar el estado y almacenamiento local, todo con una interfaz moderna.",
            imagen: "https://cdn-icons-png.flaticon.com/512/2344/2344121.png",
            link: "#",
        },
        {
            id: 3,
            titulo: "Mini Juego de Memoria",
            descripcion:
                "Proyecto divertido con lógica JavaScript y animaciones interactivas.",
            detalles:
                "Desarrollado con React y CSS para practicar lógica y animaciones. Incluye un contador de intentos, reinicio de partida y efectos visuales atractivos.",
            imagen: "https://cdn-icons-png.flaticon.com/512/5612/5612019.png",
            link: "#",
        },
        {
            id: 4,
            titulo: "Portfolio Personal",
            descripcion:
                "Diseño moderno para mostrar mis proyectos, habilidades y contacto profesional.",
            detalles:
                "Creado con React, Tailwind y Framer Motion. Incluye secciones animadas, scroll suave y un diseño totalmente responsive para móviles y escritorio.",
            imagen: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            link: "#",
        },
        {
            id: 5,
            titulo: "Blog Interactivo",
            descripcion:
                "Un blog moderno que permite leer, comentar y compartir artículos técnicos.",
            detalles:
                "Creado con React y JSON Server para simular una API. Los usuarios pueden agregar o eliminar comentarios, y los posts se cargan dinámicamente.",
            imagen: "https://cdn-icons-png.flaticon.com/512/1828/1828961.png",
            link: "#",
        },
        {
            id: 6,
            titulo: "E-commerce Demo",
            descripcion:
                "Una tienda online con carrito de compras, filtros y simulación de pagos.",
            detalles:
                "Construida con React, Context API y Tailwind. Permite agregar productos al carrito, ver totales y filtrar por categorías, todo con diseño adaptativo.",
            imagen: "https://cdn-icons-png.flaticon.com/512/891/891462.png",
            link: "#",
        },
    ];

    return (
        <section className="min-h-screen bg-gradient-to-b from-yellow-100 via-sky-50 to-pink-100 px-8 py-16 text-center">
            <h2 className="text-4xl font-extrabold text-sky-900 mb-10">
                Mis Proyectos 🚀
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
                {proyectos.map((p) => (
                    <motion.div
                        key={p.id}
                        className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <motion.img
                            src={p.imagen}
                            alt={p.titulo}
                            className="w-32 h-32 mx-auto mb-4 transition-transform duration-300 hover:scale-110"
                        />
                        <h3 className="text-2xl font-bold text-sky-800 mb-3">
                            {p.titulo}
                        </h3>
                        <p className="text-gray-700 mb-4">{p.descripcion}</p>
                        <button
                            onClick={() => setProyectoSeleccionado(p)}
                            className="bg-sky-600 text-white px-5 py-2 rounded-full hover:bg-sky-800 transition"
                        >
                            Ver más
                        </button>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {proyectoSeleccionado && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-2xl text-left relative"
                            initial={{ scale: 0.7 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.7 }}
                            transition={{ duration: 0.3 }}
                        >
                            <button
                                onClick={() => setProyectoSeleccionado(null)}
                                className="absolute top-3 right-3 text-sky-700 font-bold text-xl hover:text-red-500"
                            >
                                ✕
                            </button>
                            <img
                                src={proyectoSeleccionado.imagen}
                                alt={proyectoSeleccionado.titulo}
                                className="w-32 h-32 mx-auto mb-4"
                            />
                            <h3 className="text-2xl font-bold text-sky-800 mb-2">
                                {proyectoSeleccionado.titulo}
                            </h3>
                            <p className="text-gray-700 mb-4">
                                {proyectoSeleccionado.detalles}
                            </p>
                            <a
                                href={proyectoSeleccionado.link}
                                className="block text-center bg-sky-700 text-white px-5 py-2 rounded-full hover:bg-sky-900 transition"
                            >
                                Ver proyecto completo
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

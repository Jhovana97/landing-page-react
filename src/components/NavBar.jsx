import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center px-8 md:px-20 py-4 bg-sky-300 shadow-lg relative">
            {/* Logo */}
            <img
                className="w-16 h-16 md:w-20 md:h-20"
                src="https://cdn-icons-png.flaticon.com/512/1057/1057248.png"
                alt="Logo"
            />

            {/* Menú principal en pantallas grandes */}
            <ul className="hidden md:flex space-x-8 text-lg font-medium">
                <li><a href="/" className="hover:text-sky-900 transition">Inicio</a></li>
                <li><a href="/sobre-mi" className="hover:text-sky-900 transition">Sobre mí</a></li>
                <li><a href="/proyectos" className="hover:text-sky-900 transition">Proyectos</a></li>
                <li><a href="/cursos" className="hover:text-sky-900 transition">Cursos</a></li>
                <li><a href="/contacto" className="hover:text-sky-900 transition">Contacto</a></li>
            </ul>

            {/* Ícono hamburguesa (solo móvil) */}
            <button
                className="md:hidden text-3xl text-sky-900"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? (
                    <i className="bx bx-x"></i> // ícono de cerrar
                ) : (
                    <i className="bx bx-menu"></i> // ícono hamburguesa
                )}
            </button>

            {/* Menú desplegable móvil */}
            {isOpen && (
                <ul className="absolute top-24 left-0 w-full bg-sky-200 flex flex-col items-center space-y-6 py-6 text-lg font-medium shadow-md md:hidden z-50">
                    <li><a href="/" className="hover:text-sky-900 transition" onClick={() => setIsOpen(false)}>Inicio</a></li>
                    <li><a href="/sobre-mi" className="hover:text-sky-900 transition" onClick={() => setIsOpen(false)}>Sobre mí</a></li>
                    <li><a href="/proyectos" className="hover:text-sky-900 transition" onClick={() => setIsOpen(false)}>Proyectos</a></li>
                    <li><a href="/cursos" className="hover:text-sky-900 transition" onClick={() => setIsOpen(false)}>Cursos</a></li>
                    <li><a href="/contacto" className="hover:text-sky-900 transition" onClick={() => setIsOpen(false)}>Contacto</a></li>
                </ul>
            )}
        </nav>
    );
}

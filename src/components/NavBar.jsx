import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 md:px-20 py-4 bg-sky-300 shadow-lg">
            <img
                className="w-16 h-16 md:w-20 md:h-20"
                src="https://cdn-icons-png.flaticon.com/512/1057/1057248.png"
                alt="Logo"
            />
            <ul className="flex space-x-6 md:space-x-8 text-lg font-medium">
                <li>
                    <Link to="/" className="hover:text-sky-900 transition">
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link to="/sobre-mi" className="hover:text-sky-900 transition">
                        Sobre mí
                    </Link>
                </li>
                <li>
                    <Link to="/proyectos" className="hover:text-sky-900 transition">
                        Proyectos
                    </Link>
                </li>
                <li>
                    <Link to="/cursos" className="hover:text-sky-900 transition">
                        Cursos
                    </Link>
                </li>
                <li>
                    <Link to="/contacto" className="hover:text-sky-900 transition">
                        Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

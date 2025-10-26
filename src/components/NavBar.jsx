export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 md:px-20 py-4 bg-sky-300 shadow-lg">
            <img
                className="w-16 h-16 md:w-20 md:h-20"
                src="https://cdn-icons-png.flaticon.com/512/1057/1057248.png"
                alt="Logo"
            />
            <ul className="flex space-x-6 md:space-x-8 text-lg font-medium">
                <li><a href="#" className="hover:text-sky-900 transition">Inicio</a></li>
                <li><a href="#" className="hover:text-sky-900 transition">Sobre nosotros</a></li>
                {/* <li><a href="#" className="hover:text-sky-900 transition">Info</a></li> */}
                <li><a href="#" className="hover:text-sky-900 transition">Servicios</a></li>
                <li><a href="#" className="hover:text-sky-900 transition">Contactos</a></li>
            </ul>
        </nav>
    );
}

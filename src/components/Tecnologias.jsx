export default function Tecnologias() {
    return (
        <section className="py-12 text-center shadow-md bg-gradient-to-r from-yellow-100 via-pink-100 to-sky-50">
            <h3 className="text-2xl md:text-3xl font-bold text-sky-900 mb-8">Tecnologías que uso</h3>
            <div className="flex justify-center flex-wrap gap-10 text-5xl md:text-6xl text-sky-700">
                <i className="bx bxl-html5 tech-icon hover:text-orange-500"></i>
                <i className="bx bxl-css3 tech-icon hover:text-blue-500"></i>
                <i className="bx bxl-javascript tech-icon hover:text-yellow-400"></i>
                <i className="bx bxl-react tech-icon hover:text-sky-500"></i>
                <i className="bx bxl-git tech-icon hover:text-red-500"></i>
            </div>

            {/* Animaciones CSS personalizadas */}
            <style>
                {`
        .tech-icon {
            transition: transform 0.3s ease, color 0.3s ease;
            animation: bounceSlow 2s infinite;
            background: white;
            padding: 10px;
            border-radius: 50%;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .tech-icon:hover {
            transform: scale(1.25);
        }

        @keyframes bounceSlow {
            0%, 100% {
            transform: translateY(0);
            }
            50% {
            transform: translateY(-10px);
            }
        }
        `}
            </style>
        </section>

//     <section className="py-12 text-center shadow-md bg-gradient-to-r from-yellow-100 via-pink-100 to-sky-50">
//       <h3 className="text-2xl md:text-3xl font-bold text-sky-900 mb-8">Tecnologías que uso</h3>
//       <div className="flex justify-center flex-wrap gap-10 text-5xl md:text-6xl text-sky-700">
//         <i className="bx bxl-html5 hover:text-orange-500 transform hover:scale-125 transition-all duration-300 cursor-pointer shadow-lg p-2 rounded-full bg-white"></i>
//         <i className="bx bxl-css3 hover:text-blue-500 transform hover:scale-125 transition-all duration-300 cursor-pointer shadow-lg p-2 rounded-full bg-white"></i>
//         <i className="bx bxl-javascript hover:text-yellow-400 transform hover:scale-125 transition-all duration-300 cursor-pointer shadow-lg p-2 rounded-full bg-white"></i>
//         <i className="bx bxl-react hover:text-sky-500 transform hover:scale-125 transition-all duration-300 cursor-pointer shadow-lg p-2 rounded-full bg-white"></i>
//         <i className="bx bxl-git hover:text-red-500 transform hover:scale-125 transition-all duration-300 cursor-pointer shadow-lg p-2 rounded-full bg-white"></i>
//       </div>
//     </section>

    );
}

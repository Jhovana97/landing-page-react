import { h1 } from "framer-motion/client";

export default function Practica() {
    const[open, setOpen] = useState(false);
    return (
        
        <div>
            <h1></h1>
        
            <button onClick={()=> setOpen(!open)}></button>
        </div>
    );
}
import React, { useRef, useState, useEffect, useContext } from "react"
import { LayoutContext } from "../Layout";
import useMousePosition from "./useMousePosition";


export const Cursor = () => {
    const {clientX, clientY } = useMousePosition();

    const [cursor] = useContext(LayoutContext);
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
      const handleMouseEnter = () => setIsVisible(true);
      const handleMouseLeave = () => setIsVisible(false);
      document.body.addEventListener("mouseenter", handleMouseEnter);
      document.body.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        document.body.removeEventListener("mouseenter",   handleMouseEnter);
        document.body.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, []);
    
    const inputCursor = useRef(null);

    return ( 
        <React.Fragment>
            <div 
                ref={inputCursor} 
                className="w-3.5 h-3.5 rounded-lg bg-white pointer-events-none absolute"
                style={{
                    left: clientX,
                    top: clientY,
                    transform: `translate(-50%, -50%) scale(${cursor.active ? 2.5 : 1})`,
                    transition: "all 60ms ease",
                    zIndex: "250",
                }}     
            >
            </div>
        </React.Fragment>
    )
}
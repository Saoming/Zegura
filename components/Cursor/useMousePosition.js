import React, { useEffect, useState } from "react"


const useMousePosition = () => {

    const [position, setPosition] = useState({
        clientX: 0,
        clientX: 0,
    });
    
    const updatePosition = event => {
        const { pageX, pageY, clientX, clientY} = event;
        
        setPosition({
            clientX,
            clientY,
        });
    }
    
    useEffect( () => {

        document.addEventListener("mousemove", updatePosition);
        document.addEventListener("mouseenter", updatePosition);
        document.addEventListener("mouseleave", updatePosition);
        document.addEventListener("mouseout", updatePosition);
        document.addEventListener("mouseup", updatePosition);
        document.addEventListener("mouseover", updatePosition);
                
        return () => {
            document.removeEventListener("mousemove", updatePosition);
            document.removeEventListener("mouseenter", updatePosition);
            document.removeEventListener("mouseleave", updatePosition);
            document.removeEventListener("mouseout", updatePosition);
            document.removeEventListener("mouseup", updatePosition);
            document.removeEventListener("mouseover", updatePosition);
        }
    }, [setPosition])

    return position;
}

export default useMousePosition
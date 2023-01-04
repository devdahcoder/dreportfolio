import { useEffect, useState } from "react";

export const useCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    const [cursorType, setCursorType] = useState<string>("")

    useEffect(() => {
        let isSubscribed = true;

        const mouseMoveHandler = (event: any) => {
            const { clientX, clientY } = event;
            console.log("mouseY ==>, mouseX ==>", clientX, clientY);
            setMousePosition({ x: clientX, y: clientY });
        };

        if (isSubscribed) {
            window.addEventListener("mousemove", mouseMoveHandler);
        }

        return () => {
            isSubscribed = false;
            window.removeEventListener("mousemove", mouseMoveHandler);
        };
    }, []);

    return { mousePosition, cursorType, setCursorType };
}
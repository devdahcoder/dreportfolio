import { useEffect, useState } from "react";

export const useCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorType, setCursorType] = useState<string>("")

    useEffect(() => {
        let isSubscribed = true;

        const mouseMoveHandler = (event: any) => {
            const { clientX, clientY } = event;
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
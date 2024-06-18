import { useEffect, useState } from "react";

// export const useCursor = () => {
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//     const [cursorType, setCursorType] = useState<string>("")

//     useEffect(() => {
//         let isSubscribed = true;

//         const mouseMoveHandler = (event: any) => {
//             const { clientX, clientY } = event;
//             setMousePosition({ x: clientX, y: clientY });
//         };

//         if (isSubscribed) {
//             window.addEventListener("mousemove", mouseMoveHandler);
//         }

//         return () => {
//             isSubscribed = false;
//             window.removeEventListener("mousemove", mouseMoveHandler);
//         };
//     }, []);

//     return { mousePosition, cursorType, setCursorType };
// }

type MousePosition = {
    x: number;
    y: number;
};

export const useCursorHook = () => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
    const [cursorType, setCursorType] = useState<string>("");

    useEffect(() => {
        const mouseMoveHandler = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            setMousePosition({ x: clientX, y: clientY });
        };

        window.addEventListener("mousemove", mouseMoveHandler);

        return () => {
            window.removeEventListener("mousemove", mouseMoveHandler);
        };
    }, []);

    return { mousePosition, cursorType, setCursorType };
}


export const usePercentageLoaderHook = () => {
    const [loadingPercentage, setLoadingPercentage] = useState<number>(0);
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        let isMounted = true;
        const interval = setInterval(() => {
            setLoadingPercentage((prevPercentage) => {
                if (prevPercentage >= 100) {
                    clearInterval(interval);
                    setIsLoaded(true);
                    return 100;
                }
                return prevPercentage + 1;
            });
        }, 50);
        return () => {
            isMounted = false;
            clearInterval(interval);
        };
    }, []);

    return { loadingPercentage, isLoaded }
}
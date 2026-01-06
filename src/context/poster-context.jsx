
import { createContext, useState } from "react";

const PosterContext = createContext();

function PosterProviderWrapper({ children }) {
    const [poster, setPoster] = useState({});

    return (
        <PosterContext.Provider value={{ poster, setPoster }}>
            {children}
        </PosterContext.Provider>
    );
}

export { PosterContext, PosterProviderWrapper};
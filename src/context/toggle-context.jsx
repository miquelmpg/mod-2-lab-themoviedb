
import { createContext, useState } from "react";

const ToggleContext = createContext();

function ToggleProviderWrapper({ children }) {
    const [toggle, setToggle] = useState(true);

    return (
        <ToggleContext.Provider value={{ toggle, setToggle }}>
            {children}
        </ToggleContext.Provider>
    );
}

export { ToggleContext, ToggleProviderWrapper };
import React, { createContext, useState } from "react";
import { Cursor } from "../Cursor";
import { Seo } from "../SEO";

export const LayoutContext = createContext();

export const Layout = ({ seo, children }) => {

    const [cursor, setCursor] = useState({ active: false });

    return (
    <LayoutContext.Provider value={[cursor, setCursor]}>
        <Seo {...seo} />
        <main>{children} </main>
        <Cursor />
    </LayoutContext.Provider>
    )
}

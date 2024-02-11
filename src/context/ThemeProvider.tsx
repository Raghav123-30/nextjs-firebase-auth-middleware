"use client"
import {ThemeProvider as NextThemesProvider} from "next-themes"
import React from "react";


export default function ThemeProvider({children}: { children: React.ReactNode }) {

    return <NextThemesProvider defaultTheme="dark"
                               attribute="class" enableSystem={true} >
        {children}
    </NextThemesProvider>
}
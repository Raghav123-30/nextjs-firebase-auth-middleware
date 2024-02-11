"use client"

import {NextUIProvider as UIProvider} from "@nextui-org/react";
import React from "react";

export default function Provider({children}:{children:React.ReactNode}) {
    return (
        <UIProvider>
            {children}
        </UIProvider>
    );
}

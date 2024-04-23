import React from "react";
import { UnProtect } from "../security/unprotect";

export default function Layout({ children }) {
    return (

        <UnProtect>
            {children}
        </UnProtect>
    );
}
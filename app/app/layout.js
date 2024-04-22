import React from "react";
import { Protect } from "../security/protect";

export default function Layout({ children }) {
    return (

        <Protect>
            {children}
        </Protect>
    );
}

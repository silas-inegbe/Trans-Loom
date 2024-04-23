import React from "react";
import AuthCheck from "../components/authCheck";
// import { useRouter } from "next/navigation";

export default function Layout({ children }) {

    return (
        <AuthCheck>
            {children}
        </AuthCheck>)
}

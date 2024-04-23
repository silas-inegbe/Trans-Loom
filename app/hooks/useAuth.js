"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { isAuthenticated } from "../lib/helper/authUtils";

const useAuth = () => {
    const router = useRouter();
    useEffect(() => {
        // check if user is authenticated
        const isAuth = isAuthenticated();
        // if not, redirect to login page
            if (!isAuth) {
        router.replace("/login");
        }
    }, [isAuthenticated, router]);
    return isAuthenticated();
    };
export default useAuth;
"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../context/usercontext";
import LoadingComp from "../loading";

const UnProtect = ({ children }) => {
    const { user } = useUser();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user !== null || (user && user.user.role === "authenticated")) {
            // return to where youa re coming from
            router.back();
        } else {
            setLoading(false);
        }
    }, [user, router]); // Added user and router to the dependency array
    console.log("user001-", user)
    if (loading) {
        return <LoadingComp />; // Added conditional rendering for the loading component
    }

    return children;
};

export { UnProtect };

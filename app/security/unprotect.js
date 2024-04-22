"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../context/usercontext";
import LoadingComp from "../loading";

const unProtect = ({ children }) => {
    const { user } = useUser();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user && user.user.role === "authenticated") {
            router.push("/login");
        } else {
            setLoading(false);
        }
    }, [user, router]); // Added user and router to the dependency array
    console.log("user00-", user)
    if (loading) {
        return <LoadingComp />; // Added conditional rendering for the loading component
    }

    return children;
};

export { unProtect };

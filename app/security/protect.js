"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../context/usercontext";
import LoadingComp from "../loading";

const Protect = ({ children }) => {
    // const { user } = useUser();
    const data = process.env.NEXT_AUTH_TOKEN;
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem(data))
        if (user === null || (user && user.user.role !== "authenticated")) {
            router.push("/login");
        } else {
            setLoading(false);
        }
    }, [data]);

    if (loading) {
        return <LoadingComp />;
    }

    return children;
};


export { Protect };

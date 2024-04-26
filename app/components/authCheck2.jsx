"use client";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/helper/supabaseClient";
import { useEffect, useState } from "react";
import LoadingComp from "../loading";

const AuthCheck2 = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if ( user === null){
      setLoading(false);
    } else {
      router.replace('/app')
    }
  }
  useEffect(() => {
    getUser();
  }, [router]);
    return loading ? <LoadingComp /> : children;
  };

  export default AuthCheck2;
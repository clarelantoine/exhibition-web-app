"use client";
// import { isAuthenticated } from "@/Utils/Auth";
import { useContext, useEffect } from "react";
import { redirect } from "next/navigation";
import { UserContext } from "@/contexts/user.context";


export default function protectedRoute(Component) {
  return function ProtectedRoute(props) {

    const {currentUser}  = useContext(UserContext)

    useEffect(() => {
        
      if (currentUser) {
        // return redirect("/");
        console.log(currentUser);
      }
    }, [currentUser]);

    return <Component {...props} />;
  };
}
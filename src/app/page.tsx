"use client"
import {Button} from "@nextui-org/react";
import {useAuth} from "@/context/AuthProvider";

export default function Home() {
   const {logOut} = useAuth()
    return (<div className="flex flex-col min-h-screen justify-center items-center gap-3 ">

        <Button variant={"solid"} color={"secondary"} onClick={logOut}>Logout</Button>

    </div>);
}

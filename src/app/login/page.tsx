"use client"
import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/card";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/react";
import Link from "next/link";
import {useAuth} from "@/context/AuthProvider";

export default  function LoginPage(){
    const {email,setEmail,password,setPassword,logIn,errorMessage,setErrorMessage} =useAuth()
    return <div className="px-4 min-h-screen flex flex-col justify-center items-center ">
        <Card className="px-8 py-10 w-[450px] ">
            <CardHeader className="font-semibold">
              Login to continue
            </CardHeader>
            <CardBody className={"space-y-4"}>
                <Input placeholder={"Email"} type={"Email"} value={email} onChange={e => setEmail(e.target.value)}></Input>
                <Input placeholder={"Password"} type={"password"} value={password} onChange={e => setPassword(e.target.value)}></Input>
                <Button variant={"solid"} color={"success"} className="w-fit" onClick={() => {
                     logIn();
                }}>Login</Button>
                {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
            </CardBody>
            <CardFooter>
                <Link href={"/register"} className="hover:underline text-sm">New user? click here to register</Link>
            </CardFooter>
        </Card>
    </div>
}
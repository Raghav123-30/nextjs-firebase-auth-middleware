"use client"
import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/card";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/react";
import Link from "next/link";
import {useAuth} from "@/context/AuthProvider";
export default  function RegisterPage(){
    const {email,password,setEmail,setPassword,register} = useAuth()
    return (
        <div className="px-4 min-h-screen flex flex-col justify-center items-center ">
            <Card className="px-8 py-10 w-[450px] ">
                <CardHeader className="font-semibold">
                    Register
                </CardHeader>
                <CardBody className={"space-y-4"}>
                    <Input placeholder={"Email"} type={"Email"} value={email} onChange={e=>setEmail(e.target.value)}></Input>
                    <Input placeholder={"Password"} type={"password"} value={password} onChange={e =>setPassword(e.target.value)}></Input>
                    <Input placeholder={"Confirm password"} type={"password"}></Input>
                    <Button variant={"solid"} color={"success"} className="w-fit" onClick={register}>Register</Button>
                </CardBody>
                <CardFooter>
                    <Link href={"/login"} className="hover:underline text-sm">Existing user? click here to login</Link>
                </CardFooter>
            </Card>
        </div>
    )
}
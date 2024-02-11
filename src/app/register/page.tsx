"use client"
import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/card";
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/react";
import Link from "next/link";
import {useAuth} from "@/context/AuthProvider";
import {useState} from "react";
export default  function RegisterPage(){
    const {email,password,setEmail,setPassword,register,errorMessage,setErrorMessage} = useAuth()
    const [confirmPassword,setConfirmPassword] = useState("")
    const onRegister = async () => {
        setErrorMessage("")
        if(password === confirmPassword){
            register()
        }
        else{
            setErrorMessage("passwords do not match")
        }
    }
    return (
        <div className="px-4 min-h-screen flex flex-col justify-center items-center ">
            <Card className="px-8 py-10 w-[450px] ">
                <CardHeader className="font-semibold">
                    Register
                </CardHeader>
                <CardBody className={"space-y-4"}>
                    <Input placeholder={"Email"} type={"Email"} value={email} onChange={e=>setEmail(e.target.value)}></Input>
                    <Input placeholder={"Password"} type={"password"} value={password} onChange={e =>setPassword(e.target.value)}></Input>
                    <Input placeholder={"Confirm password"} type={"password"} value={confirmPassword} onChange={e =>setConfirmPassword(e.target.value)}></Input>
                    <Button variant={"solid"} color={"success"} className="w-fit" onClick={onRegister}>Register</Button>
                    {errorMessage && <p className={"text-sm text-red-500"}>{errorMessage}</p>}
                </CardBody>
                <CardFooter>
                    <Link href={"/login"} className="hover:underline text-sm">Existing user? click here to login</Link>
                </CardFooter>
            </Card>
        </div>
    )
}
import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";

export async function POST(request:NextRequest){
    try{
        const {type} = await request.json()
        if(type == "login"){
            cookies().set("token","dwjdowjdowdjowjdo")
            return NextResponse.json({message:"okay"},{status:200})
        }
        cookies().delete("token")
        return NextResponse.json({message:"okay"},{status:200})

    }catch(error){
        return NextResponse.json({message:"failed"},{status:400})
    }
}

import {cookies} from "next/headers";
import {NextRequest, NextResponse} from "next/server";
import * as url from "url";
export default function  middleware(request:NextRequest){
    const token = cookies().get('token')?.value || ""
    const isPublicPath = request.nextUrl.pathname == "/login" || request.nextUrl.pathname == "/register"
    if(token && isPublicPath){

        return NextResponse.redirect(new URL("/",request.nextUrl))
    }
    if(!token && !isPublicPath){

        return NextResponse.redirect(new URL("/login",request.nextUrl))
    }
}
export const config = {
    matcher:[
        "/","/login","/register", "/add-task","/edit-task","/not-found"
    ]
}
import { FreshContext, MiddlewareHandler } from "$fresh/server.ts";


type state = {
    name:string
}

export const handler:MiddlewareHandler <state> = async (req:Request, ctx:FreshContext) => {

    const cookie = req.headers.get("Cookie")?.split("; ").find((e)=> e.trim().startsWith("name="))


    if(cookie){
        const cookieName = cookie.split("=")[1]
        ctx.state = {name:cookieName}
        const next= await ctx.next()
        return next
    }

    return new Response (null,{status:302,headers:{location:"/"}})

}
import { includesNeedle } from "jsr:@std/bytes@^1.0.2/includes-needle";
import { useEffect, useState } from "preact/hooks";
import { FunctionalComponent } from "preact/src/index.d.ts";

type state ={
    id:string
}


const Fav: FunctionalComponent<state>=({id}) =>{
    const [isFav, setIsFav] = useState <boolean>(false)

    useEffect (()=>{

        const cookie = document.cookie.split("; ").find((e)=> e.trim().startsWith("fav"))
        if (cookie) {
            const cookieName = JSON.parse(decodeURIComponent(cookie.split("=")[1]))

            setIsFav(cookieName.includes(id))
        
        }
    },[id])

    const botonFav = () =>{

        const cookie = document.cookie.split("; ").find((e)=> e.trim().startsWith("fav"))
        let arrCookie : string[]=[]
        if (cookie) arrCookie = JSON.parse(decodeURIComponent(cookie.split("=")[1]))
        
        const filtrado = isFav ? arrCookie.filter((e)=> e !== id) :[...arrCookie,id]

        document.cookie = `favCharacter=${encodeURIComponent(JSON.stringify(filtrado))};path=/`

            setIsFav(!isFav)
        
    }

    return (
        <div>
            <button type="button" onClick={botonFav}>{isFav? "DELETE":"Add"}</button>
        </div>
    )
}

export default Fav
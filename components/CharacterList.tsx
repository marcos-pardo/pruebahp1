import { FunctionComponent } from "preact/src/index.d.ts";
import Fav from "../islands/Fav.tsx";

type Character ={
    id:string,
    name:string
}


const CharacterList: FunctionComponent<{characters:Character[]}> = ({characters}) =>{

    return (
        <div>
            <ul>
                {characters.map((e)=>(
                    <li key={e.id}>
                        <p>{e.name}</p>
                        <Fav id ={e.id}/>
                    </li>
                    
                ))}
        
            </ul>

        </div>
    )
}

export default CharacterList
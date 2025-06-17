import { FunctionalComponent } from "preact/src/index.d.ts";


const LoginForm : FunctionalComponent = () =>{
return(

    <div>
        <form action="" method="get">
            <input type="text" name="name"  placeholder="nombre" />
            <input type="password" name="password"  placeholder="Contraseña" />
            <button type="submit">INICIAR SESION</button>
        </form>
    </div>
)

}
export default LoginForm
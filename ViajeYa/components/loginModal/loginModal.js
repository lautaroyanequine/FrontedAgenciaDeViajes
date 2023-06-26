export const loginModal = () => `

<div class="body__login">
    <div class="main__login">
        <img class="img_logo_atardecer" id="img_logo_atardecer" src="https://images.unsplash.com/photo-1476900543704-4312b78632f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="atardecer_login">
        <img class="img_logo" id="img_logo" src="./src/img/logo.png" alt="logo">
        <div class="login_container">
            <form>
                <input type="mail" placeholder="E-mail" class="search" id="search_email">
                <input type="password" placeholder="Contraseña" class="search" id="search_contraseña">
            </form>
        </div>
        <div class="botones__login" id="botones__login">
            <button class="boton_account" id="boton_olvidar">Olvide mi contraseña</button>
            <button class="boton_iniciar" id="boton_iniciar_sesion">INICIAR SESIÓN</button>

            <div class="boton_registro" id="boton_registro">
                <p>¿Todavía no tienes una cuenta?</p>
                <button class="boton_registrar" id="boton_registrar">REGISTRARSE</button>
            </div>
        </div>
    </div>
</div>

`


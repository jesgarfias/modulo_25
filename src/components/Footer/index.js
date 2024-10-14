import React from "react";
import "../Footer/styles.css"
const Footer=()=>{
    return(
        <footer>
        <section className="footer__section footer__section--info">
            <div className="firstSection__info">
                <h1 className="info__title">Servicios de Ingeniería Médica y Odontológica </h1>
                <p className="info__text">Importamos y distribuimos a todo México Unidades Dentales, Equipos e Insumos Odontológios de la más alta calidad.</p>
            </div>
            <div className="secondSection_info">
                <div className="section__info section__info--second">
                    <h1 className="info__title">Terminos y condiciones</h1>
                    <nav className="info__nav">
                        <a className="info__navElement" href="#">Aviso de privacidad</a>
                        <a className="info__navElement" href="#">Politicas de envio</a>
                        <a className="info__navElement" href="#">Términos de garantias</a>
                    </nav>
                </div>
                <div className="section__info section__info--third">
                    <h1 className="info__title">Mi cuenta</h1>
                    <nav className="info__nav">
                        <a className="info__navElement" href="">informacion personal</a>
                        <a className="info__navElement" href="">Pedidos</a>
                        <a className="info__navElement" href="">Facturación</a>
                    </nav>
                </div>
            </div>
        </section>
    </footer>
    )
}
export default Footer;
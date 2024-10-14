import React from "react";
import SIGMOD_2 from "../../assets/SIGMOD_2.png";
import "../Header/style.css"
const Header=()=>{
    return(
        <header>
            <section className="header_infoLogo">
                <img className="headerLogo" src={SIGMOD_2}/>
                <span>SIGMOD</span>
            </section>
            <section className="header_navigation">
                <div className="header_products">
                    <div className="header_productsTitle">
                        <span>Categorias</span>
                     </div>
                </div>
                <nav className="header_links">
                    <a className="header_link" href="services.html">Servicios</a>
                    <a className="header_link" href="">Blog</a>
                    <a className="header_link" href="unidades_dentales.html">Productos</a>
                </nav>
            </section>
        </header>
    )
}

export default Header;
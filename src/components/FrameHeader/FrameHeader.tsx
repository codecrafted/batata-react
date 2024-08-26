import logosvg from '../../assets/img/logo.svg'
import './FrameHeader.css';

const FrameHeader = () => {
    return <>
        <img src={logosvg} alt="Logo de Batatabit" />
        <div className="header--title-container">
            <h1>La próxima revolución en el intercambio de criptomodenas.</h1>
            <p>
                Batatabit te ayuda a navegar entre los diferentes precios y
                tendencias.
            </p>
            <a href="#plans" className="header--button"
            >Conoce Nuestros Planes <span></span
            ></a>
        </div>
    </>

}
export default FrameHeader;
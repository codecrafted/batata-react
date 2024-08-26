import logoFooter from '../../assets/img/logo-footer.svg';
import './FrameFooter.css';

const FrameFooter = () => {

    return <>
        <section className="left">
            <ul>
                <li><a href="">Lindedin</a></li>
                <li><a href="">Crunchbase</a></li>
                <li><a href="">Hackernews</a></li>
            </ul>
        </section>
        <section className="right">
            <img src={logoFooter} alt="Logo Batatabit 2024" />
        </section>
    </>
}
export default FrameFooter;
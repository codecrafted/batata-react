
import FrameHeader from "../components/FrameHeader/FrameHeader";
import FramePlan from "../components/FramePlan/FramePlan";
import FrameProduct from "../components/FrameProduct/FrameProduct";
import FrameExchange from "../components/FrameExchange/FrameExchange";
import FrameFooter from "../components/FrameFooter/FrameFooter";
import './BatataPage.css'

const BatataPage = () => {

    return <>
        <header>
            <FrameHeader></FrameHeader>
        </header>
        <main>
            <FrameExchange></FrameExchange>
            <FrameProduct></FrameProduct>
            <FramePlan></FramePlan>
        </main>
        <footer>
            <FrameFooter></FrameFooter>
        </footer>
    </>

}

export default BatataPage;
import PageTransition from "../components/pageTransition";
import circle1 from '../images/Ellipse 8.png'
import circle2 from '../images/Ellipse 7.png'
import woman from '../images/Woman.png'
import state1 from '../images/states=1.png'
import state2 from '../images/states=2.png'
import state3 from '../images/states=3.png'
import '../styles/confirmation.scss'

const Confirmation = () => {
    return (
        <PageTransition>
            <main className="confirm">
                <img src={circle1} alt="" className="circle1" />
                <img src={circle2} alt="" className="circle2" />
                <div className="congrats">
                    <img src={woman} alt="" className="woman" />
                    <p className="thanks">Hey Celestina, thank you for your purchase.</p>
                    <p className="amazing">You are amazing. Cheers to being <span>ARTSY!</span>
                        <img src={state1} alt="" />
                    </p>
                </div>
            </main>
        </PageTransition>
    );
}

export default Confirmation;
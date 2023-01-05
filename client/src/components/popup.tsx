import '../styles/popup.scss'
import PageTransition from './pageTransition';
import { motion } from 'framer-motion';

type Prop = {
    message: string
}

const Popup = (prop: Prop) => {

    return (
        <PageTransition>
            <motion.div className="pop-up"
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <p>{prop.message}</p>
            </motion.div>
        </PageTransition>
    );
}

export default Popup;
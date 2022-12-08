import { useEffect, useRef, useState } from 'react';
import slideshowList from '../data/slideshow';

const HomeSlideshow = () => {

    const [firstSlide, setFirstSlide] = useState(0)
    const [secondSlide, setSecondSlide] = useState(1)
    const [thirdSlide, setThirdSlide] = useState(2)
    const [fourthSlide, setFourthSlide] = useState(3)
    const [fifthSlide, setFifthSlide] = useState(4)

    const firstTimeoutRef = useRef<number | null>(null)
    const secondTimeoutRef = useRef<number | null>(null)
    const thirdTimeoutRef = useRef<number | null>(null)
    const fourthTimeoutRef = useRef<number | null>(null)
    const fifthTimeoutRef = useRef<number | null>(null)

    const [firstDelay, setFirstDelay] = useState(2000)
    const [secondDelay, setSecondDelay] = useState(2200)
    const [thirdDelay, setThirdDelay] = useState(2400)
    const [fourthDelay, setFourthDelay] = useState(2600)
    const [fifthDelay, setFifthDelay] = useState(2800)

    const resetFirstTimer = () => {
        if (firstTimeoutRef.current) window.clearInterval(firstTimeoutRef.current)
    }

    const resetSecondTimer = () => {
        if (secondTimeoutRef.current) window.clearInterval(secondTimeoutRef.current)
    }

    const resetThirdTimer = () => {
        if (thirdTimeoutRef.current) window.clearInterval(thirdTimeoutRef.current)
    }

    const resetFourthTimer = () => {
        if (fourthTimeoutRef.current) window.clearInterval(fourthTimeoutRef.current)
    }

    const resetFifthTimer = () => {
        if (fifthTimeoutRef.current) window.clearInterval(fifthTimeoutRef.current)
    }

    useEffect(() => {
        resetFirstTimer()
        firstTimeoutRef.current = window.setTimeout(() => {
            setFirstSlide((prevSlide) => prevSlide === slideshowList.length - 1 ? (0) : prevSlide + 1)
        }, firstDelay);

        return () => {
            resetFirstTimer()
        }
    }, [firstSlide])

    useEffect(() => {
        resetSecondTimer()
        secondTimeoutRef.current = window.setTimeout(() => {
            setSecondSlide((prevSlide) => prevSlide === slideshowList.length - 1 ? 0 : prevSlide + 1)
        }, secondDelay)

        return () => {
            resetSecondTimer()
        }

    }, [secondSlide])

    useEffect(() => {
        resetThirdTimer()
        thirdTimeoutRef.current = window.setTimeout(() => {
            setThirdSlide((prevSlide) => prevSlide === slideshowList.length - 1 ? 0 : prevSlide + 1)
        }, thirdDelay)

        return () => {
            resetThirdTimer()
        }

    }, [thirdSlide])

    useEffect(() => {
        resetFourthTimer()
        fourthTimeoutRef.current = window.setTimeout(() => {
            setFourthSlide((prevSlide) => prevSlide === slideshowList.length - 1 ? 0 : prevSlide + 1)
        }, fourthDelay)

        return () => {
            resetFourthTimer()
        }

    }, [fourthSlide])

    useEffect(() => {
        resetFifthTimer()
        fifthTimeoutRef.current = window.setTimeout(() => {
            setFifthSlide((prevSlide) => prevSlide === slideshowList.length - 1 ? 0 : prevSlide + 1)
        }, fifthDelay)

        return () => {
            resetFifthTimer()
        }

    }, [fifthSlide])

    useEffect(() => {
        setTimeout(() => {
            setFirstDelay(2000)
            setSecondDelay(2000)
            setThirdDelay(2000)
            setFourthDelay(2000)
            setFifthDelay(2000)
        }, firstDelay)
    }, [])

    return (
        <div className="home-slideshow">
            <div className='slideshow-container'>
                <div className="slideshow">
                    <div className="slideshowSlider">
                        {slideshowList.map((slide, index) => (
                            <div className="slide"
                                key={index}
                                style={{ transform: `translate3d(${-firstSlide * 100}%, 0, 0)` }}>
                                <img className={slide.className} src={slide.img} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="slideshow">
                    <div className="slideshowSlider">
                        {slideshowList.map((slide, index) => (
                            <div className="slide"
                                key={index}
                                style={{ transform: `translate3d(${-secondSlide * 100}%, 0, 0)` }}>
                                <img className={slide.className} src={slide.img} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="slideshow">
                    <div className="slideshowSlider">
                        {slideshowList.map((slide, index) => (
                            <div className="slide"
                                key={index}
                                style={{ transform: `translate3d(${-thirdSlide * 100}%, 0, 0)` }}>
                                <img className={slide.className} src={slide.img} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="slideshow">
                    <div className="slideshowSlider">
                        {slideshowList.map((slide, index) => (
                            <div className="slide"
                                key={index}
                                style={{ transform: `translate3d(${-fourthSlide * 100}%, 0, 0)` }}>
                                <img className={slide.className} src={slide.img} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="slideshow">
                    <div className="slideshowSlider">
                        {slideshowList.map((slide, index) => (
                            <div className="slide"
                                key={index}
                                style={{ transform: `translate3d(${-fifthSlide * 100}%, 0, 0)` }}>
                                <img className={slide.className} src={slide.img} alt="" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeSlideshow;
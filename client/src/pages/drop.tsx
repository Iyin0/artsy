import { useEffect } from "react";
import convert from "../components/convert";
import Newsletter from "../components/newsletter";
import PageTransition from "../components/pageTransition";
import { drops } from "../data/upcomingDrops";
import '../styles/drop.scss'

const Drop = () => {

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <PageTransition>
            <div className="drops">
                <main>
                    <div className="top">
                        <h1>Upcoming drops</h1>
                        <p>Turn on notifications do that no drop will miss you.</p>
                        <button>Notify me</button>
                    </div>
                    <div className="bottom">
                        {drops.map((drop, index) => (
                            <div className="drop" key={index}>
                                <div className="image">
                                    <img src={drop.image} alt="" />
                                    <div className="time">
                                        <div>
                                            <p>Time remaining</p>
                                            <p>{convert(drop.count / 1000)}</p>
                                        </div>
                                        <div>
                                            <button className={drop.status === "ENDED" ? "view" : "join"}>{drop.status === "ENDED" ? "View" : "Join"}</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="status">
                                        {drop.status === "UPCOMING" && <div className="upcoming">{drop.status}</div>}
                                        {drop.status === "LIVE NOW" && <div className="live">{drop.status}</div>}
                                        {drop.status === "ENDED" && <div className="ended">{drop.status}</div>}
                                    </div>
                                    <p className="day">{drop.day} at {drop.time} WAT</p>
                                    <p className="title">{drop.title}</p>
                                    <p className="description">{drop.description}</p>
                                    <p className="creator">Creator : <span>{drop.creator}</span></p>
                                    <div className="link">
                                        {drop.status === "UPCOMING" && <button >Get notified</button>}
                                        {drop.status === "LIVE NOW" && <button>Join now</button>}
                                        {drop.status === "ENDED" && <button>View</button>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="see">
                        <button>See more</button>
                    </div>
                    <Newsletter />
                </main>
            </div>
        </PageTransition>
    );
}

export default Drop;
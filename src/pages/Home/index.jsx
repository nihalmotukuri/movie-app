import './index.css'

const Home = () => {
    return (
        <section >
            <div className="trailer-container" >
                <video
                    className="trailer"
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    disablePictureInPicture 
                    controlsList="nodownload nofullscreen noremoteplayback" >
                    <source 
                        src="/trailer.mp4"
                        type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    )
}

export default Home
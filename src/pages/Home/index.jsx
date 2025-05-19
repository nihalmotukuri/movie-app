import './index.css'

const Home = () => {
    return (
        <section >
            <video 
                className='video-container' 
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
        </section>
    )
}

export default Home
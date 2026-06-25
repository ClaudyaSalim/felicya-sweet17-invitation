import SlideShow from "../components/Slideshow";

export default function Hero(){
    return <section className="w-full h-screen flex flex-col justify-between items-center lg:flex-row gap-6 bg-white p-6 lg:pl-20" id="hero">
        <SlideShow />
        <div className="w-full flex flex-col justify-center items-center">
            <span>YOU ARE CORDIALLY INVITED TO</span>
            <h1>Felicya Salim</h1>
            <h2>Sweet 17<sup>th</sup> Birthday Party</h2>
        </div>
    </section>
}
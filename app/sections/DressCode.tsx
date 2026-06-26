export default function DressCode(){
    return <section className="w-full h-screen flex flex-col items-center justify-center gap-6" id="dresscode">
        <h2>Dress Code</h2>
        <div className="palette flex flex-row gap-6">
            <span className="size-20 bg-sage-green rounded-full flex flex-row items-center justify-center text-xl">Male</span>
            <span className="size-20 bg-cream rounded-full flex flex-row items-center justify-center text-xl">Female</span>
        </div>
        <div>
            <p><span className="font-bold">Male:</span> Pastel Green collar Shirt + White Pants</p>
            <p><span className="font-bold">Female:</span> Cream Dress</p>
            <p><span className="font-bold">Guests:</span> Pastel Formal</p>
        </div>
        <p>(No Pink & No Red)</p>
    </section>
}
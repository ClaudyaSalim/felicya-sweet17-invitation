export default function DressCode(){
    return <section className="w-full h-screen flex flex-col items-center justify-center">
        <h2>Dress Code</h2>
        <div className="palette flex flex-row gap-6">
            <span className="size-20 bg-[#aec8b6] rounded-full flex flex-row items-center justify-center text-xl">Male</span>
            <span className="size-20 bg-[#fffccf] rounded-full flex flex-row items-center justify-center text-xl">Female</span>
        </div>
        <div>
            <p><span className="font-bold">Male:</span> Pastel Green collar Shirt + White Pants</p>
            <p><span className="font-bold">Female:</span> Cream Dress</p>
            <p><span className="font-bold">Guests:</span> Pastel Formal</p>
        </div>
        <p>(No Pink & No Red)</p>
    </section>
}
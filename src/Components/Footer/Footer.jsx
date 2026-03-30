import React from "react";

const Footer = () => {
    return (
        <>
            <div className='w-full relative'>
                <img src="https://thumbs.dreamstime.com/b/elegant-dresses-hanging-rack-pastel-colors-floral-embellishments-luxury-fabrics-collection-formal-dresses-hanging-370303943.jpg" alt="" className='w-full h-[350px] object-cover' />

                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center bg-black/50 z-10">
                    <h1 className="text-black text-xl">Need Help !!!</h1>
                    <h1 className="text-black text-3xl font-bold">We are here to Help You</h1>
                    <button className="bg-pink-500 text-white px-6 py-2 mt-3 rounded hover:bg-blue-700 w-fit">Contact Us</button>
                    <h2 className="text-blue-500 mt-2">supportecart@gmail.com</h2>

                </div>
            </div>

            <footer className="w-full bg-[#131A22] text-gray-300 ">
                <div
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="bg-[#37475A] text-center py-3 cursor-pointer hover:bg-[#485769]" >Back to top
                </div>
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 py-12 px-6 text-sm">
                    <div>
                        <h3 className="text-white font-bold mb-3">Get to Know Us</h3>
                        <ul className="space-y-2">
                            <li className="hover:underline cursor-pointer">About Ecart</li>
                            <li className="hover:underline cursor-pointer">Careers</li>
                            <li className="hover:underline cursor-pointer">Press Releases</li>
                            <li className="hover:underline cursor-pointer">Ecart Science</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-3">Connect with Us</h3>
                        <ul className="space-y-2">
                            <li className="hover:underline cursor-pointer">Facebook</li>
                            <li className="hover:underline cursor-pointer">Twitter</li>
                            <li className="hover:underline cursor-pointer">Instagram</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-3">Make Money with Us</h3>
                        <ul className="space-y-2">
                            <li className="hover:underline cursor-pointer">Sell on Ecart</li>
                            <li className="hover:underline cursor-pointer">Sell under Accelerator</li>
                            <li className="hover:underline cursor-pointer">Protect and Build Your Brand</li>
                            <li className="hover:underline cursor-pointer">Global Selling</li>
                            <li className="hover:underline cursor-pointer">Supply to Ecart</li>
                            <li className="hover:underline cursor-pointer">Become an Affiliate</li>
                            <li className="hover:underline cursor-pointer">Fulfillment by Ecart</li>
                            <li className="hover:underline cursor-pointer">Advertise Your Products</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-3">Let Us Help You</h3>
                        <ul className="space-y-2">
                            <li className="hover:underline cursor-pointer">Your Account</li>
                            <li className="hover:underline cursor-pointer">Returns</li>
                            <li className="hover:underline cursor-pointer">Recalls and Product Safety Alerts</li>
                            <li className="hover:underline cursor-pointer">100% Purchase Protection</li>
                            <li className="hover:underline cursor-pointer">Ecart App Download</li>
                            <li className="hover:underline cursor-pointer">Help</li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-gray-600 flex flex-col items-center gap-4 py-6">

                    <h1 className="text-2xl text-white font-bold">Ecart</h1>

                    <div className="flex gap-4 items-center">
                        <select className="bg-[#131A22] border border-gray-400 text-white px-3 py-1 rounded cursor-pointer">
                            <option value="en">English</option>
                            <option value="hi">Hindi</option>
                            <option value="kn">Kannada</option>
                            <option value="ta">Tamil</option>
                        </select>
                        <button className="flex items-center gap-2 border border-gray-400 px-3 py-1 rounded hover:bg-gray-700">
                            <img
                                src="https://flagcdn.com/w20/in.png"
                                alt="India Flag"
                                className="w-5 h-3" />India</button>
                    </div>

                </div>

            </footer>
        </>
    )
}

export default Footer;
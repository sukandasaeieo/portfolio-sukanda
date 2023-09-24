
const IntroComponent = () => {
  return (
    <section className=" relative">
            {/* Background */}
            <div className=" w-full h-[90vh] overflow-hidden relative">
                <div style={{backgroundImage: `url("https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2lhdnk4MmRqOGVydTExbm0xbThuNmFieTh1NjgyNjR4eXpsMG01dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tn33aiTi1jkl6H6/giphy.gif")` 
                            ,backgroundRepeat: 'no-repeat'                            
                            }}
                        className=" w-[110%] h-[95vh] bg-cover bg-center  blur-[5px] absolute top-[-1rem] left-[-1rem] ">     
                </div>
            </div>

            {/* Filter Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40">

            </div>

            {/* Content */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center absolute top-0 left-0 box-border w-full h-full px-[1.5rem] ">
                        {/* Left */} 
                        <section className=" text-white flex  items-center justify-center mt-[2rem] lg:mt-0 lg:mr-[2rem]  ">
                            <div className=" lg:w-[500px] ">
                                <h1 className=" text-[8vw] sm:text-[6.5vw] md:text-[6vw]  lg:text-[3rem] font-bold mb-[0.5rem]">
                                    Fullstack-Developer
                                </h1>
                                <p className=" lg:text-[1.2rem] font-Incluesive-Sans">
                                    Hi, I am 
                                    <span className=" text-yellow-400"> &ldquo;Top&rdquo;</span> or  
                                    <span className=" text-yellow-400"> &ldquo;Siraphob Reanmanorom.&rdquo; </span>
                                     a graduate in the field of Mechatronics engineering. I love coding and find it enjoyable.
                                </p>
                            </div>
                        </section>            

                        {/* Right */}                
                        <section>
                            <img src="https://1417094351.rsc.cdn77.org/articles/9940/9939350/thumbnail/large.gif?4" alt="" className=" w-[40vw] lg:w-[400px] rounded-full" />
                        </section>
            </div>
    </section>

  )
}

export default IntroComponent
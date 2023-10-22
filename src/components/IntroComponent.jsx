
const IntroComponent = () => {
  return (
    <section className=" relative">
            {/* Background */}
            <div className=" w-full h-[90vh] overflow-hidden relative">
                <div style={{backgroundImage: `url("https://cdn.discordapp.com/attachments/1165503428781416479/1165503795757846618/kath.jpg?ex=654716fe&is=6534a1fe&hm=d16537cfde64cef5669bd0615017e2a459edf60e2bac8dfd57ef82424eda29f6&")` 
                            ,backgroundRepeat: 'no-repeat'                            
                            }}
                        className=" w-[110%] h-[95vh] bg-cover bg-center  blur-[15px] absolute top-[-1rem] left-[-1rem] ">     
                </div>
            </div>

            {/* Filter Background */}
            <div className="absolute top-0 left-0 w-full h-full bg-fuchsia-900 bg-opacity-70">

            </div>

            {/* Content */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center absolute top-0 left-0 box-border w-full h-full px-[1.5rem] ">
                        {/* Left */} 
                        <section className=" text-white flex  items-center justify-center mt-[2rem] lg:mt-0 lg:mr-[2rem]  ">
                            <div className=" lg:w-[500px] ">
                                <h1 className=" text-[8vw] sm:text-[6.5vw] md:text-[6vw]  lg:text-[3rem] font-bold mb-[0.5rem]">
                                    Software-Developer
                                </h1>
                                <p className=" lg:text-[1.2rem] font-Incluesive-Sans">
                                    Hi, I am 
                                    <span className=" text-yellow-400"> &ldquo;Kath&rdquo;</span> or  
                                    <span className=" text-yellow-400"> &ldquo;Sukanda Saeieo.&rdquo; </span>
                                    <br />Junior Software Developer bootcamp cohort5 at Generation Thailand 
                                    who passionate in coding and want to expand knowledge to the next level  
                                    <br />
                                </p>
                            </div>
                        </section>            

                        {/* Right */}                
                        <section>
                            <img src="https://cdn.discordapp.com/attachments/1165503428781416479/1165505098013753444/kath.jpg?ex=65471835&is=6534a335&hm=759f565dfa26d6c92d45af69594b43e52e110e3351c6e07309ad3714cafcd323&" alt="" className=" w-[40vw] lg:w-[400px] rounded-full" />
                        </section>
            </div>
    </section>

  )
}

export default IntroComponent
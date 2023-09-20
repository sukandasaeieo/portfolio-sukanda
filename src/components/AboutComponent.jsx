
const AboutComponent = () => {
  return (
    <div className=" relative ">

        {/* Background */}
        <section className=" relative">
            <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2lhdnk4MmRqOGVydTExbm0xbThuNmFieTh1NjgyNjR4eXpsMG01dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26tn33aiTi1jkl6H6/giphy.gif" alt="" 
                className=" w-full h-[90vh]"
            />
            {/* Background color */}
            <div className=" w-full h-full absolute top-0 left-0 bg-cyan-600 opacity-60"></div>
        </section>

        {/* Virtual */}
        <section className=" absolute top-0 left-0 w-full h-full flex justify-center items-center ">

            {/* Content */}
            <div className="flex items-center justify-center   ">
                {/* Left */}
                <section className=" text-white flex  items-center justify-center mr-[2rem]  ">
                    <div className=" w-[500px] ">
                        <h1 className=" text-[2.4rem] font-bold mb-[0.5rem]">
                            Junior Fullstack-Developer
                        </h1>
                        <p>
                            I am interested in coding as a Fullstack Developer. I decided to enroll in the Generation Fullstack camp to enhance my knowledge such as HTML5 CSS3 JS Boostrap5 Node.js Express.js MongoDB
                        </p>
                    </div>
                </section>            

                {/* Right */}                
                <section>
                    <img src="https://1417094351.rsc.cdn77.org/articles/9940/9939350/thumbnail/large.gif?4" alt="" className=" w-[400px] rounded-full" />
                </section>
            </div>
            
        </section>
             

             
        
    </div>
  )
}

export default AboutComponent
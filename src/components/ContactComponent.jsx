import { useState } from "react";
import LayoutComponent from "./LayoutComponent"
import { LuSend } from "react-icons/lu";

const ContactComponent = () => {
  const [namevisitor , setNamevisitor] = useState('')
  const [emailvisitor , setEmailvisitor] = useState('')
  const [messagevisitor , setMessagevisitor] = useState('')

  const submitHandler = (e) =>{
    e.preventDefault()
    if(namevisitor && emailvisitor && messagevisitor){
        console.log('send message')
    }
  }

  return (
    <LayoutComponent topic={'Contact'} idcomponent={'contact'} bgopacity={'bg-opacity-[98%]'}>
        <div className=" flex justify-between items-center mt-[2rem] border" >

            {/* Left */}
            <section className=" w-[50%]"></section>

            {/* Right */}
            <section className=" w-[50%]">
              <form className=" flex flex-col gap-y-[1rem] text-white text-opacity-70" onSubmit={(e)=>submitHandler(e)}>

                {/* Form Top */}
                <section className=" flex gap-x-[1rem] ">
                  {/* Input Left */}
                  <section className="form-control w-full max-w-xs">
                    <label htmlFor="contact-name" className="label">
                      <span className="label-text text-white text-[1rem]  text-opacity-70">Your name</span>
                    </label>
                    <input  id="contact-name" 
                            type="text" 
                            placeholder="Name" 
                            className="input input-bordered bg-[#18181b]  w-full max-w-xs" 
                            onChange={(e)=>setNamevisitor(e.target.value)}
                            value={namevisitor}
                            />
                  </section>

                  {/* Input Right */}
                  <section className="form-control w-full max-w-xs">
                    <label htmlFor="contact-email" className="label">
                      <span className="label-text text-white text-[1rem]  text-opacity-70">Your email</span>
                    </label>
                    <input  id="contact-email" 
                            type="text" 
                            placeholder="Email" 
                            className="input input-bordered bg-[#18181b]  w-full max-w-xs" 
                            onChange={(e)=>setEmailvisitor(e.target.value)}
                            value={emailvisitor}
                            />
                  </section>

                  
                </section>

                {/* Form Bottom */}                
                <section className="form-control">
                  <label htmlFor="contact-message"  className="label">
                    <span className="label-text text-white text-[1rem]  text-opacity-70">Your Message</span>
                  </label>
                  <textarea   id="contact-message" 
                              className="textarea textarea-bordered h-24 bg-[#18181b]" 
                              placeholder="Message"
                              onChange={(e)=>setMessagevisitor(e.target.value)}
                              value={messagevisitor}
                  >

                  </textarea>
                </section>

                <button type='submit' className="btn btn-neutral max-w-[200px] normal-case ">Send Message <LuSend className=" text-[1.2rem]"/></button>
              </form>
            </section>
            
        </div>
    </LayoutComponent>
  )
}

export default ContactComponent
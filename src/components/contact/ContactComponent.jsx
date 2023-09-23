import { useState } from "react";
import LayoutComponent from "../LayoutComponent"
import { LuSend } from "react-icons/lu";
import CardContact from "./CardContact";
import { BsLinkedin ,BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { SiFrontendmentor } from "react-icons/si";

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
        {/* Label */}
        <p className=" text-white pl-[0.5rem] text-opacity-80 font-Incluesive-Sans">Please feel free to contact me via the provided form or any other available link.</p>

        {/* Contact */}
        <div className=" bg-[#18181b] rounded-2xl p-[1rem] flex justify-between items-center mt-[2rem]  " >

            {/* Left */}
            <section className=" w-[40%] flex justify-center">
              <div className=" flex flex-col gap-y-[1rem]">
                <span className=" text-center text-white text-opacity-70">Contact by</span>
                <CardContact icon={<BsLinkedin className=" text-[1.1rem]"/>} nameicon={'Linkedin'} linktarget={'https://www.linkedin.com/in/siraphob-reanmanorom/'}/>
                <CardContact icon={<HiOutlineMail className=" text-[1.1rem]"/>} nameicon={'Email'} linktarget={'mailto:siraphobtop95@gmail.com?subject=contact from Portfolio Siraphob'}/>
                <CardContact icon={<BsGithub className=" text-[1.1rem]"/>} nameicon={'GitHub'} linktarget={'https://github.com/Siraphob1'}/>
                <CardContact icon={<SiFrontendmentor className=" text-[1.1rem]"/>} nameicon={'Frontend Mentor'} linktarget={'https://www.frontendmentor.io/profile/Siraphob1'}/>
              </div>
            </section>

            <span className=" w-[10%] text-white text-opacity-70">or</span>

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
                            className="input input-bordered w-full max-w-xs text-black" 
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
                            className="input input-bordered w-full max-w-xs text-black" 
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
                              className="textarea textarea-bordered h-24 text-black " 
                              placeholder="Message"
                              onChange={(e)=>setMessagevisitor(e.target.value)}
                              value={messagevisitor}
                  >

                  </textarea>
                </section>

                <button type='submit' className="btn btn-neutral hover:brightness-[170%]  max-w-[200px] normal-case ">Send Message <LuSend className=" text-[1.2rem]"/></button>
              </form>
            </section>
            
        </div>
    </LayoutComponent>
  )
}

export default ContactComponent
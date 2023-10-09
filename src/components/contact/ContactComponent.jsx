import { useEffect, useRef, useState } from "react";
import LayoutComponent from "../LayoutComponent"
import { LuSend } from "react-icons/lu";
import CardContact from "./CardContact";
import { BsLinkedin ,BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { SiFrontendmentor } from "react-icons/si";
import axios from "axios";

const ContactComponent = () => {
  const [namevisitor , setNamevisitor] = useState(''); 
  const [emailvisitor , setEmailvisitor] = useState('');
  const [messagevisitor , setMessagevisitor] = useState('');

  const [isclicked , setIscliked] = useState(false);
  const [completeFill , setCompleteFill] = useState(false);
  const [isSending , setIsSending] = useState(false);
  const [sendSuccess , setSendSuccess] = useState(false);

  const refName = useRef();
  const refEmail = useRef();
  const refMessage = useRef();

  useEffect(()=>{
    setIscliked(false)
    setCompleteFill(false)
  }, [namevisitor , emailvisitor , messagevisitor])


  

  const submitHandler = (e) =>{
    e.preventDefault()           
       
    detectEmptyInput();   
}

  const detectEmptyInput = () =>{
    namevisitor ? null : refName.current.focus();    
    
    if(namevisitor){
      emailvisitor ? null : refEmail.current.focus();      
    }
    if(namevisitor && emailvisitor){
      messagevisitor ? null : refMessage.current.focus();      
    }
    if(namevisitor && emailvisitor && messagevisitor){
      setCompleteFill(true)      
      sendEmail()
    }
  
}

  const sendEmail = async () => {
  const url = 'https://portfoliobackend-1xjn.onrender.com/sendmail'

    const objsend = {
      namevisitor , 
      emailvisitor ,
      messagevisitor
    }
    setIsSending(true);
    try {
      const response = await axios.post( url , objsend)
     
      if(response.status === 200){
        setIsSending(false);
        setSendSuccess(true);      
      }
    } catch (error) {
      setIsSending(false);
      setSendSuccess(false);  
    }
}



  return (
    <LayoutComponent topic={'Contact'} idcomponent={'contact'} bgopacity={'bg-opacity-[98%]'}>
        {/* Label */}
        <p className=" text-white text-[0.9rem] lg:text-[1rem] pl-[0.5rem] text-opacity-80 font-Incluesive-Sans">Please feel free to contact me via the provided form or any other available link.</p>

        {/* Contact */}
        <div className=" bg-[#18181b] rounded-2xl p-[1rem] flex flex-col-reverse sm:flex-row sm:justify-between items-center mt-[2rem] gap-y-[1rem] sm:gap-y-0  " >

            {/* Contact Left */}
            <section className=" sm:w-[40%] flex justify-center">
              <div className=" flex flex-col gap-y-[1rem]">
                <span className=" text-center text-white text-opacity-70 hidden sm:block">Contact by</span>
                <div className=" flex sm:flex-col sm:gap-y-[1rem] gap-x-[1rem] sm:gap-x-0">
                <CardContact icon={<BsLinkedin className=" text-[1.2rem] sm:text-[1.1rem]"/>} nameicon={'Linkedin'} linktarget={'https://www.linkedin.com/in/siraphob-reanmanorom/'}/>
                <CardContact icon={<HiOutlineMail className="text-[1.5rem] sm:text-[1.1rem]"/>} nameicon={'Email'} linktarget={'mailto:siraphobtop95@gmail.com?subject=contact from Portfolio Siraphob'}/>
                <CardContact icon={<BsGithub className=" text-[1.4rem] sm:text-[1.1rem]"/>} nameicon={'GitHub'} linktarget={'https://github.com/Siraphob1'}/>
                <CardContact icon={<SiFrontendmentor className="text-[1.2rem] sm:text-[1.1rem]"/>} nameicon={'Frontend Mentor'} linktarget={'https://www.frontendmentor.io/profile/Siraphob1'}/>
                </div>
              </div>
            </section>

            {/* Contact Center */}
            <span className=" sm:w-[10%] text-white text-opacity-70">or</span>

            {/* Contact Right */}
            <section className=" w-full sm:w-[50%]">              
              <form className=" flex flex-col sm:gap-y-[1rem] text-white text-opacity-70" onSubmit={(e)=>submitHandler(e)}>

                {/* Form Top */}
                <section className=" flex flex-col sm:flex-row sm:gap-x-[1rem] text-[0.9rem] sm:text-[1rem] ">
                  {/* Input Left */}
                  <section className="form-control w-full ">
                    <label htmlFor="contact-name" className="label">
                      <span className="label-text text-white text-opacity-70">Your name</span>
                    </label>
                    <input  id="contact-name" 
                            type="text" 
                            ref={refName}
                            placeholder="Name" 
                            className="input input-bordered w-full max-w-xs text-black text-[0.85rem] sm:text-[1rem]" 
                            onChange={(e)=>setNamevisitor(e.target.value)}
                            value={namevisitor}
                            />
                  </section>

                  {/* Input Right */}
                  <section className="form-control w-full ">
                    <label htmlFor="contact-email" className="label">
                      <span className="label-text text-white text-opacity-70">Your email</span>
                    </label>
                    <input  id="contact-email" 
                            type="text" 
                            ref={refEmail}
                            placeholder="Email" 
                            className="input input-bordered w-full max-w-xs text-black text-[0.85rem] sm:text-[1rem]" 
                            onChange={(e)=>setEmailvisitor(e.target.value)}
                            value={emailvisitor}
                            />
                  </section>                  
                </section>

                {/* Form Bottom */}                
                <section className="form-control text-[0.9rem] sm:text-[1rem]">
                  <label htmlFor="contact-message"  className="label">
                    <span className="label-text text-white text-opacity-70">Your Message</span>
                  </label>
                  <textarea   id="contact-message" 
                              ref={refMessage}
                              className="textarea textarea-bordered h-24 text-black text-[0.85rem] sm:text-[1rem] " 
                              placeholder="Message"
                              onChange={(e)=>setMessagevisitor(e.target.value)}
                              value={messagevisitor}
                  >
                  </textarea>
                </section>

                {/* Button */}
                <section className=" flex flex-col lg:flex-row lg:items-center gap-x-[1rem] gap-y-[0.5rem] sm:gap-y-0 text-[0.9rem] sm:text-[1rem]">
                <button type='submit' className="btn btn-neutral hover:brightness-[170%]  max-w-[200px] normal-case mt-[1rem] sm:mt-0" onClick={()=>setIscliked(true)}>Send Message <LuSend className=" text-[1.2rem]"/></button>
                
                {/* Show result */}
                {!isclicked ? null 
                           : !completeFill  ? <p className=" text-red-400">Please ensure that you provide all the required information in full.</p>
                                            : isSending  ? <p className="flex items-center gap-x-[0.5rem]">sending <span className="loading loading-spinner text-success"></span></p>
                                                          : !sendSuccess  ? <p className=" text-red-400">The attempt to send an email has failed.</p>
                                                                          : <p className=" text-green-500">The email has been successfully sent.</p>
                                           
                                          
                }
                </section>
                
                
              </form>
            </section>
            
        </div>
    </LayoutComponent>
  )
}

export default ContactComponent
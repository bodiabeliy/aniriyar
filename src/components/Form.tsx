"use client"

import { useCallback, useState } from "react";
import { ActionButton } from "./buttons/ActionButton";
import api from '@/services/index';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
export const Form = () => {

  const [email, SetEmail] = useState<string>("")
  const [notEmpty, setNotEmpty] = useState<boolean>(false)
  const [notValid, setNotValid] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(false)


  const validateEmail = (email:string) => {
    
    const regex =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let isValid =regex.test(email)    
    return isValid
  };

  const EmailSender = useCallback(async() => {
    try {
      if (notValid) {
        setIsLoading(true)
        toast(`Sending...`)

        await api.post(
            `/send`,
            {
              email,
            },
          );
      }
      SetEmail("")
      setIsLoading(false)
      toast.success(`Email + ${email} sent successfuly!`) 

    } catch (error) {
      console.log(error);
      
      toast.error(`Happpend error: ${error}`);
    }
  }, [email, notEmpty, notValid, isLoading])

  const SendEmail = useCallback((e:any)  => {
    SetEmail(e.target.value)
    setNotValid(validateEmail(e.target.value))
    if (e.target.value == "") {
      setNotEmpty(true)

    }
    else setNotEmpty(false)
  },[email, notEmpty, notValid])

  

  return (
    <section id="form" className="formWrapper w-full flex justify-center sm:mt-[-230px] lg:mt-[0px] sm:mb-2 lg:mb-10">
      <div className="  rounded-[30px] bg-purpure z-10 p-1 sm:w-[300px] lg:w-[560px] sm:h-[350px] lg:h-[450px] sm:mb-8 lg:mb-0">
        <div className="relative rounded-[30px] bg-white flex flex-col justify-start sm:w-[290px] lg:w-[550px] h-full p-5">
         <div className="flex flex-col">
          <p className="sm:text-4xl lg:text-4xl sm:text-center lg:text-center font-bold mb-10">Registration to conference  </p>
          <input className={`${notEmpty &&" border-[3px] border-[#f44336]"} p-5 rounded-[20px] w-full text-[#000]`} type="text" placeholder="Enter email..." onChange={(e) => SendEmail(e)} value={email}/>
          {notEmpty && <p className="text-[#f44336]">Email not must be empty!</p> }
          {!notValid && <p className="text-[#f44336]">Email not valid!</p> }

          <ActionButton 
            onClick={() => EmailSender()} 
            className={` ${notEmpty || !notValid? "bg-[#767676] disabled": "bg-actionBtns"} actionBtn font-pixel absolute bottom-[50px] sm:left-[5%] lg:left-[25%] rounded-full lg:font-semibold sm:text-2xl lg:text-3xl p-5 sm:w-[90%] lg:w-[270px]`}
            text={"Get in touch!"} 
            disabled={notEmpty || !notValid}
            />
          { <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"

       />}
         </div>
        </div>
      </div>
    </section>
  );
};

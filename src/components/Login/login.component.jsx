import React from "react";
//import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { FcGoogle } from "react-icons/fc";
import shareVideo from "../../assets/share.mp4";
import logo from "../../assets/share.mp4";

const Login = () => {
  return (
    <div className="w-4 scrollbar-hide">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          muted
          controls={false}
          autoPlay={true}
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center top-0 bottom-0 left-0 right-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" alt="logo" />
          </div>

          <div className="shadow-2xl">
            <GoogleLogin
              clientId=""
              render={(renderprops) => (
                <button
                  className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                  type="button"
                >
                  <FcGoogle className="mr-4" /> Sign in with Google
                </button>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

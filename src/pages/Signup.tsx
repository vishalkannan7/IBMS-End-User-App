import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonInput,
  IonButton,
  IonText,
  IonRouterLink,
} from "@ionic/react";
import { FaUser, FaUnlock } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import Circle from "../components/Circle";

const SignUp: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signing up with", email, password, cpassword);
    // You can add sign-up logic here, like API calls
  };

  return (
    <IonPage className="bg-green-200">
      <IonContent>
        <div className="bg-[#C5F9E9] h-[100vh]">
          <div className="circle absolute -left-[20%] -top-[15%]">
            <Circle />
          </div>
          <div className="circle absolute -left-[40%] -top-[0%]">
            <Circle />
          </div>
          <div className="logo absolute -right-4 top-4">
            <img
              src="https://www.ivwindia.com/assets/img/logo.png"
              alt=""
              className="h-14"
            />
          </div>
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[80vw] flex items-center flex-col bg-gradient-to-b from-[#52C959] to-[#4FB6D8] rounded-md">
            <h1 className="text-3xl mt-8 text-center font-bold text-white relative">
              USER SIGN UP
              <span className="absolute left-0 bottom-0 w-full border-t-4 border-black"></span>
            </h1>

            <div className="p-10">
              <form onSubmit={handleSignup} className="w-full mt-5">
                {/* Email Input */}
                <div className="input-container flex gap-2 justify-center items-center">
                  <FaUser className="text-[1.9em]" />
                  <IonInput
                    type="email"
                    value={email}
                    placeholder="Enter your email"
                    onIonInput={(e) => setEmail(e.detail.value!)}
                    required
                    className="bg-white p-2"
                  />
                </div>

                {/* Password Input */}
                <div className="input-container mt-4 flex gap-2 justify-center items-center">
                  <FaUnlock className="text-[1.9em]" />
                  <IonInput
                    type="password"
                    value={password}
                    placeholder="Enter your password"
                    onIonInput={(e) => setPassword(e.detail.value!)}
                    required
                    className="bg-white p-2"
                  />
                </div>

                {/* Confirm Password Input */}
                <div className="input-container mt-4 flex gap-2 justify-center items-center">
                  <MdOutlinePassword className="text-[1.9em] -ml-1" />
                  <IonInput
                    type="password"
                    value={cpassword}
                    placeholder="Confirm your password"
                    onIonInput={(e) => setcPassword(e.detail.value!)}
                    required
                    className="bg-white "
                  />
                </div>

                {/* Sign Up Button */}
                <IonButton
                  expand="full"
                  type="submit"
                  className="mt-4 bg-[#2b8eff] custom-button"
                >
                  Sign Up
                </IonButton>
              </form>
              <div className="ion-text-center mt-4">
                <IonText>
                  <p>
                    Already have an account?{" "}
                    <IonRouterLink routerLink="/login" color="primary">
                      Login
                    </IonRouterLink>
                  </p>
                </IonText>
              </div>
            </div>
          </div>
          <div className="toCon absolute bottom-0 right-2">
            <IonRouterLink routerLink="/connection" color="primary">
              Bluetooth Page
            </IonRouterLink>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;

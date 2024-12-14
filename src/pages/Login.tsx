import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonText,
  IonRouterLink,
} from "@ionic/react";
import { FaUser, FaUnlock } from "react-icons/fa";
import Circle from "../components/Circle";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <IonPage>
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
              <form>
                <div className="input-container flex gap-2 justify-center items-center">
                  <FaUser className="text-3xl" />
                  <div className="bg-white">
                    <IonInput
                      type="email"
                      value={username}
                      placeholder="Enter your email"
                      onIonInput={(e) => setUsername(e.detail.value!)}
                      required
                      className="p-2 ml-2"
                      style={{
                        transition: "all 0.3s ease",
                      }}
                      onFocus={(e) =>
                        (e.target.style.transform = "scale(1.07)")
                      }
                      onBlur={(e) => (e.target.style.transform = "scale(1)")}
                    />
                  </div>
                </div>
                <div className="input-container mt-2 flex gap-2">
                  <FaUnlock className="text-[2em] text-center" />
                  <div className="bg-white flex justify-center items-center">
                    <IonInput
                      className="text-bold ml-2"
                      type="password"
                      value={password}
                      placeholder="Enter your password"
                      onIonInput={(e) => setPassword(e.detail.value!)}
                      required
                      style={{
                        transition: "all 0.3s ease",
                      }}
                      onFocus={(e) =>
                        (e.target.style.transform = "scale(1.07)")
                      }
                      onBlur={(e) => (e.target.style.transform = "scale(1)")}
                    />
                  </div>
                </div>
                <IonButton
                  expand="full"
                  className="mt-5 bg-[#2b8eff] custom-button w-50"
                  color={"button"}
                >
                  Sign in with Google
                </IonButton>
                <IonButton
                  expand="full"
                  type="submit"
                  className="custom-button w-50 mt-2"
                  color={"success"}
                >
                  Login
                </IonButton>
              </form>

              <div className="ion-text-center mt-2">
                <IonText>
                  <p>
                    Don't have an account?{" "}
                    <IonRouterLink routerLink="/signup" color="primary">
                      Sign Up
                    </IonRouterLink>
                  </p>
                </IonText>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;

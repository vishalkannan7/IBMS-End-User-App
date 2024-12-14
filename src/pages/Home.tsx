import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRouterLink,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blankdada</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <IonRouterLink routerLink="/signup" color="primary">
          Sign Up
        </IonRouterLink>
        <IonRouterLink routerLink="/login" color="primary">
          LogIn
        </IonRouterLink>
        <IonRouterLink routerLink="/connection" color="primary">
          Connection
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Home;

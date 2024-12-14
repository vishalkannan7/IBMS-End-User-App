import React, { useState, useEffect } from 'react';
import { IonContent, IonPage, IonButton, IonList, IonItem, IonLabel } from '@ionic/react';
import { IoHome } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { ImMenu } from "react-icons/im";
import { BleClient } from '@capacitor-community/bluetooth-le';
import Circle from '../components/Circle';

const Connection = () => {
  const [devices, setDevices] = useState<any[]>([]); // Store discovered devices
  const [isScanning, setIsScanning] = useState<boolean>(false); // Check if scanning is in progress

  useEffect(() => {
    // Initialize BLE when the component mounts
    BleClient.initialize()
      .then(() => console.log('Bluetooth initialized'))
      .catch((error) => console.error('Bluetooth initialization failed', error));
  }, []);

  // Function to start scanning for BLE devices
  const startScanning = async () => {
    try {
      setIsScanning(true);
      const devicesList: any[] = []; // Temporary list to store discovered devices

      await BleClient.requestLEScan(
        { services: [] }, // Optionally filter by services, or leave empty to scan for all
        (result) => {
          // Add discovered device to the list
          if (!devicesList.some((device) => device.deviceId === result.device)) {
            devicesList.push(result);
            setDevices([...devicesList]); // Update state to re-render the list
          }
        }
      );

      // Stop scanning after 10 seconds (you can adjust this as needed)
      setTimeout(() => {
        BleClient.stopLEScan();
        setIsScanning(false);
        console.log('Stopped scanning');
      }, 10000); // Stops scanning after 10 seconds
    } catch (error) {
      console.error('Scanning failed', error);
      setIsScanning(false);
    }
  };

  // Function to connect to a selected device
  const connectToDevice = async (deviceId: string) => {
    try {
      await BleClient.connect(deviceId);
      console.log('Connected to device:', deviceId);
      // Optionally, handle additional logic after connecting (e.g., read/write data)
    } catch (error) {
      console.error('Connection failed', error);
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='h-[100vh] bg-[#C5F9E9] relative'>
          <div className="circle absolute -left-[20%] -top-[15%]">
            <Circle/>
          </div>
          <div className="circle absolute -left-[40%] -top-[0%]">
            <Circle/>
          </div>
          <div className="settings absolute flex gap-6 right-1 top-2">
            <div className='text-4xl'><IoHome /></div>
            <div className='text-4xl'><FaTools /></div>
            <div className='text-4xl'><ImMenu /></div>
          </div>

          <IonButton
            className='custom-button absolute top-[30%] left-[70%] -translate-x-[50%] -translate-y-[30%] w-48'
            onClick={startScanning}
            disabled={isScanning}
          >
            {isScanning ? 'Scanning...' : 'Scan for Devices'}
          </IonButton>

            <div className='ml-auto w-[80%] flex justify-between absolute top-[50%] left-[7%] '>
                <span className='bg-blue-600 p-2 text-white'>Battery</span>
                <span className='bg-blue-600 p-2 text-white'>Display</span>
            </div>

          <IonList className="device-list absolute top-[55%] w-full">
            {devices.length > 0 ? (
              devices.map((device) => (
                <IonItem key={device.deviceId} button onClick={() => connectToDevice(device.deviceId)}>
                  <IonLabel>
                    <h2>{device.name || 'Unnamed Device'}</h2>
                    <p>{device.deviceId}</p>
                  </IonLabel>
                </IonItem>
              ))
            ) : (
              <p>No devices found</p>
            )}
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Connection;



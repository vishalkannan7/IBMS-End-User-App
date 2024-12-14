import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'endUser',
  webDir: 'dist',
  "plugins": {
    "BluetoothLE": {
      "displayStrings": {
        "scanning": "Scanning for devices",
        "connect": "Connect",
        "disconnect": "Disconnect"
      }
    }
  }
};

export default config;

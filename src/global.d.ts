declare module '@capacitor/core' {
    export interface Plugins {
      Permissions: {
        query(options: { name: string }): Promise<{ state: 'granted' | 'denied' | 'prompt' }>;
      }
    }
  }
declare global {
  interface Window {
    checkoutElements?: {
      init: (type: 'salesFunnel' | 'checkout', options?: any) => {
        mount: (selector: string) => void;
        unmount: () => void;
        destroy: () => void;
      };
    };
  }
}

export interface HotmartWidgetMethods {
  triggerAccept: () => void;
  triggerDecline: () => void;
  isLoaded: boolean;
}

export {};
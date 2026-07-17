interface Window {
  laravelErrors: {
    [key: string]: string[];
  };
  laravelSession: {
    [key: string]: string;
  };
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  jQuery;
  $;
  grecaptcha;
  twttr?: {
    widgets: {
      load: (el?: HTMLElement) => void;
    };
    events: {
      bind: (event: string, callback: () => void) => void;
    };
    ready: (callback: (twttr: NonNullable<Window['twttr']>) => void) => void;
  };
}
declare const window: Window;

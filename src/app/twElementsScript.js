import { useEffect } from 'react';

const TwElementsScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '../node_modules/tw-elements/dist/js/tw-elements.umd.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default TwElementsScript;

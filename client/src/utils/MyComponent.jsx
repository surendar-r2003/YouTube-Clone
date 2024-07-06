import React from 'react';
import { getCurrentLocationAndTemperature } from './utils/geolocation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyComponent() {
  const handleGetLocationAndTemperature = () => {
    getCurrentLocationAndTemperature();
  };

  return (
    <div>
      <button onClick={handleGetLocationAndTemperature}>
        Get Location and Temperature
      </button>
      <ToastContainer />
    </div>
  );
}

export default MyComponent;
import React, { useState, useEffect } from 'react';
import './Header.css';
import { handleGesture } from '../../utils/gestures';
import { getCurrentLocationAndTemperature } from '../../utils/geolocation';

const Header = () => {
  const [locationAndTemperature, setLocationAndTemperature] = useState(null);
  const [isLocationAndTemperatureVisible, setIsLocationAndTemperatureVisible] =
    useState(false);

  useEffect(() => {
    const handleHeaderGesture = (event) => {
      handleGesture(event, {
        singleTap: (side) => {
          if (side === 'top-right') {
            toggleLocationAndTemperature();
          }
        },
      });
    };

    document.addEventListener('touchstart', handleHeaderGesture);
    return () => {
      document.removeEventListener('touchstart', handleHeaderGesture);
    };
  }, []);

  const toggleLocationAndTemperature = async () => {
    if (!isLocationAndTemperatureVisible) {
      const { location, temperature } = await getCurrentLocationAndTemperature();
      setLocationAndTemperature({ location, temperature });
    }
    setIsLocationAndTemperatureVisible(!isLocationAndTemperatureVisible);
  };

  return (
    <header className="header">
      {/* Header content */}
      {isLocationAndTemperatureVisible && locationAndTemperature && (
        <div className="location-temperature-popup">
          <p>Location: {locationAndTemperature.location}</p>
          <p>Temperature: {locationAndTemperature.temperature}</p>
        </div>
      )}
    </header>
  );
};

export default Header;
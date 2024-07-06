import axios from 'axios';
import { toast } from 'react-toastify';

export const getCurrentLocationAndTemperature = async () => {
  try {
    // Get the user's IP address
    const ipResponse = await axios.get('https://api.ipify.org?format=json');
    const ip = ipResponse.data.ip;

    // Get the location and temperature based on the IP address
    const locationResponse = await axios.get(`http://api.ipstack.com/${ip}?access_key=${IPSTACK_API_KEY}&units=m`);
    const { city, region_name, country_name, latitude, longitude, temperature } = locationResponse.data;
    const location = `${city}, ${region_name}, ${country_name}`;

    // Display the location and temperature as a popup message
    toast(`Location: ${location}, Temperature: ${temperature}°C`, {
      type: 'info',
      autoClose: 5000,
      position: toast.POSITION.TOP_RIGHT,
    });

    return { location, temperature: `${temperature}°C` };
  } catch (error) {
    console.error('Error getting location and temperature:', error);
    toast('Error getting location and temperature', {
      type: 'error',
      autoClose: 5000,
      position: toast.POSITION.TOP_RIGHT,
    });
    return { location: 'Unknown', temperature: 'N/A' };
  }
};
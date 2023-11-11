import axios from 'axios';

export async function getRooms() {
  const url = 'http://192.168.1.130:8000/hue/getLights/';

  try {
    const response = await axios.get(url);
    const responseData = response.data; // Optional: Log the data
    return responseData;
  } catch (error) {
    if (error.response) {
      console.error('Response Data:', error.response.data);
      console.error('Status Code:', error.response.status);
    } else if (error.request) {
      console.error('Request:', error.request);
    } else {
      console.error('Error Message:', error.message);
    }
    console.error('Axios error:', error);
    throw error; // Re-throw the error in case of an error
  }
}

export async function setRooms(roomId) {
  const url = `http://192.168.1.130:8000/hue/setRoom/${roomId}`;

  try {
    const response = await axios.put(url);
    const responseData = response.data; // Optional: Log the data
    return responseData;
  } catch (error) {
    if (error.response) {
      console.error('Response Data:', error.response.data);
      console.error('Status Code:', error.response.status);
    } else if (error.request) {
      console.error('Request:', error.request);
    } else {
      console.error('Error Message:', error.message);
    }
    console.error('Axios error:', error);
    throw error; // Re-throw the error in case of an error
  }
}

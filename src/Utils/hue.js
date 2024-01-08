import axios from 'axios';

export async function getRooms() {
  const backendAddress = import.meta.env.VITE_BACKEND_BASE_URL;
  const url = backendAddress + '/hue/getLights/';

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
  const backendAddress = import.meta.env.VITE_BACKEND_BASE_URL;
  const url = backendAddress + `/hue/setRoom/${roomId}`;

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

export async function dimmLight(lightId, duration, brightness) {
  const backendAddress = import.meta.env.VITE_BACKEND_BASE_URL;
  const url = backendAddress + `/hue/dimm_light`;

  const requestBody = {
    light_id: lightId,
    duration: duration,
    brightness: brightness,
  };

  try {
    const response = await axios.put(url, requestBody);
    const responseData = response.data;
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

export async function getStatus(automation_id) {
  const backendAddress = import.meta.env.VITE_BACKEND_BASE_URL;
  const url = backendAddress + `/hue/get_automation_state/${automation_id}`;

  try {
    const response = await axios.get(url);
    const responseData = response.data;
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

export async function stopAutomation(automation_id) {
  const backendAddress = import.meta.env.VITE_BACKEND_BASE_URL;
  const url = backendAddress + `/hue/stop_automation/${automation_id}`;

  try {
    const response = await axios.get(url);
    const responseData = response.data;
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

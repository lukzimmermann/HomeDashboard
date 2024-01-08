import { useState } from 'react';
import './dimmNursery.css';
import image from './cute_moon.png';
import { dimmLight, getStatus, stopAutomation } from '../../Utils/hue';

function DimmNurseryPage() {
  if (localStorage.getItem('durationIndex') == null) {
    localStorage.setItem('durationIndex', 1);
  }

  if (localStorage.getItem('brightnessIndex') == null) {
    localStorage.setItem('brightnessIndex', 1);
  }

  const [durationIndex, setDurationIndex] = useState(
    parseInt(localStorage.getItem('durationIndex'))
  );
  const [brightnessIndex, setBrightnessIndex] = useState(
    parseInt(localStorage.getItem('brightnessIndex'))
  );

  const [automationId, setAutomationId] = useState('');
  const [buttonText, setButtonText] = useState('Start');

  const duration = ['1', '2', '3', '5', '10', '15', '20', '30'];
  const brightness = [
    '10%',
    '20%',
    '30%',
    '40%',
    '50%',
    '75%',
    '100%',
    'aktuell',
  ];

  const increaseDuration = () => {
    if (durationIndex < duration.length - 1)
      setDurationIndex(durationIndex + 1);
  };

  const decreaseDuration = () => {
    if (durationIndex > 0) setDurationIndex(durationIndex - 1);
  };

  const increaseBrightness = () => {
    if (brightnessIndex < brightness.length - 1)
      setBrightnessIndex((a) => a + 1);
  };

  const decreaseBrightness = () => {
    if (brightnessIndex > 0) setBrightnessIndex((a) => a - 1);
  };

  const getStatusOfButton = async () => {
    if (buttonText !== 'Start') {
      const response = await getStatus(automationId);
      if (response.status != 'alive') {
        setButtonText('Start');
        clearInterval(interval);
      }
    }
  };

  const interval = setInterval(getStatusOfButton, 2000);

  const startDimming = async () => {
    //event.preventDefault();
    if (buttonText === 'Start') {
      localStorage.setItem('durationIndex', durationIndex);
      localStorage.setItem('brightnessIndex', brightnessIndex);

      let current_brightness;

      if (brightness[brightnessIndex] === 'aktuell') {
        current_brightness = -1;
      } else {
        current_brightness = parseInt(brightness[brightnessIndex]);
      }

      const current_duration = parseInt(duration[durationIndex]) * 60;
      const lightId = 'fe6b762c-e6ae-47f9-9303-86ac1d3c135d';
      //const lightId = 'ca01113c-2297-405a-8456-15b75678fc28';

      const response = await dimmLight(
        lightId,
        current_duration,
        current_brightness
      );

      setAutomationId(response.automation_id);
      setButtonText('Stop');
    } else {
      setButtonText('Start');
      await stopAutomation(automationId);
    }
  };

  return (
    <div className="MainContainer prevent-select">
      <img className="image" src={image} alt="Description of the image" />
      <label className="title">Dauer des dimmens</label>
      <div className="selector">
        <button
          className="button"
          onClick={decreaseDuration}
          onTouchCancel={decreaseDuration}
        >
          -
        </button>
        <label className="text">{duration[durationIndex]}min</label>
        <button
          className="button"
          onClick={increaseDuration}
          onTouchCancel={increaseDuration}
        >
          +
        </button>
      </div>
      <label className="title">Start Helligkeit</label>
      <div className="selector">
        <button
          className="button"
          onClick={decreaseBrightness}
          onTouchCancel={decreaseBrightness}
        >
          -
        </button>
        <label className="text">{brightness[brightnessIndex]}</label>
        <button
          className="button"
          onClick={increaseBrightness}
          onTouchCancel={increaseBrightness}
        >
          +
        </button>
      </div>
      <button
        className="buttonStart"
        onClick={startDimming}
        onTouchCancel={startDimming}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default DimmNurseryPage;

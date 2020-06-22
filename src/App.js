import React, { useState, useEffect } from 'react';
import EffectExample from './EffectExample';

export default function App() {
  const [location, setLocation] = useState({});
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const whatchId = navigator.geolocation.watchPosition(handlePostitionReceived);

    return () => navigator.geolocation.clearWatch(whatchId);

  }, []);

  function handlePostitionReceived({ coords }) {
    const { latitude, longitude } = coords;

    setLocation({ latitude, longitude });
  }

  setTimeout(() => {
    setVisible(false);
  }, 5000);

  return (
    <>
      Latitude: {location.latitude} <br />
      Longitude: {location.longitude}

      <hr />

      {visible && <EffectExample />}

    </>

  );
};
import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

type SplineBackgroundProps = {
  onError?: () => void;
  onLoad?: () => void;
};

const SplineBackground: React.FC<SplineBackgroundProps> = ({ onError, onLoad }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    setLoading(false);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setError(true);
    setLoading(false);
    if (onError) onError();
  };

  // Set a timeout to trigger error if loading takes too long
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (loading) {
        handleError();
      }
    }, 8000); // 8 seconds timeout

    return () => clearTimeout(timeoutId);
  }, [loading]);

  return (
    <div className="fixed inset-0 z-5">
      <Spline
        scene="https://prod.spline.design/Qs48LEPKi91dwsR4/scene.splinecode"
        onLoad={handleLoad}
        onError={handleError}
        style={{
          width: '100%',
          height: '100%',
          position: 'fixed',
          top: '-3%', // Moved 3% upwards to match previous styling
          left: 0
        }}
      />
    </div>
  );
};

export default SplineBackground;
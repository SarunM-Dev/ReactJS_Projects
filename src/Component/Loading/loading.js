import React, { useState, useEffect } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

export function Loading() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate a loading delay
        const delay = setTimeout(() => {
            setLoading(false);
        }, 3000);

        // Clear the timeout if the component unmounts before the delay is over
        return () => clearTimeout(delay);
    }, []);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <ThreeCircles
                    height={100}
                    width={100}
                    color="#590d22"
                    visible={true}
                    ariaLabel="three-circles-rotating"
                    outerCircleColor=""
                    innerCircleColor=""
                    middleCircleColor=""
                />
            </div>
        )
    } else {
        navigate('/task1');
        return null;
    }
}

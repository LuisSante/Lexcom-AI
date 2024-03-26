import { useState, useEffect } from 'react';
import { axiosInstancewithoutPermissions } from '../components/axios';

const Healtz = () => {
    const [healthStatus, setHealthStatus] = useState('');

    useEffect(() => {
        const fetchHealthStatus = async () => {
            try {
                const response = await axiosInstancewithoutPermissions.get('test/');
                if (response.status === 200) {
                    setHealthStatus('200');
                } else {
                    setHealthStatus('403');
                }
            } catch (error) {
                console.error('Error fetching health status:', error);
                setHealthStatus('Error');
            }
        };

        fetchHealthStatus();
    }, []);

    return (
        <div>
            <h1 style={{color: 'white'}}>Health Status: {healthStatus}</h1>
        </div>
    );
};

export default Healtz;
import { useEffect, useState } from 'react';

import BaseUrls from '../constants/api';

export default function useIp() {
    const [result, setResult] = useState({ isLoading: false, ip: null, error: null });

    useEffect(() => {
        const controller = new AbortController();

        async function getIpAddress() {
            try {
                setResult((prevResult) => ({ ...prevResult, isLoading: true }));

                const res = await fetch(BaseUrls.ipAddressApi, {
                    signal: controller.signal,
                });

                if (res.ok && res.status === 200) {
                    const data = await res.json();

                    setResult((prevResult) => ({ ...prevResult, ip: data.ip }));
                }
            } catch (error) {
                setResult((prevResult) => ({ ...prevResult, error: 'Problem Exist.' }));
            } finally {
                setResult((prevResult) => ({ ...prevResult, isLoading: false }));
            }
        }

        getIpAddress();

        return () => controller.abort();
    }, []);

    return result;
}

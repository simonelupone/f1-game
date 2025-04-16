import axios from 'https://cdn.jsdelivr.net/npm/axios@1.6.8/+esm'

const api = axios.create({
    baseURL: 'https://api.openf1.org/v1'
})

/**
 * fetch a list of drivers for a specific session
 *
 * @async
 * @function getDrivers
 * @returns {Promise<Object[]>} promise that resolves to an array of driver objects
 */
export const getDrivers = async () => {
    const sessionKey = '9686';

    const response = await api.get('/drivers', {
        params: {
            session_key: sessionKey
        }
    });

    console.log(response);
    return response.data;
};
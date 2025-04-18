import axios from 'https://cdn.jsdelivr.net/npm/axios@1.6.8/+esm'

const api = axios.create({
    baseURL: 'https://api.openf1.org/v1'
})

/**
 * get latest session_key
 *
 * @async
 * @returns {Promise<number>} highest meeting_key
 */
const getLatestRaceSession = async () => {
    const date = new Date();
    const response = await api.get('/sessions', {
        params: {
            session_name: 'Race',
            year: date.getFullYear()
        }
    })
    // console.log(response.data);
    const session = response.data
    const latestRaceSession = Math.max(...session.map(m => m.session_key));
    // console.log(latestRaceSession);

    return latestRaceSession
}

/**
 * fetch a list of drivers for a specific session
 *
 * @async
 * @returns {Promise<Object[]>} promise that resolves to an array of driver objects
 */
export const getDrivers = async () => {
    const lastRaceSession = await getLatestRaceSession();

    const response = await api.get('/drivers', {
        params: {
            session_key: lastRaceSession
        }
    });
    console.log(response.data);
    const driversObj = response.data

    return driversObj;
};
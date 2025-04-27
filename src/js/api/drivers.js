import axios from 'https://cdn.jsdelivr.net/npm/axios@1.6.8/+esm';

const api = axios.create({
    baseURL: 'https://api.openf1.org/v1'
});

/**
 * Gets the latest race session key
 * @async
 * @returns {Promise<number>} The highest session_key for a Race session in the current year
 */
const getLatestRaceSession = async () => {
    const date = new Date();
    const response = await api.get('/sessions', {
        params: {
            session_name: 'Race',
            year: date.getFullYear()
        }
    });

    const session = response.data;
    const latestRaceSession = Math.max(...session.map(m => m.session_key));
    console.log('Latest race session:', latestRaceSession);
    return latestRaceSession;
};

/**
 * Fetches a list of drivers for the most recent race session
 * Adds a 'selected' property to each driver object
 * @async
 * @returns {Promise<Object[]>} Array of driver objects with additional 'selected' property
 */
export const getDrivers = async () => {
    const lastRaceSession = await getLatestRaceSession();
    const response = await api.get('/drivers', {
        params: {
            session_key: lastRaceSession
        }
    });

    const driversObj = response.data;
    const myDrivers = driversObj.map((driver) => ({
        ...driver,
        index: 0,
        time: 0,
        selected: false,
        interval: 0,
        toLeader: 0
    }));

    // console.log('Drivers loaded:', myDrivers);
    return myDrivers;
};

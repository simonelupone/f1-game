import { getDrivers } from './components/drivers.js'

/**
 * @typedef {Object} Driver
 * @property {string} broadcast_name - driver's name (uppercase e.g C LECLERC)
 * @property {number} driver_number - driver's car number
 */
getDrivers().then(drivers => {
    const driverSelect = document.getElementById('driver-select');

    if (driverSelect && drivers.length > 0) {
        const driverOptions = drivers.map(driver => `<option class="dark:bg-red-700" value="${driver.driver_number}">${driver.broadcast_name}</option>`).join('');
        driverSelect.innerHTML = driverOptions;
    } else {
        driverSelect.innerHTML = '<p>Nessun pilota trovato.</p>';
    }
});
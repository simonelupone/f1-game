import { getDrivers } from './components/drivers.js'

/**
 * @typedef {Object} Driver
 * @property {string} broadcast_name - driver's name (uppercase e.g C LECLERC)
 * @property {number} driver_number - driver's car number
 */
getDrivers().then(drivers => {
    const app = document.querySelector('#app');

    if (app && drivers.length > 0) {
        const listItems = drivers.map(driver => `<li>${driver.broadcast_name} - ${driver.driver_number}</li>`).join('');
        app.innerHTML = `<ul class="dark:text-white">${listItems}</ul>`;
    } else {
        app.innerHTML = '<p>Nessun pilota trovato.</p>';
    }
});
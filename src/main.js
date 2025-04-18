import { getDrivers } from './modules/drivers.js';
import { createDriversSelect } from './components/driversSelect.js';
import { createDriversList } from './components/driversList.js';

const driversSelect = document.getElementById('drivers-select');
const driversList = document.getElementById('drivers-list');

/**
 * @typedef {Object} Driver
 * @property {string} broadcast_name - driver's name (uppercase e.g C LECLERC)
 * @property {number} driver_number - driver's car number
 */
getDrivers().then(drivers => {
    if (driversSelect && driversList && drivers.length > 0) {

        const driversOptions = drivers.map(createDriversSelect).join('');
        const driversListItems = drivers.map(createDriversList).join('');

        driversSelect.innerHTML = driversOptions;
        driversList.innerHTML = driversListItems;
    } else {
        driversSelect.innerHTML = '<p>Nessun pilota trovato.</p>';
    }
});
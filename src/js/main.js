import {domElements} from './dom.js';
import {getDrivers} from './api/drivers.js';
import {createDriversSelect} from './components/driversSelect.js';
import {createDriverRow} from './components/driversList.js';
import {showLoader, hideLoader} from "./utils.js";
import {loadingSpinner} from './components/loader.js';

const {driversSelect, tbody, selectButton, loader, app} = domElements

let myDrivers = [];

/**
 * Updates with the current list of drivers
 * Marks selected drivers
 */
const updateDriversList = () => {

    if (tbody && myDrivers.length > 0) {

        // Populate ul
        const driversRow = myDrivers.map(createDriverRow).join('');
        tbody.innerHTML = driversRow;
    }
};

/**
 * Handles driver selection when the select button is clicked
 * Updates the selected state of the driver and refreshes the UI
 */
const driverSelection = () => {

    const selectedDriverNumber = parseInt(driversSelect.value);

    // Update drivers with custom property
    myDrivers = myDrivers.map(driver => ({
        ...driver,
        selected: driver.driver_number === selectedDriverNumber
    }));

    updateDriversList();
};

/**
 * Initializes the application
 * Fetches drivers data, populates the select dropdown and list
 * Sets up event listeners
 */
const initDrivers = async () => {

    showLoader(loader, app, loadingSpinner);

    try {
        myDrivers = await getDrivers();

        if (driversSelect && tbody && myDrivers.length > 0) {

            // Populate select
            driversSelect.innerHTML = myDrivers.map(createDriversSelect).join('');

            updateDriversList();

            selectButton.addEventListener('click', driverSelection);
        } else {
            if (tbody) {
                tbody.innerHTML = '<p>No drivers found.</p>';
            }
        }
    } catch (error) {
        console.error('Error loading drivers:', error);
        if (tbody) {
            tbody.innerHTML = '<p>Error loading drivers data.</p>';
        }
    } finally {
        hideLoader(loader);
    }
};
initDrivers();



import { getDrivers } from './api/drivers.js';
import { createDriversSelect } from './components/driversSelect.js';
import { createDriversList } from './components/driversList.js';
import { loadingSpinner } from './components/loader.js';

const driversSelect = document.getElementById('drivers-select');
const driversList = document.getElementById('drivers-list');
const selectButton = document.getElementById('select-button');
const loader = document.getElementById('loader');
const app = document.getElementById('app');

let myDrivers = [];

/**
 * Creates and shows a loading spinner
 * @returns {HTMLElement} The created loader element
 */
const showLoader = () => {

    loader.innerHTML = loadingSpinner()
    app.prepend(loader);
    return loader;
};

/**
 * Removes loading spinner
 */
const hideLoader = () => {

    if (loader) {
        loader.remove();
    }
};

/**
 * Updates with the current list of drivers
 * Marks selected drivers
 */
const updateDriversList = () => {

    if (driversList && myDrivers.length > 0) {

        // Populate ul
        const driversListItems = myDrivers.map(createDriversList).join('');
        driversList.innerHTML = driversListItems;
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

    showLoader();

    try {
        myDrivers = await getDrivers();

        if (driversSelect && driversList && myDrivers.length > 0) {

            // Populate select
            const driversOptions = myDrivers.map(createDriversSelect).join('');
            driversSelect.innerHTML = driversOptions;

            updateDriversList();

            selectButton.addEventListener('click', driverSelection);
        } else {
            if (driversList) {
                driversList.innerHTML = '<p>No drivers found.</p>';
            }
        }
    } catch (error) {
        console.error('Error loading drivers:', error);
        if (driversList) {
            driversList.innerHTML = '<p>Error loading drivers data.</p>';
        }
    } finally {
        hideLoader();
    }
};
initDrivers();

import {domElements} from './dom.js';
import {getDrivers} from './api/drivers.js';
import {createDriversSelect} from './components/driversSelect.js';
import {createDrivers} from './components/driversList.js';
import {showLoader, hideLoader} from "./utils.js";
import {loadingSpinner} from './components/loader.js';
import {createRow} from "./components/tableRow.js";
import {lap, formatLapTime} from "./game/lapEngine.js";
import {times} from "./components/driversTime.js";

console.log(formatLapTime(lap()));

const {driversSelect, tbody, selectButton, loader, app, startButton} = domElements

let myDrivers = [];

/**
 * Updates with the current list of drivers
 * Marks selected drivers
 */
const updateDriversList = () => {

    if (tbody && myDrivers.length > 0) {

        myDrivers.sort((a, b) => {
            if(a.time === null) return 1
            if(b.time === null) return -1
            return a.time - b.time
        })
        tbody.innerHTML = myDrivers
            .map((driver, index) => {
                const driverCells = createDrivers(driver, index);

                //others cells...
                // const cells = driverCells + ...
                // ...add to createRow in elements
                const timeCells = times(driver.time != null ? formatLapTime(driver.time) : '---');
                const intervalCell = times(driver.interval !== '' ? formatLapTime(driver.interval) : '');

                const cells = driverCells + timeCells + intervalCell;
                return createRow({selected: driver.selected, elements: cells});
            })
            .join('');
    }
};

const assignTime = () => {
    myDrivers = myDrivers.map((driver, index) => ({
        ...driver,
        time: lap(),
    }));
    // console.log(myDrivers)
    updateDriversList();
    assignInterval();
};

const assignInterval = () => {
    myDrivers = myDrivers.map((driver, index) => ({
        ...driver,
        index: index,
        interval: index > 0 ? driver.time - myDrivers[index - 1].time : '',
    }))
    console.log(myDrivers)
    updateDriversList();
}


startButton.addEventListener('click', assignTime);


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



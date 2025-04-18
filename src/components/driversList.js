/**
 * Creates a list item for a driver
 * Applies bold styling if the driver is selected
 * @param {Object} driver - The driver object
 * @param {string} driver.broadcast_name - The driver's display name
 * @param {boolean} driver.selected - Whether the driver is selected
 * @returns {string} HTML string for the list item
 */
export const createDriversList = ({ broadcast_name, selected }) => {
    return selected
        ? `<li class="text-xl text-red-500 font-f1-normal-700">${broadcast_name}</li>`
        : `<li class="text-xl font-f1-normal-400">${broadcast_name}</li>`;
};
/**
 * Creates an option element for the drivers select dropdown
 * @param {Object} driver - The driver object
 * @param {number} driver.driver_number - The driver's car number
 * @param {string} driver.broadcast_name - The driver's display name
 * @returns {string} HTML string for the option element
 */
export const createDriversSelect = ({ driver_number, broadcast_name }) => {
    return `
    <option value="${driver_number}">${broadcast_name}</option>
    `;
};
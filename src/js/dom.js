/**
 * An object containing references DOM elements used throughout the application.
 *
 * @property {HTMLElement} driversSelect - The <select> element where users choose drivers.
 * @property {HTMLElement} driversList - The container displaying the list of selected drivers.
 * @property {HTMLElement} selectButton - The button used to confirm the driver selection.
 * @property {HTMLElement} loader - The loading indicator shown during asynchronous operations.
 * @property {HTMLElement} app - The main wrapper element for the application.
 *
 */
export const domElements = {
    driversSelect: document.getElementById('drivers-select'),
    tbody:  document.querySelector('table tbody'),
    selectButton: document.getElementById('select-button'),
    loader: document.getElementById('loader'),
    app: document.getElementById('app'),
    startButton: document.getElementById('start-button'),
}
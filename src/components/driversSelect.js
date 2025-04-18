export const createDriversSelect = ({ driver_number, broadcast_name }) => {
    return `
    <option value="${driver_number}">${broadcast_name}</option>
    `;
}
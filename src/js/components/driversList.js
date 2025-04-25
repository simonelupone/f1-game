export const createDriverRow = ({ last_name, team_colour, selected }, index) => {
    const position = index + 1;
    return `
        <tr class="${selected
            ? 'bg-red-200 dark:bg-red-800/40'
            : 'odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800'} 
            border-b dark:border-gray-700 border-gray-200">
            
            <td
                class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap text-center dark:text-white">
                <div class="flex items-center gap-2">
                    <span class="w-6 font-f1-normal-700">${position}</span>
                    <div class="w-1.5 h-4.5 block" style="background: #${team_colour}"></div>
                    <span class="font-f1-normal-400 uppercase">${last_name}</span>
                </div>
            </td>
            <td class="text-lg font-bold px-6 py-2">
                
            </td>
            <td class="px-6 py-2"></td>
            <td class="px-6 py-2"></td>
            <td class="px-6 py-2 w-10">
                <img src="" alt="">
            </td>
        </tr>
    `;
};
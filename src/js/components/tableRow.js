export const createRow = ({selected, elements}) => {
    return `
         <tr class="${selected
            ? 'bg-red-200 dark:bg-red-800/40'
            : 'odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800'} 
                border-b dark:border-gray-700 border-gray-200">
            ${elements}
         </tr>
    `
}
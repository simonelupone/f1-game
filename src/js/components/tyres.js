export const tyreIcon = (tyre) => {
    return `
        <td
                class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap text-center dark:text-white">
                <div class="flex items-center gap-2">
                    <img src="../../../assets/imgs/${tyre}.svg" class="w-6" alt="">
                </div>
            </td>
    `
}
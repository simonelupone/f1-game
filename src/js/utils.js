let isLoading = false;

/**
 * Creates and shows a loading spinner
 * @returns {HTMLElement} The created loader element
 */
export const showLoader = (loader, app, loadingSpinner) => {
    if (!isLoading) {
        loader.innerHTML = loadingSpinner();
        app.prepend(loader);
        isLoading = true;
    }
};

/**
 * Removes loading spinner
 */
export const hideLoader = (loader) => {
    if (isLoading) {
        loader.remove();
        isLoading = false;
    }
};

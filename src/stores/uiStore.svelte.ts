let isLoginPopupOpen = $state(false);

function openLoginPopup() {
    isLoginPopupOpen = true;
}

function closeLoginPopup() {
    isLoginPopupOpen = false;
}

export const uiStore = {
    get loginPopupOpen() { return isLoginPopupOpen },
    openLoginPopup,
    closeLoginPopup
}; 
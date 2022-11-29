const tg = globalThis.Telegram.WebApp;
tg.ready();
tg.BackButton.isVisible = true;
tg.MainButton.text = "Авторизация";
tg.MainButton.onClick(function(){
    tg.showPopup({
        title: 'Вот это да!',
        message: 'Вы нажали MainButton'
    });
}); 
tg.MainButton.isVisible = false;
tg.isClosingConfirmationEnabled = true;


document.getElementById('alert')?.addEventListener("click", () => {
    tg.showAlert('Oops..');
});
document.getElementById('show_mb')?.addEventListener("click", (event) => {
    tg.MainButton.isVisible = !tg.MainButton.isVisible
});
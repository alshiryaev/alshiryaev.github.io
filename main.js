const tg = globalThis.Telegram.WebApp;
tg.MainButton.isVisible = true;
tg.MainButton.text = "Авторизация";
tg.MainButton.onClick(function(){
    tg.showPopup({
        title: 'Вот это да!',
        message: 'Вы нажали MainButton'
    });
}); 
tg.isClosingConfirmationEnabled = true;

document.getElementById('btn')?.addEventListener("click", () => {
    tg.showAlert('Oops..');
})
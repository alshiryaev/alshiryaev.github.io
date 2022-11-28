const tg = globalThis.Telegram.WebApp;
tg.MainButton.isVisible = true;
tg.MainButton.text = "Auth";
tg.MainButton.onClick(function(){
    tg.showPopup({
        title: 'Вот это да!',
        message: 'Вы нажали MainButton'
    });
}); 
tg.isClosingConfirmationEnabled = true;
console.log(tg);

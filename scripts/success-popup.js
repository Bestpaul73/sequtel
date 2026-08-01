// ждём полной загрузки HTML-документа
document.addEventListener("DOMContentLoaded", function () {

    // получаем текущие GET-параметры из URL
    const urlParams = new URLSearchParams(window.location.search);

    // проверяем, есть ли success=1
    if (urlParams.get("success") === "1") {

        // создаём overlay (затемнение всего экрана)
        const overlay = document.createElement("div");

        // добавляем CSS-класс overlay
        overlay.className = "success-popup-overlay";

        // создаём popup-окно
        const popup = document.createElement("div");

        // добавляем CSS-класс popup
        popup.className = "success-popup";

        // вставляем HTML внутрь popup
        popup.innerHTML = `
            <button
                class="success-popup-close"
                aria-label="Закрыть"
            >
                ×
            </button>

            <div class="success-popup-icon">
                ✓
            </div>

            <div class="success-popup-title">
                Спасибо!
            </div>

            <div class="success-popup-text">
                Ваше сообщение успешно отправлено.<br>
                Мы свяжемся с вами в ближайшее время.
            </div>

            <button class="success-popup-btn">
                ОК
            </button>
        `;

        // помещаем popup внутрь overlay
        overlay.appendChild(popup);

        // вставляем overlay в body
        document.body.appendChild(overlay);

        // формируем URL без GET-параметров
        const cleanUrl =
            window.location.origin +
            window.location.pathname;

        // заменяем URL без перезагрузки страницы
        window.history.replaceState(
            {},                 // state object
            document.title,     // текущий title страницы
            cleanUrl            // новый URL
        );

        // функция закрытия popup
        function closePopup() {

            // добавляем CSS-класс скрытия
            overlay.classList.add(
                "success-popup-hide"
            );

            // ждём завершения CSS-анимации
            setTimeout(function () {

                // удаляем popup из DOM
                overlay.remove();

            }, 250);

            // убираем listener клавиатуры
            document.removeEventListener(
                "keydown",
                escHandler
            );
        }

        // обработчик ESC
        function escHandler(e) {

            // если нажата клавиша Escape
            if (e.key === "Escape") {

                // закрываем popup
                closePopup();
            }
        }

        // находим кнопку ОК
        const okButton =
            popup.querySelector(
                ".success-popup-btn"
            );

        // вешаем событие клика на ОК
        okButton.addEventListener(
            "click",
            closePopup
        );

        // находим крестик
        const closeButton =
            popup.querySelector(
                ".success-popup-close"
            );

        // вешаем событие клика на крестик
        closeButton.addEventListener(
            "click",
            closePopup
        );

        // отслеживаем клики по overlay
        overlay.addEventListener(
            "click",
            function (e) {

                // если клик был именно по overlay,
                // а не по popup
                if (e.target === overlay) {

                    // закрываем popup
                    closePopup();
                }
            }
        );

        // отслеживаем нажатие клавиш
        document.addEventListener(
            "keydown",
            escHandler
        );
    }
});
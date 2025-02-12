// Функция для генерации случайного цвета в формате HEX
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Функция-обработчик события клика
function handleClick(event) {
    // Получаем элемент, на котором произошло событие
    const clickedElement = event.target;
    // Генерируем случайный цвет
    const randomColor = getRandomColor();
    // Устанавливаем сгенерированный цвет в качестве фона элемента
    clickedElement.style.backgroundColor = randomColor;
}

// Добавляем обработчик события клика к документу
document.addEventListener('click', handleClick);

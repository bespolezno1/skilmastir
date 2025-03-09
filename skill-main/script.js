function showContent(contentId) {
	// Скрыть все контейнеры
	document.querySelectorAll('.content-container').forEach(el => {
		el.style.display = 'none';
	});
	
	// Показать выбранный контейнер
	document.getElementById(contentId).style.display = 'block';
	
	// Убрать активный класс у всех кнопок
	document.querySelectorAll('.menu-btn').forEach(btn => {
		btn.classList.remove('active');
	});
	
	// Добавить активный класс текущей кнопке
	$event.target.classList.add('active');

}

// Показать тестирование по умолчанию
document.getElementById('testing').style.display = 'block';

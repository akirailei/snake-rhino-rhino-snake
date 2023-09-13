'use strict';

{
  const snake = document.getElementById('snake');
  const rhino = document.getElementById('rhino');

  snake.addEventListener('click', () => {
    snake.classList.add('hidden');
    rhino.classList.remove('hidden');
  });

  rhino.addEventListener('click', () => {
    snake.classList.remove('hidden');
    rhino.classList.add('hidden');
  });
}
# calculator-task

Входное задание для записи на курс по React + Next.js

## Краткие требования (на основе описания задачи)

- [x] корректная HTML-структура
- CSS
  - [x] адаптивность (flexbox, grid, transition)
  - [x] использование псевдоклассов (есть `active`, `hover`, есть 1 псевдоэлемент `before`)
- [x] JS
  - [x] RPN или что-то подобное (стек, приоритеты операций и т.д.)
    - [x] базовые операции (сложение, вычитание, умножение, деление)
    - [x] возведение в степень
    - [x] поддержка скобок
  - [x] Сохранение/восстановление последних введенных данных через localStorage
  - [x] (от себя) Обработчики нажатий на кнопки для комфортного управления с ПК

## Описание задачи

Ваша задача — разработать веб-приложение калькулятор.

Необходимо разработать обычный математический калькулятор, для вычисления базовых математических операций и операций со степенями

При создании приложения необходимо применять такие технологии, как HTML, CSS, JavaScript и Git.

HTML — от вас требуется умение правильно организовать структуру HTML, использовать подходящие HTML-теги в зависимости от выполняемого функционала, а также знание атрибутов.

CSS — ожидается, что стиль калькулятора не будет простым и стандартным. Вы должны применять различные свойства, которые улучшают пользовательский интерфейс и делают ваш калькулятор более привлекательным. Вам следует использовать такие инструменты, как flexbox или CSS grid для позиционирования, а также реализовать базовые анимационные элементы через псевдоклассы, например, hover. Мы ожидаем, что вы сможете также адаптировать интерфейс для мобильных устройств.

JavaScript — требуется разработать систему стека или очереди, которая будет обрабатывать операторы и операнды с учетом их приоритетов. Следует внедрить возможность сохранения последних введенных данных в localstorage, чтобы после обновления страницы сохранялись введенные пользователем значения, которые еще не были вычислены. Также нужно создать функции для выполнения математических операций, а также обеспечить функционал для расчета результата, удаления последних введенных операторов или операндов, и возможности полностью очистить все введенные данные.

Финальное задание нужно опубликовать в виде двух ссылок: первая должна вести в репозиторий GitHub, вторая — на развернутую версию проекта (можете воспользоваться сервисом GitHub Pages для деплоя). Работы с одним единственным коммитом будут рассмотрены в последнюю очередь, поскольку для нас также важно ваше умение работать с системой git на базовом уровне.

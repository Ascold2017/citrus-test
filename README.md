# citrus-test

Написать одностраничное приложение используя Vue.js, Nuxt, Vuex.

Использовать api https://randomuser.me/ написать логику получения списка пользователей (ознакомиться с документацией API и понять работу GET параметров results, gender, page)

Отобразить список пользователей в виде плиток, как на странице (https://randomuser.me/), но реализовать только 3 иконки 
name, 
email, 
date of birth

Требований к вёрстке карточки нет, сделать максимально похоже на примере.

При нажатии на карточку пользователя выводить алерт с текстом: “My email is {email}. Gender is {gender}. Age is {age}” - где значения в фигурных скобках, это значения которые пришли из api

На странице должны быть:

Выбор количества карточек на странице. Реализовать как input, если поле пустое - валидировать и показывать соответствующую подсказку о том, что необходимо заполнить поле. Доступные значения этого поля - целые числа от 1 до 20.

Фильтр по гендерному признаку. Реализовать в виде radio button - со значениями:
female
male
any (этого параметра не должно быть в запросе)

Пагинация в виде двух возможностей:
Загрузить еще
Переход на следующую страницу

Будет плюсом:

1. Реализовать Server side rendering 
2. Верстку делать при помощи BEM
3. Использование препроцессоров CSS (SASS, LESS)

Условия сдачи:

1. Использовать Vuex как хранилище - почитать можно здесь: https://vuex.vuejs.org/
2. Проект создать с помощью https://nuxtjs.org/
3. Предоставить ссылку на публичный репозиторий с готовой работой (Github или BitBucket)
4. Предоставить ссылку на развёрнутый проект на бесплатном хостинге (например, https://www.heroku.com/)


## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

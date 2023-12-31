# Магазин пицц.

<img src="./src/img/output(video-cutter-js.com) (1).gif" alt='pizza-store-gif'/>

## Ссылки:

[!['pizza-react'](https://readme-typing-svg.herokuapp.com?color=%2336BCF7&lines=Посмотреть+можно+здесь!)](https://dmitriy9427.github.io/react-pizza/)

## Описание проекта:

- **Использован сайт для хранения данных - https://mockapi.io/**
- **Адаптивная верстка с использование @media-запросов от 320px и больше.**

- **Сортировка списка пицц по:**

  - категориям
  - популярности
  - цене
  - алфавиту

- **Поиск пицц по названию(оптимизировано с помощью библиотеки lodash.debounce)**

- **Пагинация(порядковая нумерация страниц)**

- **Добавление пицц с определенными параметрами в корзину, на кнопке появляется счетчик с количеством добавленных пицц**

- **В корзине на счетчиках видно количество добавленных пицц и общая сумма. Удаление ненужных пицц с корзины**

## Стек технологий:

- SASS(module.scss):
  - Flexbox
  - Grid Layout
  - @media-запросы

* React.js
  - функциональные компоненты
  - jsx
  - хуки (useState, useEffect, useContext, useRef, useCallback)
  - react-router v6(useNavigate, Link, useParams, Outlet, useLocation)
  - react-content-loader(react-sceleton для того чтобы пользователь понимал, что идет загрузка контента.)
  - lodash.debounce(отказ от множественных запросов к API, для увеличения производительности приложения)
  - async/await + axios(try/catch)
* Redux-Toolkit(createSlice, createAsyncThunk)

#### Инструменты разработки:

- Git
- Visual Studio Code
  - prettier
  - powershell

### Инструкция по установке:

Установите себе GIT - система контроля версий, перейдя по ссылке на офицальный сайт:

```
 https://git-scm.com/
```

После установки GIT, склонируйте репозиторий к себе на компьютер с помощью команды:

```
git clone https://github.com/dmitriy9427/react-pizza.git
```

Далее установите редактор кода, я использую Visual Studio Code, скачать можно по ссылке указанной ниже.

```
https://code.visualstudio.com/
```

Установите Node.js

```
https://nodejs.org/ru
```

Запустите в редакторе кода склонированную папку, откройте терминал и запустите команду для установки всех необходимых зависимостей для проекта:

```
npm install
```

Когда все установлено, можно запускать проект локально с помощью команды:

```
npm start или npm run start
```

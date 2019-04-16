# Установка зависемостей

>Необходимо находиться в test_work_self_server
>Необходимо иметь БД postgres.

```sh
> npm install
```

# Запуск Dev окружения

>В ./config/db.js необходимо настроить подключение к БД

```sh
> npm startDev
```


# Пресет babel для работы с react + mobx

Зависимости типа react, mobx ставятся в dependencies

```sh
"devDependencies": {
    "@babel/cli": "^7.2.3",
    "@babel/core": "^7.3.4",
    "@babel/plugin-proposal-class-properties": "^7.3.4",
    "@babel/plugin-proposal-decorators": "^7.4.0",
    "@babel/plugin-proposal-object-rest-spread": "^7.3.4",
    "@babel/plugin-syntax-dynamic-import": "^7.2.0",
    "@babel/plugin-transform-async-to-generator": "^7.3.4",
    "@babel/plugin-transform-regenerator": "^7.4.3",
    "@babel/plugin-transform-runtime": "^7.4.3",
    "@babel/preset-env": "^7.3.4",
    "@babel/preset-react": "^7.0.0",
    "@babel/register": "^7.0.0",
    "@babel/runtime": "^7.4.3",
    "babel-loader": "^8.0.5",
    "babel-plugin-css-modules-transform": "^1.6.2",
    "babel-plugin-react-css-modules-transform": "^1.5.5",
    ...
```

# Необходимо сконфигурировать .babelrc

```sh
{
  "presets": [
      "@babel/preset-env",                                              // трансплайнит все в js
      "@babel/preset-react",                                            // для реакта
  ],
  "plugins": [
      ["@babel/plugin-proposal-decorators", { "legacy": true }],        // декораторы @observer ...
      ["@babel/plugin-proposal-class-properties",{ "loose": true }],    // декораторы важна последовательность
      ["@babel/plugin-transform-runtime",{"regenerator": true}],        // async/await
      ["@babel/plugin-syntax-dynamic-import"],                          // import /exporеt
      "file-loader"                                                     // gif и прочие файлы
    ]
}
```
# Необходимо сконфигурировать трансплайн для возможности работы сервера с import /exporеt

```sh
  require("@babel/register")({                                          // регистрируюет плагины babel
    plugins: [
      "@babel/plugin-syntax-dynamic-import",                            // import/exporеt
      "css-modules-transform",                                          // css
      "file-loader"                                                     // gif || ...
  ]
  });
  require("./app");                                                     // файл запуска сервера
```
# Некоторые тонкости

Файл для клиента никуда больше не импотрится, учавствует только в сборке приложения.
```sh
webpack
  // Файл, с которого начинается клиентская часть
  entry: {
    client: './ssr/client.js'
  },
```

У точки входа отсутствуют Provider и Router.
По идее роутинг необходимо выносить в отдельный файл.
```sh
  ./app/App.jsx
```

Для клиента мы подключаем { Router } from 'react-router',
```sh
  ./ssr/client.js
```

Для сервера { StaticRouter } from 'react-router-dom'.
```sh
  ./app/index.js
```

В template добавляем хранилища и ссылки на файы которые генерит webpack.
main.js, main.css.
Серверную часть прогоняем через template получаем валидный HTML
```sh
  ./ssr/template.js

  или

  ./ssr/template.pug
```

Директорию с файлами webpack указываем как статику
```sh
  const serve = require('koa-static');
  app.use(serve('./public'));
```

Если возникают проблемы с обнаружение файлов, (... .gif:1 GET ... .gif 404 (Not Found)), то добавляем 
```sh
  app.use(serve('.'));
```

Далее отдаем пользователю наш готовый HTML
```sh
  const stores = require('./app/js/store/index');
  const s = require('./app/index')

  router.get('/', async (ctx, next) =>{
    ctx.body = await s.server(ctx, stores)
  });
```

Или используя шаблонизатор pug 
```sh
  const Pug = require('koa-pug')
  const s = require('./app/index')
  const stores = require('./app/js/store/index');

  router.get('/', async (ctx, next) =>{
    const pug = new Pug({ viewPath: './ssr/' })
    const content =  s.serverPug(ctx)
    const html = pug.render('template',
    {
      title: 'SSR',
      content: content,
      initialState: JSON.stringify(stores),
    })
    ctx.body = html
  });
```
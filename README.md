# Установка зависемостей

>Необходимо находиться в test_work_self_server
>Необходимо иметь БД postgres.

```sh
> npm install
```

# Запуск Dev окружения

>В ./config/db.js необходимо настроить подключение к БД

```sh
> npm start
```


## Пресет babel для работы с react + mobx

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

## Необходимо сконфигурировать .babelrc

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
## Необходимо сконфигурировать трансплайн для возможности работы сервера с import /exporеt

> ./index.js                                                            // файл для запуска сервера с babel
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

## Альтернативой подход к запуску сервера с require/import
Конфингурация отдального webpack конфиг файла для сборки билда серверной части.

> ./webpack/server.js
```sh

  ...
  const nodeExternals = require('webpack-node-externals')
  ...

  entry: {'index.js': path.resolve(__dirname, './app.js')}              // прямой путь для запуска сервера
  target: 'node',                                                       
  externals: [nodeExternals()],                                         // не билдит node_module
  ...
```
В самом деле лишь, как альтернативный подход, каких либо видимых плюсов не увидел.
Минусы - нельзя использовать в коде module.export и export default, вызывает жжение у node
в области пятой точки при поптыке запустить подобный билд.
Соответственно не зыбваем поменять в package.json запуск собранного билда в качестве сервера.

## Запуск webpack с --watch + nodemon development

npm-run-all - позволяет парралельно запустить несколько процессов node.
Нам нужен webpack и сам сервер с hotload.

```sh

  > ./package.json 

  "scripts": {
    "start": "npm-run-all --parallel watch:server watch:build",
    "watch:build": "webpack --mode development --config ./webpack/webpack.config.js --watch",
    "watch:server": "nodemon -r dotenv/config --delay 2.5 ./index.js"
  },
```

'-r dotenv/config'  помогает с .env файлом\
'--delay 2.5' задержка перед перезагрузкой сервера, после изменений

## Немного о webpack

Нужно чистить периодическу папку с билдом от --watch файлов (после каждого ребилда)
```sh
  ... 
  new CleanWebpackPlugin({
    dry: true,
    verbose: false,
  }),
  ...
```

Аналогично delay для nodemon
```sh
  ...
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 600,
  },
  ...
```

# Некоторые тонкости

## Сервер

Файл для клиента никуда больше не импотрится, учавствует только в сборке приложения.
ReactDOM.hydrate, а не ReactDOM.render на данныйм момент варнинг в консоли в 17 версии
react от ReactDOM.render откажутся.
```sh
webpack
  // Файл, с которого начинается клиентская часть
  entry: {
    client: './ssr/client.js'
  },
```

У точки входа отсутствуют Provider и Router.
По идее роутинг необходимо выносить в отдельный файл.

> ./src/App.jsx


Для клиента мы подключаем { Router } from 'react-router',

> ./ssr/client.js


Для сервера { StaticRouter } from 'react-router-dom'.

> ./src/index.js


В template добавляем хранилища и ссылки на файы которые генерит webpack.
main.js, main.css.
Серверную часть прогоняем через template получаем валидный HTML

> ./ssr/template.pug


Директорию с собраными  webpack'ом файлами указываем как статику на сервере
```sh
  const serve = require('koa-static');
  app.use(serve('./public'));
```

Если возникают проблемы с обнаружение файлов, (... .gif:1 GET ... .gif 404 (Not Found)), то добавляем 
```sh
  app.use(serve('.'));
```
Для разворачивания state используем функцию

> ./middleware/ssrRender.js
```sh

  const db = require('../controller/db_controllers');                 // функции для работы с БД
  const u = require('../utilites/utils');                             // утилиты

  async function initialState(ctx) {
      const store = {}
      store.listStore = {}                                            // инициализируем поля для стора
      
      store.listStore.list = await db.getNotes();
      store.listStore.CheckHasErrored =
        (await db.getNote({id : u.extractorUrl(ctx) })).message ? true : false

      Number(u.extractorUrl(ctx))
      ? store.listStore.list_check = await db.getNote({id : Number(u.extractorUrl(ctx)) })
      : store.listStore.list_check = []

      return store;                                                    // возвращаем поля стора с нужными значениями
  }
```

Далее отдаем пользователю наш готовый HTML

> ./middleware/ssrRender.js
```sh

  const Pug = require('koa-pug');
  const s = require('./ssr/index')                                    // рендер сервесайд приложения
  const RootStore = require('../src/js/store/rootStore').default      // инициализация сторов с состояниями

  module.exports = async (ctx, next) => {
      const store = new RootStore(await initialState(ctx))            // собираем инициализированный стор
    
      ctx.mobx = {}
      ctx.mobx.store = store                                         // передаем как значение для "контекста"

      const pug = new Pug({ viewPath: './ssr/' })
      const content = await s.serverPug(ctx)                         // собираем серверную часть
      const html = pug.render('template',                            // передаем в шаблонизатор с нужными параметрами
      {
        title: 'SSR',
        content: content,
        initialState: JSON.stringify(ctx.mobx.store),
      })
      ctx.body = html                                                 // возвращаем пользователю
      await next()                                                    // отдаем управление серверу
  }
```

Ремарка по поводу урлов.
По идее можно всегда отправлять запрос на '*' то есть любой урл будет автоматом
рендерить приложение, то есть для различных 404.

## Клиент

> ./ssr/client.js
```sh

  const rootStore = new RootStore(window.__INITIAL_STATE__);                // собираем стор из того же что у нас есть на сервере
  const element = document.getElementById('app');

  const browserHistory = createBrowserHistory();                            
  const history = syncHistoryWithStore(browserHistory, rootStore.routing);  // из того же стора собираем и историю браузера

  ReactDOM.hydrate(
    <Provider {...rootStore}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    element
  );
```

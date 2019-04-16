// import ssr from '../app/js/store/storeSSR' //вроде как может подхватывать стейт

export async function template(content, initialState) {

  const scripts = `<script type="text/javascript">
  window.__INITIAL_STATE__ = JSON.stringify(${JSON.stringify(initialState)})</script>
  <script src="../public/client.js"></script>`

  const page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <Title>Test work ssr</Title>
                <link rel="stylesheet" href="../public/css/style.css">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" >
              </head>
              <body>
                <div class="content">
                   <div id="app" class="wrap-inner">${content}</div>
                </div>
                ${scripts}
              </body>
              `
  return page
}
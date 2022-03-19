import express from 'express';
import path from 'path';
import useragent from 'express-useragent';
import dotenv from 'dotenv';
import log4js from 'log4js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || '3004';

const logger = log4js.getLogger();
logger.level = process.env.LOG_LEVEL;

logger.info('log4js log info');
logger.debug('log4js log debug');
logger.error('log4js log error');

app.use(express.static(path.resolve(__dirname, './build')));
app.use(useragent.express());

/* app.use((req, res, next) => {
  console.log(req.url);
  console.log(req.useragent);
  next();
}); */

// @typescript-eslint/eslint-plugin@latest
// @typescript-eslint/parser@latest

/* app.get('/app/card/:id?', (request,response) => {
    if (req.params.id) {
        response.send(`
            <meta property="og:title" content="The Slits' Cut" />
        `);
    } else {
        const filePath = path.resolve(__dirname, './build', 'index.html');
        return response.sendFile(filePath);
    }
});

app.get('/app/profile/id?', (request,response) => {
    if (request.params.id) {
        response.send(`
            <meta property="og:title" content="The Slits' Cut" />
        `);
    } else {
        const filePath = path.resolve(__dirname, './build', 'index.html');
        return response.sendFile(filePath);
    }
}); */

app.get('*', (_, response) => {
  const filePath = path.resolve(__dirname, './build', 'index.html');
  response.sendFile(filePath);
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}...`);
});

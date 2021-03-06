import createError, { HttpError } from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cons from 'consolidate';
import cors from 'cors';

import config from '../config';
import indexRouter from './routes';
import catsRouter from './routes/cats';

// const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Create Express server
const app = express();
const corsOptions: cors.CorsOptions = {
  origin: config.ALLOWED_ORIGINS,
};

// view engine setup
app.engine('html', cons.swig);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.set('view cache', true);

app.use(logger('dev'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
console.log('Serving static files from :' + config.PUBLIC_PATH);
app.use(express.static(config.PUBLIC_PATH));

app.use('/', indexRouter);
app.use('/api/cats', catsRouter);

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

// error handler
app.use(function (err: HttpError, req: Request, res: Response) {
  console.log(err);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;

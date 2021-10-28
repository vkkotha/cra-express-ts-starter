import createError, { HttpError } from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import swig from 'swig';

export interface IHash {
  [details: string]: express.Router;
}

import indexRouter from './routes';

function dynamicRoute(m: string) {
  return async function routeHandler(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const { default: router } = await import(m);
    router(request, response, next);
  };
}

// Create Express server
const app = express();

// view engine setup
app.engine('html', swig.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.set('view cache', true);
swig.setDefaults({ cache: false });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
console.log(
  'Serving static files from :' + path.join(__dirname, '../../public')
);
app.use(express.static(path.join(__dirname, '../../public')));

app.use('/', indexRouter);
app.use('/cats', dynamicRoute('./routes/cats'));

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

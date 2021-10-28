// var express = require("express");
import express, { Response, Request } from 'express';
const router = express.Router();

const catsList = {
  "data": [
    {"id": 1, "name": "pinky", "size": "small"},
    {"id": 2, "name": "ponky", "size": "big"},
    {"id": 3, "name": "club", "size": "small"},
    {"id": 4, "name": "rocket", "size": "medium"},
    {"id": 5, "name": "mystro", "size": "small"}
  ]
};

/* GET users listing. */
router.get('/', function (req: Request, res: Response) {
  res.send(catsList);
});

export default router;

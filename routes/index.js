/**
 * Created on 2016/8/1.
 * @fileoverview 请填写简要的文件说明.
 * @author joc (Chen Wen)
 */
var express = require('express');
var router = express.Router();
var fs = require('fs')

/* GET home page. */
router.get('/', function (req, res) {
    res.send('GET ' + new Date());
    //fs.readFile('logs/all-logs.log', function (err, data) {
    //    if (err) {
    //        var list = ['file not find']
    //        res.render('index',
    //            {
    //                title: 'Log Server',
    //                logs: list
    //            });
    //    } else {
    //        var list = data.toString().split('\n');
    //        res.render('index',
    //            {
    //                title: 'Log Server',
    //                logs: list
    //            });
    //    }
    //});
});

router.get('/1', function (req, res) {
    res.send('this is route 1');
});

router.get('/2', function (req, res) {
    res.send('this is route 2');
});

var winston = require('winston');
var logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: './logs/all-logs.log',
            handleExceptions: true,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: false
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});
router.post('/', function (req, res) {
    console.log('info:', req.content, req.body)
    // req.body.log req.body.platform req.body.stack
    res.send('POST ' + new Date());
});
module.exports = router;
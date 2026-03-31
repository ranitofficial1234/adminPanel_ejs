const express = require("express");
const router = express.Router();
const IndexController= require ('../controllers/indexController');
const ErrorController = require("../controllers/errorController");
const BlankController = require("../controllers/blankController");
const ButtonController = require("../controllers/buttonController");
const cardsController = require("../controllers/cardsController");
const chartsController = require("../controllers/chartsController");
const forgotPassword = require("../controllers/forgotPassword");
const loginController = require("../controllers/loginController");
const registerController = require("../controllers/registerController");
const tablesController = require("../controllers/tablesController");
const animationController = require("../controllers/animationController");
const borderController = require("../controllers/borderController");
const colorController = require("../controllers/colorController");
const otherController = require("../controllers/otherController");


router.get('/',IndexController.Index)
// router.get('/notfound', (req, res) => {
//     res.render('admin/404',{
//         title:'not found',
//     })})

router.get('/notfound',ErrorController.Error)
router.get('/blank',BlankController.Blank)
router.get('/button',ButtonController.Button)
router.get('/cards',cardsController.Cards)
router.get('/charts',chartsController.Charts)
router.get('/forgot-password',forgotPassword.Forgot)
router.get('/login',loginController.Login)
router.get('/register',registerController.Register)
router.get('/tables',tablesController.Tables)
router.get('/utilities-animation',animationController.Animation)
router.get('/utilities-border',borderController.Border)
router.get('/utilities-color',colorController.Color)
router.get('/utilities-other',otherController.Other)

module.exports=router
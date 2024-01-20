import express, { Router } from "express";
import { findAll } from "../controllers/survey-user.controller";

const surveyUserRoute: Router = express.Router();

surveyUserRoute.get('/', findAll);

export default surveyUserRoute;
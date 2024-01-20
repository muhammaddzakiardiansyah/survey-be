import express, { Router } from "express";
import surveyUserRoute from "./survey-user.router";

const routers: Router = express.Router();

routers.use('/survey-user', surveyUserRoute);

export default routers;
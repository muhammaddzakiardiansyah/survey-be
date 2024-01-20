import { Request, Response } from "express";
import {findAll as findAllModel} from "../models/survey-user.model";

interface SurveyUser {
  findAll: (req: Request, res: Response) => Promise<void>;
  // findOne: (req: Request, res: Response) => Promise<void>;
  // create: (req: Request, res: Response) => Promise<void>;
  // edit: (req: Request, res: Response) => Promise<void>;
  // remove: (req: Request, res: Response) => Promise<void>;
}

interface ResultSurvey {
  id: string;
  full_name: string;
  optionCandidate: string;
  ip_address: string;
  latitude: string;
  longitude: string;
}

export const findAll = async (req: Request, res: Response) => {
  try {
    const result: any = await findAllModel();
    return res.status(200).send({
      statusCode: 200,
      message: "Success find all data",
      data: result,
    });
  } catch (error: any) {
    return res.status(400).send({
      message: "Failed find all data",
      error: error.message,
    });
  }
};

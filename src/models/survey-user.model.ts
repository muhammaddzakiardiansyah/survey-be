import db from "../../config/dbConnected";
import { Request, Response } from "express";

interface SurveyUser {
  id: string;
  full_name: string;
  optionCandidate: string;
  ip_address: string;
  latitude: string;
  longitude: string;
}

export const findAll = async (
  req: Request,
  res: Response
) => {
  try {
    // You can perform any database-related operations here if needed
    // For now, using a dummy data
    const result: SurveyUser = {
      id: "0987220",
      full_name: "Sandi",
      optionCandidate: "Irul",
      ip_address: "200.100.0.59",
      latitude: "24545",
      longitude: "64622",
    };

    return result;
  } catch (error) {
    // Handle errors appropriately
    throw new Error("Error fetching survey user data");
  }
};

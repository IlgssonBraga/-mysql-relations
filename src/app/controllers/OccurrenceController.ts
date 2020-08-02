import { Request, Response } from 'express';
import Occurrence from '../entities/Occurrence';

class OccurenceController {
  async store(req: Request, res: Response): Promise<Response<Occurrence>> {
    const operator_id = parseInt(req.params.operator);
    const driver_id = parseInt(req.params.driver);

    const { called_authority, status, observation } = req.body;
    const occurrence = Occurrence.create({
      called_authority,
      status,
      observation,
      driver_id,
      operator_id,
    });

    await occurrence.save();

    return res.json(occurrence);
  }

  async index(req: Request, res: Response): Promise<Response<Occurrence[]>> {
    const occurrences = await Occurrence.find();

    return res.json(occurrences);
  }
}

export default new OccurenceController();

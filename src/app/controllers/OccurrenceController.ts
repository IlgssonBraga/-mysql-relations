import { Request, Response } from 'express';
import Occurrence from '../entities/Occurrence';

class OccurenceController {
  async store(req: Request, res: Response): Promise<Response<Occurrence>> {
    const operator_id = req.params.operator;
    const driver_id = req.params.driver;

    const { called_authority, status, observation } = req.body;
    const occurrence = Occurrence.create({
      called_authority,
      status,
      observation,
    });

    await occurrence.save();

    return res.json(occurrence);
  }
}

export default new OccurenceController();

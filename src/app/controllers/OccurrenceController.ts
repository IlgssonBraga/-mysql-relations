import { Request, Response } from 'express';
import Occurrence from '../entities/Occurrence';
import { io } from '../../server';

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

    io.emit('newOccurrence', occurrence);

    return res.json(occurrence);
  }

  async index(req: Request, res: Response): Promise<Response<Occurrence[]>> {
    const occurrences = await Occurrence.find();

    io.emit('teste2', occurrences);

    return res.json(occurrences);
  }

  async update(req: Request, res: Response): Promise<Response<Occurrence>> {
    const { id } = req.params;
    const { called_authority, status, observation } = req.body;
    const occurrence = await Occurrence.findOne(id);

    if (!occurrence) {
      return res.status(404).json({ message: 'Occurence not found!' });
    }

    Object.assign(occurrence, { called_authority, status, observation });

    await occurrence.save();

    return res.json(occurrence);
  }

  async patch(req: Request, res: Response): Promise<Response<Occurrence>> {
    const { id } = req.params;
    const occurrence = await Occurrence.findOne(id);

    if (!occurrence) {
      return res.status(404).json({ message: 'Occurence not found!' });
    }

    occurrence.finishedAt = new Date();

    await occurrence.save();

    return res.json(occurrence);
  }
}

export default new OccurenceController();

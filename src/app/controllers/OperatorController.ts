import { Request, Response } from 'express';
import Operator from '../entities/Operator';

class OperatorController {
  async store(req: Request, res: Response): Promise<Response<Operator>> {
    const { fist_name, last_name, cpf, email, number } = req.body;
    const operator = Operator.create({
      fist_name,
      last_name,
      cpf,
      email,
      number,
    });

    await operator.save();

    return res.json(operator);
  }
}

export default new OperatorController();

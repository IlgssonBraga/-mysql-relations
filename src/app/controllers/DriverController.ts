import { Request, Response } from 'express';
import Driver from '../entities/Driver';

class DriverController {
  async store(req: Request, res: Response): Promise<Response<Driver>> {
    const { fist_name, last_name, cpf, email, number } = req.body;
    const driver = Driver.create({
      fist_name,
      last_name,
      cpf,
      email,
      number,
    });

    await driver.save();

    return res.json(driver);
  }
}

export default new DriverController();

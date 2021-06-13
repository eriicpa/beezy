import Service from '../models/Service';
import File from '../models/File';
import User from '../models/Users';
import * as Yup from 'yup';

class AllResultsController {
  async index(req, res) {
    const services = await Service.findAll({ 
      attributes: ['id', 'title', 'value', 'user_id'],
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'name'],
        }
      ],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        }
      ],
    }
    );
    return res.json(services);
  }


  async store(req, res) {
    const schema = Yup.object().shape({
      id: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { id } = req.body;
   
    const services = await Service.findAll({ 

      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        }
      ],
      where: {
        user_id : id
      }
      
    }
    );
    return res.json(services);

  }

}



export default new AllResultsController();
import Service from '../models/Service';
import File from '../models/File';
import User from '../models/Users';
import * as Yup from 'yup';

class FilterController {

  async store(req, res) {
    const schema = Yup.object().shape({
      estado: Yup.string(),
      servico: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { estado, servico } = req.body;
    if (estado === "" && servico === "") {
      const providers = await User.findAll({
        attributes: ['id', 'name', 'email', 'city', 'uf', 'service_type', 'whatsapp', 'bio', 'avatar_id'],
        include: [{
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url']
        }],     
      }
      );
      return res.json(providers);
    }

    if (estado === "") {
      const providers = await User.findAll({
        attributes: ['id', 'name', 'email', 'city', 'uf', 'service_type', 'whatsapp', 'bio', 'avatar_id'],
        include: [{
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url']
        }],
        where: {
          service_type : servico,
        }
        
      }
      );
      return res.json(providers);
  
    } if (servico === "") {
      const providers = await User.findAll({
        attributes: ['id', 'name', 'email', 'city', 'uf', 'service_type', 'whatsapp', 'bio', 'avatar_id'],
        include: [{
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url']
        }],
        where: {
          uf : estado,
        }
        
      }
      );
      return res.json(providers);
    }
   
    const providers = await User.findAll({
      attributes: ['id', 'name', 'email', 'city', 'uf', 'service_type', 'whatsapp', 'bio', 'avatar_id'],
      include: [{
        model: File,
        as: 'avatar',
        attributes: ['name', 'path', 'url']
      }],
      where: {
        service_type : servico,
        uf: estado,
      }
      
    }
    );
    return res.json(providers);

  }

}



export default new FilterController();
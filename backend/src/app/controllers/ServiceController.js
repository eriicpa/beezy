import Service from '../models/Service';
import File from '../models/File';
import User from '../models/Users';
import * as Yup from 'yup';

class ServieController {
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      value: Yup.string().required(),
      avatar_id: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { title, value, avatar_id } = req.body;
   
    const service = await Service.create({
      title,
      value,
      user_id: req.userId,
      avatar_id
    })
    

    return res.json(service);

  }

  async index(req, res) {
    // const ser = await User.findOne({ where: {email: req.body.email } });
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
      where: {
        user_id : req.userId
      }
    }
    );
    return res.json(services);
    
  }

  async delete(req, res) {
    const service = await Service.findByPk(req.params.id);
   
    try{
      

      if (service.user_id !== req.userId) {
        return res.status(401).json({
          error: "You don't have permission to delete this service"
        });
      }
      await Service.destroy({
        where: {id: req.params.id}
      })

      return res.json(service);

    }catch{
      return res.status(401).json({
        error: "This service already deleted"
      });
    }   
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      serviceId: Yup.string().required(),
      title: Yup.string().required(),
      value: Yup.string().required(),
      avatar_id: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { serviceId } = req.body;

    await Service.update(
      {
        title: req.body.title,
        value: req.body.value,
        avatar_id: req.body.avatar_id
      },
      {where: {id: req.body.serviceId}}
    );

    const { id, title, value, avatar } = await Service.findByPk(serviceId, {
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        }
      ]
    })

    return res.json({
      id,
      title,
      value,
      avatar
    });
  }


}

export default new ServieController();
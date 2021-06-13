import * as Yup from 'yup';
import User from '../models/Users';
import File from '../models/File';


class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
      city: Yup.string().required(),
      uf: Yup.string().required().max(2).min(2),
      service_type: Yup.string().required(),
      whatsapp: Yup.string().required(),
      bio: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }


    const userExists = await User.findOne({ where: {email: req.body.email } });

    if (userExists) {
      return res.status(400).json({error: 'User already exists.'});
    }
    const { id, name, email, city, uf, service_type, whatsapp, bio, provider } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      city, 
      uf, 
      service_type, 
      whatsapp, 
      bio,
      provider
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      city: Yup.string(),
      uf: Yup.string().max(2).min(2),
      service_type: Yup.string(),
      whatsapp: Yup.string(),
      bio: Yup.string(),
      oldPassword: Yup.string().min(6),
      password: Yup.string().min(6).when('oldPassword', (oldPassword, field) => 
        oldPassword ? field.required() : field
      ),
      confirmPassword: Yup.string().when('password', (password, field) => 
        password ? field.required().oneOf([Yup.ref('password')]) : field
      )
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists) {
        return res.status(400).json({error: 'User already exists.'});
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    await user.update(req.body);

    const { id, name, city, uf, service_type, whatsapp, bio, avatar } = await User.findByPk(req.userId, {
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
      name,
      email,
      city, 
      uf, 
      service_type, 
      whatsapp, 
      bio,
      avatar
    });
  }

  async index(req, res) {
    const providers = await User.findAll({
      attributes: ['id', 'name', 'email', 'city', 'uf', 'service_type', 'whatsapp', 'bio', 'avatar_id'],
      include: [{
        model: File,
        as: 'avatar',
        attributes: ['name', 'path', 'url']
      }],
    });
    return res.json(providers);
  }
}

export default new UserController();
import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import authConfig from '../../config/auth';
import User from '../models/Users';
import File from '../models/File';


class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }


    const { email, password } = req.body;
  

    const user = await User.findOne({ 
      where: { email } ,
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        }
      ],
    });

    if (!user) {
      return res.status(401).json({ error: 'User not find' });
    }

    if (!(await user.checkPassword(password))){
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name, avatar, city, uf, service_type, whatsapp, bio } = user;

    return res.json({
      user: {
        id,
        name,
        email,
        avatar,
        city,
        uf,
        service_type,
        whatsapp,
        bio
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      } ),
    })
  }
}

export default new SessionController();
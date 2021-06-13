import File from '../models/File';

class FileController {
 async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path,
    });

    return res.json(file);
  }

  async index(req, res) {
    const files = await File.findAll({
      attributes: ['id', 'url', 'name', 'path'],
    });
    return res.json(files);
  }
}

export default new FileController();
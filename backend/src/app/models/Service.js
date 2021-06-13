import Sequelize, { Model } from 'sequelize';

class Service extends Model {
  static init(sequelize) {
    super.init({
      title: Sequelize.STRING,
      value: Sequelize.DECIMAL,
    }, 
    {
      sequelize,
    }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' } );
  }
}

export default Service;
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'beezy',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
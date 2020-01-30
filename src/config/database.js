module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

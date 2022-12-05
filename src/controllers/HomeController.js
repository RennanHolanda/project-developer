const { User } = require("../models");
const sequelize = require("sequelize");
const Op = sequelize.Op;
const bcrypt = require("bcryptjs");

const HomeController = {

  index: (req, res) => {
    res.redirect("/login");
  },

  login: (req, res) => {
    res.render("./home/login");
  },

  loginProcess: async (req, res) => {
    const { username, password } = req.body;

      const user = await User.findOne({
        where: {
          username
        }
      })
      if (!user || !bcrypt.compareSync(password,user?.password)){
        return res.render('./home/login',{error: 'Credênciais incorretas'})
      }
      req.session.user = {
        username: user.username,
        id: user.id
      }
      console.log(req.session.user)
      return res.redirect('/projects')

  },

  showRegister: (req, res) => {
    res.render("./home/cadastrar");
  },

  store: async (req, res) => {
    const { name, username, password } = req.body;

    const hash = bcrypt.hashSync(password, 10);
    const resultado = await User.create({
      name,
      username,
      password: hash,
    });

    console.log(resultado);
    res.redirect("/home/users");
  },

  showEdit: async (req, res) => {
    const { id } = req.params;

    const usuario = await User.findByPk(id);

    return res.render("./home/editar", { usuario });
  },

  update: async (req, res) => {
    const { id } = req.params;

    const { name, username, password } = req.body;

    const userOld = await User.findByPk(id);
    const hash = password ? bcrypt.hashSync(password, 10) : userOld.password;
    const resultado = await User.update(
      {
        name,
        username,
        password: hash,
      },
      {
        where: { id },
      }
    );
    console.log(resultado);
    res.redirect("/home/users");
  },

  destroy: async (req, res) => {
    const { id } = req.params;

    const resultado = await User.destroy({
      where: {
        id: id,
      },
    });
    console.log(resultado);
    res.redirect("/home/users");
  },

  // showUsers: async (req, res) => {
  //   let users = await User.findAll();

  //   return res.render("./home/usuarios", { users });
  // },

  showUser: async (req, res) => {
    let { id } = req.params;

    let user = await User.findOne({
      where: {
        id: id,
      },
    });
    return res.render("./home/detalhes", { user });
  },

  search: async (req, res) => {
    let { key } = req.query;

    let users = await User.findAll({
      where: {
        name: {
          [Op.like]: `%${key}%`,
        },
      },
    });

    return res.render("./home/usuarios", { users });
  },
};

module.exports = HomeController;

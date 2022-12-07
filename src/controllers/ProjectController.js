const { Project } = require('../models');
const sequelize = require("sequelize");
const Op = sequelize.Op;
const cepApi = require('../services/cepApi')


const ProjectController = {
    index: async (req, res) => {

        let project = await Project.findAll();

        return res.render("./projetos/projeto", { project });
     
    },
    done:async (req, res) => {
        try {
            const {done} = req.body;
            const { id } = req.params;
    
            if (done) {
              await Project.update(
                {
                  done: true,
                },
                {
                  where: {
                    id: id,
                  },
                }
                );
            }
            return res.redirect('/projects');
        } catch (error) {
            res.render("./projetos/projeto", {error:"Sistema indisponível"})
        }
    },
    showRegister: (req, res) => {
        
        return res.render('./projetos/cadastrar');
     
    },
    register: async (req, res) => {
        try {
            const { title, zipe_code, cost, deadline } = req.body;
            const userId = req.session.user.id;
            const username = req.session.user.username;

            const project = await Project.create({
                title,
                zipe_code,
                cost,
                deadline,
                username,
                user_id:userId
            })
            res.redirect('/projects')
        } catch (error) {
            console.log(error)
            return res.render('./projetos/projeto', {error:"Sistema indisponível"})  
        }
    },
    showProject: async (req, res) => {
        try {
            const { id } = req.params;
        const project = await Project.findByPk(id);
        const response = await cepApi.get(`/${project.zipe_code}/json/`);
        console.log(response.data)

            return res.render('./projetos/detalhes', { project, response:response.data });
        } catch (error) {

            return res.render('./projetos/detalhes', { error:"Sistema indisponível"});
        }
        
    },
    showUpdate: async (req, res) => {
        try {
            const { id } = req.params;

            const project = await Project.findByPk(id);

            return res.render('./projetos/editar', { project });
        } catch (error) {
            console.log(error)
           return res.render('./projetos/editar', { error:"Sistema indisponível" })
        } 
    },

    update: async (req, res) => {
        try {
            const { id } = req.params;

            const { title, zipe_code, cost, deadline  } = req.body;

            const project = await Project.update(
                {
                title,
                zipe_code,
                cost,
                deadline,
                },
                {
                    where: { id },
                }
            )
            res.redirect('/projects');
        } catch (error) {
            console.log(error)
            return res.render('./projetos/detalhes', {error:"Sistema indisponível"});
            
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;

            await Project.destroy({
                where: {
                  id
                }
              });
        res.redirect('/projects');
        } catch (error) {
            return res.render('./projetos/projeto', {error:"Sistema indisponível"})
        }
        
    },
    search: async (req, res) => {
        let { key } = req.query;
    
        let project = await Project.findAll({
          where: {
            title: {
              [Op.like]: `%${key}%`,
            },
          },
        });
    
        return res.render("./projetos/projeto", { project });
      },
}

module.exports = ProjectController;
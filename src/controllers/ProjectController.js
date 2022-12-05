const { Project } = require('../models');
const sequelize = require("sequelize");

const ProjectController = {
    index: async (req, res) => {
        let project = await Project.findAll();

        return res.render("./projetos/projeto", { project });
    },
    done: (req, res) => {
        res.redirect('/projects');
    },
    showProject: (req, res) => {
        res.render('./projetos/detalhes');
    },
    showRegister: (req, res) => {
        res.render('./projetos/cadastrar');
    },
    register: async (req, res) => {
        try {
            const { title, zipe_code, cost, done, deadline, user_id  } = req.body;
            const veradeiro = false;


            const project = await Project.create({
                title,
                zipe_code,
                cost,
                done:veradeiro,
                deadline,
                user_id
            })
            console.log(project);
        } catch (error) {
            console.log(error)
            return res.render('./projetos/projeto', {error:"Sistema indisponível"})
            
        }
    },
    showDetails: async (req, res) => {
        const { id } = req.params;

        const project = await Project.findByPk(id);

        res.render('./projetos/detalhes', { project });
    },
    showUpdate: async (req, res) => {
        const { id } = req.params;

        const project = await Project.findByPk(id);

        res.render('./projetos/editar', { project });
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
            console.log(project);
            res.redirect('/projects');
        } catch (error) {
            console.log(error)
            return res.render('./projetos/detalhes', {error:"Sistema indisponível"});
            
        }
    },
    destroy: async (req, res) => {
        const { id } = req.params;

        const destroyProject = await Project.destroy({
          where: {
            id: id,
          },
        });
        console.log(destroyProject)
        res.redirect('/projects');
    }
}

module.exports = ProjectController;
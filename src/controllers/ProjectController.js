const { Project } = require('../models')

const ProjectController = {
    index: async (req, res) => {
        let project = await Project.findAll();

        return res.render("./projetos/projeto", { project });
    },
    done: (req, res) => {
        res.redirect('/projects')
    },
    showProject: (req, res) => {
        res.render('./projetos/detalhes')
    },
    showRegister: (req, res) => {
        res.render('./projetos/cadastrar')
    },
    register: async (req, res) => {
        try {
            const { tilte, zipe_code, cost, done, deadline, username, user_id  } = req.body;

            const project = await Project.create({
                tilte,
                zipe_code,
                cost,
                done,
                deadline,
                username,
                user_id
            })
            console.log(project)
        } catch (error) {
            console.log(error)
            return res.render('./projetos/detalhes', {error:"Sistema indisponível"})
            
        }
    },
    update: (req, res) => {
        res.render('./projeto/editar')
    },
    delete: (req, res) => {
        res.redirect('/projects')
    }
}

module.exports = ProjectController;
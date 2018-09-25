/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  list(req,res) {
    Articles.find({})
      .then(data => res.json(data));
  },

  getPost(req,res) {
    let id = req.params.id;
    Articles.find({id})
      .then(data => res.json(data));
  },

  update(req,res) {
    let acticle = {};
    let title = req.param('title');
    acticle.title = title;

    let id = req.param('id');
    Articles.update({id}, acticle)
      .then(data => {
      return res.ok(data);
  });

  },

  creat(req,res) {
    console.log(req);
    let title = req.body.title;
    let body = req.body.description;
    Articles.create({title, body})
      .then(() => res.ok(200));
  },

  delete(req,res) {
    Articles.destroy({id:req.params.id})
      .then(() => res.ok(200));

  }
};


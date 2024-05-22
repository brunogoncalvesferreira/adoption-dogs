export class ViewsController {
  async index(req, res) {
    req.query
    res.render("index")
  }

  async about(req, res) {
    res.render("about")
  }

  async donation(req, res) {
    res.render("donation")
  }

  async toAdopt(req, res) {
    res.render("toAdopt")
  }
}
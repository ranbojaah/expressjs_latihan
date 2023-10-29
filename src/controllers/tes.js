let users = [
  { id: 1, name: "lukamine", class: "ambatu" },
  { id: 2, name: "ahmadu", class: "kulamu" },
];

module.exports = {
  index: function (req, res) {
    if (users.length > 0) {
      res.json({
        status: true,
        data: users,
        method: req.method,
        url: req.url,
      });
    } else {
      res.json({
        status: false,
        message: "data kosong",
      });
    }
  },

  store: function (req, res) {
    users.push(req.body);
    res.json({
      status: true,
      message: "data users ketambah",
      data: users,
      method: req.method,
      url: req.url,
    });
  },

  update: function (req, res) {
    const id = req.params.id;
    users.filter((user) => {
      if (user.id == id) {
        user.id = id;
        user.name = req.body.name;
        user.class = req.body.class;

        return user;
      }
    });
    res.status(200).json({
      status: true,
      message: "data users keedit",
      data: users,
      method: req.method,
      url: req.url,
    });
  },

  delete: function (req, res) {
    let id = req.params.userId;
    users = users.filter((user) => user.id != id);
    res.status(200).json({
      status: true,
      message: "data users kehapus",
      data: users,
      method: req.method,
      url: req.url,
    });
  },
};

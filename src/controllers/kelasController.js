const kelas = require("../models/kelas");
const response = require("../../response");

module.exports = {
  index: function (req, res) {
    kelas.get(req.con, function (err, result) {
      response(200, result, "GET data kelas successfully", res);
    });
  },

  store: function (req, res) {
    const data = {
      nama_kelas: req.body.nama_kelas,
      jurusan: req.body.jurusan,
      jumlah_murid: req.body.jumlah_murid,
    };

    kelas.create(req.con, data, function (err, result) {
      const view = {
        isSuccess: result.affectedRows,
        id: result.insertId,
      };
      if (err) {
        response(500, "Invalid", "Internal Server Error", res);
      } else {
        response(200, view, "Data kelas added successfully", res);
      }
    });
  },

  update: function (req, res) {
    const data = {
      nama_kelas: req.body.nama_kelas,
      jurusan: req.body.jurusan,
      jumlah_murid: req.body.jumlah_murid,
    };

    kelas.update(req.con, data, req.params.id, function (err, result) {
      if (err) response(500, "invalid", "Internal Server Error", res);
      if (result?.affectedRows) {
        const view = {
          isSuccess: result.affectedRows,
          id: result.insertId,
          message: result.message,
        };
        response(200, view, "Data kelas updated successfully", res);
      } else {
        response(404, "user not found", "error", res);
      }
    });
  },

  destroy: function (req, res) {
    kelas.delete(req.con, req.params.id, function (err, result) {
      if (err) response(500, "invalid", "Internal Server Error", res);
      if (result?.affectedRows) {
        const data = {
          isDeleted: result.affectedRows,
        };
        response(200, data, "Data kelas deleted successfully", res);
      } else {
        response(404, "user not found", "error", res);
      }
    });
  },
};

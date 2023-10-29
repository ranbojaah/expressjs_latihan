const db = require("../config/connection");
const response = require("../../response");

module.exports = {
  index: function (req, res) {
    const sql = "SELECT * FROM t_siswa";
    db.query(sql, (error, result) => {
      response(200, result, "get all data form siswa", res);
    });
  },
  find: function (req, res) {
    const sql = `SELECT nama FROM t_siswa WHERE nis = ${req.query.nis}`;
    db.query(sql, (error, result) => {
      response(200, result, "find siswa name", res);
    });
  },
  store: function (req, res) {
    const { nis, nama, jenkel } = req.body;
    const sql = `INSERT INTO t_siswa (nis, nama, jenkel, created_at, updated_at) 
                VALUES ('${nis}','${nama}','${jenkel}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`;

    db.query(sql, (err, result) => {
      if (err) response(500, "invalid", "Internal server error", res);
      if (result?.affectedRows) {
        const data = {
          isSuccess: result.affectedRows,
          id: result.insertId,
        };
        response(200, data, "Data added successfully", res);
      }
    });
  },

  update: function (req, res) {
    const { nis, nama, jenkel } = req.body;
    const sql = `UPDATE t_siswa set nama = '${nama}', jenkel = '${jenkel}', updated_at = CURRENT_TIMESTAMP WHERE nis = '${nis}'`;

    db.query(sql, (err, result) => {
      if (err) response(500, "invalid", "internal server error", res);
      if (result?.affectedRows) {
        const data = {
          isSuccess: result.affectedRows,
          message: result.message,
        };
        response(200, data, "Update successfuly", res);
      } else {
        response(404, "user not found", "error", res);
      }
    });
  },

  destroy: function (req, res) {
    const { nis } = req.body;
    const sql = `DELETE FROM t_siswa WHERE nis = '${nis}'`;

    db.query(sql, (err, result) => {
      if (err) response(500, "invalid", "internal server error", res);
      if (result?.affectedRows) {
        const data = {
          idDeleted: result.affectedRows,
        };
        response(200, data, "DELETED data successfully", res);
      } else {
        response(404, "user not found", "error", res);
      }
    });
  },
};

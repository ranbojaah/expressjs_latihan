module.exports = {
  get: function (con, callback) {
    con.query(`SELECT * FROM t_kelas`, callback);
  },

  create: function (con, data, callback) {
    con.query(
      `INSERT into t_kelas (nama_kelas, jurusan, jumlah_murid) 
                VALUES ('${data.nama_kelas}', '${data.jurusan}', '${data.jumlah_murid}')`,
      callback
    );
  },
  //edit harus semua (bermain dengan FE)
  update: function (con, data, id, callback) {
    con.query(
      `UPDATE t_kelas 
        SET nama_kelas = '${data.nama_kelas}', jurusan = '${data.jurusan}', jumlah_murid = '${data.jumlah_murid}'
        WHERE id = '${id}'`,
      callback
    );
  },

  delete: function (con, id, callback) {
    con.query(`DELETE FROM t_kelas WHERE id = '${id}'`, callback);
  },

  // update untuk salah satu
  // update: function (con, data, id, callback) {
  //   let updateQuery = "UPDATE t_kelas SET ";
  //   let updateParams = [];
  //   if (data.nama_kelas) {
  //     updateQuery += "nama_kelas = ?, ";
  //     updateParams.push(data.nama_kelas);
  //   }
  //   if (data.jurusan) {
  //     updateQuery += "jurusan = ?, ";
  //     updateParams.push(data.jurusan);
  //   }
  //   if (data.jumlah_murid) {
  //     updateQuery += "jumlah_murid = ?, ";
  //     updateParams.push(data.jumlah_murid);
  //   }
  //   updateQuery = updateQuery.slice(0, -2); // Menghapus koma terakhir
  //   updateQuery += ` WHERE id = ?`;
  //   updateParams.push(id);

  //   con.query(updateQuery, updateParams, callback);
  // },
};

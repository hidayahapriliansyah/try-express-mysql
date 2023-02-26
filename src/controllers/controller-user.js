import config from '../configs/database.js';
import mysql from 'mysql';

const pool = mysql.createPool(config);

pool.on('error', (err) => {
  console.log(err);
});

const user_get = async (req, res) => {
  // teu bisa pake model try catch nya
  // try {
  //   const conn = await pool.getConnection();
  //   console.log(conn);
    // const users = conn.query(`SELECT * FROM user`);
    // res.send({
    //     success: true,
    //     message: 'Berhasil ambil data!',
    //     data: users,
    //   });
    // conn.release();
  // } catch (err) {
  //   console.log(err);
  // }

  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(`SELECT * FROM user`, (err, result) => {
      if (err) throw err;
      res.send({
        success: true,
        message: 'Berhasil ambil data!',
        data: result,
      });
    });
    connection.release();
  });
};

export {
  user_get,
};

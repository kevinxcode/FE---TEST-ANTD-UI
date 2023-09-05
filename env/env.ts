
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_fe_test',
  connectionLimit: 10, 
});

export default pool;

import { Pool } from 'pg';

// !! REPLACE with your local Postgres credentials !!
export const pool = new Pool({
  user: 'neondb_owner',
  host: 'ep-proud-glitter-a11o6k7w-pooler.ap-southeast-1.aws.neon.tech', // ✅ fixed host spelling
  database: 'neondb',
  password: 'npg_MyGxBD1UCi2A',
  port: 5432,
  ssl: {
    rejectUnauthorized: false, // ✅ required for Neon
  },
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection error', err.stack);
  } else {
    console.log('Database connected:', res.rows[0].now);
  }
});
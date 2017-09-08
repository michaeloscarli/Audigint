const { Client } = require('pg');
const client = new Client({
  user: process.env.PGUSER || process.env.USER,
  host: process.env.PGHOST || 'localhost',
  database: process.env.PGDATABASE || 'spinning_lobster',
  password: process.env.PGPASSWORD || null,
  port: process.env.PGPORT || 5432
});

async function connect() {
  try {
    await client.connect();
  } catch (error) {
    console.log(error);
  }
}

async function disconnect() {
  try {
    await client.end();
  } catch (error) {
    console.log(error);
  }
}

async function execQuery({text, rowMode}) {
  try {
    return await client.query({text, rowMode});
  } catch (error) {
    console.log(error);
  }
}

async function getTables() {
  try {
    const tables = await execQuery({
      text: `SELECT * FROM information_schema.tables WHERE table_schema = 'public'`
    });
    return tables.rows;
  } catch (err) {
    console.log(err.message)
  }
}

async function createTable(tableName) {
  // try {
  //   const tables = await execQuery({
  //     text: 'CREATE TABLE'
  //   })
  // }
}

module.exports = {
  connect: connect,
  disconnect: disconnect,
  getTables: getTables
}
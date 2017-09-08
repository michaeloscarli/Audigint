const postgres = require('./postgres.js');

async function main() {
  try {
    await postgres.connect();
    const admins = await postgres.getTables();
    console.log(admins);
  } catch (error) {
    console.log(error)
  } finally {
    await postgres.disconnect();
  }
}

main()
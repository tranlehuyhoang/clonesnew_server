import mongoose from 'mongoose';

async function connect() {
    const dbUser = '2509roblox';
    const dbPass = '2509roblox';
    const dbName = 'clonesnew';

    const uri = `mongodb+srv://2509roblox:${dbPass}@cluster0.3igmjx4.mongodb.net/test`;
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
}

export default connect;
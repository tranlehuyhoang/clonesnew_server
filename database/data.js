import mongoose from 'mongoose';

// Định nghĩa cấu trúc cho bảng users
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  money: { type: Number, required: true },
});
const billSchema = new mongoose.Schema({
  username: { type: String, required: true },
  time: { type: Date, require: true },
  nameproduct: { type: String, require: true },
  quantity: { type: Number, require: true },
  price: { type: Number, require: true }
});
const transferSchema = new mongoose.Schema({
  username: { type: String, required: true },
  time: { type: Date, require: true },
  amount: { type: Number, require: true },
  status: { type: String, require: true }
});

// Tạo model cho bảng users
const User = mongoose.model('User', userSchema, 'users');
const Bill = mongoose.model('Bill', billSchema, 'bills');
const Transfer = mongoose.model(' Transfer', transferSchema, ' transfers');

export { User, Bill, Transfer };
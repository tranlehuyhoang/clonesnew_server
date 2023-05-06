import { User, Transfer, Bill } from "../database/data.js"

export async function layQuestions(req, res) {
    try {
        const q = await cauhoi.find()
        res.json(q)
    } catch (error) {

    }
}
export async function addUser(req, res) {
    const { username, password } = req.body;

    try {
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            res.status(400).json({ error: 'User already exists' });
            return;
        }

        await User.insertMany({ username, password, money: 100000 });
        res.json({ message: 'User added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while adding the user' });
    }
}

export async function getAlluser(req, res) {
    try {
        const users = await User.find()
        res.json({ message: users })
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving users' })
        console.error(error)
    }
}
export async function getuser(req, res) {
    try {
        const users = await User.findById()
        res.json({ message: users })
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving users' })
        console.error(error)
    }
}
export async function addBill(req, res) {
    const { username, nameproduct, quantity, price } = req.body
    try {
        const bill = await Bill.insertMany({ username: username, time: new Date().toLocaleString(), nameproduct: nameproduct, quantity: quantity, price: price })
        res.json({ message: bill })
    } catch (error) {
        res.status(500).json({ error: 'cannot create bill' })
        console.error(error)
    }
}
export async function getAllbill(req, res) {
    try {
        const bills = await Bill.find()
        res.json({ message: bills })
    } catch (error) {
        res.status(500).json({ error: 'cannot create bill' })
        console.error(error)
    }
}
export async function addTransfer(req, res) {
    const { username, amount } = req.body
    try {
        const transfer = await Transfer.insertMany({ username: username, time: new Date().toLocaleString(), amount: amount, status: 'đang chờ thanh toán' })
        res.json({ message: transfer })
    } catch (error) {
        res.status(500).json({ error: 'cannot create bill' })
        console.error(error)
    }
}
export async function getAlltranfer(req, res) {
    try {
        const transfers = await Transfer.find()
        res.json({ message: transfers })
    } catch (error) {
        res.status(500).json({ error: 'cannot create bill' })
        console.error(error)
    }
}

export async function updateUserMoney(req, res) {
    const { username, newMoneyAmount } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            res.status(404).json({ error: `User '${username}' not found` });
            return;
        }

        user.money = newMoneyAmount;
        await user.save();

        res.json({ message: 'User money updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while updating user money' });
    }
}
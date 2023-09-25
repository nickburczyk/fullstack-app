import express from 'express'
import { textSync } from 'figlet';
import { User } from './src/models/User';
import { handleError } from './util';
import { prisma } from './prisma';

const app = express();
const port = 3001

/* ======= MIDDLEWARE ======= */
// parse every incoming JSON request body
app.use(express.json())


/* ======= API ======= */
app.get('/', (req, res) => {
  res.send(JSON.stringify({ apiVersion: "0.0.1" }));
})

app.post('/new-user', async (req, res) => {
  const { name, userName, password }: User = req.body
  if (!name || !userName || !password) {
    return handleError(res, 'All required fields not provided')
  }
  //TODO: File organizing
  //TODO: Password Checker
  //TODO: Expand expected user profile data.

  const userExists = await prisma.user.findUnique({
    where: { userName },
    select: { userName: true }
  })
  if (userExists) {
    return handleError(res, 'Username is already taken')
  }
  console.log('username valid and unique. continuing.')

  const user: User = {
    name, userName, password
  }
  const record = await prisma.user.create({
    data: user
  })

  console.log('record', record)
  await prisma.$disconnect
  res.status(200).json(record)
})

// ======= SET SERVER TO LISTEN =======
app.listen(port, () => {
  console.log(textSync(`port:${port}`))
})
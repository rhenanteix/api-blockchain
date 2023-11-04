require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

// rest of the packages
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')

// database
const connectDB = require('./db/connect')

// routers
//const authRouter = require('./routes/authRoutes')
//const companyRouter = require('./routes/companyRoutes')
//const jobRouter = require('./routes/jobRoutes')
//const candidateRouter = require('./routes/candidateRoutes')
//const eventRouter = require('./routes/eventRoutes')
//const adminRouter = require('./routes/adminRoutes')
//const adminReportRouter = require('./routes/adminReportRoutes')
//const applicantRouter = require('./routes/applicantRoutes')
const offersRouter = require('./routes/offersRoutes')

// middleware
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
const { default: mongoose } = require('mongoose')

app.use(helmet())
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('<center><h1>**Balcão de Ofertas**</h1></center>')
})

// app.use('/api/v1/auth', authRouter)
// app.use('/api/v1/company', companyRouter)
// app.use('/api/v1/job', jobRouter)
// app.use('/api/v1/candidate', candidateRouter)
// app.use('/api/v1/event', eventRouter)
// app.use('/api/v1/admin', adminRouter)
// app.use('/api/v1/adminreport', adminReportRouter)
// app.use('/api/v1/applicant', applicantRouter)
 app.use('/api/v1/', offersRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 4000
const URI = 'mongodb+srv://rhenancontato:DV2S1njzu14wPG7i@cluster0.ltqxtr1.mongodb.net/blockchain'


async function connect() {
  try {
    await mongoose.connect(URI)
    console.log('conexao via mongoDB')
  } catch (error) {
    console.log(`Isso é um erro: ${error}` )
  }
}

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}` )
})

// const start = async () => {
//   try {
//     await connectDB(process.env.MONGO_URL)
//     app.listen(port, () =>
//       console.log(`Server is listening on port ${port}...`)
//     )
//   } catch (error) {
//     console.log(error)
//   }
// }

connect()

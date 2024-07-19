import express from 'express';
import cors from 'cors';


const app = express()


app.use(express.json({
    limit: '16kb'
}))

app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}))

app.use(express.static('public'))
app.listen(3001, () => {
    console.log('server is running on port 3000')
})


function helloworld() {
    return 'hello world test'
}
app.use('/' , helloworld )

import RandomImageGanaratorRoutes from './routes/randomImage/randomImage.routes.js'

app.use('/v0.1/random_image', RandomImageGanaratorRoutes)

import RandomUser from './routes/randomUser/randomUser.routes.js'
app.use('/v0.1/random_user', RandomUser)

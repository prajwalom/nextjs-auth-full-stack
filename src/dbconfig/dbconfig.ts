import mongoose from "mongoose";


export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log('MongoDB connected succesfully')
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error. please try' + err)
            process.exit()
        })

} catch (error) {
    console.log('something is wrong');
    console.log(error);

}

}



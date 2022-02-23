import { Schema, model} from 'mongoose';

const RegistersSchema = new Schema({
    username: String,
    balance: String,
    offers: String,
    reffered: Boolean,
    inviter: String
})

export default model('User', RegistersSchema);
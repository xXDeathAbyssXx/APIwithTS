import { Schema, model} from 'mongoose';

const RegistersSchema = new Schema({
    username: { type: String, required: true },
    balance: { type: String, required: true },
    offers: { type: String, required: true },
    reffered: { type: Boolean, required: true },
    inviter: { type: String, required: true },
})

export default model('User', RegistersSchema);
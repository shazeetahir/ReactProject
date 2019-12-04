import {connect} from 'mongoose';

const connectDb = () => {
    return connect(`mongodb://localhost:27017/recipes`,
    //utilise la nouvelle manière de parser des url :  newurlparser
    {useNewUrlParser: true, useUnifiedTopology: true});
}

export default connectDb;
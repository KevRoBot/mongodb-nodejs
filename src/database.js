import { connect } from "mongoose";
import {MONGO_URI} from "./config"
//conexion ala base de dato mongo



(async () => {
    try{
    const db = await connect(MONGO_URI);
    console.log('DB conectada ya',db.connection.name);
    }catch(error){
        console.error(error);
    }
})();
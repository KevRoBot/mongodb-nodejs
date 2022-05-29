import{Schema,model}from 'mongoose';

const taskSchema = Schema(
    {
    title:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    titleG:{
        type:String,
       
        trim:true

    },
    precio:{
        type:String,
        trim:true,
        required:true
        
    },
    descripcion:{
        type:String,
        required:true
    },
    cantidad:{
        type:String,
        required:true,
        
        trim:true
    },
    done:{
        type:Boolean,
        default:false
    },
},{
    timestamps:true,
    versionKey:false

}
);

export default model('Task',taskSchema)
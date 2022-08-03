const{Schema,model} =require('mongoose');

const autoSchema= new Schema({
    marca: {type: String, required:true},
    modelo: {type: String, required:true},
    precio: {type: Number, required:true},
    transmision: {type: String, required:true},
    accesorios: {type: String, required:true}
},{
    timestamps: true,
    versionKey: false
});

module.exports= model('Auto',autoSchema);

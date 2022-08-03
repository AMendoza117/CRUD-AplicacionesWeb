const autosCtrl={};
//const empleadosCtrl={}; <--- no es requerido

//const Empleado= require('../models/Empleado'); <--- no es requerido

//Consultar todos los autos
autosCtrl.getAutos= (req,res)=>{
    req.getConnection((err,conn) => {
        conn.query('select * from auto',(err,rows) => {
            if(err){
                res.json(err);
            }
            res.json(rows);
        });
    });
}

//Crear autos
autosCtrl.createAuto= (req,res)=>{
    const data = req.body;
    console.log(data);
    req.getConnection((err,conn) => {
        conn.query('INSERT INTO auto SET ?',[data],(err,auto) => {
            res.redirect('/autos');
        })
    })
}

//Consultar un auto en particular
autosCtrl.getAuto=  (req,res)=>{
    const { id }= req.params;
    req.getConnection((err,conn) => {
        conn.query('SELECT * FROM auto WHERE _id = ?',[id],(err,rows) => {
            res.json(rows);
        });
    });
}


//Editar autos
autosCtrl.editAuto= (req,res)=>{
    const {id}= req.params;
    const data= req.body;
    req.getConnection((err,conn) => {
        conn.query('UPDATE auto SET ? WHERE _id = ?',[data, id],(err,rows) => {
            res.redirect('/autos');
        });
    });
}

//Eliminar autos
autosCtrl.deleteAuto= (req,res)=>{
    const { id }= req.params;
    req.getConnection((err,conn) => {
        conn.query('DELETE FROM auto WHERE _id = ?',[id],(err,rows) => {
            res.send(rows);
        })
    })
}

module.exports= autosCtrl;
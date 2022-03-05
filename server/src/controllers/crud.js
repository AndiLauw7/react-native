
const res = require('express/lib/response');
const path = require('path');
const {crud} = require("../../models");

exports.addCrud = async (req, res) => {
    try {
        const data = req.body;
        let result = await crud.create({
            ...data,
        })
        res.status(200).send({
            status:"succes",
            data:result
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status:"failed",
            messege:"server Eror",
        })
        
    }
}
exports.deleteCrud = async (req, res) => {

    try {
        const result = await crud.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send({
            status :"succes",
           result:{
                id:req.params.id
            }
            
        })
        console.log(req);
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
          status: "failed",
          message: "Server Error",
        });
    }
 
}

exports.editCrud = async (req,res) => {
 try {
    const {
        id
      } = req.params
      const data = req.body

  
      let beforeUpdate = await crud.findOne({
        where: {
          id
        }
      })
      let afterUpdate = await beforeUpdate.update({
        ...data,
    
      })
      afterUpdate = JSON.parse(JSON.stringify(afterUpdate))
      afterUpdate = {
        ...afterUpdate,
      
      }
   
      res.send({
        status: "Succes",
        message: "Update Product Complete",
        data:afterUpdate
      })

 } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
 }
}

exports.getCruds = async (req,res) => {

    try {
        const cruds = await crud.findAll()
        res.send({
          status: "Succes",
          data: {
            cruds
          }
        })

      } catch (error) {
        console.log(error);
        res.status(500).send({
          status: "Failed",
          message: "Server Eror"
        })
      }
}

exports.getCrud = async (req,res) => {
    try {
        const {
            id
          } = req.params
          const data = await crud.findOne({
            where: {
              id
            }
          })
          res.send({
            status: "Succes",
            message: "Succes Get Detail By id",
            data: {
              product: data
            }
          })
    } catch (error) {
        console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
    }
}
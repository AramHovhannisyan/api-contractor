const express = require('express')
const contractModel = require('../models/contractModel')

exports.getContract = async (req, res) => {

    try {
        
        if(!req.params.contractId){
            return res.status(400).json({
                status: 'fail',
                message: "Required parameter missing"
            })
        }

        const contract = await contractModel.findById(req.params.contractId).select({"_id": 0, "__v": 0})

        if(!contract){
            return res.status(404).json({
                status: 'success',
                message: 'No Contract Found With This Id'
            })   
        }

        return res.status(200).json({
            status: 'success',
            contract
        })
        
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            status: 'fail'
        })
    }
}

exports.createContract = async (req, res) => {
    
    try {
        const data = req.body

        if(!data){
            return res.status(404).json({
                status: 'fail',
                message: "Required parameter missing"
            })
        }

        const contract = await contractModel.create(data)

        if(contract){
            return res.status(200).json({
                status: 'success',
                id: contract._id
            })
        }
    } catch (error) {
        console.log(error);

        return res.status(500)
    }
}
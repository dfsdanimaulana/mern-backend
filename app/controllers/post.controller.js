import db from '../models/index.js'
import mongoose from 'mongoose'
import dbMongoose from '../models/post.model.js'

const Post = dbMongoose(mongoose)

// function untuk mendapatkan seluruh data post yg ada di collection
export default function findAll(req, res){
    // method find adalah method yg dimiliki oleh library mongoose untuk mendapatkan seluruh data yg ada di collection mongodb
    Post.find()
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error while retrieveing posts."
        })
    })
}

export function create(req, res) {
    const post = new Post({
        title: 'Dani',
        body: 'body',
        published: false
    })

    post.save(post)
    .then(result=> {
        console.log(result)
    })
    .catch(err=> {
        console.log(err)
    })
}

export function findOne(req, res){
    const id = req.params.id

    // method findById adalah method yg dimiliki oleh library mongoose untuk mendapatkan data yg ada di collection mongodb berdasarkan id
    Post.findById(id)
    .then(result => {
        res.send(result)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error while showing posts."
        })
    })
}

export function update(req, res){
    const id = req.params.id

    Post.findByIdAndUpdate(id, req.body)
    .then(result => {
        if (!result) {
            post.status(404).send({
                message: "post not found"
            })
        }
        res.send({
            message: "post was updated"
        })
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error while update posts."
        })
    })
}

export function deletes(req, res){
    const id = req.params.id

    Post.findByIdAndDelete(id,
        req.body)
    .then(result => {
        if (!result) {
            post.status(404).send({
                message: "post not found"
            })
        }
        res.send({
            message: "post was deleted"
        })
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error while delete posts."
        })
    })
}
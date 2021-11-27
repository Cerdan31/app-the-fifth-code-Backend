const { Decimal128 } = require('bson')
const {Schema, model}=require('mongoose')

const proyectos=new Schema({
    name: {
        type: String,
        unique:true,
        required: true,
      },
      generalObjective: {
        type: String,
        required: true,
      },
      specificObjectives: {
        type: [],
        required: true,
      },
      budget: {
        type: Number,
        required: true,
      },
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
        required: true,
      },
      leader_id: {
        type: Schema.ObjectId,
        // required: true,
      },
      status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        default:"INACTIVE",
        required: true,
      },
      phase: {
        type: String
      }
    
})
module.exports = model('proyectos2',proyectos,"proyectos2")

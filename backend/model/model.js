const mongoose = require("mongoose");

const VolunteerSchema  =new mongoose.Schema({
    firstname:{
        type:String,
        require:true,
        trim: true,
              },
    lastname:{
        type:String,
        require:true,
        trim: true,
             },
    email :{
        type:String,
        require:true,
        unique:true,
        lowercase:true,
      },
      password:{
        type:String,
        require:true,
        minLength:8,
        maxLength:15
      },
      location:{
        type:String,
      },
      skills:[{
       type:String,

      }]
})

const OrganizationSchema = new mongoose.Schema({
  name:{
    type:String,
    require:true,
    trim:true
  },
  email :{
    type:String,
    require:true,
    unique:true,
    lowercase:true,
  },
  password:{
    type:String,
    require:true,
    minLength:8,
    maxLength:15
  },
  description:{
    type:String,
    require:true,
    minLength:100
  },
  location:{
    type:String
  },
  events:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Event"
  }]

},{
    timestamps:true
})

const EventSchema = new mongoose.Schema({
name:{
    type:String,
    require:true
},
description:{
    type:String,
    require:true
},
location:{
    type:String,
    require:true
},
theme:{
    type:String,
    require:true
},
date:{
    type:Date,
    require:true
},
volunteer:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Volunteer"
}]

})

const Volunteer = mongoose.model(VolunteerSchema,"Volunteer")
const Organization = mongoose.model(OrganizationSchema,"Organization")
const Event = mongoose.model(EventSchema,"Event")

module.exports ={
    Volunteer,
    Organization,
    Event
}




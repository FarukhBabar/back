import DiytoolsSchema from '../config/Poundline/DiyTools.js'
import DisposiblSchema from '../config/Poundline/Disposibl.js'
import CraftpoSchema from '../config/Poundline/Craftpo.js'
import CarpoSchema from '../config/Poundline/Carproduct.js'
import CandelesSchema from '../config/Poundline/Candeles.js'
import FoodpoSchema from '../config/Poundline/Foodpound.js'
import ShoeSchema from '../config/Poundline/Shoecare.js'
import StationerySchema from '../config/Poundline/Stationery.js'
import PotoySchema from '../config/Poundline/Potoy.js'
import PestconSchema from '../config/Poundline/Pestcontrol.js'
import LightergasSchema from '../config/Poundline/Lightergas.js'
import LoundryironSchema from '../config/Poundline/Loundryiron.js'
export const DiytoolsDAta = async(req,res)=>{
    let result = await DiytoolsSchema.find()
  return  res.send(result)
  }
  export const DiytoolsFree = async(req,res)=>{
  let result = await DiytoolsSchema.find()
  return  res.send(result)
  }
  export const DiytoolsDelitem = async (req,res)=>{
  let data = await DiytoolsSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Diytoolssingl =async (req, res) => {
    let result = await DiytoolsSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const DisposiblDAta = async(req,res)=>{
    let result = await DisposiblSchema.find()
  return  res.send(result)
  }
  export const DisposiblFree = async(req,res)=>{
  let result = await DisposiblSchema.find()
  return  res.send(result)
  }
  export const DisposiblDelitem = async (req,res)=>{
  let data = await DisposiblSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Disposiblsingl =async (req, res) => {
    let result = await DisposiblSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const CraftpoDAta = async(req,res)=>{
    let result = await CraftpoSchema.find()
  return  res.send(result)
  }
  export const CraftpoFree = async(req,res)=>{
  let result = await CraftpoSchema.find()
  return  res.send(result)
  }
  export const CraftpoDelitem = async (req,res)=>{
  let data = await CraftpoSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Craftposingl =async (req, res) => {
    let result = await CraftpoSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const CarpoDAta = async(req,res)=>{
    let result = await CarpoSchema.find()
  return  res.send(result)
  }
  export const CarpoFree = async(req,res)=>{
  let result = await CarpoSchema.find()
  return  res.send(result)
  }
  export const CarpoDelitem = async (req,res)=>{
  let data = await CarpoSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Carposingl =async (req, res) => {
    let result = await CarpoSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const CandelesDAta = async(req,res)=>{
    let result = await CandelesSchema.find()
  return  res.send(result)
  }
  export const CandelesFree = async(req,res)=>{
  let result = await CandelesSchema.find()
  return  res.send(result)
  }
  export const CandelesDelitem = async (req,res)=>{
  let data = await CandelesSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Candelessingl =async (req, res) => {
    let result = await CandelesSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
  
export const FoodpoDAta = async(req,res)=>{
  let result = await FoodpoSchema.find()
return  res.send(result)
}
export const FoodpoFree = async(req,res)=>{
let result = await FoodpoSchema.find()
return  res.send(result)
}
export const FoodpoDelitem = async (req,res)=>{
let data = await FoodpoSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Foodposingl =async (req, res) => {
  let result = await FoodpoSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const ShoeDAta = async(req,res)=>{
  let result = await ShoeSchema.find()
return  res.send(result)
}
export const ShoeFree = async(req,res)=>{
let result = await ShoeSchema.find()
return  res.send(result)
}
export const ShoeDelitem = async (req,res)=>{
let data = await ShoeSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Shoesingl =async (req, res) => {
  let result = await ShoeSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const StationeyDAta = async(req,res)=>{
  let result = await StationerySchema.find()
return  res.send(result)
}
export const StationeyFree = async(req,res)=>{
let result = await StationerySchema.find()
return  res.send(result)
}
export const StationeyDelitem = async (req,res)=>{
let data = await StationerySchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Stationeysingl =async (req, res) => {
  let result = await StationerySchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const PotoyDAta = async(req,res)=>{
  let result = await PotoySchema.find()
return  res.send(result)
}
export const PotoyFree = async(req,res)=>{
let result = await PotoySchema.find()
return  res.send(result)
}
export const PotoyDelitem = async (req,res)=>{
let data = await PotoySchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Potoysingl =async (req, res) => {
  let result = await PotoySchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const PestconDAta = async(req,res)=>{
  let result = await PestconSchema.find()
return  res.send(result)
}
export const PestconFree = async(req,res)=>{
let result = await PestconSchema.find()
return  res.send(result)
}
export const PestconDelitem = async (req,res)=>{
let data = await PestconSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Pestconsingl =async (req, res) => {
  let result = await PestconSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const LightergasDAta = async(req,res)=>{
  let result = await LightergasSchema.find()
return  res.send(result)
}
export const LightergasFree = async(req,res)=>{
let result = await LightergasSchema.find()
return  res.send(result)
}
export const LightergasDelitem = async (req,res)=>{
let data = await LightergasSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Lightergassingl =async (req, res) => {
  let result = await LightergasSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const LoundryironDAta = async(req,res)=>{
  let result = await LoundryironSchema.find()
return  res.send(result)
}
export const LoundryironFree = async(req,res)=>{
let result = await LoundryironSchema.find()
return  res.send(result)
}
export const LoundryironDelitem = async (req,res)=>{
let data = await LoundryironSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Loundryironsingl =async (req, res) => {
  let result = await LoundryironSchema.findOne({_id: req.params.id})
  return res.send(result)
}
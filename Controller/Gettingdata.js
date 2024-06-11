import FreeSchema from '../config/Sundayschema.js'
import PaletSchema from "../config/PalletSchema.js"
import NewProduct from '../config/Newarrival.js'
import FoodSchema from '../config/Foodschema.js' 
import DrinkSchema from '../config/Drink.js'
import LighterSchema from '../config/Lighterschema.js'
import ElectricalSchema from "../config/Electrical.js"
import SmokinSchema from '../config/Smokingess.js'
import BathroomSchema from '../config/Bathroom.js'
import ContactSchema from '../config/Contactus.js'
import BathroomdeSchema from '../config/Bathroomde.js'
import MirrorSchema from '../config/Mirrorsc.js'
import ShowerSchema from '../config/Showersc.js'
import BathmatesSchema from '../config/Bathmates.js'
import BathacessSchema from '../config/Bathroomacess.js'
import ShowheadSchema from '../config/Showerhead.js'
import DisposibleSchema from '../config/Disposible.js'
import TablewearSchema from '../config/Tablewear.js'
import AirersSchema from '../config/Airers.js'
import IroningSchema from '../config/Ironing.js'
import LoundrySchema from '../config/LOundryaccess.js'
export const Cont = async(req,res)=>{
  let result = await ContactSchema.find()
  res.send(result)
}
export const delcont = async(req,res)=>{
  let result = await ContactSchema.deleteOne({_id: req.params.id})
  // res.send(result)
  if(result){
      res.send(result)
  }else{
      res.send({result:"No such user found"})
  }
}
export const Free = async(req,res)=>{
    let result = await FreeSchema.find()
  return  res.send(result)
}
export const DAta = async(req,res)=>{
  let result = await FreeSchema.find()
return  res.send(result)
}
export const Delitem= async (req,res)=>{
  let data = await FreeSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
}
}


export const PalletDAta = async(req,res)=>{
  let result = await PaletSchema.find()
return  res.send(result)
}
export const PalletFree = async(req,res)=>{
let result = await PaletSchema.find()
return  res.send(result)
}
export const PalletDelitem= async (req,res)=>{
let data = await PaletSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const palletsing =  async (req,res)=>{
  let result = await PaletSchema.findOne({_id:req.params.id})
  res.send(result)
}


export const NewDAta = async(req,res)=>{
  let result = await NewProduct.find()
return  res.send(result)
}
export const NewFree = async(req,res)=>{
let result = await NewProduct.find()
return  res.send(result)
}
export const NewDelitem= async (req,res)=>{
let data = await NewProduct.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const newsingle =  async (req,res)=>{
  let result = await NewProduct.findOne({_id:req.params.id})
  res.send(result)
}

export const FoodDAta = async(req,res)=>{
  let result = await FoodSchema.find()
return  res.send(result)
}
export const FoodFree = async(req,res)=>{
let result = await FoodSchema.find()
return  res.send(result)
}
export const FoodDelitem = async (req,res)=>{
let data = await FoodSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Foodssinglepage =  async (req,res)=>{
  let result = await FoodSchema.findOne({_id:req.params.id})
  res.send(result)
}


export const DriDAta = async(req,res)=>{
  let result = await DrinkSchema.find()
return  res.send(result)
}
export const DriFree = async(req,res)=>{
let result = await DrinkSchema.find()
return  res.send(result)
}
export const DriDelitem = async (req,res)=>{
let data = await DrinkSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Drisingle =  async (req,res)=>{
  let result = await DrinkSchema.findOne({_id:req.params.id})
  res.send(result)
}

export const LighterDAta = async(req,res)=>{
  let result = await LighterSchema.find()
return  res.send(result)
}
export const LighterFree = async(req,res)=>{
let result = await LighterSchema.find()
return  res.send(result)
}
export const LighterDelitem = async (req,res)=>{
let data = await LighterSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Lightersingle =async (req, res) => {
  let result = await LighterSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const ElectricalDAta = async(req,res)=>{
  let result = await ElectricalSchema.find()
return  res.send(result)
}
export const ElectricalFree = async(req,res)=>{
let result = await ElectricalSchema.find()
return  res.send(result)
}
export const ElectricalDelitem = async (req,res)=>{
let data = await ElectricalSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Electricalsingle = async (req,res)=>{
  let result = await ElectricalSchema.findOne({_id:req.params.id})
  res.send(result)
}

export const SmokinDAta = async(req,res)=>{
  let result = await SmokinSchema.find()
return  res.send(result)
}
export const SmokinFree = async(req,res)=>{
let result = await SmokinSchema.find()
return  res.send(result)
}
export const SmokinDelitem = async (req,res)=>{
let data = await SmokinSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}

export const BathDAta = async(req,res)=>{
  let result = await BathroomSchema.find()
return  res.send(result)
}
export const BathFree = async(req,res)=>{
let result = await BathroomSchema.find()
return  res.send(result)
}
export const BathDelitem = async (req,res)=>{
let data = await BathroomSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Bathromsingl =async (req, res) => {
  let result = await BathroomSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const BathdeDAta = async(req,res)=>{
  let result = await BathroomdeSchema.find()
return  res.send(result)
}
export const BathdeFree = async(req,res)=>{
let result = await BathroomdeSchema.find()
return  res.send(result)
}
export const BathdeDelitem = async (req,res)=>{
let data = await BathroomdeSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Bathromdesingl =async (req, res) => {
  let result = await BathroomdeSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const MirorDAta = async(req,res)=>{
  let result = await MirrorSchema.find()
return  res.send(result)
}
export const MirrorrFree = async(req,res)=>{
let result = await MirrorSchema.find()
return  res.send(result)
}
export const MirrorDelitem = async (req,res)=>{
let data = await MirrorSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Mirrorrsingl =async (req, res) => {
  let result = await MirrorSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const ShowerDAta = async(req,res)=>{
  let result = await ShowerSchema.find()
return  res.send(result)
}
export const ShowerFree = async(req,res)=>{
let result = await ShowerSchema.find()
return  res.send(result)
}
export const ShowerDelitem = async (req,res)=>{
let data = await ShowerSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Sowersingl =async (req, res) => {
  let result = await ShowerSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const BathmatesDAta = async(req,res)=>{
  let result = await BathmatesSchema.find()
return  res.send(result)
}
export const BathmatesFree = async(req,res)=>{
let result = await BathmatesSchema.find()
return  res.send(result)
}
export const BathmatesDelitem = async (req,res)=>{
let data = await BathmatesSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Bathmatessingl =async (req, res) => {
  let result = await BathmatesSchema.findOne({_id: req.params.id})
  return res.send(result)
}


export const BathacessDAta = async(req,res)=>{
  let result = await BathacessSchema.find()
return  res.send(result)
}
export const BathacessFree = async(req,res)=>{
let result = await BathacessSchema.find()
return  res.send(result)
}
export const BathacessDelitem = async (req,res)=>{
let data = await BathacessSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Bathacesssingl =async (req, res) => {
  let result = await BathacessSchema.findOne({_id: req.params.id})
  return res.send(result)
}


export const ShowheadDAta = async(req,res)=>{
  let result = await ShowheadSchema.find()
return  res.send(result)
}
export const ShowheadFree = async(req,res)=>{
let result = await ShowheadSchema.find()
return  res.send(result)
}
export const ShowheadDelitem = async (req,res)=>{
let data = await ShowheadSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Showheadsingl =async (req, res) => {
  let result = await ShowheadSchema.findOne({_id: req.params.id})
  return res.send(result)
}


export const DisposibleDAta = async(req,res)=>{
  let result = await DisposibleSchema.find()
return  res.send(result)
}
export const DisposibleFree = async(req,res)=>{
let result = await DisposibleSchema.find()
return  res.send(result)
}
export const DisposibleDelitem = async (req,res)=>{
let data = await DisposibleSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Disposiblesingl =async (req, res) => {
  let result = await DisposibleSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const TablewearDAta = async(req,res)=>{
  let result = await TablewearSchema.find()
return  res.send(result)
}
export const TablewearFree = async(req,res)=>{
let result = await TablewearSchema.find()
return  res.send(result)
}
export const TablewearDelitem = async (req,res)=>{
let data = await TablewearSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Tablewearsingl =async (req, res) => {
  let result = await TablewearSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const AirersDAta = async(req,res)=>{
  let result = await AirersSchema.find()
return  res.send(result)
}
export const AirersFree = async(req,res)=>{
let result = await AirersSchema.find()
return  res.send(result)
}
export const AirersDelitem = async (req,res)=>{
let data = await AirersSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Airerssingl =async (req, res) => {
  let result = await AirersSchema.findOne({_id: req.params.id})
  return res.send(result)
}


export const IroningDAta = async(req,res)=>{
  let result = await IroningSchema.find()
return  res.send(result)
}
export const IroningFree = async(req,res)=>{
let result = await IroningSchema.find()
return  res.send(result)
}
export const IroningDelitem = async (req,res)=>{
let data = await IroningSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Ironingsingl =async (req, res) => {
  let result = await IroningSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const LoundryDAta = async(req,res)=>{
  let result = await LoundrySchema.find()
return  res.send(result)
}
export const LoundryFree = async(req,res)=>{
let result = await LoundrySchema.find()
return  res.send(result)
}
export const LoundryDelitem = async (req,res)=>{
let data = await LoundrySchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Loundrysingl =async (req, res) => {
  let result = await LoundrySchema.findOne({_id: req.params.id})
  return res.send(result)
}
import ElectricSchema from '../config/Electricalpond.js'
import PhoneSchema from '../config/Phone.js'
import BatteriesSchema from '../config/Batteries.js'
import ObsticalSchema  from '../config/Obsticl.js'
import FirstaidSchema from '../config/Firstaid.js'
import ApronsSchema from '../config/Aprons.js'
import BeddingteSchema from '../config/Beddingte.js' 
import ClothingSchema from '../config/Clothing.js'
import FreshnerSchema from '../config/Freshner.js'
import AkonobolSchema from '../config/Akonobol.js'
import ClockSchema from '../config/Clock.js'
import CameraSchema from '../config/Caera.js'
import DigitalSchema from '../config/Digital.js'
import CookwareSchema from '../config/Cookware.js'
import CrockerySchema from '../config/Crockery.js'
import DinnerSchema from '../config/Dinner.js'
import  RentokilSchema from '../config/Rentokil.js'
import StvSchema from '../config/STV.js'
import CottonSchema from '../config/Cotton.js'
import BabaySchema from '../config/Baby.js'
import FreshnSchema from '../config/Freshn.js'
import CarSchema from '../config/Car.js'
import BleechSchema from '../config/Bleech.js'
import BakewareSchema from '../config/Bakeware.js'
import BarewareSchema from '../config/Bareware.js'
import BirdsSchema from '../config/Birds.js'
import  CatSchema from '../config/Catproduct.js'
import BabeySchema from '../config/Babey.js'
import KidsSchema from '../config/Kidsstorage.js'
import BBqSchema from '../config/BBq.js'
import BirdcareSchema from '../config/Birdcare.js'
import BaloonSchema from '../config/Baloon.js'
import BaloonpupsSchema from '../config/Baloonpumps.js'
import BannerSchema from '../config/Banner.js'
import CrystalSchema from '../config/Crystal.js'
import CakesstandsSchema from  '../config/CakesStands.js'
import FurnitureSchema from '../config/Furniture.js'
import MatsSchema from '../config/Mats.js'
import CandelSchema from '../config/Candel.js'
import StSchema from '../config/STGorge.js'
import FoodconSchema from '../config/Foodcon.js'
import KidsplasSchema from '../config/kidsplastic.js'
import SportsSchema from '../config/Seasonlsports.js'
import FlaskSchema from '../config/Flask.js'
import ArtcraftSchema from '../config/Artcraft.js'
import BooksSchema from '../config/Books.js'
import BrushwareSchema from '../config/Brushwear.js'
import DusterSchema from '../config/Duster.js'
import ArtificalSchema from '../config/Artificalflowers.js'
import BouquetSchema from '../config/Bouquets.js'
export const BatteriesDAta = async(req,res)=>{
    let result = await BatteriesSchema.find()
  return  res.send(result)
  }
  export const BatteriesFree = async(req,res)=>{
  let result = await BatteriesSchema.find()
  return  res.send(result)
  }
  export const BatteriesDelitem = async (req,res)=>{
  let data = await BatteriesSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Batteriessingl =async (req, res) => {
    let result = await BatteriesSchema.findOne({_id: req.params.id})
    return res.send(result)
  }

  
export const PhoneDAta = async(req,res)=>{
    let result = await PhoneSchema.find()
  return  res.send(result)
  }
  export const PhoneFree = async(req,res)=>{
  let result = await PhoneSchema.find()
  return  res.send(result)
  }
  export const PhoneDelitem = async (req,res)=>{
  let data = await PhoneSchema.deleteOne({_id:req.params.id})
  if(data){
    return res.send(data)
  }else{
    res.status(400).send({
        success: false,
        message: 'Error in Deletion or no data available',
    })
  }
  }
  export const Phonesingl =async (req, res) => {
    let result = await PhoneSchema.findOne({_id: req.params.id})
    return res.send(result)
  }
   
export const ObsticalDAta = async(req,res)=>{
  let result = await ObsticalSchema.find()
return  res.send(result)
}
export const ObsticalFree = async(req,res)=>{
let result = await ObsticalSchema.find()
return  res.send(result)
}
export const ObsticalDelitem = async (req,res)=>{
let data = await ObsticalSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Obsticalsingl =async (req, res) => {
  let result = await ObsticalSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const ElectricDAta = async(req,res)=>{
  let result = await ElectricSchema.find()
return  res.send(result)
}
export const ElectricFree = async(req,res)=>{
let result = await ElectricSchema.find()
return  res.send(result)
}
export const ElectricDelitem = async (req,res)=>{
let data = await ElectricSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Electricsingl =async (req, res) => {
  let result = await ElectricSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const FirstaidDAta = async(req,res)=>{
  let result = await FirstaidSchema.find()
return  res.send(result)
}
export const FirstaidFree = async(req,res)=>{
let result = await FirstaidSchema.find()
return  res.send(result)
}
export const FirstaidDelitem = async (req,res)=>{
let data = await FirstaidSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Firstaidsingl =async (req, res) => {
  let result = await FirstaidSchema.findOne({_id: req.params.id})
  return res.send(result)
}


export const ApronsDAta = async(req,res)=>{
  let result = await ApronsSchema.find()
return  res.send(result)
}
export const ApronsFree = async(req,res)=>{
let result = await ApronsSchema.find()
return  res.send(result)
}
export const ApronsDelitem = async (req,res)=>{
let data = await ApronsSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Apronssingl =async (req, res) => {
  let result = await ApronsSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const BeddingDAta = async(req,res)=>{
  let result = await BeddingteSchema.find()
return  res.send(result)
}
export const BeddingFree = async(req,res)=>{
let result = await BeddingteSchema.find()
return  res.send(result)
}
export const BeddingDelitem = async (req,res)=>{
let data = await BeddingteSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Beddingsingl =async (req, res) => {
  let result = await BeddingteSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const ClothingDAta = async(req,res)=>{
  let result = await ClothingSchema.find()
return  res.send(result)
}
export const ClothingFree = async(req,res)=>{
let result = await ClothingSchema.find()
return  res.send(result)
}
export const ClothingDelitem = async (req,res)=>{
let data = await ClothingSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Clothingsingl =async (req, res) => {
  let result = await ClothingSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const FreshnerDAta = async(req,res)=>{
  let result = await FreshnerSchema.find()
return  res.send(result)
}
export const FreshnerFree = async(req,res)=>{
let result = await FreshnerSchema.find()
return  res.send(result)
}
export const FreshnerDelitem = async (req,res)=>{
let data = await FreshnerSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Freshnersingl =async (req, res) => {
  let result = await FreshnerSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const AkonobolDAta = async(req,res)=>{
  let result = await AkonobolSchema.find()
return  res.send(result)
}
export const AkonobolFree = async(req,res)=>{
let result = await AkonobolSchema.find()
return  res.send(result)
}
export const AkonobolDelitem = async (req,res)=>{
let data = await AkonobolSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Akonobolsingl =async (req, res) => {
  let result = await AkonobolSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const ClockDAta = async(req,res)=>{
  let result = await ClockSchema.find()
return  res.send(result)
}
export const ClockFree = async(req,res)=>{
let result = await ClockSchema.find()
return  res.send(result)
}
export const ClockDelitem = async (req,res)=>{
let data = await ClockSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Clocksingl =async (req, res) => {
  let result = await ClockSchema.findOne({_id: req.params.id})
  return res.send(result)
}


export const CameraDAta = async(req,res)=>{
  let result = await CameraSchema.find()
return  res.send(result)
}
export const CameraFree = async(req,res)=>{
let result = await CameraSchema.find()
return  res.send(result)
}
export const CameraDelitem = async (req,res)=>{
let data = await CameraSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Camerasingl =async (req, res) => {
  let result = await CameraSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const DigitalDAta = async(req,res)=>{
  let result = await DigitalSchema.find()
return  res.send(result)
}
export const DigitalFree = async(req,res)=>{
let result = await DigitalSchema.find()
return  res.send(result)
}
export const DigitalDelitem = async (req,res)=>{
let data = await DigitalSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Digitalsingl =async (req, res) => {
  let result = await DigitalSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const CookwareDAta = async(req,res)=>{
  let result = await CookwareSchema.find()
return  res.send(result)
}
export const CookwareFree = async(req,res)=>{
let result = await CookwareSchema.find()
return  res.send(result)
}
export const CookwareDelitem = async (req,res)=>{
let data = await CookwareSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Cookwaresingl =async (req, res) => {
  let result = await CookwareSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const CrockeryDAta = async(req,res)=>{
  let result = await CrockerySchema.find()
return  res.send(result)
}
export const CrockeryFree = async(req,res)=>{
let result = await CrockerySchema.find()
return  res.send(result)
}
export const CrockeryDelitem = async (req,res)=>{
let data = await CrockerySchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Crockerysingl =async (req, res) => {
  let result = await CrockerySchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const DinnerDAta = async(req,res)=>{
  let result = await DinnerSchema.find()
return  res.send(result)
}
export const DinnerFree = async(req,res)=>{
let result = await DinnerSchema.find()
return  res.send(result)
}
export const DinnerDelitem = async (req,res)=>{
let data = await DinnerSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Dinnersingl =async (req, res) => {
  let result = await DinnerSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const RentokilDAta = async(req,res)=>{
  let result = await RentokilSchema.find()
return  res.send(result)
}
export const RentokilFree = async(req,res)=>{
let result = await RentokilSchema.find()
return  res.send(result)
}
export const RentokilDelitem = async (req,res)=>{
let data = await RentokilSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Rentokilsingl =async (req, res) => {
  let result = await RentokilSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const StvDAta = async(req,res)=>{
  let result = await StvSchema.find()
return  res.send(result)
}
export const StvFree = async(req,res)=>{
let result = await StvSchema.find()
return  res.send(result)
}
export const StvDelitem = async (req,res)=>{
let data = await StvSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Stvsingl =async (req, res) => {
  let result = await StvSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const CottonDAta = async(req,res)=>{
  let result = await CottonSchema.find()
return  res.send(result)
}
export const CottonFree = async(req,res)=>{
let result = await CottonSchema.find()
return  res.send(result)
}
export const CottonDelitem = async (req,res)=>{
let data = await CottonSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Cottonsingl =async (req, res) => {
  let result = await CottonSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const BabyDAta = async(req,res)=>{
  let result = await BabaySchema.find()
return  res.send(result)
}
export const BabyFree = async(req,res)=>{
let result = await BabaySchema.find()
return  res.send(result)
}
export const BabyDelitem = async (req,res)=>{
let data = await BabaySchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Babysingl =async (req, res) => {
  let result = await BabaySchema.findOne({_id: req.params.id})
  return res.send(result)
}


export const FreshnDAta = async(req,res)=>{
  let result = await FreshnSchema.find()
return  res.send(result)
}
export const FreshnFree = async(req,res)=>{
let result = await FreshnSchema.find()
return  res.send(result)
}
export const FreshnDelitem = async (req,res)=>{
let data = await FreshnSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Freshnsingl =async (req, res) => {
  let result = await FreshnSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const CarDAta = async(req,res)=>{
  let result = await CarSchema.find()
return  res.send(result)
}
export const CarFree = async(req,res)=>{
let result = await CarSchema.find()
return  res.send(result)
}
export const CarDelitem = async (req,res)=>{
let data = await CarSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Carsingl =async (req, res) => {
  let result = await CarSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const BleechDAta = async(req,res)=>{
  let result = await BleechSchema.find()
return  res.send(result)
}
export const BleechFree = async(req,res)=>{
let result = await BleechSchema.find()
return  res.send(result)
}
export const BleechDelitem = async (req,res)=>{
let data = await BleechSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Bleechsingl =async (req, res) => {
  let result = await BleechSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const BakewareDAta = async(req,res)=>{
  let result = await BakewareSchema.find()
return  res.send(result)
}
export const BakewareFree = async(req,res)=>{
let result = await BakewareSchema.find()
return  res.send(result)
}
export const BakewareDelitem = async (req,res)=>{
let data = await BakewareSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Bakewaresingl =async (req, res) => {
  let result = await BakewareSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const BarewareDAta = async(req,res)=>{
  let result = await BarewareSchema.find()
return  res.send(result)
}
export const BarewareFree = async(req,res)=>{
let result = await BarewareSchema.find()
return  res.send(result)
}
export const BarewareDelitem = async (req,res)=>{
let data = await BarewareSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Barewaresingl =async (req, res) => {
  let result = await BarewareSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const BirdsDAta = async(req,res)=>{
  let result = await BirdsSchema.find()
return  res.send(result)
}
export const BirdsFree = async(req,res)=>{
let result = await BirdsSchema.find()
return  res.send(result)
}
export const BirdsDelitem = async (req,res)=>{
let data = await BirdsSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Birdssingl =async (req, res) => {
  let result = await BirdsSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const CatDAta = async(req,res)=>{
  let result = await  CatSchema.find()
return  res.send(result)
}
export const CatFree = async(req,res)=>{
let result = await  CatSchema.find()
return  res.send(result)
}
export const CatDelitem = async (req,res)=>{
let data = await  CatSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Catsingl =async (req, res) => {
  let result = await  CatSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const BabeyDAta = async(req,res)=>{
  let result = await BabeySchema.find()
return  res.send(result)
}
export const BabeyFree = async(req,res)=>{
let result = await  BabeySchema.find()
return  res.send(result)
}
export const BabeyDelitem = async (req,res)=>{
let data = await BabeySchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Babeysingl =async (req, res) => {
  let result = await BabeySchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const KidssDAta = async(req,res)=>{
  let result = await KidsSchema.find()
return  res.send(result)
}
export const KidssFree = async(req,res)=>{
let result = await  KidsSchema.find()
return  res.send(result)
}
export const KidssDelitem = async (req,res)=>{
let data = await KidsSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Kidsssingl =async (req, res) => {
  let result = await KidsSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const BBqDAta = async(req,res)=>{
  let result = await BBqSchema.find()
return  res.send(result)
}
export const BBqFree = async(req,res)=>{
let result = await  BBqSchema.find()
return  res.send(result)
}
export const BBqDelitem = async (req,res)=>{
let data = await BBqSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const BBqsingl =async (req, res) => {
  let result = await BBqSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const BirdcareDAta = async(req,res)=>{
  let result = await BirdcareSchema.find()
return  res.send(result)
}
export const BirdcareFree = async(req,res)=>{
let result = await  BirdcareSchema.find()
return  res.send(result)
}
export const BirdcareDelitem = async (req,res)=>{
let data = await BirdcareSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Birdcaresingl =async (req, res) => {
  let result = await BirdcareSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const BaloonDAta = async(req,res)=>{
  let result = await BaloonSchema.find()
return  res.send(result)
}
export const BaloonFree = async(req,res)=>{
let result = await  BaloonSchema.find()
return  res.send(result)
}
export const BaloonDelitem = async (req,res)=>{
let data = await BaloonSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Baloonsingl =async (req, res) => {
  let result = await BaloonSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const PumpsDAta = async(req,res)=>{
  let result = await BaloonpupsSchema.find()
return  res.send(result)
}
export const PumpsFree = async(req,res)=>{
let result = await  BaloonpupsSchema.find()
return  res.send(result)
}
export const PumpsDelitem = async (req,res)=>{
let data = await BaloonpupsSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Pumpssingl =async (req, res) => {
  let result = await BaloonpupsSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const BannerDAta = async(req,res)=>{
  let result = await BannerSchema.find()
return  res.send(result)
}
export const BannerFree = async(req,res)=>{
let result = await BannerSchema.find()
return  res.send(result)
}
export const BannerDelitem = async (req,res)=>{
let data = await BannerSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Bannersingl =async (req, res) => {
  let result = await BannerSchema.findOne({_id: req.params.id})
  return res.send(result)
}


export const CrystalDAta = async(req,res)=>{
  let result = await CrystalSchema.find()
return  res.send(result)
}
export const CrystalFree = async(req,res)=>{
let result = await CrystalSchema.find()
return  res.send(result)
}
export const CrystalDelitem = async (req,res)=>{
let data = await CrystalSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Crystalsingl =async (req, res) => {
  let result = await CrystalSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const CakesDAta = async(req,res)=>{
  let result = await CakesstandsSchema.find()
return  res.send(result)
}
export const CakesFree = async(req,res)=>{
let result = await CakesstandsSchema.find()
return  res.send(result)
}
export const CakesDelitem = async (req,res)=>{
let data = await CakesstandsSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Cakessingl =async (req, res) => {
  let result = await CakesstandsSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const FurnitureDAta = async(req,res)=>{
  let result = await FurnitureSchema.find()
return  res.send(result)
}
export const FurnitureFree = async(req,res)=>{
let result = await FurnitureSchema.find()
return  res.send(result)
}
export const FurnitureDelitem = async (req,res)=>{
let data = await FurnitureSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Furnituresingl =async (req, res) => {
  let result = await FurnitureSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const MatesDAta = async(req,res)=>{
  let result = await MatsSchema.find()
return  res.send(result)
}
export const MatesFree = async(req,res)=>{
let result = await MatsSchema.find()
return  res.send(result)
}
export const MatesDelitem = async (req,res)=>{
let data = await MatsSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Matessingl =async (req, res) => {
  let result = await MatsSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const CandelDAta = async(req,res)=>{
  let result = await CandelSchema.find()
return  res.send(result)
}
export const CandelFree = async(req,res)=>{
let result = await CandelSchema.find()
return  res.send(result)
}
export const CandelDelitem = async (req,res)=>{
let data = await CandelSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Candelsingl =async (req, res) => {
  let result = await CandelSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const STDAta = async(req,res)=>{
  let result = await StSchema.find()
return  res.send(result)
}
export const STFree = async(req,res)=>{
let result = await StSchema.find()
return  res.send(result)
}
export const STDelitem = async (req,res)=>{
let data = await StSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const STsingl =async (req, res) => {
  let result = await StSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const FoodconDAta = async(req,res)=>{
  let result = await FoodconSchema.find()
return  res.send(result)
}
export const FoodconFree = async(req,res)=>{
let result = await FoodconSchema.find()
return  res.send(result)
}
export const FoodconDelitem = async (req,res)=>{
let data = await FoodconSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Foodconsingl =async (req, res) => {
  let result = await FoodconSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const kidsplasDAta = async(req,res)=>{
  let result = await KidsplasSchema.find()
return  res.send(result)
}
export const kidsplasFree = async(req,res)=>{
let result = await KidsplasSchema.find()
return  res.send(result)
}
export const kidsplasDelitem = async (req,res)=>{
let data = await KidsplasSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const kidsplassingl =async (req, res) => {
  let result = await KidsplasSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const SportsDAta = async(req,res)=>{
  let result = await SportsSchema.find()
return  res.send(result)
}
export const SportsFree = async(req,res)=>{
let result = await SportsSchema.find()
return  res.send(result)
}
export const SportsDelitem = async (req,res)=>{
let data = await SportsSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Sportssingl =async (req, res) => {
  let result = await SportsSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const FlaskDAta = async(req,res)=>{
  let result = await FlaskSchema.find()
return  res.send(result)
}
export const FlaskFree = async(req,res)=>{
let result = await FlaskSchema.find()
return  res.send(result)
}
export const FlaskDelitem = async (req,res)=>{
let data = await FlaskSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Flasksingl =async (req, res) => {
  let result = await FlaskSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const ArtcraftDAta = async(req,res)=>{
  let result = await ArtcraftSchema.find()
return  res.send(result)
}
export const ArtcraftFree = async(req,res)=>{
let result = await ArtcraftSchema.find()
return  res.send(result)
}
export const ArtcraftDelitem = async (req,res)=>{
let data = await ArtcraftSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Artcraftsingl =async (req, res) => {
  let result = await ArtcraftSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const BooksDAta = async(req,res)=>{
  let result = await BooksSchema.find()
return  res.send(result)
}
export const BooksFree = async(req,res)=>{
let result = await BooksSchema.find()
return  res.send(result)
}
export const BooksDelitem = async (req,res)=>{
let data = await BooksSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Bookssingl =async (req, res) => {
  let result = await BooksSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const BrushwareDAta = async(req,res)=>{
  let result = await BrushwareSchema.find()
return  res.send(result)
}
export const BrushwareFree = async(req,res)=>{
let result = await BrushwareSchema.find()
return  res.send(result)
}
export const BrushwareDelitem = async (req,res)=>{
let data = await BrushwareSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Brushwaresingl =async (req, res) => {
  let result = await BrushwareSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const DusterDAta = async(req,res)=>{
  let result = await DusterSchema.find()
return  res.send(result)
}
export const DusterFree = async(req,res)=>{
let result = await DusterSchema.find()
return  res.send(result)
}
export const DusterDelitem = async (req,res)=>{
let data = await DusterSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Dustersingl =async (req, res) => {
  let result = await DusterSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const ArtificalDAta = async(req,res)=>{
  let result = await ArtificalSchema.find()
return  res.send(result)
}
export const ArtificalFree = async(req,res)=>{
let result = await ArtificalSchema.find()
return  res.send(result)
}
export const ArtificalDelitem = async (req,res)=>{
let data = await ArtificalSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Artificalsingl =async (req, res) => {
  let result = await ArtificalSchema.findOne({_id: req.params.id})
  return res.send(result)
}

export const BouquetsDAta = async(req,res)=>{
  let result = await BouquetSchema.find()
return  res.send(result)
}
export const BouquetsFree = async(req,res)=>{
let result = await BouquetSchema.find()
return  res.send(result)
}
export const BouquetsDelitem = async (req,res)=>{
let data = await BouquetSchema.deleteOne({_id:req.params.id})
if(data){
  return res.send(data)
}else{
  res.status(400).send({
      success: false,
      message: 'Error in Deletion or no data available',
  })
}
}
export const Bouquetssingl =async (req, res) => {
  let result = await BouquetSchema.findOne({_id: req.params.id})
  return res.send(result)
}
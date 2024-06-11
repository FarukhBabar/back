import express from "express"
import { Free, DAta, Delitem, PalletDAta,Cont,LoundryDAta,LoundryFree,LoundryDelitem,Loundrysingl,IroningDAta,IroningFree,IroningDelitem,Ironingsingl,AirersFree,Airerssingl,AirersDelitem,AirersDAta,TablewearDAta,Tablewearsingl,TablewearDelitem,TablewearFree,DisposibleDAta,DisposibleDelitem,Disposiblesingl,DisposibleFree,Drisingle,ShowheadDAta,ShowheadDelitem,Showheadsingl,ShowheadFree,Bathacesssingl,BathacessDelitem,BathacessFree,BathacessDAta,Bathmatessingl,BathmatesDAta,BathmatesFree,BathmatesDelitem,ShowerDAta,ShowerFree,ShowerDelitem,Sowersingl,MirorDAta,MirrorrFree,Mirrorrsingl,MirrorDelitem,BathdeDAta,BathdeDelitem,Bathromdesingl ,BathdeFree, Electricalsingle,delcont ,newsingle,Foodssinglepage, palletsing,Bathromsingl,Lightersingle, PalletFree ,ElectricalDAta , BathDelitem, BathDAta, BathFree,SmokinDAta, SmokinFree, SmokinDelitem, ElectricalDelitem,ElectricalFree ,PalletDelitem, NewDAta, NewFree, NewDelitem, FoodDAta, FoodFree, FoodDelitem, DriDAta, DriFree, DriDelitem, LighterDAta, LighterFree, LighterDelitem } from "../Controller/Gettingdata.js"
import { BatteriesDAta,FirstaidDAta,FirstaidFree,FirstaidDelitem,Firstaidsingl,StvDelitem, BatteriesDelitem, ObsticalDAta,ObsticalDelitem , ObsticalFree , Obsticalsingl, BatteriesFree , Batteriessingl,PhoneDAta,PhoneDelitem,PhoneFree,Phonesingl, ElectricFree, ElectricDAta, ElectricDelitem, Electricsingl, ApronsDAta, ApronsFree, ApronsDelitem, Apronssingl, BeddingDAta, BeddingFree, BeddingDelitem, Beddingsingl, ClothingDAta, ClothingFree, ClothingDelitem, Clothingsingl, FreshnerDAta, FreshnerFree, FreshnerDelitem, Freshnersingl, AkonobolDAta, AkonobolFree, AkonobolDelitem, Akonobolsingl, ClockDAta, ClockFree, ClockDelitem, Clocksingl, CameraDAta, CameraFree, Camerasingl, CameraDelitem, DigitalDAta, DigitalFree, DigitalDelitem, Digitalsingl, CookwareDAta, CookwareFree, CookwareDelitem, Cookwaresingl, CrockeryDAta, CrockeryFree, CrockeryDelitem, Crockerysingl, DinnerDAta, DinnerFree, DinnerDelitem, Dinnersingl, RentokilDAta, RentokilFree, Rentokilsingl, RentokilDelitem, StvDAta, StvFree, Stvsingl, CottonDAta, CottonDelitem, Cottonsingl, CottonFree, BabyDAta, BabyFree, BabyDelitem, Babysingl, FreshnFree, FreshnDAta, FreshnDelitem, Freshnsingl, CarDAta, CarFree, CarDelitem, Carsingl, BleechDAta, BleechFree, BleechDelitem, Bleechsingl, BakewareDAta, BakewareFree, BakewareDelitem, Bakewaresingl, BarewareDAta, BarewareFree, BarewareDelitem, Barewaresingl, BirdsDAta, BirdsFree, BirdsDelitem, Birdssingl, CatDAta, CatFree, CatDelitem, Catsingl, BabeyDAta, BabeyFree, BabeyDelitem, Babeysingl, KidssDAta, KidssDelitem, Kidsssingl, KidssFree, BBqDAta, BBqFree, BBqDelitem, BBqsingl, BirdcareDAta, BirdcareFree, BirdcareDelitem, Birdcaresingl, BaloonDAta, BaloonFree, BaloonDelitem, Baloonsingl, PumpsFree, PumpsDelitem, Pumpssingl, PumpsDAta, BannerDAta, BannerFree, BannerDelitem, Bannersingl, CrystalDAta, CrystalFree, CrystalDelitem, Crystalsingl, CakesDAta, CakesFree, Cakessingl, CakesDelitem, FurnitureDAta, FurnitureFree, FurnitureDelitem, Furnituresingl, MatesDAta, MatesFree, MatesDelitem, Matessingl, CandelDAta, CandelFree, CandelDelitem, Candelsingl, STDAta, STFree, STDelitem, STsingl, FoodconDAta, FoodconFree, FoodconDelitem, Foodconsingl, kidsplasDAta, kidsplasFree, kidsplasDelitem, kidsplassingl, SportsDAta, SportsFree, SportsDelitem, Sportssingl, FlaskDAta, FlaskFree, FlaskDelitem, Flasksingl, ArtcraftFree, ArtcraftDAta, ArtcraftDelitem, Artcraftsingl, BooksDAta, BooksFree, BooksDelitem, Bookssingl, BrushwareDAta, BrushwareFree, BrushwareDelitem, Brushwaresingl, DusterDAta, DusterFree, DusterDelitem, Dustersingl, ArtificalDAta, ArtificalFree, ArtificalDelitem, Artificalsingl, BouquetsDAta, BouquetsFree, BouquetsDelitem, Bouquetssingl } from "../Controller/Gettingsecond.js";
import { Sportsproducts } from "../Controller/Authsecond.js";
import { CandelesDAta, CandelesFree, Candelessingl, CarpoDAta, CarpoFree, Carposingl, CraftpoDAta, CraftpoDelitem, CraftpoFree, Craftposingl, DisposiblDAta, DisposiblDelitem, DisposiblFree, Disposiblsingl, DiytoolsDAta, DiytoolsDelitem, DiytoolsFree, Diytoolssingl, FoodpoDAta, FoodpoDelitem, FoodpoFree, Foodposingl, LightergasDAta, LightergasDelitem, LightergasFree, Lightergassingl, LoundryironDAta, LoundryironDelitem, LoundryironFree, Loundryironsingl, PestconDAta, PestconDelitem, PestconFree, Pestconsingl, PotoyDAta, PotoyDelitem, PotoyFree, Potoysingl, ShoeDAta, ShoeDelitem, ShoeFree, Shoesingl, StationeyDAta, StationeyDelitem, StationeyFree, Stationeysingl } from "../Controller/Pondlinegetting.js";

const router = express.Router()

router.get("/user", DAta)
router.get("/userlist", Cont)
router.delete('/deluser/:id' , delcont)
router.get("/freedelivery", Free)
router.delete("/userid/:id", Delitem)
router.get("/paletuser", PalletDAta)
router.get("/paletfreedelivery", PalletFree)
router.delete("/paletuserid/:id", PalletDelitem)
router.get('/palletsingle/:id' , palletsing)

router.get("/newuser", NewDAta)
router.get("/newfreedelivery", NewFree)
router.delete("/newuserid/:id", NewDelitem)
router.get('/newarrsingle/:id' , newsingle)

router.get("/fooduser", FoodDAta)
router.get("/foodfreedelivery", FoodFree)
router.delete("/fooduserid/:id", FoodDelitem)
router.get('/foodssingle/:id' , Foodssinglepage)

router.get("/driuser", DriDAta)
router.get("/drifreedelivery", DriFree)
router.delete("/driuserid/:id", DriDelitem)
router.get("/drifreedeliverysingle/:id", Drisingle)

router.get("/liguser", LighterDAta)
router.get("/lighfreedelivery", LighterFree)
router.delete("/lighuserid/:id", LighterDelitem)
router.get("/lightersingalepage/:id" ,Lightersingle)

router.get("/eleuser", ElectricalDAta)
router.get("/elefreedelivery", ElectricalFree)
router.delete("/eleuserid/:id", ElectricalDelitem)
router.get("/elefreedelivery/:id", Electricalsingle)

router.get("/Smokuser", SmokinDAta)
router.get("/Smokfreedelivery", SmokinFree)
router.delete("/Smokuserid/:id", SmokinDelitem)

router.get("/bathuser", BathDAta)
router.get("/bathfreedelivery", BathFree)
router.delete("/bathuserid/:id", BathDelitem)
router.get('/bathroomsingle/:id' , Bathromsingl)

router.get("/bathdeuser",BathdeDAta)
router.get("/bathdefreedelivery",BathdeFree)
router.delete("/bathdeuserid/:id",BathdeDelitem)
router.get('/bathroomdesingle/:id' ,Bathromdesingl)


router.get("/mirroruser",MirorDAta)
router.get("/mirrorfreedelivery",MirrorrFree)
router.delete("/mirroruserid/:id",MirrorDelitem)
router.get('/mirrorsingle/:id' ,Mirrorrsingl)

router.get("/showeruser",ShowerDAta)
router.get("/showerfreedelivery",ShowerFree)
router.delete("/showeruserid/:id",ShowerDelitem)
router.get('/showersingle/:id' ,Sowersingl)

router.get("/bathmatesuser",BathmatesDAta)
router.get("/bathmatesfreedelivery",BathmatesFree)
router.delete("/bathmatesuserid/:id",BathmatesDelitem)
router.get('/bathmatessingle/:id' ,Bathmatessingl)

router.get("/bathacessuser",BathacessDAta)
router.get("/bathacessfreedelivery",BathacessFree)
router.delete("/bathacessuserid/:id",BathacessDelitem)
router.get('/bathacesssingle/:id' ,Bathacesssingl)

router.get("/showheaduser",ShowheadDAta)
router.get("/showheadfreedelivery",ShowheadFree)
router.delete("/showheaduserid/:id",ShowheadDelitem)
router.get('/showheadsingle/:id' ,Showheadsingl)

router.get("/disposibleuser",DisposibleDAta)
router.get("/disposiblefreedelivery",DisposibleFree)
router.delete("/disposibleuserid/:id",DisposibleDelitem)
router.get('/disposiblesingle/:id' ,Disposiblesingl)

router.get("/Tablewearuser",TablewearDAta)
router.get("/Tablewearfreedelivery",TablewearFree)
router.delete("/Tablewearuserid/:id",TablewearDelitem)
router.get('/Tablewearsingle/:id' ,Tablewearsingl)

router.get("/Airersuser",AirersDAta)
router.get("/Airersfreedelivery",AirersFree)
router.delete("/Airersuserid/:id",AirersDelitem)
router.get('/Airerssingle/:id' ,Airerssingl)

router.get("/ironinguser",IroningDAta)
router.get("/ironingfreedelivery",IroningFree)
router.delete("/ironinguserid/:id",IroningDelitem)
router.get('/ironingsingle/:id' ,Ironingsingl)

router.get("/Loundryuser",LoundryDAta)
router.get("/Loundryfreedelivery",LoundryFree)
router.delete("/Loundryuserid/:id",LoundryDelitem)
router.get('/Loundrysingle/:id' ,Loundrysingl)

router.get("/Batteriesuser",BatteriesDAta)
router.get("/Batteriesfreedelivery",BatteriesFree)
router.delete("/Batteriesuserid/:id",BatteriesDelitem)
router.get('/Batteriessingle/:id' ,Batteriessingl)

router.get("/Phoneuser",PhoneDAta)
router.get("/Phonefreedelivery",PhoneFree)
router.delete("/Phoneuserid/:id",PhoneDelitem)
router.get('/Phonesingle/:id' ,Phonesingl)

router.get("/Obsticaluser",ObsticalDAta)
router.get("/Obsticalfreedelivery",ObsticalFree)
router.delete("/Obsticaluserid/:id",ObsticalDelitem)
router.get('/Obsticalsingle/:id' ,Obsticalsingl)

router.get("/Electricuser",ElectricDAta)
router.get("/Electricfreedelivery",ElectricFree)
router.delete("/Electricuserid/:id",ElectricDelitem)
router.get('/Electricsingle/:id' ,Electricsingl)

router.get("/Firstaiduser",FirstaidDAta)
router.get("/Firstaidfreedelivery",FirstaidFree)
router.delete("/Firstaiduserid/:id",FirstaidDelitem)
router.get('/Firstaidsingle/:id' ,Firstaidsingl)

router.get("/Apronsuser",ApronsDAta)
router.get("/Apronsfreedelivery",ApronsFree)
router.delete("/Apronsuserid/:id",ApronsDelitem)
router.get('/Apronssingle/:id' ,Apronssingl)

router.get("/Beddinguser",BeddingDAta)
router.get("/Beddingfreedelivery",BeddingFree)
router.delete("/Beddinguserid/:id",BeddingDelitem)
router.get('/Beddingsingle/:id' ,Beddingsingl)

router.get("/Clothinguser", ClothingDAta)
router.get("/Clothingfreedelivery",ClothingFree)
router.delete("/Clothinguserid/:id",ClothingDelitem)
router.get('/Clothingsingle/:id' ,Clothingsingl)

router.get("/Freshneruser", FreshnerDAta)
router.get("/Freshnerfreedelivery",FreshnerFree)
router.delete("/Freshneruserid/:id",FreshnerDelitem)
router.get('/Freshnersingle/:id' ,Freshnersingl)

router.get("/Akonoboluser", AkonobolDAta)
router.get("/Akonobolfreedelivery",AkonobolFree)
router.delete("/Akonoboluserid/:id",AkonobolDelitem)
router.get('/Akonobolsingle/:id' ,Akonobolsingl)

router.get("/Clockuser", ClockDAta)
router.get("/Clockfreedelivery",ClockFree)
router.delete("/Clockuserid/:id",ClockDelitem)
router.get('/Clocksingle/:id' ,Clocksingl)

router.get("/camerauser", CameraDAta)
router.get("/camerafreedelivery",CameraFree)
router.delete("/camerauserid/:id",CameraDelitem)
router.get('/camerasingle/:id' ,Camerasingl)

router.get("/digitaluser", DigitalDAta)
router.get("/digitalfreedelivery",DigitalFree)
router.delete("/digitaluserid/:id",DigitalDelitem)
router.get('/digitalsingle/:id' ,Digitalsingl)

router.get("/Cookwareuser", CookwareDAta)
router.get("/Cookwarefreedelivery",CookwareFree)
router.delete("/Cookwareuserid/:id",CookwareDelitem)
router.get('/Cookwaresingle/:id' ,Cookwaresingl)

router.get("/Crockeryuser", CrockeryDAta)
router.get("/Crockeryfreedelivery",CrockeryFree)
router.delete("/Crockeryuserid/:id",CrockeryDelitem)
router.get('/Crockerysingle/:id' ,Crockerysingl)

router.get("/Crockeryuser", CrockeryDAta)
router.get("/Crockeryfreedelivery",CrockeryFree)
router.delete("/Crockeryuserid/:id",CrockeryDelitem)
router.get('/Crockerysingle/:id' ,Crockerysingl)

router.get("/dinneruser", DinnerDAta)
router.get("/dinnerfreedelivery",DinnerFree)
router.delete("/dinneruserid/:id",DinnerDelitem)
router.get('/dinnersingle/:id' ,Dinnersingl)

router.get("/rentokiluser", RentokilDAta)
router.get("/rentokilfreedelivery",RentokilFree)
router.delete("/rentokiluserid/:id",RentokilDelitem)
router.get('/rentokilsingle/:id' ,Rentokilsingl)

router.get("/stvuser", StvDAta)
router.get("/stvfreedelivery",StvFree)
router.delete("/stvuserid/:id", StvDelitem)
router.get('/stvsingle/:id' ,Stvsingl)

router.get("/stvuser", StvDAta)
router.get("/stvfreedelivery",StvFree)
router.delete("/stvuserid/:id", StvDelitem)
router.get('/stvsingle/:id' ,Stvsingl)

router.get("/cottonuser", CottonDAta)
router.get("/cottonfreedelivery", CottonFree)
router.delete("/cottonuserid/:id", CottonDelitem)
router.get('/cottonsingle/:id' ,Cottonsingl)

router.get("/babyuser", BabyDAta)
router.get("/babyfreedelivery", BabyFree)
router.delete("/babyuserid/:id", BabyDelitem)
router.get('/babysingle/:id' ,Babysingl)

router.get("/freshnuser", FreshnDAta)
router.get("/freshnfreedelivery", FreshnFree)
router.delete("/freshnuserid/:id", FreshnDelitem)
router.get('/freshnsingle/:id' ,Freshnsingl)

router.get("/caruser", CarDAta)
router.get("/carfreedelivery", CarFree)
router.delete("/caruserid/:id", CarDelitem)
router.get('/carsingle/:id' ,Carsingl)

router.get("/bleechuser", BleechDAta)
router.get("/bleechfreedelivery", BleechFree)
router.delete("/bleechuserid/:id", BleechDelitem)
router.get('/bleechsingle/:id' ,Bleechsingl)

router.get("/bakewareuser", BakewareDAta)
router.get("/bakewarefreedelivery", BakewareFree)
router.delete("/bakewareuserid/:id", BakewareDelitem)
router.get('/bakewaresingle/:id' , Bakewaresingl)

router.get("/barewareuser", BarewareDAta)
router.get("/barewarefreedelivery", BarewareFree)
router.delete("/barewareuserid/:id", BarewareDelitem)
router.get('/barewaresingle/:id' , Barewaresingl)

router.get("/birdsuser", BirdsDAta)
router.get("/birdsfreedelivery", BirdsFree)
router.delete("/birdsuserid/:id", BirdsDelitem)
router.get('/birdssingle/:id' , Birdssingl)

router.get("/catuser", CatDAta)
router.get("/catfreedelivery", CatFree)
router.delete("/catuserid/:id", CatDelitem)
router.get('/catsingle/:id' , Catsingl)

router.get("/babeyuser", BabeyDAta)
router.get("/babeyfreedelivery", BabeyFree)
router.delete("/babeyuserid/:id", BabeyDelitem)
router.get('/babeysingle/:id' , Babeysingl)

router.get("/kidsuser", KidssDAta)
router.get("/kidsfreedelivery", KidssFree)
router.delete("/kidsuserid/:id",KidssDelitem)
router.get('/kidssingle/:id' , Kidsssingl)

router.get("/bbquser", BBqDAta)
router.get("/bbqfreedelivery", BBqFree)
router.delete("/bbquserid/:id",BBqDelitem)
router.get('/bbqsingle/:id' , BBqsingl)

router.get("/birdcareuser", BirdcareDAta)
router.get("/birdcarefreedelivery", BirdcareFree)
router.delete("/birdcareuserid/:id",BirdcareDelitem)
router.get('/birdcaresingle/:id' , Birdcaresingl)

router.get("/baloonuser", BaloonDAta)
router.get("/baloonfreedelivery", BaloonFree)
router.delete("/baloonuserid/:id",BaloonDelitem)
router.get('/baloonsingle/:id' , Baloonsingl)

router.get("/pumpsuser", PumpsDAta)
router.get("/pumpsfreedelivery", PumpsFree)
router.delete("/pumpsuserid/:id", PumpsDelitem)
router.get('/pumpssingle/:id' , Pumpssingl)

router.get("/banneruser", BannerDAta)
router.get("/bannerfreedelivery", BannerFree)
router.delete("/banneruserid/:id", BannerDelitem)
router.get('/bannersingle/:id' , Bannersingl)

router.get("/crystaluser", CrystalDAta)
router.get("/crystalfreedelivery", CrystalFree)
router.delete("/crystaluserid/:id", CrystalDelitem)
router.get('/crystalsingle/:id' , Crystalsingl)

router.get("/cakesuser", CakesDAta)
router.get("/cakesfreedelivery", CakesFree)
router.delete("/cakesuserid/:id", CakesDelitem)
router.get('/cakessingle/:id' , Cakessingl)

router.get("/furnitureuser", FurnitureDAta)
router.get("/furniturefreedelivery", FurnitureFree)
router.delete("/furnitureuserid/:id", FurnitureDelitem)
router.get('/furnituresingle/:id' , Furnituresingl)

router.get("/matesuser", MatesDAta)
router.get("/matesfreedelivery", MatesFree)
router.delete("/matesuserid/:id", MatesDelitem)
router.get('/matessingle/:id' , Matessingl)

router.get("/candeluser", CandelDAta)
router.get("/candelfreedelivery", CandelFree)
router.delete("/candeluserid/:id", CandelDelitem)
router.get('/candelsingle/:id' , Candelsingl)

router.get("/stuser", STDAta)
router.get("/stfreedelivery", STFree)
router.delete("/stuserid/:id", STDelitem)
router.get('/stsingle/:id' , STsingl)

router.get("/stuser", STDAta)
router.get("/stfreedelivery", STFree)
router.delete("/stuserid/:id", STDelitem)
router.get('/stsingle/:id' , STsingl)

router.get("/foodconuser", FoodconDAta)
router.get("/foodconfreedelivery", FoodconFree)
router.delete("/foodconuserid/:id", FoodconDelitem)
router.get('/foodconsingle/:id' , Foodconsingl)

router.get("/kidsplasuser", kidsplasDAta)
router.get("/kidsplasfreedelivery",kidsplasFree)
router.delete("/kidsplasuserid/:id", kidsplasDelitem)
router.get('/kidsplassingle/:id' , kidsplassingl)

router.get("/sportuser", SportsDAta)
router.get("/sportfreedelivery",SportsFree)
router.delete("/sportuserid/:id", SportsDelitem)
router.get('/sportsingle/:id' , Sportssingl)

router.get("/flaskuser", FlaskDAta)
router.get("/flaskfreedelivery",FlaskFree)
router.delete("/flaskuserid/:id", FlaskDelitem)
router.get('/flasksingle/:id' , Flasksingl)

router.get("/artcraftuser", ArtcraftDAta)
router.get("/artcraftfreedelivery",ArtcraftFree)
router.delete("/artcraftuserid/:id", ArtcraftDelitem)
router.get('/artcraftsingle/:id' , Artcraftsingl)

router.get("/booksuser", BooksDAta)
router.get("/booksfreedelivery",BooksFree)
router.delete("/booksuserid/:id", BooksDelitem)
router.get('/bookssingle/:id' , Bookssingl)

router.get("/brushwareuser", BrushwareDAta)
router.get("/brushwarefreedelivery",BrushwareFree)
router.delete("/brushwareuserid/:id", BrushwareDelitem)
router.get('/brushwaresingle/:id' , Brushwaresingl)

router.get("/dusteruser", DusterDAta)
router.get("/dusterfreedelivery",DusterFree)
router.delete("/dusteruserid/:id", DusterDelitem)
router.get('/dustersingle/:id' , Dustersingl)

router.get("/artificaluser", ArtificalDAta)
router.get("/artificalfreedelivery",ArtificalFree)
router.delete("/artificaluserid/:id", ArtificalDelitem)
router.get('/artificalsingle/:id' , Artificalsingl)

router.get("/diytoolsuser", DiytoolsDAta)
router.get("/diytoolsfreedelivery",DiytoolsFree)
router.delete("/diytoolsuserid/:id", DiytoolsDelitem)
router.get('/diytoolssingle/:id' , Diytoolssingl)

router.get("/bouquetuser", BouquetsDAta)
router.get("/bouquetfreedelivery",BouquetsFree)
router.delete("/bouquetuserid/:id", BouquetsDelitem)
router.get('/bouquetsingle/:id' , Bouquetssingl)

router.get("/disposibluser", DisposiblDAta )
router.get("/disposiblfreedelivery",DisposiblFree)
router.delete("/disposibluserid/:id", DisposiblDelitem)
router.get('/disposiblsingle/:id' , Disposiblsingl)

router.get("/craftuser", CraftpoDAta )
router.get("/craftfreedelivery", CraftpoFree)
router.delete("/craftuserid/:id", CraftpoDelitem)
router.get('/craftsingle/:id' , Craftposingl)

router.get("/carpouser", CarpoDAta )
router.get("/carpofreedelivery", CarpoFree)
router.delete("/carpouserid/:id", CarDelitem)
router.get('/carposingle/:id' , Carposingl)

router.get("/candelesuser", CandelesDAta )
router.get("/candelesfreedelivery", CandelesFree)
router.delete("/candelesuserid/:id", CandelesFree)
router.get('/candelessingle/:id' , Candelessingl)

router.get("/foodpouser", FoodpoDAta )
router.get("/foodpofreedelivery", FoodpoFree)
router.delete("/foodpouserid/:id", FoodpoDelitem)
router.get('/foodposingle/:id' , Foodposingl)

router.get("/shoeuser", ShoeDAta )
router.get("/shoefreedelivery", ShoeFree)
router.delete("/shoeuserid/:id", ShoeDelitem)
router.get('/shoesingle/:id' , Shoesingl)

router.get("/stationuser", StationeyDAta )
router.get("/stationfreedelivery", StationeyFree)
router.delete("/stationuserid/:id", StationeyDelitem)
router.get('/stationsingle/:id' , Stationeysingl)

router.get("/potoyuser", PotoyDAta )
router.get("/potoyfreedelivery", PotoyFree)
router.delete("/potoyuserid/:id", PotoyDelitem)
router.get('/potoysingle/:id' , Potoysingl)

router.get("/pestconuser", PestconDAta )
router.get("/pestconfreedelivery", PestconFree)
router.delete("/pestconuserid/:id", PestconDelitem)
router.get('/pestconsingle/:id' , Pestconsingl)

router.get("/lightergasuser", LightergasDAta )
router.get("/lightergasfreedelivery", LightergasFree)
router.delete("/lightergasuserid/:id", LightergasDelitem)
router.get('/lightergassingle/:id' , Lightergassingl)

router.get("/londryironuser", LoundryironDAta )
router.get("/londryironfreedelivery", LoundryironFree)
router.delete("/londryironuserid/:id", LoundryironDelitem)
router.get('/londryironsingle/:id' , Loundryironsingl)
export default router
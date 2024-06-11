import verifytoken from "../Middelwear/Verifytoken.js"
import {Register , Login , testuser , DEl,Obstocilproducts,Obstocilupl,Obstocilsiglget, upl,Phoneproducts,Phoneupl,Phonesiglget ,Batteriesproducts,Batteriesupl ,Batteriessiglget,Loundryproducts,Loundryupl,Loundrysiglget,Ironingproducts,Ironingupl,Ironingsiglget,Airersproducts,Airerssiglget,Airersupl,Tablewearproducts,Tablewearupl,Tablewearsiglget,Showerproducts,Disposiproducts,Disposiupl,Disposisiglget,Showheadproducts,Showheadupl,Showheadsiglget,Bathacessproducts,Bathacesssiglget,Bathacessupl,Bathmatessiglget,Bathmatesupl,Bathmatesproducts,Showersiglget ,Showerupl,siglget,Mirrorsiglget,Mirrorproducts,Mirrorupl,Contact,Bathrmdesiglget,Bathrmdeupl,Bathrmdeproducts,Pallet,Bathrmproducts,Bathrmupl, Bathrmsiglget, Smokinsiglget,Smokinupl,Smokinproducts,palletupl,palletsiglget,Electricalsiglget,Electricalupl,Electricalproducts,Lighterproducts ,Lightrupl, Lightrsiglget ,Drinksiglget,Newarrivalssiglget,newarrivalsupl, Newarrivals ,Foodproducts,Foodupl ,Foodsiglget ,Drinkupl ,Drinkproducts, Electricproducts, Electricupl, Electricsiglget, Firstaidproducts, Firstaidupl, Firstaidsiglget, Apronsproducts, Apronsupl, Apronssiglget, Beddingproducts, Beddingupl, Beddingsiglget, Clothingproducts, Clothingupl, Clothingsiglget, Freshnerproducts, Freshnerupl, Freshnersiglget, Akonbolproducts, Akonbolupl, Akonbolsiglget, Clockproducts, Clockupl, Clocksiglget, cameraproducts, cameraupl, camerasiglget, Digitalupl, Digitalsiglget, Digitalproducts, Cookwareproducts, Cookwareupl, Cookwaresiglget, Crockeryproducts, Crockeryupl, Crockerysiglget, Dinnerupl, Dinnerproducts, Rentokilproducts, Rentokilupl, Rentokilsiglget, Stvproducts, Stvupl, Stvsiglget, Cottonproducts, Cottonupl, Babyupl, Babyproducts, Freshproducts, Freshupl, Carproducts, Carupl, Bleechproducts, Bleechupl} from "../Controller/Auth.js"
import multer from "multer"
import express from "express"
import { Artcraftsingl, Artificalsingl, BBqsingl, Babeysingl, Babysingl, Bakewaresingl, Baloonsingl, Bannersingl, Barewaresingl, Birdcaresingl, Birdssingl, Bleechsingl, BooksFree, Bookssingl, Bouquetssingl, Brushwaresingl, Cakessingl, Candelsingl, Carsingl, Catsingl, Cottonsingl, Crystalsingl, DusterDAta, Dustersingl, Flasksingl, Foodconsingl, Freshnsingl, Furnituresingl, Kidsssingl, Matessingl, Pumpssingl, Sportssingl, kidsplassingl } from "../Controller/Gettingsecond.js"
import { Bakewareproducts, Bakewareupl, Barewareproducts,Catproducts, Barewareupl, Birdsproducts, Birdsupl, Catupl, Babeyproducts, Babeyupl, Kidsproducts, Kidsupl, BBqproducts, BBqupl, Birdcareproducts, Birdcareupl, Baloonproducts, Baloonupl, Pumpsproducts, Pumpsupl, Bannerproducts, Bannerupl, Crystalproducts, Crystalupl, Cakesproducts, Cakesupl, Furnitureproducts, Furnitureupl, Matesproducts, Matesupl, Candelproducts, Candelupl, Stproducts, Stupl, Stsiglget, Foodconproducts, Foodconupl, kidsplasproducts, kidsplasupl, Sportsproducts, Sportsupl, Flaskproducts, Flaskupl, Artcraftproducts, Artcraftupl, Booksproducts, Booksupl, Brushwareproducts, Brushwareupl, Dusterupl, Dusterproducts, Artificalproducts, Artificalupl, Bouquetsproducts, Bouquetsupl } from "../Controller/Authsecond.js"
import { Candelesproducts, Candelessiglget, Candelesupl, Carpoproducts, Carpoupl, Craftpoproducts, Craftpoupl, Disposiblproducts, Disposiblsiglget, Disposiblsupl, Diytoolsproducts, Diytoolsupl, Foodpoproducts, Foodposiglget, Foodpoupl, Lightergasproducts, Lightergasupl, Loundryironproducts, Loundryironupl, Pestconproducts, Pestconupl, Potoyproducts, Potoysiglget, Potoyupl, Shoeproducts, Shoeupl, Stationeryproducts, Stationeryupl } from "../Controller/Poundlinecat.js"
import { Candelessingl, Carposingl, Craftposingl, Diytoolssingl, Lightergassingl, Loundryironsingl, Pestconsingl, Shoesingl, Stationeysingl } from "../Controller/Pondlinegetting.js"

 const router = express.Router()

    const storage=multer.diskStorage({
      destination:"uploads/",
      filename:function(req , file , cb){
        cb(null , file.originalname)
      }
    })

    const uploads = multer({storage:storage});



//  router.post("/register"  , Register)
//  router.post("/login" , Login)
 router.post("/test" , verifytoken , testuser)
 router.post("/contact"  , Contact)
 router.post("/freedel" ,uploads.single('image') ,DEl )
 router.put("/singale/:id",uploads.single('image'),upl)
 router.get("/singale/:id" , siglget)

 router.post("/pallet" ,uploads.single('image') ,Pallet )
 router.put("/palletsingle/:id",uploads.single('image'),palletupl)
 router.get("/palletsingle/:id" , palletsiglget)
 router.post("/Newarrivals" ,uploads.single('image') ,Newarrivals )
 router.put("/newarrivalssingle/:id",uploads.single('image'),newarrivalsupl)
 router.get("/newarrivalssingle/:id" , Newarrivalssiglget)

 router.post("/Foodproducts" ,uploads.single('image') ,Foodproducts )
 router.put("/foodsingle/:id",uploads.single('image'),Foodupl)
 router.get("/foodsingle/:id" , Foodsiglget)

 router.post("/driproducts" ,uploads.single('image') ,Drinkproducts )
 router.put("/drisingle/:id",uploads.single('image'),Drinkupl)
 router.get("/drisingle/:id" , Drinksiglget)

 router.post("/ligproducts" ,uploads.single('image') ,Lighterproducts )
 router.put("/ligsingle/:id",uploads.single('image'),Lightrupl)
 router.get("/ligsingle/:id" , Lightrsiglget)

 router.post("/eleproducts" ,uploads.single('image') ,Electricalproducts )
 router.put("/elesingle/:id",uploads.single('image'),Electricalupl)
 router.get("/elesingle/:id" , Electricalsiglget)


 router.post("/smokinproducts" ,uploads.single('image') ,Smokinproducts )
 router.put("/smokinsingle/:id",uploads.single('image'),Smokinupl)
 router.get("/smokinsingle/:id" , Smokinsiglget)

 router.post("/bathromproducts" ,uploads.single('image') ,Bathrmproducts )
 router.put("/bathromsingle/:id",uploads.single('image'),Bathrmupl)
 router.get("/bathromsingle/:id" , Bathrmsiglget)

 router.post("/bathromdeproducts" ,uploads.single('image') ,Bathrmdeproducts )
 router.put("/bathromdesingle/:id",uploads.single('image'),Bathrmdeupl)
 router.get("/bathromdesingle/:id" , Bathrmdesiglget)

 router.post("/mirrorproducts" ,uploads.single('image') ,Mirrorproducts )
 router.put("/mirrorsingle/:id",uploads.single('image'),Mirrorupl)
 router.get("/mirrorsingle/:id" , Mirrorsiglget)
 
 router.post("/showerproducts" ,uploads.single('image') ,Showerproducts )
 router.put("/showersingle/:id",uploads.single('image'),Showerupl)
 router.get("/showersingle/:id" ,Showersiglget)

 router.post("/bathmatesproducts" ,uploads.single('image') ,Bathmatesproducts )
 router.put("/bathmatessingle/:id",uploads.single('image'),Bathmatesupl)
 router.get("/bathmatessingle/:id" ,Bathmatessiglget)

 router.post("/bathacessproducts" ,uploads.single('image') ,Bathacessproducts )
 router.put("/bathacesssingle/:id",uploads.single('image'),Bathacessupl)
 router.get("/bathacesssingle/:id" ,Bathacesssiglget)
 
 router.post("/showheadproducts" ,uploads.single('image') ,Showheadproducts )
 router.put("/showerheadsingle/:id",uploads.single('image'),Showheadupl)
 router.get("/showerheadsingle/:id" ,Showheadsiglget)


 router.post("/disposibleproducts" ,uploads.single('image') ,Disposiproducts )
 router.put("/disposiblesingle/:id",uploads.single('image'),Disposiupl)
 router.get("/disposiblesingle/:id" ,Disposisiglget)

 router.post("/tablewearproducts" ,uploads.single('image') ,Tablewearproducts )
 router.put("/tablewearsingle/:id",uploads.single('image'),Tablewearupl)
 router.get("/tablewearsingle/:id" ,Tablewearsiglget)

 router.post("/Airersproducts" ,uploads.single('image') ,Airersproducts )
 router.put("/Airerssingle/:id",uploads.single('image'),Airersupl)
 router.get("/Airerssingle/:id" ,Airerssiglget)

 router.post("/Ironingproducts" ,uploads.single('image') ,Ironingproducts )
 router.put("/Ironingsingle/:id",uploads.single('image'),Ironingupl)
 router.get("/Ironingsingle/:id" ,Ironingsiglget)

 router.post("/Loundryproducts" ,uploads.single('image') ,Loundryproducts )
 router.put("/Loundrysingle/:id",uploads.single('image'),Loundryupl)
 router.get("/Loundrysingle/:id" ,Loundrysiglget)

 router.post("/Batteriesproducts" ,uploads.single('image') ,Batteriesproducts )
 router.put("/Batteriessingle/:id",uploads.single('image'),Batteriesupl)
 router.get("/Batteriessingle/:id" ,Batteriessiglget)

 router.post("/Phoneproducts" ,uploads.single('image') ,Phoneproducts )
 router.put("/Phonesingle/:id",uploads.single('image'),Phoneupl)
 router.get("/Phonesingle/:id" ,Phonesiglget)
 
 router.post("/Obsticlproducts" ,uploads.single('image') ,Obstocilproducts )
 router.put("/Obsticlsingle/:id",uploads.single('image'),Obstocilupl)
 router.get("/Obsticlsingle/:id" ,Obstocilsiglget)
 
 router.post("/Electricproducts" ,uploads.single('image') ,Electricproducts )
 router.put("/Electricsingle/:id",uploads.single('image'),Electricupl)
 router.get("/Electricsingle/:id" ,Electricsiglget)
 
 router.post("/Firstaidproducts" ,uploads.single('image') ,Firstaidproducts )
 router.put("/Firstaidsingle/:id",uploads.single('image'),Firstaidupl)
 router.get("/Firstaidsingle/:id" ,Firstaidsiglget)
 
 router.post("/Apronsproducts" ,uploads.single('image') ,Apronsproducts)
 router.put("/Apronssingle/:id",uploads.single('image'),Apronsupl)
 router.get("/Apronssingle/:id" ,Apronssiglget)

 router.post("/Beddingproducts" ,uploads.single('image') ,Beddingproducts)
 router.put("/Beddingsingle/:id",uploads.single('image'),Beddingupl)
 router.get("/Beddingsingle/:id" ,Beddingsiglget)
 
 router.post("/Clothingproducts" ,uploads.single('image') ,Clothingproducts)
 router.put("/Clothingsingle/:id",uploads.single('image'),Clothingupl)
 router.get("/Clothingsingle/:id" ,Clothingsiglget)
 
 router.post("/Freshnerproducts" ,uploads.single('image') ,Freshnerproducts)
 router.put("/Freshnersingle/:id",uploads.single('image'),Freshnerupl)
 router.get("/Freshnersingle/:id" ,Freshnersiglget)

 router.post("/aknobolproducts" ,uploads.single('image') ,Akonbolproducts)
 router.put("/aknobolsingle/:id",uploads.single('image'),Akonbolupl)
 router.get("/aknobolsingle/:id" ,Akonbolsiglget)
 
 router.post("/Clockproducts" ,uploads.single('image') ,Clockproducts)
 router.put("/Clocksingle/:id",uploads.single('image'),Clockupl)
 router.get("/Clocksingle/:id" ,Clocksiglget)
 
 router.post("/digitalproducts" ,uploads.single('image') ,Digitalproducts)
 router.put("/digitalsingle/:id",uploads.single('image'),Digitalupl)
 router.get("/digitalsingle/:id" ,Digitalsiglget)
 
 router.post("/Crockeryproducts" ,uploads.single('image') ,Crockeryproducts)
 router.put("/Crockerysingle/:id",uploads.single('image'),Crockeryupl)
 router.get("/Crockerysingle/:id" ,Crockerysiglget)

 router.post("/Crockeryproducts" ,uploads.single('image') ,Crockeryproducts)
 router.put("/Crockerysingle/:id",uploads.single('image'),Crockeryupl)
 router.get("/Crockerysingle/:id" ,Crockerysiglget)

 router.post("/dinnerproducts" ,uploads.single('image') ,Dinnerproducts)
 router.put("/dinnersingle/:id",uploads.single('image'),Dinnerupl)
 router.get("/dinnersingle/:id" ,Drinksiglget)
 
 router.post("/rentokilproducts" ,uploads.single('image') ,Rentokilproducts)
 router.put("/rentokilsingle/:id",uploads.single('image'),Rentokilupl)
 router.get("/rentokilsingle/:id" ,Rentokilsiglget)

 router.post("/stvproducts" ,uploads.single('image') ,Stvproducts)
 router.put("/stvsingle/:id",uploads.single('image'),Stvupl)
 router.get("/stvsingle/:id" ,Stvsiglget)
 
 router.post("/cottonproducts" ,uploads.single('image') ,Cottonproducts)
 router.put("/cottonsingle/:id",uploads.single('image'),Cottonupl)
 router.get("/cottonsingle/:id" ,Cottonsingl)
 
 router.post("/babyproducts" ,uploads.single('image') ,Babyproducts)
 router.put("/babysingle/:id",uploads.single('image'),Babyupl)
 router.get("/babysingle/:id" ,Babysingl)
 
 router.post("/freshnproducts" ,uploads.single('image') ,Freshproducts)
 router.put("/freshnsingle/:id",uploads.single('image'),Freshupl)
 router.get("/freshnsingle/:id" ,Freshnsingl)
 
 router.post("/carproducts" ,uploads.single('image') , Carproducts)
 router.put("/carsingle/:id",uploads.single('image'),Carupl)
 router.get("/carsingle/:id" ,Carsingl)

 router.post("/bleechproducts" ,uploads.single('image') ,Bleechproducts)
 router.put("/bleechsingle/:id",uploads.single('image'),Bleechupl)
 router.get("/bleechsingle/:id" ,Bleechsingl)
 
 router.post("/bakewareproducts" ,uploads.single('image') ,Bakewareproducts)
 router.put("/bakewaresingle/:id",uploads.single('image'),Bakewareupl)
 router.get("/bakewaresingle/:id" ,Bakewaresingl)
 
 router.post("/barewareproducts" ,uploads.single('image') ,Barewareproducts)
 router.put("/barewaresingle/:id",uploads.single('image'),Barewareupl)
 router.get("/barewaresingle/:id" ,Barewaresingl)
 
 router.post("/birdsproducts" ,uploads.single('image') ,Birdsproducts)
 router.put("/birdssingle/:id",uploads.single('image'),Birdsupl)
 router.get("/birdssingle/:id" ,Birdssingl)
 
 router.post("/catproducts" ,uploads.single('image') , Catproducts)
 router.put("/catsingle/:id",uploads.single('image'),Catupl)
 router.get("/catsingle/:id" , Catsingl)
 
 router.post("/babeyproducts" ,uploads.single('image') , Babeyproducts)
 router.put("/babeysingle/:id",uploads.single('image'),Babeyupl)
 router.get("/babeysingle/:id" , Babeysingl)
 
 router.post("/kidsproducts" ,uploads.single('image') , Kidsproducts)
 router.put("/kidssingle/:id",uploads.single('image'), Kidsupl)
 router.get("/kidssingle/:id" , Kidsssingl)
 
 router.post("/bbqproducts" ,uploads.single('image') , BBqproducts)
 router.put("/bbqsingle/:id",uploads.single('image'), BBqupl)
 router.get("/bbqsingle/:id" , BBqsingl)
 
 router.post("/birdcareproducts" ,uploads.single('image') , Birdcareproducts)
 router.put("/birdcaresingle/:id",uploads.single('image'), Birdcareupl)
 router.get("/birdcaresingle/:id" , Birdcaresingl)
 
 router.post("/baloonproducts" ,uploads.single('image') , Baloonproducts)
 router.put("/baloonsingle/:id",uploads.single('image'), Baloonupl)
 router.get("/baloonsingle/:id" , Baloonsingl)
 
 router.post("/pumpsproducts" ,uploads.single('image') , Pumpsproducts)
 router.put("/pumpssingle/:id",uploads.single('image'), Pumpsupl)
 router.get("/pumpssingle/:id" , Pumpssingl)
 
 router.post("/pumpsproducts" ,uploads.single('image') , Pumpsproducts)
 router.put("/pumpssingle/:id",uploads.single('image'), Pumpsupl)
 router.get("/pumpssingle/:id" , Pumpssingl)
 
 router.post("/bannerproducts" ,uploads.single('image') , Bannerproducts)
 router.put("/bannersingle/:id",uploads.single('image'), Bannerupl)
 router.get("/bannersingle/:id" , Bannersingl)
 
 router.post("/crystalproducts" ,uploads.single('image') , Crystalproducts)
 router.put("/crystalsingle/:id",uploads.single('image'), Crystalupl)
 router.get("/crystalsingle/:id" , Crystalsingl)

 router.post("/cakesproducts" ,uploads.single('image') , Cakesproducts)
 router.put("/cakessingle/:id",uploads.single('image'), Cakesupl)
 router.get("/cakessingle/:id" , Cakessingl)
 
 router.post("/furnitureproducts" ,uploads.single('image') , Furnitureproducts)
 router.put("/furnituresingle/:id",uploads.single('image'), Furnitureupl)
 router.get("/furnituresingle/:id" , Furnituresingl)
 
 router.post("/furnitureproducts" ,uploads.single('image') , Furnitureproducts)
 router.put("/furnituresingle/:id",uploads.single('image'), Furnitureupl)
 router.get("/furnituresingle/:id" , Furnituresingl)
 
 router.post("/candelproducts" ,uploads.single('image') , Candelproducts)
 router.put("/candelsingle/:id",uploads.single('image'), Candelupl)
 router.get("/candelsingle/:id" ,Candelsingl)
 
 router.post("/candelproducts" ,uploads.single('image') , Candelproducts)
 router.put("/candelsingle/:id",uploads.single('image'), Candelupl)
 router.get("/candelsingle/:id" ,Candelsingl)
 
 router.post("/stproducts" ,uploads.single('image') , Stproducts)
 router.put("/stsingle/:id",uploads.single('image'), Stupl)
 router.get("/stsingle/:id" ,Stsiglget)
 
 router.post("/stproducts" ,uploads.single('image') , Stproducts)
 router.put("/stsingle/:id",uploads.single('image'), Stupl)
 router.get("/stsingle/:id" ,Stsiglget)
 
 router.post("/foodconproducts" ,uploads.single('image') , Foodconproducts)
 router.put("/foodconsingle/:id",uploads.single('image'), Foodconupl)
 router.get("/foodconsingle/:id" ,Foodconsingl)
 
 router.post("/kidsplasproducts" ,uploads.single('image') , kidsplasproducts)
 router.put("/kidsplassingle/:id",uploads.single('image'), kidsplasupl)
 router.get("/kidsplassingle/:id" ,kidsplassingl)
 
 router.post("/sportproducts" ,uploads.single('image') , Sportsproducts)
 router.put("/sportsingle/:id",uploads.single('image'), Sportsupl)
 router.get("/sportsingle/:id" ,Sportssingl)
 
 router.post("/artcraftproducts" ,uploads.single('image') , Artcraftproducts)
 router.put("/artcraftsingle/:id",uploads.single('image'), Artcraftupl)
 router.get("/artcraftsingle/:id" ,Artcraftsingl)
 
 router.post("/booksproducts" ,uploads.single('image') , Booksproducts)
 router.put("/bookssingle/:id",uploads.single('image'), Booksupl)
 router.get("/bookssingle/:id" ,Bookssingl)
 
 router.post("/brushwareproducts" ,uploads.single('image') , Brushwareproducts)
 router.put("/brushwaresingle/:id",uploads.single('image'), Brushwareupl)
 router.get("/brushwaresingle/:id" ,Brushwaresingl)
 
 router.post("/brushwareproducts" ,uploads.single('image') , Brushwareproducts)
 router.put("/brushwaresingle/:id",uploads.single('image'), Brushwareupl)
 router.get("/brushwaresingle/:id" ,Brushwaresingl)
  
 router.post("/dusterproducts" ,uploads.single('image') , Dusterproducts)
 router.put("/dustersingle/:id",uploads.single('image'), Dusterupl)
 router.get("/dustersingle/:id" ,Dustersingl)
 
 router.post("/artificalproducts" ,uploads.single('image') , Artificalproducts)
 router.put("/artificalsingle/:id",uploads.single('image'), Artificalupl)
 router.get("/artificalsingle/:id" ,Artificalsingl)
 
 router.post("/bouquetproducts" ,uploads.single('image') , Bouquetsproducts)
 router.put("/bouquetsingle/:id",uploads.single('image'), Bouquetsupl)
 router.get("/bouquetsingle/:id" , Bouquetssingl)

 router.post("/diytoolsproducts" ,uploads.single('image') , Diytoolsproducts)
 router.put("/diytoolssingle/:id",uploads.single('image'), Diytoolsupl)
 router.get("/diytoolssingle/:id" , Diytoolssingl)
 
 router.post("/disposiblproducts" ,uploads.single('image') , Disposiblproducts)
 router.put("/disposiblsingle/:id",uploads.single('image'), Disposiblsupl)
 router.get("/disposiblsingle/:id" , Disposiblsiglget)
 
 router.post("/craftproducts" ,uploads.single('image') , Craftpoproducts)
 router.put("/craftsingle/:id",uploads.single('image'), Craftpoupl)
 router.get("/craftsingle/:id" , Craftposingl)
 
 router.post("/carpoproducts" ,uploads.single('image') , Carpoproducts)
 router.put("/carposingle/:id",uploads.single('image'), Carpoupl)
 router.get("/carposingle/:id" ,Carposingl)
 
 router.post("/candelesproducts" ,uploads.single('image') , Candelesproducts)
 router.put("/candelessingle/:id",uploads.single('image'), Candelesupl)
 router.get("/candelessingle/:id" ,Candelessiglget)
 
 router.post("/foodpoproducts" ,uploads.single('image') , Foodpoproducts)
 router.put("/foodposingle/:id",uploads.single('image'), Foodpoupl)
 router.get("/foodposingle/:id" , Foodposiglget)
 
 router.post("/shoeproducts" ,uploads.single('image') , Shoeproducts)
 router.put("/shoesingle/:id",uploads.single('image'), Shoeupl)
 router.get("/shoesingle/:id" , Shoesingl)

 router.post("/stationproducts" ,uploads.single('image') , Stationeryproducts)
 router.put("/stationsingle/:id",uploads.single('image'), Stationeryupl)
 router.get("/stationsingle/:id" , Stationeysingl)
 
 router.post("/potoyproducts" ,uploads.single('image') , Potoyproducts)
 router.put("/potoysingle/:id",uploads.single('image'), Potoyupl)
 router.get("/potoysingle/:id" , Potoysiglget)
 
 router.post("/pestconproducts" ,uploads.single('image') , Pestconproducts)
 router.put("/pestconsingle/:id",uploads.single('image'), Pestconupl)
 router.get("/pestconsingle/:id" , Pestconsingl)
 
 router.post("/lightergasproducts" ,uploads.single('image') , Lightergasproducts)
 router.put("/lightergassingle/:id",uploads.single('image'), Lightergasupl)
 router.get("/lightergassingle/:id" , Lightergassingl)
 
 router.post("/londryironproducts" ,uploads.single('image') , Loundryironproducts)
 router.put("/londryironsingle/:id",uploads.single('image'), Loundryironupl)
 router.get("/londryironsingle/:id" , Loundryironsingl)
 export default router
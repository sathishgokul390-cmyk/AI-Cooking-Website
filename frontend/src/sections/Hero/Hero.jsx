// import { useState, useMemo } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Clock3, Star, Heart, Sparkles, ArrowRight, Search, Flame, ChevronRight } from "lucide-react";

// import AiCookingBanner from "../../assets/images/Ai_cooking_image.png";
// import breakfast from "../../assets/images/breakfast.avif";
// import lunch from "../../assets/images/lunch.avif";
// import dinner from "../../assets/images/dinner.avif";
// import dessert from "../../assets/images/deserts.avif";
// import snackes from "../../assets/images/snacks.avif";
// import drink from "../../assets/images/drink.jpg";
// import chickenBriyani from "../../assets/images/chicken_biryani.avif";
// import pannerButterMasala from "../../assets/images/panner_butter_masala.avif";
// import chocolateLavaCake from "../../assets/images/chocolate_lava_cake.avif";
// import vegSandwich from "../../assets/images/veg_sandwich.avif";

// // Breakfast
// import FluffyPancakes from "../../assets/images/recipes/breakfast/fluffyPancakes.jpg";
// import AvocadoToast from "../../assets/images/recipes/breakfast/AvocadoToast.webp";
// import VegOmelette from "../../assets/images/recipes/breakfast/vegOmmelette.jpg";
// import SmoothieBowl from "../../assets/images/recipes/breakfast/SmoothieBowl.jpg";
// import ClassicIdli from "../../assets/images/recipes/breakfast/classicIdli.jpg";
// import ChocoloatePancakes from "../../assets/images/recipes/breakfast/chocolatePancake.jpg";
// import FrenchToast from "../../assets/images/recipes/breakfast/FrenchToast.jpg";
// import GranolaBowl from "../../assets/images/recipes/breakfast/granolaBowl.jpg";
// import EggBenedict from "../../assets/images/recipes/breakfast/EggBenedict.jpg";
// import BananaWaffles from "../../assets/images/recipes/breakfast/BananaWaffles.jpg";
// import Poha from "../../assets/images/recipes/breakfast/Poha.jpg";
// import Upma from "../../assets/images/recipes/breakfast/upma.jpg";
// import MasalaDosa from "../../assets/images/recipes/breakfast/MasalaDosa.jpg";
// import ChiaPudding from "../../assets/images/recipes/breakfast/ChiaPudding.jpg";
// import BlueberryMuffins from "../../assets/images/recipes/breakfast/BlueberryMuffins.jpg";
// import AcaiBowl from "../../assets/images/recipes/breakfast/AcaiBowl.jpg";
// import Shakshuka from "../../assets/images/recipes/breakfast/Shakshuka.webp";
// import OvernightOats from "../../assets/images/recipes/breakfast/OvernightOats.jpg";
// import PeanutButterToast from "../../assets/images/recipes/breakfast/PeanutButterToast.webp";
// import Crepes from "../../assets/images/recipes/breakfast/Crepes.jpg";
// import BreakfastBurrito from "../../assets/images/recipes/breakfast/BreakfastBurrito.jpg";
// import YogurtParfait from "../../assets/images/recipes/breakfast/YogurtParfait.jpg";
// import SpinachFrittata from "../../assets/images/recipes/breakfast/SpinachFrittata.jpg";
// import CinnamonRolls from "../../assets/images/recipes/breakfast/CinnamonRolls.jpg";
// import ProteinSmoothie from "../../assets/images/recipes/breakfast/Protein.jpg";

// // Lunch
// import ChickenBiryani from "../../assets/images/recipes/lunch/ChickenBiryani.avif";
// import MuttonBiryani from "../../assets/images/recipes/lunch/MuttonBiryani.jpg";
// import FishBiryani from "../../assets/images/recipes/lunch/FishBiryani.jpg";
// import EggBiryani from "../../assets/images/recipes/lunch/EggBiryani.jpg";
// import VegBiryani from "../../assets/images/recipes/lunch/VegBiryani.jpg";
// import FriedRice from "../../assets/images/recipes/lunch/FriedRice.jpg";
// import ChickenFriedRice from "../../assets/images/recipes/lunch/ChickenFriedRice.jpg";
// import SchezwanFriedRice from "../../assets/images/recipes/lunch/SchezwanFriedRice.avif";
// import JeeraRice from "../../assets/images/recipes/lunch/JeeraRice.jpg";
// import GheeRice from "../../assets/images/recipes/lunch/GheeRice.webp";
// import TomatoRice from "../../assets/images/recipes/lunch/TomatoRice.jpg";
// import LemonRice from "../../assets/images/recipes/lunch/LemonRice.jpg";
// import CoconutRice from "../../assets/images/recipes/lunch/CoconutRice.jpg";
// import SambarRice from "../../assets/images/recipes/lunch/SambarRice.jpg";
// import CurdRice from "../../assets/images/recipes/lunch/CurdRice.jpg";
// import Pulao from "../../assets/images/recipes/lunch/Pulao.jpg";
// import VegPulao from "../../assets/images/recipes/lunch/VegPulao.jpg";
// import MushroomRice from "../../assets/images/recipes/lunch/MushroomFriedRice.jpeg";
// import PaneerRice from "../../assets/images/recipes/lunch/PaneerRice.jpg";
// import Kuska from "../../assets/images/recipes/lunch/kuska.jpg";
// import ChickenCurry from "../../assets/images/recipes/lunch/ChickenCurry.jpg";
// import ButterChicken from "../../assets/images/recipes/lunch/ButterChicken.avif";
// import ChilliChicken from "../../assets/images/recipes/lunch/ChilliChicken.avif";
// import DragonChicken from "../../assets/images/recipes/lunch/DragonChicken.jpg";
// import Chicken65 from "../../assets/images/recipes/lunch/Chicken-65.jpg";
// import PepperChicken from "../../assets/images/recipes/lunch/PepperChicken.webp";
// import GrilledChicken from "../../assets/images/recipes/lunch/GrilledChicken.jpg";
// import TandooriChicken from "../../assets/images/recipes/lunch/TandooriChicken.jpg";
// import FishFry from "../../assets/images/recipes/lunch/FishFry.jpg";
// import PrawnFry from "../../assets/images/recipes/lunch/PrawnFry.jpg";
// import MuttonCurry from "../../assets/images/recipes/lunch/MuttonCurry.jpg";
// import EggCurry from "../../assets/images/recipes/lunch/EggCurry.jpg";
// import PannerButterMasala from "../../assets/images/recipes/lunch/PaneerButterMasala.jpg";
// import KadaiPaneer from "../../assets/images/recipes/lunch/KadaiPaneer.jpg";
// import GobiManchurian from "../../assets/images/recipes/lunch/GobiManchurian.jpg";
// import VegManchurian from "../../assets/images/recipes/lunch/VegManchurian.jpg";
// import MushroomPepperFry from "../../assets/images/recipes/lunch/MushroomPepperFry.webp";
// import DalTadka from "../../assets/images/recipes/lunch/DalTadka.webp";
// import DalMakhani from "../../assets/images/recipes/lunch/DalMakhani.jpg";
// import MixedVegetableCurry from "../../assets/images/recipes/lunch/MixedVegetableCurry.jpg";

// // Dinner
// import Idli from "../../assets/images/recipes/dinner/Idli.jpg";
// import PodiIdli from "../../assets/images/recipes/dinner/PodiIdli.jpg";
// import MiniIdliSambar from "../../assets/images/recipes/dinner/MiniIdliSambar.jpg";
// import Dosa from "../../assets/images/recipes/dinner/Dosa.jpg";
// import GheeDosa from "../../assets/images/recipes/dinner/GheeDosa.jpg";
// import SeafoodPaella from "../../assets/images/recipes/dinner/SeafoodPaella.jpg"
// import OnionDosa from "../../assets/images/recipes/dinner/OnionDosa.jpg";
// import KalDosa from "../../assets/images/recipes/dinner/KalDosa.jpg";
// import RavaDosa from "../../assets/images/recipes/dinner/RavaDosa.jpg";
// import SetDosa from "../../assets/images/recipes/dinner/SetDosa.webp";
// import Appam from "../../assets/images/recipes/dinner/Appam.jpg";
// import Idiyappam from "../../assets/images/recipes/dinner/Idiyappam.jpg";
// import Parotta from "../../assets/images/recipes/dinner/Parotta.jpg";
// import KothuParotta from "../../assets/images/recipes/dinner/KothuParotta.jpg";
// import Chapati from "../../assets/images/recipes/dinner/Chapati.jpg";
// import ButterNaan from "../../assets/images/recipes/dinner/ButterNaan.jpg";
// import GarlicNaan from "../../assets/images/recipes/dinner/GarlicNaan.jpg";
// import Poori from "../../assets/images/recipes/dinner/Poori.webp";
// import BeefWellington from "../../assets/images/recipes/dinner/BeefWellington.jpg";
// import LobsterThermidor from "../../assets/images/recipes/dinner/LobsterThermidor.jpg";
// import SalmonTeriyakiBowl from "../../assets/images/recipes/dinner/SalmonTeriyakiBowl.jpg";
// import TruffleMushroomRisotto from "../../assets/images/recipes/dinner/TruffleMushroomRisotto.jpg";
// import ChickenAlfredoPasta from "../../assets/images/recipes/dinner/ChickenAlfredoPasta.jpg";
// import ShrimpTacos from "../../assets/images/recipes/dinner/ShrimpTacos.jpg";
// import KoreanBBQBeef from "../../assets/images/recipes/dinner/KoreanBBQBeef.jpg";
// import PalakPaneer from "../../assets/images/recipes/dinner/PalakPaneer.jpg"
// import ThaiGreenCurry from "../../assets/images/recipes/dinner/ThaiGreenCurry.jpg";
// import SushiPlatter from "../../assets/images/recipes/dinner/SushiPlatter.jpg";
// import ChickenParmesan from "../../assets/images/recipes/dinner/ChickenParmesan.jpg";
// import MoroccanLambTagine from "../../assets/images/recipes/dinner/MoroccanLambTagine.jpg";
// import MediterraneanGrilledChicken from "../../assets/images/recipes/dinner/MediterraneanGrilledChicken.jpg";
// import StuffedBellPeppers from "../../assets/images/recipes/dinner/StuffedBellPeppers.jpg";
// import DuckConfit from "../../assets/images/recipes/dinner/DuckConfit.jpeg";
// import ChickenShawarma from "../../assets/images/recipes/dinner/ChickenShawarma.jpg";
// import FalafelWrap from "../../assets/images/recipes/dinner/FalafelWrap.jpg";
// import ChickenWrap from "../../assets/images/recipes/dinner/ChickenWrap.jpg";
// import VegWrap from "../../assets/images/recipes/dinner/VegWrap.jpg";
// import ChickenBurger from "../../assets/images/recipes/dinner/ChickenBurger.jpg";
// import CheeseBurger from "../../assets/images/recipes/dinner/CheeseBurger.webp";
// import VegBurger from "../../assets/images/recipes/dinner/VegBurger.webp";
// import ChickenPizza from "../../assets/images/recipes/dinner/ChickenPizza.jpg";
// import MargheritaPizza from "../../assets/images/recipes/dinner/MargheritaPizza.jpg";
// import WhiteSaucePasta from "../../assets/images/recipes/dinner/WhiteSaucePasta.jpg";
// import RedSaucePasta from "../../assets/images/recipes/dinner/RedSaucePasta.jpg";
// import AlfredoPasta from "../../assets/images/recipes/dinner/AlfredoPasta.jpg";
// import HakkaNoodles from "../../assets/images/recipes/dinner/HakkaNoodles.jpg";
// import SchezwanNoodles from "../../assets/images/recipes/dinner/SchezwanNoodles.jpg";
// import ChickenNoodles from "../../assets/images/recipes/dinner/ChickenNoodles.jpg";
// import JowarBhakriwithCurry from "../../assets/images/recipes/dinner/JowarBhakriwithCurry.jpg";
// import RagiMuddewithChicken from "../../assets/images/recipes/dinner/RagiMuddewithChicken.jpg";
// import AmritsariCholeKulche from "../../assets/images/recipes/dinner/AmritsariCholeKulche.jpg";
// import PathiriwithChickenCurry from "../../assets/images/recipes/dinner/PathiriwithChickenCurry.webp";
// import NeerDosa from "../../assets/images/recipes/dinner/NeerDosa.jpg";
// import LittiChokha from "../../assets/images/recipes/dinner/LittiChokha.avif";
// import VanjaramFishFry from "../../assets/images/recipes/dinner/VanjaramFishFry.jpg";
// import RajmaChawal from "../../assets/images/recipes/dinner/RajmaChawal.jpg";
// import VegJalfrezi from "../../assets/images/recipes/dinner/VegJalfrezi.jpg";
// import TandooriRotiwithDalFry from "../../assets/images/recipes/dinner/TandooriRotiwithDalFry.jpg";
// import AlooParatha from "../../assets/images/recipes/dinner/AlooParatha.jpg";
// import MaduraiKariDosa from "../../assets/images/recipes/dinner/MaduraiKariDosa.webp";

// // Desserts
// import ChocolateLavaCake from "../../assets/images/recipes/desserts/ChocolateLavaCake.jpg";
// import Tiramisu from "../../assets/images/recipes/desserts/Tiramisu.jpg";
// import Cheesecake from "../../assets/images/recipes/desserts/Cheesecake.jpg";
// import BrownieSundae from "../../assets/images/recipes/desserts/BrownieSundae.jpg";
// import RedVelvetCake from "../../assets/images/recipes/desserts/RedVelvetCake.webp";
// import ApplePie from "../../assets/images/recipes/desserts/ApplePie.jpg";
// import GulabJamun from "../../assets/images/recipes/desserts/GulabJamun.jpg";
// import Rasmalai from "../../assets/images/recipes/desserts/Rasmalai.jpg";
// import CarrotCake from "../../assets/images/recipes/desserts/CarrotCake.jpg";
// import BlackForestCake from "../../assets/images/recipes/desserts/BlackForestCake.webp";
// import IceCreamSundae from "../../assets/images/recipes/desserts/IceCreamSundae.jpg";
// import MangoMousse from "../../assets/images/recipes/desserts/MangoMousse.jpeg";
// import Donuts from "../../assets/images/recipes/desserts/Donuts.webp";
// import Macarons from "../../assets/images/recipes/desserts/Macarons.jpg";
// import Churros from "../../assets/images/recipes/desserts/Churros.jpg";
// import PannaCotta from "../../assets/images/recipes/desserts/PannaCotta.jpg";
// import CremeBrulee from "../../assets/images/recipes/desserts/CremeBrulee.jpg";
// import BananaSplit from "../../assets/images/recipes/desserts/BananaSplit.jpg";
// import LemonTart from "../../assets/images/recipes/desserts/LemonTart.webp";
// import StrawberryShortcake from "../../assets/images/recipes/desserts/StrawberryShortcake.jpg";
// import BreadPudding from "../../assets/images/recipes/desserts/BreadPudding.jpg";
// import CoconutLadoo from "../../assets/images/recipes/desserts/CoconutLadoo.jpg";
// import KajuKatli from "../../assets/images/recipes/desserts/KajuKatli.webp";
// import Jalebi from "../../assets/images/recipes/desserts/Jalebi.avif";
// import MoongDalHalwa from "../../assets/images/recipes/desserts/MoongDalHalwa.jpg";
// import GajarHalwa from "../../assets/images/recipes/desserts/GajarHalwa.jpg";
// import Kulfi from "../../assets/images/recipes/desserts/Kulfi.avif";
// import Falooda from "../../assets/images/recipes/desserts/Falooda.jpg";
// import RiceKheer from "../../assets/images/recipes/desserts/RiceKheer.jpg";
// import ShahiTukda from "../../assets/images/recipes/desserts/ShahiTukda.jpg";

// // Snacks
// import Samosa from "../../assets/images/recipes/snacks/Samosa.jpg";
// import VegPuff from "../../assets/images/recipes/snacks/VegPuff.jpg";
// import ChickenPuff from "../../assets/images/recipes/snacks/ChickenPuff.jpg";
// import SpringRolls from "../../assets/images/recipes/snacks/SpringRolls.jpg";
// import FrenchFries from "../../assets/images/recipes/snacks/FrenchFries.jpg";
// import OnionRings from "../../assets/images/recipes/snacks/OnionRings.jpg";
// import Nachos from "../../assets/images/recipes/snacks/Nachos.jpg";
// import Popcorn from "../../assets/images/recipes/snacks/Popcorn.jpg";
// import GarlicBread from "../../assets/images/recipes/snacks/GarlicBread.jpg";
// import MozzarellaSticks from "../../assets/images/recipes/snacks/MozzarellaSticks.jpg";
// import ChickenWings from "../../assets/images/recipes/snacks/ChickenWings.jpg";
// import ChickenNuggets from "../../assets/images/recipes/snacks/ChickenNuggets.avif";
// import FishFingers from "../../assets/images/recipes/snacks/FishFingers.jpg";
// import PaneerTikka from "../../assets/images/recipes/snacks/PaneerTikka.jpg";
// import AlooTikki from "../../assets/images/recipes/snacks/AlooTikki.jpg";
// import BhelPuri from "../../assets/images/recipes/snacks/BhelPuri.jpg";
// import PaniPuri from "../../assets/images/recipes/snacks/PaniPuri.jpg";
// import SevPuri from "../../assets/images/recipes/snacks/SevPuri.jpg";
// import DahiPuri from "../../assets/images/recipes/snacks/DahiPuri.webp";
// import VadaPav from "../../assets/images/recipes/snacks/VadaPav.avif";
// import PavBhaji from "../../assets/images/recipes/snacks/PavBhaji.jpg";
// import MasalaCorn from "../../assets/images/recipes/snacks/MasalaCorn.jpg";
// import Murukku from "../../assets/images/recipes/snacks/Murukku.jpg";
// import Mixture from "../../assets/images/recipes/snacks/Mixture.jpg";
// import BananaChips from "../../assets/images/recipes/snacks/BananaChips.jpg";
// import PotatoChips from "../../assets/images/recipes/snacks/PotatoChips.jpg";
// import CheeseBalls from "../../assets/images/recipes/snacks/CheeseBalls.jpg";
// import BreadPakora from "../../assets/images/recipes/snacks/BreadPakora.jpg";
// import VegCutlet from "../../assets/images/recipes/snacks/VegCutlet.webp";
// import MeduVada from "../../assets/images/recipes/snacks/MeduVada.webp";
// import CornChaat from "../../assets/images/recipes/snacks/CornChaat.jpg";
// import Momos from "../../assets/images/recipes/snacks/Momos.jpg";
// import PaneerPakora from "../../assets/images/recipes/snacks/PaneerPakora.avif";
// import ChickenSandwich from "../../assets/images/recipes/snacks/ChickenSandwich.jpg";
// import PeriPeriFries from "../../assets/images/recipes/snacks/PeriPeriFries.jpg";


// // Drinks
// import MangoSmoothie from "../../assets/images/recipes/drinks/MangoSmoothie.jpg";
// import StrawberryMilkshake from "../../assets/images/recipes/drinks/StrawberryMilkshake.webp";
// import ChocolateMilkshake from "../../assets/images/recipes/drinks/ChocolateMilkshake.jpg";
// import VanillaMilkshake from "../../assets/images/recipes/drinks/VanillaMilkshake.png";
// import BananaSmoothie from "../../assets/images/recipes/drinks/BananaSmoothie.webp";
// import OreoShake from "../../assets/images/recipes/drinks/OreoShake.jpg";
// import ColdCoffee from "../../assets/images/recipes/drinks/ColdCoffee.jpg";
// import IcedLatte from "../../assets/images/recipes/drinks/IcedLatte.jpg";
// import Cappuccino from "../../assets/images/recipes/drinks/Cappuccino.jpg";
// import MochaCoffee from "../../assets/images/recipes/drinks/MochaCoffee.jpg";
// import LemonJuice from "../../assets/images/recipes/drinks/LemonJuice.webp";
// import OrangeJuice from "../../assets/images/recipes/drinks/OrangeJuice.jpg";
// import WatermelonJuice from "../../assets/images/recipes/drinks/WatermelonJuice.jpg";
// import PineappleJuice from "../../assets/images/recipes/drinks/PineappleJuice.jpg";
// import AppleJuice from "../../assets/images/recipes/drinks/AppleJuice.jpg";
// import Mojito from "../../assets/images/recipes/drinks/Mojito.jpg";
// import BlueLagoon from "../../assets/images/recipes/drinks/BlueLagoon.jpg";
// import VirginMargarita from "../../assets/images/recipes/drinks/VirginMargarita.jpg";
// import MintLimeCooler from "../../assets/images/recipes/drinks/MintLimeCooler.jpg";
// import FruitPunch from "../../assets/images/recipes/drinks/FruitPunch.jpg";
// import RoseMilk from "../../assets/images/recipes/drinks/RoseMilk.jpg";
// import BadamMilk from "../../assets/images/recipes/drinks/BadamMilk.jpg";
// import MasalaChai from "../../assets/images/recipes/drinks/MasalaChai.jpg";
// import GreenTea from "../../assets/images/recipes/drinks/GreenTea.jpg";
// import HotChocolate from "../../assets/images/recipes/drinks/HotChocolate.jpg";

// // ─── Data ────────────────────────────────────────────────────────────────────

// const categories = [
//   { title: "Breakfast", recipes: "25 Recipes", image: breakfast },
//   { title: "Lunch", recipes: "40 Recipes", image: lunch },
//   { title: "Dinner", recipes: "60 Recipes", image: dinner },
//   { title: "Desserts", recipes: "40 Recipes", image: dessert },
//   { title: "Snacks", recipes: "35 Recipes", image: snackes },
//   { title: "Drinks", recipes: "20 Recipes", image: drink },
// ];

// // ─── Per-category dish data ──────────────────────────────────────────────────
// const categoryDishes = {

//   Breakfast: [
//     { title: "Fluffy Pancakes", time: "20 min", rating: 4.8, calories: 380, price: 8.99, difficulty: "Easy", image: FluffyPancakes },
//     { title: "Avocado Toast", time: "10 min", rating: 4.7, calories: 290, price: 7.49, difficulty: "Easy", image: AvocadoToast },
//     { title: "Veggie Omelette", time: "15 min", rating: 4.6, calories: 310, price: 6.99, difficulty: "Easy", image: VegOmelette },
//     { title: "Smoothie Bowl", time: "10 min", rating: 4.9, calories: 260, price: 9.49, difficulty: "Easy", image: SmoothieBowl },
//     { title: "Classic Idli", time: "30 min", rating: 4.5, calories: 200, price: 5.99, difficulty: "Medium", image: ClassicIdli },
//     { title: "Chocolate Pancakes", time: "25 min", rating: 4.8, calories: 420, price: 10.49, difficulty: "Easy", image: ChocoloatePancakes },
//     { title: "French Toast", time: "15 min", rating: 4.7, calories: 350, price: 7.99, difficulty: "Easy", image: FrenchToast },
//     { title: "Granola Bowl", time: "5 min", rating: 4.6, calories: 320, price: 6.49, difficulty: "Easy", image: GranolaBowl },
//     { title: "Egg Benedict", time: "25 min", rating: 4.8, calories: 410, price: 11.99, difficulty: "Medium", image: EggBenedict },
//     { title: "Banana Waffles", time: "20 min", rating: 4.7, calories: 390, price: 9.99, difficulty: "Easy", image: BananaWaffles },
//     { title: "Poha", time: "15 min", rating: 4.5, calories: 240, price: 4.99, difficulty: "Easy", image: Poha },
//     { title: "Upma", time: "20 min", rating: 4.4, calories: 260, price: 4.49, difficulty: "Easy", image: Upma },
//     { title: "Masala Dosa", time: "35 min", rating: 4.9, calories: 340, price: 7.99, difficulty: "Medium", image: MasalaDosa },
//     { title: "Chia Pudding", time: "5 min", rating: 4.6, calories: 210, price: 6.99, difficulty: "Easy", image: ChiaPudding },
//     { title: "Blueberry Muffins", time: "30 min", rating: 4.7, calories: 360, price: 5.99, difficulty: "Easy", image: BlueberryMuffins },
//     { title: "Acai Bowl", time: "10 min", rating: 4.8, calories: 280, price: 10.99, difficulty: "Easy", image: AcaiBowl },
//     { title: "Shakshuka", time: "25 min", rating: 4.7, calories: 330, price: 8.49, difficulty: "Medium", image: Shakshuka },
//     { title: "Overnight Oats", time: "5 min", rating: 4.6, calories: 300, price: 5.49, difficulty: "Easy", image: OvernightOats },
//     { title: "Peanut Butter Toast", time: "5 min", rating: 4.5, calories: 340, price: 4.99, difficulty: "Easy", image: PeanutButterToast },
//     { title: "Crepes", time: "20 min", rating: 4.8, calories: 310, price: 8.99, difficulty: "Medium", image: Crepes },
//     { title: "Breakfast Burrito", time: "20 min", rating: 4.6, calories: 480, price: 9.49, difficulty: "Easy", image: BreakfastBurrito },
//     { title: "Yogurt Parfait", time: "5 min", rating: 4.7, calories: 220, price: 5.99, difficulty: "Easy", image: YogurtParfait },
//     { title: "Spinach Frittata", time: "25 min", rating: 4.5, calories: 290, price: 7.99, difficulty: "Medium", image: SpinachFrittata },
//     { title: "Cinnamon Rolls", time: "45 min", rating: 4.9, calories: 520, price: 11.49, difficulty: "Hard", image: CinnamonRolls },
//     { title: "Protein Smoothie", time: "5 min", rating: 4.6, calories: 240, price: 6.49, difficulty: "Easy", image: ProteinSmoothie },
//   ],
//   Lunch: [
//     { title: "Chicken Biryani", time: "30 min", rating: 4.7, calories: 450, price: 11.99, difficulty: "Medium", image: ChickenBiryani },
//     { title: "Mutton Biryani", time: "45 min", rating: 4.8, calories: 520, price: 14.99, difficulty: "Hard", image: MuttonBiryani },
//     { title: "Fish Biryani", time: "35 min", rating: 4.6, calories: 400, price: 13.49, difficulty: "Medium", image: FishBiryani },
//     { title: "Egg Biryani", time: "25 min", rating: 4.5, calories: 380, price: 9.99, difficulty: "Easy", image: EggBiryani },
//     { title: "Veg Biryani", time: "25 min", rating: 4.5, calories: 350, price: 8.99, difficulty: "Easy", image: VegBiryani },
//     { title: "Fried Rice", time: "20 min", rating: 4.4, calories: 340, price: 7.99, difficulty: "Easy", image: FriedRice },
//     { title: "Chicken Fried Rice", time: "25 min", rating: 4.6, calories: 420, price: 10.49, difficulty: "Medium", image: ChickenFriedRice },
//     { title: "Schezwan Fried Rice", time: "25 min", rating: 4.6, calories: 430, price: 10.99, difficulty: "Medium", image: SchezwanFriedRice },
//     { title: "Jeera Rice", time: "15 min", rating: 4.4, calories: 280, price: 5.99, difficulty: "Easy", image: JeeraRice },
//     { title: "Ghee Rice", time: "20 min", rating: 4.5, calories: 320, price: 6.99, difficulty: "Easy", image: GheeRice },
//     { title: "Tomato Rice", time: "20 min", rating: 4.4, calories: 300, price: 6.49, difficulty: "Easy", image: TomatoRice },
//     { title: "Lemon Rice", time: "15 min", rating: 4.5, calories: 290, price: 5.99, difficulty: "Easy", image: LemonRice },
//     { title: "Coconut Rice", time: "15 min", rating: 4.4, calories: 310, price: 6.49, difficulty: "Easy", image: CoconutRice },
//     { title: "Sambar Rice", time: "30 min", rating: 4.6, calories: 350, price: 7.49, difficulty: "Medium", image: SambarRice },
//     { title: "Curd Rice", time: "10 min", rating: 4.5, calories: 250, price: 4.99, difficulty: "Easy", image: CurdRice },
//     { title: "Pulao", time: "25 min", rating: 4.5, calories: 330, price: 7.99, difficulty: "Easy", image: Pulao },
//     { title: "Veg Pulao", time: "25 min", rating: 4.5, calories: 340, price: 7.99, difficulty: "Easy", image: VegPulao },
//     { title: "Mushroom Rice", time: "20 min", rating: 4.5, calories: 320, price: 8.49, difficulty: "Easy", image: MushroomRice },
//     { title: "Paneer Rice", time: "20 min", rating: 4.6, calories: 390, price: 9.99, difficulty: "Medium", image: PaneerRice },
//     { title: "Kuska", time: "20 min", rating: 4.4, calories: 300, price: 6.99, difficulty: "Easy", image: Kuska },
//     { title: "Chicken Curry", time: "35 min", rating: 4.6, calories: 380, price: 10.99, difficulty: "Medium", image: ChickenCurry },
//     { title: "Butter Chicken", time: "40 min", rating: 4.8, calories: 480, price: 13.99, difficulty: "Hard", image: ButterChicken },
//     { title: "Chilli Chicken", time: "25 min", rating: 4.6, calories: 420, price: 11.49, difficulty: "Medium", image: ChilliChicken },
//     { title: "Dragon Chicken", time: "30 min", rating: 4.6, calories: 450, price: 12.49, difficulty: "Medium", image: DragonChicken },
//     { title: "Chicken 65", time: "25 min", rating: 4.7, calories: 430, price: 11.99, difficulty: "Medium", image: Chicken65 },
//     { title: "Pepper Chicken", time: "30 min", rating: 4.5, calories: 390, price: 11.49, difficulty: "Medium", image: PepperChicken },
//     { title: "Grilled Chicken", time: "35 min", rating: 4.7, calories: 350, price: 12.99, difficulty: "Medium", image: GrilledChicken },
//     { title: "Tandoori Chicken", time: "40 min", rating: 4.8, calories: 370, price: 13.49, difficulty: "Hard", image: TandooriChicken },
//     { title: "Fish Fry", time: "20 min", rating: 4.5, calories: 300, price: 9.99, difficulty: "Easy", image: FishFry },
//     { title: "Prawn Fry", time: "20 min", rating: 4.6, calories: 320, price: 12.99, difficulty: "Easy", image: PrawnFry },
//     { title: "Mutton Curry", time: "50 min", rating: 4.7, calories: 500, price: 15.99, difficulty: "Hard", image: MuttonCurry },
//     { title: "Egg Curry", time: "20 min", rating: 4.4, calories: 280, price: 7.99, difficulty: "Easy", image: EggCurry },
//     { title: "Paneer Butter Masala", time: "25 min", rating: 4.8, calories: 420, price: 12.49, difficulty: "Medium", image: PannerButterMasala },
//     { title: "Kadai Paneer", time: "25 min", rating: 4.7, calories: 390, price: 11.99, difficulty: "Medium", image: KadaiPaneer },
//     { title: "Gobi Manchurian", time: "20 min", rating: 4.5, calories: 310, price: 8.49, difficulty: "Easy", image: GobiManchurian },
//     { title: "Veg Manchurian", time: "20 min", rating: 4.4, calories: 300, price: 7.99, difficulty: "Easy", image: VegManchurian },
//     { title: "Mushroom Pepper Fry", time: "20 min", rating: 4.5, calories: 260, price: 8.99, difficulty: "Easy", image: MushroomPepperFry },
//     { title: "Dal Tadka", time: "25 min", rating: 4.5, calories: 240, price: 6.99, difficulty: "Easy", image: DalTadka },
//     { title: "Dal Makhani", time: "40 min", rating: 4.7, calories: 350, price: 9.99, difficulty: "Medium", image: DalMakhani },
//     { title: "Mixed Vegetable Curry", time: "25 min", rating: 4.4, calories: 230, price: 7.49, difficulty: "Easy", image: MixedVegetableCurry },
//   ],
//   Dinner: [
//     { title: "Idli", time: "15 min", rating: 4.5, calories: 120, price: 3.99, difficulty: "Easy", image: Idli },
//     { title: "Podi Idli", time: "20 min", rating: 4.5, calories: 220, price: 4.99, difficulty: "Easy", image: PodiIdli },
//     { title: "Mini Idli Sambar", time: "20 min", rating: 4.6, calories: 250, price: 5.49, difficulty: "Easy", image: MiniIdliSambar },
//     { title: "Dosa", time: "20 min", rating: 4.6, calories: 150, price: 4.49, difficulty: "Easy", image: Dosa },
//     { title: "Ghee Dosa", time: "20 min", rating: 4.6, calories: 220, price: 5.49, difficulty: "Easy", image: GheeDosa },
//     { title: "Seafood Paella", time: "55 min", rating: 4.8, calories: 640, price: 28.99, difficulty: "Hard", image: SeafoodPaella },
//     { title: "Onion Dosa", time: "25 min", rating: 4.5, calories: 260, price: 5.99, difficulty: "Easy", image: OnionDosa },
//     { title: "Kal Dosa", time: "20 min", rating: 4.4, calories: 200, price: 4.99, difficulty: "Easy", image: KalDosa },
//     { title: "Rava Dosa", time: "25 min", rating: 4.6, calories: 280, price: 6.49, difficulty: "Medium", image: RavaDosa },
//     { title: "Set Dosa", time: "20 min", rating: 4.5, calories: 240, price: 5.49, difficulty: "Easy", image: SetDosa },
//     { title: "Appam", time: "25 min", rating: 4.6, calories: 170, price: 5.99, difficulty: "Medium", image: Appam },
//     { title: "Idiyappam", time: "25 min", rating: 4.5, calories: 180, price: 5.49, difficulty: "Medium", image: Idiyappam },
//     { title: "Parotta", time: "25 min", rating: 4.7, calories: 260, price: 5.99, difficulty: "Medium", image: Parotta },
//     { title: "Kothu Parotta", time: "30 min", rating: 4.8, calories: 450, price: 9.99, difficulty: "Hard", image: KothuParotta },
//     { title: "Chapati", time: "15 min", rating: 4.5, calories: 120, price: 3.49, difficulty: "Easy", image: Chapati },
//     { title: "Butter Naan", time: "20 min", rating: 4.7, calories: 220, price: 4.99, difficulty: "Medium", image: ButterNaan },
//     { title: "Garlic Naan", time: "20 min", rating: 4.7, calories: 230, price: 5.49, difficulty: "Medium", image: GarlicNaan },
//     { title: "Poori", time: "20 min", rating: 4.5, calories: 300, price: 4.99, difficulty: "Medium", image: Poori },
//     { title: "Beef Wellington", time: "90 min", rating: 4.9, calories: 780, price: 32.99, difficulty: "Hard", image: BeefWellington },
//     { title: "Lobster Thermidor", time: "60 min", rating: 4.8, calories: 690, price: 39.99, difficulty: "Hard", image: LobsterThermidor },
//     { title: "Salmon Teriyaki Bowl", time: "30 min", rating: 4.7, calories: 580, price: 22.99, difficulty: "Medium", image: SalmonTeriyakiBowl },
//     { title: "Truffle Mushroom Risotto", time: "45 min", rating: 4.8, calories: 540, price: 24.99, difficulty: "Medium", image: TruffleMushroomRisotto },
//     { title: "Chicken Alfredo Pasta", time: "35 min", rating: 4.8, calories: 620, price: 18.99, difficulty: "Easy", image: ChickenAlfredoPasta },
//     { title: "Shrimp Tacos", time: "25 min", rating: 4.7, calories: 490, price: 16.99, difficulty: "Easy", image: ShrimpTacos },
//     { title: "Korean BBQ Beef", time: "40 min", rating: 4.9, calories: 650, price: 21.99, difficulty: "Medium", image: KoreanBBQBeef },
//     { title: "Palak Paneer", time: "35 min", rating: 4.7, calories: 480, price: 8.99, difficulty: "Medium", image: PalakPaneer },
//     { title: "Thai Green Curry", time: "35 min", rating: 4.8, calories: 530, price: 17.99, difficulty: "Medium", image: ThaiGreenCurry },
//     { title: "Sushi Platter", time: "50 min", rating: 4.9, calories: 450, price: 29.99, difficulty: "Hard", image: SushiPlatter },
//     { title: "Chicken Parmesan", time: "45 min", rating: 4.8, calories: 670, price: 19.99, difficulty: "Medium", image: ChickenParmesan },
//     { title: "Moroccan Lamb Tagine", time: "70 min", rating: 4.8, calories: 720, price: 27.99, difficulty: "Hard", image: MoroccanLambTagine },
//     { title: "Mediterranean Grilled Chicken", time: "30 min", rating: 4.7, calories: 510, price: 18.99, difficulty: "Easy", image: MediterraneanGrilledChicken },
//     { title: "Stuffed Bell Peppers", time: "40 min", rating: 4.6, calories: 420, price: 15.99, difficulty: "Medium", image: StuffedBellPeppers },
//     { title: "Duck Confit", time: "120 min", rating: 4.9, calories: 750, price: 34.99, difficulty: "Hard", image: DuckConfit },
//     { title: "Chicken Shawarma", time: "25 min", rating: 4.7, calories: 430, price: 10.99, difficulty: "Medium", image: ChickenShawarma },
//     { title: "Falafel Wrap", time: "20 min", rating: 4.5, calories: 340, price: 8.99, difficulty: "Easy", image: FalafelWrap },
//     { title: "Chicken Wrap", time: "20 min", rating: 4.5, calories: 390, price: 9.49, difficulty: "Easy", image: ChickenWrap },
//     { title: "Veg Wrap", time: "15 min", rating: 4.4, calories: 280, price: 7.49, difficulty: "Easy", image: VegWrap },
//     { title: "Chicken Burger", time: "25 min", rating: 4.6, calories: 520, price: 11.99, difficulty: "Medium", image: ChickenBurger },
//     { title: "Cheese Burger", time: "20 min", rating: 4.6, calories: 540, price: 12.49, difficulty: "Medium", image: CheeseBurger },
//     { title: "Veg Burger", time: "20 min", rating: 4.4, calories: 420, price: 9.99, difficulty: "Easy", image: VegBurger },
//     { title: "Chicken Pizza", time: "35 min", rating: 4.7, calories: 600, price: 14.99, difficulty: "Hard", image: ChickenPizza },
//     { title: "Margherita Pizza", time: "30 min", rating: 4.6, calories: 500, price: 12.99, difficulty: "Medium", image: MargheritaPizza },
//     { title: "White Sauce Pasta", time: "25 min", rating: 4.6, calories: 480, price: 11.49, difficulty: "Medium", image: WhiteSaucePasta },
//     { title: "Red Sauce Pasta", time: "25 min", rating: 4.5, calories: 430, price: 10.99, difficulty: "Easy", image: RedSaucePasta },
//     { title: "Alfredo Pasta", time: "30 min", rating: 4.7, calories: 520, price: 12.49, difficulty: "Medium", image: AlfredoPasta },
//     { title: "Hakka Noodles", time: "20 min", rating: 4.5, calories: 410, price: 9.49, difficulty: "Easy", image: HakkaNoodles },
//     { title: "Schezwan Noodles", time: "25 min", rating: 4.6, calories: 450, price: 10.49, difficulty: "Medium", image: SchezwanNoodles },
//     { title: "Chicken Noodles", time: "25 min", rating: 4.6, calories: 470, price: 11.49, difficulty: "Medium", image: ChickenNoodles },
//     { title: "Jowar Bhakri with Curry", time: "35 min", rating: 4.6, calories: 450, price: 6.49, difficulty: "Medium", image: JowarBhakriwithCurry },
//     { title: "Ragi Mudde with Chicken", time: "40 min", rating: 4.7, calories: 480, price: 6.99, difficulty: "Medium", image: RagiMuddewithChicken },
//     { title: "Amritsari Chole Kulche", time: "35 min", rating: 4.9, calories: 610, price: 8.99, difficulty: "Medium", image: AmritsariCholeKulche },
//     { title: "Pathiri with Chicken Curry", time: "40 min", rating: 4.8, calories: 560, price: 8.99, difficulty: "Medium", image: PathiriwithChickenCurry },
//     { title: "Neer Dosa", time: "20 min", rating: 4.6, calories: 340, price: 5.49, difficulty: "Easy", image: NeerDosa },
//     { title: "Litti Chokha", time: "45 min", rating: 4.8, calories: 590, price: 7.99, difficulty: "Medium", image: LittiChokha },
//     { title: "Vanjaram Fish Fry", time: "30 min", rating: 4.9, calories: 510, price: 11.99, difficulty: "Easy", image: VanjaramFishFry },
//     { title: "Rajma Chawal", time: "35 min", rating: 4.8, calories: 550, price: 7.99, difficulty: "Easy", image: RajmaChawal },
//     { title: "Veg Jalfrezi", time: "35 min", rating: 4.6, calories: 440, price: 7.49, difficulty: "Medium", image: VegJalfrezi },
//     { title: "Tandoori Roti with Dal Fry", time: "30 min", rating: 4.7, calories: 480, price: 6.99, difficulty: "Easy", image: TandooriRotiwithDalFry },
//     { title: "Aloo Paratha", time: "25 min", rating: 4.7, calories: 450, price: 5.99, difficulty: "Easy", image: AlooParatha },
//     { title: "Madurai Kari Dosa", time: "45 min", rating: 4.9, calories: 740, price: 11.49, difficulty: "Hard", image: MaduraiKariDosa },
//   ],

//   Desserts: [
//     { title: "Chocolate Lava Cake", time: "30 min", rating: 4.9, calories: 420, price: 8.99, difficulty: "Medium", image: ChocolateLavaCake },
//     { title: "Tiramisu", time: "40 min", rating: 4.8, calories: 380, price: 9.99, difficulty: "Medium", image: Tiramisu },
//     { title: "Cheesecake", time: "60 min", rating: 4.9, calories: 450, price: 10.99, difficulty: "Hard", image: Cheesecake },
//     { title: "Brownie Sundae", time: "20 min", rating: 4.7, calories: 520, price: 7.99, difficulty: "Easy", image: BrownieSundae },
//     { title: "Red Velvet Cake", time: "90 min", rating: 4.8, calories: 480, price: 12.99, difficulty: "Hard", image: RedVelvetCake },
//     { title: "Apple Pie", time: "70 min", rating: 4.7, calories: 350, price: 8.49, difficulty: "Medium", image: ApplePie },
//     { title: "Gulab Jamun", time: "35 min", rating: 4.9, calories: 300, price: 5.99, difficulty: "Easy", image: GulabJamun },
//     { title: "Rasmalai", time: "45 min", rating: 4.8, calories: 280, price: 6.99, difficulty: "Medium", image: Rasmalai },
//     { title: "Carrot Cake", time: "75 min", rating: 4.6, calories: 410, price: 9.49, difficulty: "Medium", image: CarrotCake },
//     { title: "Black Forest Cake", time: "80 min", rating: 4.8, calories: 470, price: 11.99, difficulty: "Hard", image: BlackForestCake },
//     { title: "Ice Cream Sundae", time: "10 min", rating: 4.7, calories: 390, price: 6.49, difficulty: "Easy", image: IceCreamSundae },
//     { title: "Mango Mousse", time: "25 min", rating: 4.6, calories: 250, price: 5.99, difficulty: "Easy", image: MangoMousse },
//     { title: "Donuts", time: "50 min", rating: 4.7, calories: 320, price: 4.99, difficulty: "Medium", image: Donuts },
//     { title: "Macarons", time: "90 min", rating: 4.8, calories: 280, price: 13.99, difficulty: "Hard", image: Macarons },
//     { title: "Churros", time: "30 min", rating: 4.7, calories: 340, price: 5.49, difficulty: "Medium", image: Churros },
//     { title: "Panna Cotta", time: "35 min", rating: 4.6, calories: 260, price: 7.49, difficulty: "Medium", image: PannaCotta },
//     { title: "Creme Brulee", time: "50 min", rating: 4.8, calories: 370, price: 9.99, difficulty: "Hard", image: CremeBrulee },
//     { title: "Banana Split", time: "15 min", rating: 4.7, calories: 450, price: 7.99, difficulty: "Easy", image: BananaSplit },
//     { title: "Lemon Tart", time: "60 min", rating: 4.6, calories: 330, price: 8.99, difficulty: "Medium", image: LemonTart },
//     { title: "Strawberry Shortcake", time: "40 min", rating: 4.8, calories: 360, price: 8.49, difficulty: "Medium", image: StrawberryShortcake },
//     { title: "Bread Pudding", time: "45 min", rating: 4.5, calories: 310, price: 6.99, difficulty: "Easy", image: BreadPudding },
//     { title: "Coconut Ladoo", time: "25 min", rating: 4.7, calories: 220, price: 4.49, difficulty: "Easy", image: CoconutLadoo },
//     { title: "Kaju Katli", time: "40 min", rating: 4.8, calories: 240, price: 7.99, difficulty: "Medium", image: KajuKatli },
//     { title: "Jalebi", time: "35 min", rating: 4.8, calories: 290, price: 4.99, difficulty: "Medium", image: Jalebi },
//     { title: "Moong Dal Halwa", time: "60 min", rating: 4.9, calories: 430, price: 7.49, difficulty: "Hard", image: MoongDalHalwa },
//     { title: "Gajar Halwa", time: "50 min", rating: 4.8, calories: 360, price: 6.99, difficulty: "Medium", image: GajarHalwa },
//     { title: "Kulfi", time: "240 min", rating: 4.9, calories: 280, price: 5.99, difficulty: "Medium", image: Kulfi },
//     { title: "Falooda", time: "20 min", rating: 4.7, calories: 410, price: 6.49, difficulty: "Easy", image: Falooda },
//     { title: "Rice Kheer", time: "45 min", rating: 4.6, calories: 260, price: 4.99, difficulty: "Easy", image: RiceKheer },
//     { title: "Shahi Tukda", time: "35 min", rating: 4.8, calories: 390, price: 7.99, difficulty: "Medium", image: ShahiTukda },
//   ],
//   Snacks: [
//     { title: "Samosa", time: "20 min", rating: 4.7, calories: 250, price: 3.99, difficulty: "Easy", image: Samosa },
//     { title: "Veg Puff", time: "25 min", rating: 4.6, calories: 280, price: 2.99, difficulty: "Easy", image: VegPuff },
//     { title: "Chicken Puff", time: "25 min", rating: 4.8, calories: 320, price: 3.99, difficulty: "Easy", image: ChickenPuff },
//     { title: "Spring Rolls", time: "30 min", rating: 4.7, calories: 270, price: 5.99, difficulty: "Medium", image: SpringRolls },
//     { title: "French Fries", time: "15 min", rating: 4.8, calories: 365, price: 3.49, difficulty: "Easy", image: FrenchFries },
//     { title: "Onion Rings", time: "20 min", rating: 4.6, calories: 310, price: 4.49, difficulty: "Easy", image: OnionRings },
//     { title: "Nachos", time: "15 min", rating: 4.7, calories: 340, price: 5.99, difficulty: "Easy", image: Nachos },
//     { title: "Popcorn", time: "10 min", rating: 4.5, calories: 180, price: 2.99, difficulty: "Easy", image: Popcorn },
//     { title: "Garlic Bread", time: "15 min", rating: 4.8, calories: 290, price: 4.99, difficulty: "Easy", image: GarlicBread },
//     { title: "Mozzarella Sticks", time: "20 min", rating: 4.8, calories: 350, price: 6.49, difficulty: "Medium", image: MozzarellaSticks },
//     { title: "Chicken Wings", time: "35 min", rating: 4.9, calories: 420, price: 8.99, difficulty: "Medium", image: ChickenWings },
//     { title: "Chicken Nuggets", time: "20 min", rating: 4.8, calories: 320, price: 6.99, difficulty: "Easy", image: ChickenNuggets },
//     { title: "Fish Fingers", time: "25 min", rating: 4.7, calories: 280, price: 7.49, difficulty: "Medium", image: FishFingers },
//     { title: "Paneer Tikka", time: "30 min", rating: 4.8, calories: 290, price: 6.99, difficulty: "Medium", image: PaneerTikka },
//     { title: "Aloo Tikki", time: "20 min", rating: 4.6, calories: 240, price: 3.99, difficulty: "Easy", image: AlooTikki },
//     { title: "Bhel Puri", time: "15 min", rating: 4.7, calories: 220, price: 3.49, difficulty: "Easy", image: BhelPuri },
//     { title: "Pani Puri", time: "20 min", rating: 4.9, calories: 180, price: 3.99, difficulty: "Easy", image: PaniPuri },
//     { title: "Sev Puri", time: "15 min", rating: 4.7, calories: 210, price: 3.99, difficulty: "Easy", image: SevPuri },
//     { title: "Dahi Puri", time: "20 min", rating: 4.8, calories: 240, price: 4.49, difficulty: "Easy", image: DahiPuri },
//     { title: "Vada Pav", time: "20 min", rating: 4.8, calories: 320, price: 3.99, difficulty: "Easy", image: VadaPav },
//     { title: "Pav Bhaji", time: "30 min", rating: 4.9, calories: 420, price: 5.99, difficulty: "Medium", image: PavBhaji },
//     { title: "Masala Corn", time: "10 min", rating: 4.5, calories: 170, price: 2.99, difficulty: "Easy", image: MasalaCorn },
//     { title: "Murukku", time: "40 min", rating: 4.7, calories: 260, price: 4.49, difficulty: "Medium", image: Murukku },
//     { title: "Mixture", time: "30 min", rating: 4.6, calories: 280, price: 4.99, difficulty: "Medium", image: Mixture },
//     { title: "Banana Chips", time: "20 min", rating: 4.7, calories: 240, price: 3.99, difficulty: "Easy", image: BananaChips },
//     { title: "Potato Chips", time: "20 min", rating: 4.8, calories: 280, price: 3.99, difficulty: "Easy", image: PotatoChips },
//     { title: "Cheese Balls", time: "25 min", rating: 4.7, calories: 330, price: 5.49, difficulty: "Medium", image: CheeseBalls },
//     { title: "Bread Pakora", time: "20 min", rating: 4.6, calories: 290, price: 4.49, difficulty: "Easy", image: BreadPakora },
//     { title: "Veg Cutlet", time: "25 min", rating: 4.7, calories: 260, price: 4.99, difficulty: "Easy", image: VegCutlet },
//     {title: "Medu Vada", time: "20 min", rating: 4.8, calories: 220, price: 3.49, difficulty: "Easy", image: MeduVada },
//     { title: "Corn Chaat", time: "15 min", rating: 4.6, calories: 180, price: 3.99, difficulty: "Easy", image: CornChaat },
//     { title: "Momos", time: "25 min", rating: 4.8, calories: 250, price: 5.49, difficulty: "Medium", image: Momos },
//     { title: "Paneer Pakora", time: "25 min", rating: 4.8, calories: 290, price: 5.99, difficulty: "Medium", image: PaneerPakora },
//     { title: "Chicken Sandwich", time: "20 min", rating: 4.8, calories: 370, price: 6.49, difficulty: "Easy", image: ChickenSandwich },
//     { title: "Peri Peri Fries", time: "15 min", rating: 4.8, calories: 370, price: 5.49, difficulty: "Easy", image: PeriPeriFries },
//   ],
//   Drinks: [
//     { title: "Mango Smoothie", time: "10 min", rating: 4.8, calories: 180, price: 4.99, difficulty: "Easy", image: MangoSmoothie },
//     { title: "Strawberry Milkshake", time: "10 min", rating: 4.7, calories: 250, price: 5.49, difficulty: "Easy", image: StrawberryMilkshake },
//     { title: "Chocolate Milkshake", time: "10 min", rating: 4.9, calories: 320, price: 5.99, difficulty: "Easy", image: ChocolateMilkshake },
//     { title: "Vanilla Milkshake", time: "10 min", rating: 4.6, calories: 280, price: 5.49, difficulty: "Easy", image: VanillaMilkshake },
//     { title: "Banana Smoothie", time: "8 min", rating: 4.7, calories: 210, price: 4.49, difficulty: "Easy", image: BananaSmoothie },
//     { title: "Oreo Shake", time: "10 min", rating: 4.9, calories: 350, price: 6.49, difficulty: "Easy", image: OreoShake },
//     { title: "Cold Coffee", time: "5 min", rating: 4.8, calories: 190, price: 4.99, difficulty: "Easy", image: ColdCoffee },
//     { title: "Iced Latte", time: "5 min", rating: 4.7, calories: 140, price: 5.49, difficulty: "Easy", image: IcedLatte },
//     { title: "Cappuccino", time: "7 min", rating: 4.8, calories: 120, price: 4.99, difficulty: "Easy", image: Cappuccino },
//     { title: "Mocha Coffee", time: "8 min", rating: 4.8, calories: 220, price: 5.99, difficulty: "Easy", image: MochaCoffee },
//     { title: "Lemon Juice", time: "5 min", rating: 4.6, calories: 60, price: 2.99, difficulty: "Easy", image: LemonJuice },
//     { title: "Orange Juice", time: "5 min", rating: 4.7, calories: 90, price: 3.99, difficulty: "Easy", image: OrangeJuice },
//     { title: "Watermelon Juice", time: "8 min", rating: 4.8, calories: 80, price: 3.99, difficulty: "Easy", image: WatermelonJuice },
//     { title: "Pineapple Juice", time: "8 min", rating: 4.7, calories: 100, price: 4.49, difficulty: "Easy", image: PineappleJuice },
//     { title: "Apple Juice", time: "5 min", rating: 4.6, calories: 110, price: 3.99, difficulty: "Easy", image: AppleJuice },
//     { title: "Mojito", time: "10 min", rating: 4.8, calories: 120, price: 5.99, difficulty: "Easy", image: Mojito },
//     { title: "Blue Lagoon", time: "10 min", rating: 4.7, calories: 150, price: 6.49, difficulty: "Easy", image: BlueLagoon },
//     { title: "Virgin Margarita", time: "10 min", rating: 4.8, calories: 130, price: 6.99, difficulty: "Easy", image: VirginMargarita },
//     { title: "Mint Lime Cooler", time: "5 min", rating: 4.7, calories: 70, price: 3.99, difficulty: "Easy", image: MintLimeCooler },
//     { title: "Fruit Punch", time: "10 min", rating: 4.8, calories: 140, price: 5.49, difficulty: "Easy", image: FruitPunch },
//     { title: "Rose Milk", time: "5 min", rating: 4.7, calories: 180, price: 3.99, difficulty: "Easy", image: RoseMilk },
//     { title: "Badam Milk", time: "10 min", rating: 4.8, calories: 220, price: 4.99, difficulty: "Easy", image: BadamMilk },
//     { title: "Masala Chai", time: "10 min", rating: 4.9, calories: 110, price: 2.99, difficulty: "Easy", image: MasalaChai },
//     { title: "Green Tea", time: "5 min", rating: 4.6, calories: 20, price: 2.49, difficulty: "Easy", image: GreenTea },
//     { title: "Hot Chocolate", time: "10 min", rating: 4.8, calories: 260, price: 5.99, difficulty: "Easy", image: HotChocolate }
//   ],
// };

// const recipes = [
//   { title: "Chicken Biryani", image: chickenBriyani, time: "45 min", difficulty: "Medium", rating: "4.8", reviews: 320 },
//   { title: "Paneer Butter Masala", image: pannerButterMasala, time: "30 min", difficulty: "Easy", rating: "4.7", reviews: 180 },
//   { title: "Chocolate Lava Cake", image: chocolateLavaCake, time: "25 min", difficulty: "Easy", rating: "4.9", reviews: 215 },
//   { title: "Veg Sandwich", image: vegSandwich, time: "15 min", difficulty: "Easy", rating: "4.6", reviews: 98 },
// ];

// const avatars = [
//   "https://i.pravatar.cc/40?img=3",
//   "https://i.pravatar.cc/40?img=7",
//   "https://i.pravatar.cc/40?img=11",
//   "https://i.pravatar.cc/40?img=15",
// ];

// const ingredients = [
//   { label: "Chicken", emoji: "🍗" },
//   { label: "Avocado", emoji: "🥑" },
//   { label: "Broccoli", emoji: "🥦" },
//   { label: "Quinoa", emoji: "🌾" },
// ];

// // 20 waveform bar heights
// const waveBars = [4, 7, 12, 18, 12, 22, 15, 9, 19, 12, 7, 17, 9, 14, 7, 12, 17, 9, 7, 11];

// // ─── Waveform component ───────────────────────────────────────────────────────
// function Waveform() {
//   return (
//     <div className="flex items-center gap-[3px] mt-3" style={{ height: 22 }}>
//       {waveBars.map((h, i) => (
//         <motion.span
//           key={i}
//           className="block rounded-full bg-[#6BA539]"
//           style={{ width: 3, height: h, transformOrigin: "center" }}
//           animate={{ scaleY: [1, 1.9, 0.55, 1.5, 1] }}
//           transition={{
//             duration: 1.3,
//             repeat: Infinity,
//             delay: i * 0.065,
//             ease: "easeInOut",
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// // ─── Main component ───────────────────────────────────────────────────────────
// export default function Hero() {
//   const [liked, setLiked] = useState({});
//   const [activeCategory, setActiveCategory] = useState("Breakfast");
//   const [showAll, setShowAll] = useState(false);
//   const toggleLike = (i) => setLiked((p) => ({ ...p, [i]: !p[i] }));

//   const activeDishes = useMemo(
//     () => categoryDishes[activeCategory] ?? [],
//     [activeCategory]
//   );

//   const visibleDishes = showAll ? activeDishes : activeDishes.slice(0, 8);;

//   const handleCategoryClick = (title) => {
//     setActiveCategory(title);
//     setShowAll(false);
//   };

//   const floatUp = { animate: { y: [0, -10, 0] }, transition: { duration: 4.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" } };
//   const floatDown = { animate: { y: [0, 10, 0] }, transition: { duration: 4.4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.6 } };

//   return (
//     <div className="min-h-screen bg-[#F9F7F4] dark:bg-[#121413] text-black dark:text-white transition-all duration-300">

//       {/* ═══════════════════════════════════════════════════════════════════════
//           HERO BANNER
//       ════════════════════════════════════════════════════════════════════════ */}
//       <section className="relative w-full overflow-hidden" style={{ minHeight: 720 }}>

//         {/* Full-width background image */}
//         <img
//           src={AiCookingBanner}
//           alt="AI Chef robot preparing a meal in a modern kitchen"
//           className="absolute inset-0 w-full h-550 object-cover object-center select-none"
//         />

//         {/* ── Light mode overlay: solid cream on left → fully transparent at 58%
//                Right side (robot + kitchen) is 100% clear, no tint at all      ── */}
//         <div
//           className="absolute inset-0 dark:hidden pointer-events-none"
//           style={{
//             background:
//               "linear-gradient(to right, #f5f0e8 0%, #f5f0e8 24%, rgba(245,240,232,0.93) 34%, rgba(245,240,232,0.65) 44%, rgba(245,240,232,0.18) 53%, transparent 60%)",
//           }}
//         />

//         {/* ── Dark mode overlay: same logic with dark tones ─────────────────── */}
//         <div
//           className="absolute inset-0 hidden dark:block pointer-events-none"
//           style={{
//             background:
//               "linear-gradient(to right, #0f1410 0%, #0f1410 24%, rgba(15,20,16,0.93) 34%, rgba(15,20,16,0.65) 44%, rgba(15,20,16,0.18) 53%, transparent 60%)",
//           }}
//         />

//         {/* ── Inner content ─────────────────────────────────────────────────── */}
//         <div className="relative z-10 h-full" style={{ minHeight: 520 }}>
//           <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full h-full flex items-center" style={{ minHeight: 520 }}>
//             <div className="w-full flex items-center justify-between h-full py-12 lg:py-0 gap-6">

//               {/* ── LEFT: Text content ─────────────────────────────────────── */}
//               <motion.div
//                 className="w-full lg:w-[40%] flex flex-col justify-center"
//                 initial={{ opacity: 0, x: -36 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
//               >
//                 {/* Headline */}
//                 <h1 className="text-5xl xl:text-6xl font-extrabold leading-[1.08] mb-4 text-gray-900 dark:text-white">
//                   Your{" "}
//                   <span className="text-[#6BA539]">AI Chef</span>
//                   <br />
//                   in Your Kitchen{" "}
//                   <span className="text-gray-300 text-3xl align-middle">✦</span>
//                 </h1>

//                 {/* Subtitle */}
//                 <p className="text-gray-500 dark:text-gray-400 text-[15px] leading-relaxed mb-4 max-w-[380px]">
//                   Let AI create personalized recipes, tailored to your taste, ingredients, and health goals.
//                 </p>

//                 {/* Search — compact and accessible */}
//                 <form className="mb-4" role="search" onSubmit={(e) => e.preventDefault()}>
//                   <div className="flex items-center gap-3 bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-full px-3 py-2 max-w-md shadow-sm">
//                     <Search size={16} className="text-gray-400" />
//                     <input
//                       aria-label="Search recipes or ingredients"
//                       placeholder="Search recipes, ingredients, or cuisines"
//                       className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400 text-gray-700 dark:text-gray-200"
//                     />
//                     <button aria-label="Search" className="ml-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6BA539] hover:bg-[#568a2e] text-white text-sm font-medium transition-colors">
//                       Search
//                     </button>
//                   </div>
//                 </form>

//                 {/* CTA group — primary + secondary (glass wrapper for emphasis) */}
//                 <div className="mb-7">
//                   <div className="inline-flex items-center gap-3 rounded-full p-1 bg-white/40 dark:bg-black/20 backdrop-blur-sm">
//                     <div className="flex items-center">
//                       <div className="flex items-center">
//                         <div className="flex items-center">
//                           <div className="flex">
//                             <div className="">
//                               <div className="">
//                                 <div className="">
//                                   <div className="">
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 gap-3">
//                       <motion.button
//                         type="button"
//                         aria-label="Get Cooking — generate a personalized recipe"
//                         whileHover={{ scale: 1.03 }}
//                         whileTap={{ scale: 0.97 }}
//                         className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-[15px] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#6BA539]/30"
//                         style={{
//                           background: "linear-gradient(135deg, #6BA539 0%, #4d8822 100%)",
//                           boxShadow: "0 10px 30px rgba(75,140,40,0.24)",
//                         }}
//                       >
//                         Get Cooking
//                         <motion.span className="flex items-center" animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
//                           <ArrowRight size={16} />
//                         </motion.span>
//                       </motion.button>

//                       <button
//                         type="button"
//                         aria-label="Explore Recipes"
//                         className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white dark:bg-black/30 border border-black/10 dark:border-white/10 text-sm text-gray-800 dark:text-gray-200 font-medium transition-shadow shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#6BA539]/20"
//                       >
//                         Explore Recipes
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Social proof */}
//                 <div className="flex items-center gap-3">
//                   <div className="flex -space-x-2.5">
//                     {avatars.map((src, i) => (
//                       <motion.img
//                         key={i}
//                         src={src}
//                         alt="user"
//                         className="w-9 h-9 rounded-full border-2 border-[#f5f0e8] dark:border-[#0f1410] object-cover"
//                         initial={{ opacity: 0, x: -8 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.55 + i * 0.08 }}
//                       />
//                     ))}
//                   </div>
//                   <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-snug">
//                     Join <span className="font-bold text-gray-800 dark:text-gray-200">50K+</span> food lovers
//                     <br />cooking smarter everyday!
//                   </p>
//                 </div>
//               </motion.div>

//               {/* ── RIGHT: Floating cards — no overlay so image is crystal clear ── */}
//               <div className="hidden lg:flex relative flex-1 h-full items-center justify-end" style={{ minHeight: 520 }}>

//                 {/* Card 1 — AI Chef greeting (top right) */}
//                 <motion.div
//                   className="absolute top-8 right-2 z-20 w-[238px]"
//                   initial={{ opacity: 0, y: -22, scale: 0.88 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   transition={{ delay: 0.55, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//                 >
//                   <motion.div
//                     animate={floatUp.animate}
//                     transition={floatUp.transition}
//                     className="bg-white/90 dark:bg-[#1c2b1e]/90 backdrop-blur-md rounded-2xl px-5 py-4 border border-white/70 dark:border-white/10"
//                     style={{ boxShadow: "0 18px 50px rgba(0,0,0,0.13), 0 2px 10px rgba(0,0,0,0.07)" }}
//                   >
//                     {/* Gloss shimmer */}
//                     <div
//                       className="absolute inset-x-0 top-0 h-1/2 rounded-t-2xl pointer-events-none"
//                       style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.55), transparent)" }}
//                     />
//                     <p className="font-bold text-[14px] text-gray-900 dark:text-white mb-1 relative z-10">
//                       👋 Hello, I'm AI Chef
//                     </p>
//                     <p className="text-gray-500 dark:text-gray-400 text-[13px] leading-snug relative z-10">
//                       What would you like to cook today?
//                     </p>
//                     <Waveform />
//                   </motion.div>
//                 </motion.div>

//                 {/* Card 2 — Ingredient picker (bottom right) */}
//                 <motion.div
//                   className="absolute bottom-10 right-2 z-20 w-[300px]"
//                   initial={{ opacity: 0, y: 22, scale: 0.88 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   transition={{ delay: 0.75, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//                 >
//                   <motion.div
//                     animate={floatDown.animate}
//                     transition={floatDown.transition}
//                     className="bg-white/90 dark:bg-[#1c2b1e]/90 backdrop-blur-md rounded-2xl px-5 py-4 border border-white/70 dark:border-white/10"
//                     style={{ boxShadow: "0 18px 50px rgba(0,0,0,0.13), 0 2px 10px rgba(0,0,0,0.07)" }}
//                   >
//                     <div
//                       className="absolute inset-x-0 top-0 h-1/2 rounded-t-2xl pointer-events-none"
//                       style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.55), transparent)" }}
//                     />
//                     <div className="flex items-center justify-between gap-2 relative z-10">
//                       {ingredients.map((ing, i) => (
//                         <motion.div
//                           key={ing.label}
//                           className="flex flex-col items-center gap-1.5 cursor-pointer"
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{ delay: 0.85 + i * 0.09 }}
//                           whileHover={{ y: -3, transition: { duration: 0.2 } }}
//                         >
//                           <div
//                             className="w-12 h-12 rounded-full flex items-center justify-center text-2xl border border-gray-100 shadow-md"
//                             style={{ background: "linear-gradient(135deg, #f8f6f0, #edeae0)" }}
//                           >
//                             {ing.emoji}
//                           </div>
//                           <span className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">
//                             {ing.label}
//                           </span>
//                         </motion.div>
//                       ))}
//                       {/* + More */}
//                       <motion.div
//                         className="flex flex-col items-center gap-1.5 cursor-pointer"
//                         initial={{ opacity: 0, y: 10 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: 1.25 }}
//                         whileHover={{ y: -3, transition: { duration: 0.2 } }}
//                       >
//                         <div className="w-12 h-12 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-400 dark:text-gray-500 text-xl font-light">
//                           +
//                         </div>
//                         <span className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">More</span>
//                       </motion.div>
//                     </div>
//                   </motion.div>
//                 </motion.div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ═══════════════════════════════════════════════════════════════════════
//           CATEGORY TAB NAVBAR + DISH GRID
//       ════════════════════════════════════════════════════════════════════════ */}
//       <div className="w-full">

//         {/* ── Sticky tab navbar — sits right below hero image ── */}
//         <div className="sticky top-0 z-20 bg-[#F9F7F4] dark:bg-[#121413] border-b border-black/8 dark:border-white/8 shadow-sm">
//           <div className="max-w-7xl mx-auto px-3 sm:px-6">
//             {/* Scrollable on small phones, flex on wider */}
//             <div
//               className="flex overflow-x-auto scrollbar-hide gap-1 py-0"
//               style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//               role="tablist"
//               aria-label="Recipe categories"
//             >
//               {categories.map((cat) => {
//                 const isActive = activeCategory === cat.title;
//                 return (
//                   <button
//                     key={cat.title}
//                     role="tab"
//                     aria-selected={isActive}
//                     onClick={() => handleCategoryClick(cat.title)}
//                     className={`
//                       relative flex-shrink-0 flex items-center gap-1.5
//                       px-3 sm:px-5 py-3.5 sm:py-4
//                       text-[13px] sm:text-sm font-semibold whitespace-nowrap
//                       transition-colors duration-200 focus:outline-none
//                       ${isActive
//                         ? "text-[#6BA539]"
//                         : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
//                       }
//                     `}
//                   >
//                     {/* tab label */}
//                     {cat.title}

//                     {/* active underline */}
//                     {isActive && (
//                       <motion.span
//                         layoutId="tab-underline"
//                         className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full bg-[#6BA539]"
//                         transition={{ type: "spring", stiffness: 380, damping: 30 }}
//                       />
//                     )}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* ── Dish grid — always visible, swaps on tab click ── */}
//         <div className="max-w-7xl mx-auto px-3 sm:px-6 pt-5 pb-10">

//           {/* Section header */}
//           <div className="flex items-center gap-2 mb-4 sm:mb-5">
//             <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
//               {activeCategory}
//             </h2>
//             <span className="text-[11px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-[#6BA539]/10 text-[#6BA539]">
//               {activeDishes.length} recipes
//             </span>
//           </div>

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeCategory}
//               initial={{ opacity: 0, y: 16 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -8 }}
//               transition={{ duration: 0.25, ease: "easeOut" }}
//               /* 2 cols on phones (320–430px), 3 on sm, 4 on lg */
//               className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5"
//             >
//               {visibleDishes.map((dish, idx) => (
//                 <motion.div
//                   key={dish.title}
//                   initial={{ opacity: 0, y: 14 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.22, delay: idx * 0.025 }}
//                   whileHover={{ y: -4, transition: { duration: 0.18 } }}
//                   className="group rounded-xl sm:rounded-2xl overflow-hidden bg-white dark:bg-white/5 border border-black/8 dark:border-white/10 shadow-sm hover:shadow-lg hover:shadow-[#6BA539]/10 transition-shadow duration-300 cursor-pointer"
//                 >
//                   {/* Image */}
//                   <div className="relative overflow-hidden bg-gray-100 dark:bg-white/5"
//                     style={{ paddingTop: "62%" }}>
//                     <img
//                       src={dish.image}
//                       alt={dish.title}
//                       loading="lazy"
//                       className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                       onError={(e) => { e.target.style.display = "none"; }}
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                     {/* Rating pill */}
//                     <div className="absolute bottom-1.5 left-1.5 flex items-center gap-0.5 bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
//                       <Star size={9} className="fill-yellow-400 text-yellow-400" />
//                       {dish.rating}
//                     </div>

//                     {/* Heart */}
//                     <motion.button
//                       whileTap={{ scale: 0.8 }}
//                       onClick={(e) => { e.stopPropagation(); toggleLike(`cat-${idx}`); }}
//                       aria-label="Toggle favorite"
//                       className="absolute top-1.5 right-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/90 dark:bg-black/50 backdrop-blur-sm flex items-center justify-center shadow"
//                     >
//                       <Heart
//                         size={11}
//                         className={liked[`cat-${idx}`] ? "fill-red-500 text-red-500" : "text-gray-400"}
//                       />
//                     </motion.button>
//                   </div>

//                   {/* Content */}
//                   <div className="p-2.5 sm:p-3.5">
//                     <h4 className="font-bold text-[12px] sm:text-sm text-gray-900 dark:text-white truncate mb-1.5">
//                       {dish.title}
//                     </h4>

//                     {/* Meta row — stacked on 320px, inline on larger */}
//                     <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 mb-2.5">
//                       <span className="flex items-center gap-0.5">
//                         <Clock3 size={10} className="text-orange-400" />
//                         {dish.time}
//                       </span>
//                       <span className="flex items-center gap-0.5">
//                         <Flame size={10} className="text-red-400" />
//                         {dish.calories} cal
//                       </span>
//                       <span className={`px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold
//                         ${dish.difficulty === "Easy"
//                           ? "bg-green-100 dark:bg-green-500/15 text-green-600 dark:text-green-400"
//                           : dish.difficulty === "Medium"
//                             ? "bg-yellow-100 dark:bg-yellow-500/15 text-yellow-600 dark:text-yellow-400"
//                             : "bg-red-100 dark:bg-red-500/15 text-red-600 dark:text-red-400"}`}>
//                         {dish.difficulty}
//                       </span>
//                     </div>

//                     <div className="flex items-center justify-between gap-1">
//                       <span className="text-[13px] sm:text-sm font-extrabold text-orange-500">
//                         ${dish.price.toFixed(2)}
//                       </span>
//                       <motion.button
//                         whileTap={{ scale: 0.94 }}
//                         className="text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-[#6BA539] hover:bg-[#568a2e] text-white shadow-sm transition-colors duration-200"
//                       >
//                         View
//                       </motion.button>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </AnimatePresence>

//           {/* View all / show less button */}
//           {activeDishes.length > 20 && (
//             <div className="flex justify-center mt-6 sm:mt-8">
//               <motion.button
//                 whileTap={{ scale: 0.96 }}
//                 onClick={() => setShowAll((prev) => !prev)}
//                 className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border-2 border-[#6BA539] text-[#6BA539] font-semibold text-sm sm:text-base hover:bg-[#6BA539] hover:text-white transition-colors duration-200"
//               >
//                 {showAll
//                   ? "Show less"
//                   : `View all recipes (${activeDishes.length - 20} more)`}
//               </motion.button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* ═══════════════════════════════════════════════════════════════════════
//           POPULAR RECIPES
//       ════════════════════════════════════════════════════════════════════════ */}
//       <div className="max-w-7xl mx-auto px-6 pb-14">
//         <div className="flex items-center justify-between mb-8">
//           <h2 className="text-3xl font-bold">Popular Recipes</h2>
//           <button className="text-[#3a7d44] hover:text-[#2d6235] font-medium transition flex items-center gap-1 text-sm">
//             View all <ChevronRight size={15} />
//           </button>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {recipes.map((recipe, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.1 }}
//               className="bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 group"
//             >
//               <div className="relative overflow-hidden">
//                 <img
//                   src={recipe.image}
//                   alt={recipe.title}
//                   className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//                 <button
//                   onClick={() => toggleLike(i)}
//                   className="absolute top-3 left-3 p-2 rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-sm hover:scale-110 transition-all duration-300"
//                 >
//                   <Heart
//                     size={15}
//                     className={liked[i] ? "fill-red-500 text-red-500" : "text-slate-400"}
//                   />
//                 </button>
//               </div>
//               <div className="p-4">
//                 <h3 className="font-bold text-base mb-3">{recipe.title}</h3>
//                 <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-2">
//                   <div className="flex items-center gap-1">
//                     <Clock3 size={13} />
//                     <span>{recipe.time}</span>
//                   </div>
//                   <span className="px-2 py-0.5 rounded-full bg-green-50 dark:bg-green-500/10 text-[#3a7d44] dark:text-green-400 font-medium">
//                     {recipe.difficulty}
//                   </span>
//                 </div>
//                 <div className="flex items-center gap-1 text-yellow-500 text-xs">
//                   <Star size={13} className="fill-yellow-500" />
//                   <span className="font-semibold text-black dark:text-white">{recipe.rating}</span>
//                   <span className="text-slate-400">({recipe.reviews})</span>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* ═══════════════════════════════════════════════════════════════════════
//           ASK AI CHEF
//       ════════════════════════════════════════════════════════════════════════ */}
//       <div className="max-w-7xl mx-auto px-6 pb-20">
//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="relative overflow-hidden bg-gradient-to-br from-[#eef6ee] to-[#f5f0e8] dark:from-[#1a2e1c] dark:to-[#1a1f1a] border border-green-200/60 dark:border-green-800/30 rounded-[32px] p-10 flex flex-col lg:flex-row items-center justify-between gap-10"
//         >
//           <div className="absolute top-0 right-0 w-72 h-72 bg-green-300/10 rounded-full blur-3xl pointer-events-none" />

//           <div className="flex-1 relative z-10">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="w-10 h-10 rounded-2xl bg-[#3a7d44] flex items-center justify-center shadow-lg">
//                 <Sparkles size={18} className="text-white" />
//               </div>
//               <h2 className="text-3xl font-bold">Ask AI Chef</h2>
//             </div>
//             <p className="text-slate-600 dark:text-slate-400 text-base mb-8 max-w-sm">
//               Get personalized recipe suggestions, cooking tips, and step-by-step guidance powered by AI.
//             </p>
//             <div className="bg-white/80 dark:bg-black/30 border border-black/10 dark:border-white/10 rounded-2xl p-4 mb-8 max-w-sm">
//               <div className="flex items-start gap-2 mb-3">
//                 <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex-shrink-0 mt-0.5" />
//                 <div>
//                   <p className="text-xs text-slate-400 mb-1">You</p>
//                   <p className="text-sm text-slate-700 dark:text-slate-300">
//                     What can I cook with chicken and broccoli?
//                   </p>
//                 </div>
//               </div>
//               <div className="flex items-start gap-2">
//                 <div className="w-6 h-6 rounded-full bg-[#3a7d44] flex-shrink-0 mt-0.5 flex items-center justify-center">
//                   <Sparkles size={10} className="text-white" />
//                 </div>
//                 <div>
//                   <p className="text-xs text-slate-400 mb-1">AI Chef</p>
//                   <p className="text-sm text-slate-700 dark:text-slate-300">
//                     Try a Chicken Broccoli Stir-fry! Ready in 20 mins...
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#3a7d44] hover:bg-[#2d6235] text-white font-semibold transition-all duration-300 shadow-lg shadow-green-700/25 hover:-translate-y-0.5">
//               <Sparkles size={15} />
//               Start Chatting
//             </button>
//           </div>

//           <div className="w-44 h-56 relative z-10 flex-shrink-0 flex items-center justify-center text-8xl select-none">
//             🤖
//           </div>
//         </motion.div>
//       </div>

//     </div>
//   );
// }   



// New hero section

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Search, Sparkles, ChevronRight } from "lucide-react";

import AiCookingBanner from "../../assets/images/Ai_cooking_image.png";
import { categories } from "../../data/categories";
import { recipes } from "../../data/recipes";
import { categoryDishes } from "../../utils/categoryDishes";

import Waveform from "../../components/Waveform/Waveform";
import DishCard from "../../components/DishCard/DishCard";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

// ─── Static data ──────────────────────────────────────────────────────────────

const avatars = [
  "https://i.pravatar.cc/40?img=3",
  "https://i.pravatar.cc/40?img=7",
  "https://i.pravatar.cc/40?img=11",
  "https://i.pravatar.cc/40?img=15",
];

const ingredients = [
  { label: "Chicken", emoji: "🍗" },
  { label: "Avocado", emoji: "🥑" },
  { label: "Broccoli", emoji: "🥦" },
  { label: "Quinoa", emoji: "🌾" },
];

const floatUp = {
  animate: { y: [0, -10, 0] },
  transition: { duration: 4.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
};
const floatDown = {
  animate: { y: [0, 10, 0] },
  transition: { duration: 4.4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.6 },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function Hero() {
  const [liked, setLiked] = useState({});
  const [activeCategory, setActiveCategory] = useState("Breakfast");
  const [showAll, setShowAll] = useState(false);

  const toggleLike = (key) => setLiked((p) => ({ ...p, [key]: !p[key] }));

  const activeDishes = useMemo(() => categoryDishes[activeCategory] ?? [], [activeCategory]);
  const visibleDishes = showAll ? activeDishes : activeDishes.slice(0, 8);

  const handleCategoryClick = (title) => {
    setActiveCategory(title);
    setShowAll(false);
  };

  return (
    <div className="min-h-screen bg-[#F9F7F4] dark:bg-[#121413] text-black dark:text-white transition-all duration-300">

      {/* ── HERO BANNER ──────────────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: 720 }}>
        <img
          src={AiCookingBanner}
          alt="AI Chef robot preparing a meal in a modern kitchen"
          className="absolute inset-0 w-full h-full object-cover object-center select-none"
        />

        {/* Light overlay */}
        <div
          className="absolute inset-0 dark:hidden pointer-events-none"
          style={{ background: "linear-gradient(to right, #f5f0e8 0%, #f5f0e8 24%, rgba(245,240,232,0.93) 34%, rgba(245,240,232,0.65) 44%, rgba(245,240,232,0.18) 53%, transparent 60%)" }}
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0 hidden dark:block pointer-events-none"
          style={{ background: "linear-gradient(to right, #0f1410 0%, #0f1410 24%, rgba(15,20,16,0.93) 34%, rgba(15,20,16,0.65) 44%, rgba(15,20,16,0.18) 53%, transparent 60%)" }}
        />

        <div className="relative z-10 h-full" style={{ minHeight: 520 }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full h-full flex items-center" style={{ minHeight: 520 }}>
            <div className="w-full flex items-center justify-between h-full py-12 lg:py-0 gap-6">

              {/* LEFT: Text content */}
              <motion.div
                className="w-full lg:w-[40%] flex flex-col justify-center"
                initial={{ opacity: 0, x: -36 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="text-5xl xl:text-6xl font-extrabold leading-[1.08] mb-4 text-gray-900 dark:text-white">
                  Your <span className="text-[#6BA539]">AI Chef</span>
                  <br />in Your Kitchen{" "}
                  <span className="text-gray-300 text-3xl align-middle">✦</span>
                </h1>

                <p className="text-gray-500 dark:text-gray-400 text-[15px] leading-relaxed mb-4 max-w-[380px]">
                  Let AI create personalized recipes, tailored to your taste, ingredients, and health goals.
                </p>

                <form className="mb-4" role="search" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex items-center gap-3 bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-full px-3 py-2 max-w-md shadow-sm">
                    <Search size={16} className="text-gray-400" />
                    <input
                      aria-label="Search recipes or ingredients"
                      placeholder="Search recipes, ingredients, or cuisines"
                      className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400 text-gray-700 dark:text-gray-200"
                    />
                    <button aria-label="Search" className="ml-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6BA539] hover:bg-[#568a2e] text-white text-sm font-medium transition-colors">
                      Search
                    </button>
                  </div>
                </form>

                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 gap-3 mb-7">
                  <motion.button
                    type="button"
                    aria-label="Get Cooking"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-[15px] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#6BA539]/30"
                    style={{ background: "linear-gradient(135deg, #6BA539 0%, #4d8822 100%)", boxShadow: "0 10px 30px rgba(75,140,40,0.24)" }}
                  >
                    Get Cooking
                    <motion.span className="flex items-center" animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                      <ArrowRight size={16} />
                    </motion.span>
                  </motion.button>

                  <button
                    type="button"
                    aria-label="Explore Recipes"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white dark:bg-black/30 border border-black/10 dark:border-white/10 text-sm text-gray-800 dark:text-gray-200 font-medium transition-shadow shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#6BA539]/20"
                  >
                    Explore Recipes
                  </button>
                </div>

                {/* Social proof */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2.5">
                    {avatars.map((src, i) => (
                      <motion.img
                        key={i}
                        src={src}
                        alt="user"
                        className="w-9 h-9 rounded-full border-2 border-[#f5f0e8] dark:border-[#0f1410] object-cover"
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.55 + i * 0.08 }}
                      />
                    ))}
                  </div>
                  <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-snug">
                    Join <span className="font-bold text-gray-800 dark:text-gray-200">50K+</span> food lovers
                    <br />cooking smarter everyday!
                  </p>
                </div>
              </motion.div>

              {/* RIGHT: Floating cards */}
              <div className="hidden lg:flex relative flex-1 h-full items-center justify-end" style={{ minHeight: 520 }}>

                {/* Card 1 — AI Chef greeting */}
                <motion.div
                  className="absolute top-8 right-2 z-20 w-[238px]"
                  initial={{ opacity: 0, y: -22, scale: 0.88 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.55, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    animate={floatUp.animate}
                    transition={floatUp.transition}
                    className="bg-white/90 dark:bg-[#1c2b1e]/90 backdrop-blur-md rounded-2xl px-5 py-4 border border-white/70 dark:border-white/10"
                    style={{ boxShadow: "0 18px 50px rgba(0,0,0,0.13), 0 2px 10px rgba(0,0,0,0.07)" }}
                  >
                    <div className="absolute inset-x-0 top-0 h-1/2 rounded-t-2xl pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.55), transparent)" }} />
                    <p className="font-bold text-[14px] text-gray-900 dark:text-white mb-1 relative z-10">👋 Hello, I'm AI Chef</p>
                    <p className="text-gray-500 dark:text-gray-400 text-[13px] leading-snug relative z-10">What would you like to cook today?</p>
                    <Waveform />
                  </motion.div>
                </motion.div>

                {/* Card 2 — Ingredient picker */}
                <motion.div
                  className="absolute bottom-10 right-2 z-20 w-[300px]"
                  initial={{ opacity: 0, y: 22, scale: 0.88 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.75, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    animate={floatDown.animate}
                    transition={floatDown.transition}
                    className="bg-white/90 dark:bg-[#1c2b1e]/90 backdrop-blur-md rounded-2xl px-5 py-4 border border-white/70 dark:border-white/10"
                    style={{ boxShadow: "0 18px 50px rgba(0,0,0,0.13), 0 2px 10px rgba(0,0,0,0.07)" }}
                  >
                    <div className="absolute inset-x-0 top-0 h-1/2 rounded-t-2xl pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.55), transparent)" }} />
                    <div className="flex items-center justify-between gap-2 relative z-10">
                      {ingredients.map((ing, i) => (
                        <motion.div
                          key={ing.label}
                          className="flex flex-col items-center gap-1.5 cursor-pointer"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.85 + i * 0.09 }}
                          whileHover={{ y: -3, transition: { duration: 0.2 } }}
                        >
                          <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl border border-gray-100 shadow-md" style={{ background: "linear-gradient(135deg, #f8f6f0, #edeae0)" }}>
                            {ing.emoji}
                          </div>
                          <span className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">{ing.label}</span>
                        </motion.div>
                      ))}
                      <motion.div
                        className="flex flex-col items-center gap-1.5 cursor-pointer"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.25 }}
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      >
                        <div className="w-12 h-12 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-400 dark:text-gray-500 text-xl font-light">+</div>
                        <span className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">More</span>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORY TAB NAVBAR + DISH GRID ─────────────────────────────────── */}
      <div className="w-full">
        <div className="sticky top-0 z-20 bg-[#F9F7F4] dark:bg-[#121413] border-b border-black/8 dark:border-white/8 shadow-sm">
          <div className="max-w-7xl mx-auto px-3 sm:px-6">
            <div
              className="flex overflow-x-auto scrollbar-hide gap-1 py-0"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              role="tablist"
              aria-label="Recipe categories"
            >
              {categories.map((cat, i) => (
                <CategoryCard
                  key={cat.title}
                  category={cat}
                  index={i}
                  isActive={activeCategory === cat.title}
                  onClick={handleCategoryClick}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-6 pt-5 pb-10">
          <div className="flex items-center gap-2 mb-4 sm:mb-5">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{activeCategory}</h2>
            <span className="text-[11px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-[#6BA539]/10 text-[#6BA539]">
              {activeDishes.length} recipes
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5"
            >
              {visibleDishes.map((dish, idx) => (
                <DishCard
                  key={dish.title}
                  dish={dish}
                  index={idx}
                  liked={liked}
                  onToggleLike={toggleLike}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {activeDishes.length > 8 && (
            <div className="flex justify-center mt-6 sm:mt-8">
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={() => setShowAll((prev) => !prev)}
                className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border-2 border-[#6BA539] text-[#6BA539] font-semibold text-sm sm:text-base hover:bg-[#6BA539] hover:text-white transition-colors duration-200"
              >
                {showAll ? "Show less" : `View all recipes (${activeDishes.length - 8} more)`}
              </motion.button>
            </div>
          )}
        </div>
      </div>

      {/* ── POPULAR RECIPES ──────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 pb-14">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Popular Recipes</h2>
          <button className="text-[#3a7d44] hover:text-[#2d6235] font-medium transition flex items-center gap-1 text-sm">
            View all <ChevronRight size={15} />
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recipes.map((recipe, i) => (
            <RecipeCard
              key={recipe.title}
              recipe={recipe}
              index={i}
              liked={liked}
              onToggleLike={toggleLike}
            />
          ))}
        </div>
      </div>

      {/* ── ASK AI CHEF ──────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-br from-[#eef6ee] to-[#f5f0e8] dark:from-[#1a2e1c] dark:to-[#1a1f1a] border border-green-200/60 dark:border-green-800/30 rounded-[32px] p-10 flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-green-300/10 rounded-full blur-3xl pointer-events-none" />
          <div className="flex-1 relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#3a7d44] flex items-center justify-center shadow-lg">
                <Sparkles size={18} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold">Ask AI Chef</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-base mb-8 max-w-sm">
              Get personalized recipe suggestions, cooking tips, and step-by-step guidance powered by AI.
            </p>
            <div className="bg-white/80 dark:bg-black/30 border border-black/10 dark:border-white/10 rounded-2xl p-4 mb-8 max-w-sm">
              <div className="flex items-start gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-slate-400 mb-1">You</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">What can I cook with chicken and broccoli?</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-[#3a7d44] flex-shrink-0 mt-0.5 flex items-center justify-center">
                  <Sparkles size={10} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 mb-1">AI Chef</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">Try a Chicken Broccoli Stir-fry! Ready in 20 mins...</p>
                </div>
              </div>
            </div>
            <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#3a7d44] hover:bg-[#2d6235] text-white font-semibold transition-all duration-300 shadow-lg shadow-green-700/25 hover:-translate-y-0.5">
              <Sparkles size={15} />
              Start Chatting
            </button>
          </div>
          <div className="w-44 h-56 relative z-10 flex-shrink-0 flex items-center justify-center text-8xl select-none">🤖</div>
        </motion.div>
      </div>

    </div>
  );
}

import './App.css';
import Header_categories from './components/header-categories/Header_categories';
import Header from './components/header/Header.jsx';
import Header_bottom from './components/header_bottom/Bottom.jsx'
import Corusel from './components/corusel-side/Corusel';
import Corusel_compain from './components/corusel_companies/Corusel_compain';
// import Pop_carusel from './components/Popular-carusel/Pop_carusel';
import Cards from './components/Cards/Cards';
import Scaner from './components/scaner_app/Scaner.jsx'
import Main_categry from './components/main-category/Main_category.jsx'
import Others from './components/others_buttons/Others';
import Footer from './components/footer/Footer';
import Footer_bottom from './components/footer_bottom/Footer_bottom.jsx'

 
function App() {

  return (
    <div className="App">
      <Header_categories />
      <Header/>
      <Header_bottom/>
      <Corusel/>
      <Corusel_compain />
      {/* <Pop_carusel/> */}
      {/* ustoz keyin commitlarni xam ochib ko'ring xato bor ekan to'girlolmadim iltimos */}
      <Cards/>
      <Scaner/>
      <Main_categry/>
      <Others/>
      <Footer/>
      <Footer_bottom/>
    </div>
  );
}

export default App;
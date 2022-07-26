import DirectoryCard from "./components/directory-card/directory-card.component.js/directory-card.component";
import FeaturedProducts from "./components/featured-products/featured-products.component";
import HeaderTop from "./components/header-top/header-top.component";
import Header from "./components/header/header.component";
import OfferEnding from "./components/offer-ending/offer-ending.component";
import Slider from "./components/slider/slider.component";

const App = () => {
  return (
    <div>
      <HeaderTop />
      <Header />
      <Slider />
      <FeaturedProducts />
      <DirectoryCard />
      <OfferEnding />
    </div>
  );
};

export default App;

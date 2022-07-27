import Slider from "../../components/slider/slider.component";
import FeaturedProducts from "../../components/featured-products/featured-products.component";
import DirectoryCard from "../../components/directory-card/directory-card.component.js/directory-card.component";
import OfferEnding from "../../components/offer-ending/offer-ending.component";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts />
      <DirectoryCard />
      <OfferEnding />
    </div>
  );
};

export default Home;

import Search from "../../components/search/search.component";

const Shop = () => {
  return (
    <div className="shop">
      <h1 className="display-4 bg-gray py-4 text-center">Shop page</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Search />
          </div>
          <div className="col-md-9">content</div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

import MainLayout from "../components/MainLayout";
import { Products } from "../lib/endpoints";
import { useEffect, useState } from "react";
import ProductCard  from '../components/ProductCard';
import ServiceCard from '../components/ServiceCard';

const locationData = [
  "Airport Ridge",
  "Anaji",
  "Apowa",
  "Apremdo",
  "Beach Road",
  "Effiakuma",
  "I Adu",
  "Kansaworodo",
  "Kwesimintsim",
  "Lagos Town",
  "Market Circle",
  "Mpatado",
  "New Site",
  "New Takoradi",
  "Nkotompo",
  "Nkroful",
  "Ntankoful",
  "Sekondi",
  "Tanokrom",
  "Whindo"
]

const categoryData = [
  {'key':'SP', 'name': 'Sport Wears'},
  {'key':'EL', 'name':'Electronics'},
  // {'key':'FTF', 'name': 'Fashion, Textiles and Fabrics'},
  // {'key':'JGP', 'name':'Jewellery, Gifts and Parcels'},
  // {'key':'SSF', 'name':'Shoes, Sandals and Footwears'},
  // {'key':'AT', 'name':'Automobile and Transport'},
  // {'key':'BOS', 'name':'Books and Office Supplies'},
  // {'key':'LFD', 'name':'Lights, Furniture and Decor'},
  // {'key':'BeL', 'name':'Beauty and Lifestyle'},
  // {'key':'BaL', 'name':'Bags and Luggage'},
  // {'key':'EGG', 'name':'Electronics, Gadgets and Garden Equipment'},
  // {'key':'TBP', 'name':'Toiletries / Baby Products'},
  // {'key':'PTC', 'name':'Phones, Tablets and Computers'},
  // {'key':'GrP', 'name':'Groceries and Provisions'},
  // {'key':'SE', 'name':'services'},
  // {'key':'ITM', 'name':'Industrial Tools and Machinery'},
  // {'key':'REP', 'name':'Real Estates and Properties'},
  // {'key':'HeP', 'name':'Health and Pharmaceuticals'},
  // {'key':'PlP','name':'Plastics and Rubbers'}
]

const maxPriceFilters = [
      {'key':'100000', 'value':'100,000'},
      {'key':'10000', 'value':'10,000'},
      {'key':'1000', 'value':'1,000'},
      {'key':'100', 'value':'100'},
      {'key':'10', 'value':'10'},  
  ]

  const minPriceFilters = [
    {'key':'1', 'value':'1'},
    {'key':'10', 'value':'10'},
    {'key':'100', 'value':'100'},
    {'key':'1000', 'value':'1,000'},
    {'key':'10000', 'value':'10,000'},
    {'key':'100000', 'value':'100,000'}, 
]

const disabled = {};
interface IPaginateProps {
  callback(i: number): void;
  recordsPerpage: number;
  totalRecords: number;
}
const Pagination = ({
  callback,
  recordsPerpage,
  totalRecords,
}: IPaginateProps) => {
  const [iter, setIter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const tr = Math.ceil(totalRecords / recordsPerpage);
    if (tr > 0) setIter(Array(tr).fill(0));
  }, [totalRecords]);

  return (
    <div className="col-md-12">
      <div className="pagination ml-auto" style={{ float: "right" }}>
        <a
          href="#"
          onClick={() => {
            if (currentPage != 1) {
              callback(currentPage - 1);
              setCurrentPage(currentPage - 1);
            }
          }}
          style={
            currentPage == 1 ? { color: "gray", pointerEvents: "none" } : null
          }
        >
          « Prev
        </a>

        {iter.map((_, index: number) => {
          return (
            <a
              key={index}
              href="#"
              onClick={() => {
                setCurrentPage(index + 1);
                callback(index + 1);
              }}
              className={currentPage == index + 1 ? "active" : ""}
            >
              {index + 1}
            </a>
          );
        })}
        <a
          href="#"
          onClick={() => {
            if (currentPage < Math.ceil(totalRecords / recordsPerpage)) {
              callback(currentPage + 1);
              setCurrentPage(currentPage + 1);
            }
          }}
          style={
            currentPage >= Math.ceil(totalRecords / recordsPerpage)
              ? { color: "gray", pointerEvents: "none" }
              : null
          }
        >
          Next »
        </a>
      </div>
    </div>
  );
};
export default function ProductsView() {
  const [allproducts, setAllProducts] = useState([]);
  const [categoryFilterName, setCategoryFilterName] = useState("Category");
  const [typeFilterName, setTypeFilterName] = useState("Type");
  const [locationFilterName, setLocationFilterName] = useState("Location");
  const [minPriceFilterName, setMinPriceFilterName] = useState("Minimum Price");
  const [maxPriceFilterName, setMaxPriceFilterName] = useState("Maximum Price");
  const [altProductsList, setAltProductsList] = useState([]);
  const [tempList, setTempList] = useState([]);
  const [totalRecords, settotalRecords] = useState(0);
  const [recordsPerPage] = useState(15);

  useEffect(() => {
    (async () => {
      const rs = await new Products().getProducts();
      console.log(rs);
      setTempList(rs);
      setAltProductsList(rs);
      setAllProducts(rs.slice(0, recordsPerPage));
      // setIsLoading(false);
      settotalRecords(rs.length);
    })();
  }, []);

  const typeFilter = (type: string) => {
    let products = altProductsList;
    let rs: any[];
    if (type == 'ALL') {
      setTempList(products);
      setAllProducts(products.slice(0, recordsPerPage));
    } else {
      rs = products.filter((item) => item.product_type === type);
      setTempList(rs);
      setAllProducts(rs.slice(0, recordsPerPage));
    }
  }

  const categoryFilter = (type: string) => {
      let products = altProductsList;
      let rs: any[];
      rs = products.filter((item) => item.category === type);
      setTempList(rs);
      setAllProducts(rs.slice(0, recordsPerPage));
  }

  const locationFilter = (type: string) => {
    let rs = altProductsList;
    if (type == 'ALL') {
      rs = allproducts;
      setAllProducts(rs.slice(0, recordsPerPage));
    } else {
      rs = allproducts.filter((item) => item.product_type === type);
      setAllProducts(rs.slice(0, recordsPerPage));
    }
  }

  const minPriceFilter = (price: string) => {
      let products = altProductsList;
      let rs: any[];
      rs = products.filter((item) => item.price >= parseFloat(price));
      setTempList(rs);
      setAllProducts(rs.slice(0, recordsPerPage));
  }

  const maxPriceFilter = (price: string) => {
      let products = altProductsList;
      let rs: any[];
      rs = products.filter((item) => item.product_type <= parseFloat(price));
      setTempList(rs);
      setAllProducts(rs.slice(0, recordsPerPage));
  }
  

  const paginate = (page: number) => {
    const start = (page - 1) * recordsPerPage + 1;
    const end = start + recordsPerPage;
    console.log(start, end);
    const ts = tempList.slice(start - 1, end - 1);
    setAllProducts(ts);
  };

  return (
    <>
      <MainLayout>
      <div>
        <div className="container" id= "header__container" style={{width: "100%"}}>
              <div id="marketCarouselIndicators" className="carousel slide" data-ride="carousel" style={{padding: "20px"}}>
                <ol className="carousel-indicators" id="carousel-indicators">
                  <li id="market-carousel-item-1" data-target="#marketCarouselIndicators" data-slide-to="0" className="active"></li>
                  <li id="market-carousel-item-2" data-target="#marketCarouselIndicators" data-slide-to="1"></li>
                  <li id="market-carousel-item-3" data-target="#marketCarouselIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" id="carousel-inner">
                  <div className="carousel-item active" id="carousel-item-1" data-interval="2000">
                    <img id="carousel-item-1__image" src="/assets/images/slider_image.jpg" className="d-block w-100" alt="..." />
                    {/* <div className="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div> */}
                  </div>
                  <div className="carousel-item" id="carousel-item-2" data-interval="2000">
                    <img id="carousel-item-2__image" src="/assets/images/slider_image.jpg" className="d-block w-100" alt="..." />
                    {/* <div className="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div> */}
                  </div>
                  <div className="carousel-item" id="carousel-item-3" data-interval="2000">
                    <img id="carousel-item-3__image" src="/assets/images/slider_image.jpg" className="d-block w-100" alt="..." />
                    {/* <div className="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div> */}
                  </div>
                </div>
                <a id="carousel-control-prev" className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" id="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span id="prev" className="sr-only">Previous</span>
                </a>
                <a id="carousel-control-next" className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span id="carousel-control-next-icon" className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span id ="next" className="sr-only">Next</span>
                </a>
            </div>

            <div className="row" id="filtersrow" style={{margin:"0 auto", padding: "30px",}}>
              <div className="col-md-2" id="categoryfilter__div">
                <div className="dropdown" id="categoryfilter">
                  <button 
                    className="btn btn-light dropdown-toggle" 
                    type="button" id="categoryDropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                    style={{}}
                    >
                    {categoryFilterName}
                  </button>
                  <div className="dropdown-menu" id="categoryDropdown__items"  aria-labelledby="dropdownMenuButton">
                    {categoryData.map((category: any, index: number) => {
                      return (
                        <a className="dropdown-item" href="#" key = {index}  onClick={()=> { setCategoryFilterName(category.name); categoryFilter(category.key)}}>{category.name}</a>
                      );
                    })}   
                  </div>
                </div>
              </div>
              <div className="col-md-2" id="typefilterdiv">
                <div className="dropdown" id="typefilter">
                  <button 
                    className="btn btn-light dropdown-toggle" 
                    type="button" id="typeDropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                    style={{}}
                    >
                    {typeFilterName}
                  </button>
                  <div className="dropdown-menu" id="typeDropdown__items" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#" onClick={()=> {setTypeFilterName('All'); typeFilter('ALL')}}>All</a>
                    <a className="dropdown-item" href="#" onClick={()=> { setTypeFilterName('Products'); typeFilter('PR')}}>Products</a>
                    <a className="dropdown-item" href="#" onClick={()=> {setTypeFilterName('Services'); typeFilter('SE')}}>Services</a>
                  </div>
                </div>
              </div>
              <div className="col-md-2" id="locationfilter__div">
                <div className="dropdown" id="locationfilter">
                  <button 
                    className="btn btn-light dropdown-toggle" 
                    type="button" 
                    id="locationDropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                    style={{}}
                    >
                    {locationFilterName}
                  </button>
                  <div className="dropdown-menu" id="locationdropdown__items" aria-labelledby="dropdownMenuButton">
                  {locationData.map((location: any, index: number) => {
                      return (
                        <a className="dropdown-item" key={index} href="#" onClick={()=> {setLocationFilterName(location);}}>{location}</a>
                      );
                    })}  
                  </div>
                </div>
              </div>
              <div className="col-md-2" id="minpricefilter__div">
                <div className="dropdown" id="minpricefilter">
                  <button 
                    className="btn btn-light dropdown-toggle" 
                    type="button" 
                    id="minPriceDropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                    style={{}}
                    >
                    {minPriceFilterName}
                  </button>
                  <div className="dropdown-menu" id="minpricedropdown__items" aria-labelledby="dropdownMenuButton">
                  {minPriceFilters.map((price: any, index: number) => {
                      return (
                        <a className="dropdown-item" key={index} href="#" onClick={()=> {setMinPriceFilterName(price.value); minPriceFilter(price.key)}}>{price.value}</a>
                      );
                    })}   
                  </div>
                </div>
              </div>
              <div className="col-md-2" id="maxpricefilter__div">
                <div className="dropdown" id="maxpricefilter"> 
                  <button 
                    className="btn btn-light dropdown-toggle" 
                    type="button" 
                    id="maxPriceDropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                    style={{}}
                    >
                    {maxPriceFilterName}
                  </button>
                  <div className="dropdown-menu" id="maxpricedropdown_items" aria-labelledby="dropdownMenuButton">
                  {maxPriceFilters.map((price: any, index: number) => {
                      return (
                        <a className="dropdown-item" key = {index} href="#" onClick={()=> {setMaxPriceFilterName(price.value); maxPriceFilter(price.key)}}>{price.value}</a>
                      );
                    })}  
                  </div>
                </div>
              </div>
            </div>
        </div>  
            <div className="row" id="product-row">
              {allproducts.map((product: any, index: number) => {
                  return (
                   product.product_type === 'PR' ? 
                      <ProductCard key={index} product={product}/>
                    : 
                      <ServiceCard key={index} service={product}/>
                );
              })}  
              
            </div>
                  
            <div
              className="row" id="paginate-row"
              style={{ margin: "10px", background: "#ffffff" }}
            >
              <Pagination
                callback={paginate}
                totalRecords={totalRecords}
                recordsPerpage={recordsPerPage}
              />
            </div>
          </div>
      </MainLayout>
    </>
  );
}

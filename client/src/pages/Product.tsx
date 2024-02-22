import Region from "../components/components_product/Region";
import Topics from "../components/components_product/Topics";
import Trends from "../components/components_product/Trends";

interface TypeProduct {
  searchValue: string;
}

const Product: React.FC<TypeProduct> = ({ searchValue }) => {
  
  return (
    <>
      <Region searchValue={searchValue}/>
      <Trends searchValue={searchValue}/>
      <Topics searchValue={searchValue}/>
    </>
  );
};

export default Product;

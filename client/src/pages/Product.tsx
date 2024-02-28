import { useEffect, useState } from "react";
import Region from "../components/components_product/Region";
// import Topics from "../components/components_product/Topics";
import Skeleton from "../components/Skeleton";

interface TypeProduct {
  searchValue: string;
}

const Product: React.FC<TypeProduct> = ({ searchValue }) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Skeleton />;
  }

  return (
    <>
      <Region searchValue={searchValue} />
    </>
  );
};

export default Product;

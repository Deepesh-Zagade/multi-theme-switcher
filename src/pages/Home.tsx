import { useEffect, useState } from "react";
import Product from "../components/Product";
import Shimmer from "../components/Shimmer";
import { useTheme } from "../utils/contexts/ThemeContext";

export default function Home() {

  const { theme } = useTheme()

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const products = await response.json();
      setProductList(products);
    } catch (error) {
      setLoading(false)
      throw new Error(`Failed to fetch products, ${error}`)
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={`page ${theme === 'theme2' ? "mt-0" : "mt-40 md:mt-20"}`}>
      {
        loading ? (
          // shimmer UI for loading state
          <div className="flex flex-wrap items-center justify-around">
            {[...Array(30).keys()].map((item) => <Shimmer key={item} />)}
          </div>
        ) : productList.length > 0 ? (
          // mapping produts if products present
          <div className="flex flex-wrap md:gap-3 justify-around items-center">
            {productList.map((item, index) => <Product key={index} data={item} />)}
          </ div>
        ) : (
          // message if products empty
          <h1>No Products found</h1>
        )
      }
    </div>
  );
}

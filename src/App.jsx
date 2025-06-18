import { ConfigProvider } from "antd";
import "./App.css";
import AllRoutes from "./routes";
import themes from "./theme";
import { useEffect, useState } from "react";
import { socket } from "./services/socket";
import NewProductAlert from "./components/new-product-alert";

function App() {
  const [newProduct, setNewProduct] = useState(null);

  useEffect(() => {
    socket.on("new-product", (product) => {
      console.log("New product received:", product);

      setNewProduct(product);
    });

    return () => {
      socket.off("new-product");
    };
  }, []);
  return (
    <>
      {newProduct && (
        <NewProductAlert
          title={newProduct.name}
          description={newProduct.description}
          image={newProduct.images[0]}
          price={newProduct.price}
          handleCloseAlert={() => setNewProduct(null)}
        />
      )}
      <ConfigProvider theme={themes}>
        <AllRoutes />
      </ConfigProvider>
    </>
  );
}

export default App;

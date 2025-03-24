export const APP_ROUTES = {
  public: {
    HOME: "/",
    SIGNUP: "/signup",
    LOGIN: "/login",
    CART: "/cart",
  },

  private_admin: {
    HOME: "/",
    LOGIN: "/login",
    CATEGORY: "/category",
    PRODUCTS: (categoryId) => `/products/${categoryId}`,
    ORDERS: "/orders",
  },
  private_customer: {
    PRODUCT_LISTING: "/products",
    LOGIN: "/login",
    CATEGORY: "/category",
    // PRODUCTS: (categoryId) => `/products/${categoryId}`,
    ORDERS: "/orders",
  },
};

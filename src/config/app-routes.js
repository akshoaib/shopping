export const APP_ROUTES = {
  public: {
    LOGIN: "/login",
    SIGNUP: "/signup",
    HOME: "/",
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

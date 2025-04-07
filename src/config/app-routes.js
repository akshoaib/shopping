export const APP_ROUTES = {
  public: {
    HOME: "/",
    SIGNUP: "/signup",
    LOGIN: "/login",
    REGISTER: "/signup",
    CART: "/cart",
    PRODUCTS_LISTING: (categoryId) => `/products-listing/${categoryId}`,
    BLOG: "/blog",
  },

  private_admin: {
    HOME: "/",
    LOGIN: "/login",
    CATEGORY: "/category",
    PRODUCTS: (categoryId) => `/products/${categoryId}`,
    ORDERS: "/orders",
  },
  private_customer: {
    HOME: "/",
    // PRODUCT_LISTING: "/products",
    PRODUCTS_LISTING: (categoryId) => `/products-listing/${categoryId}`,

    LOGIN: "/login",
    CATEGORY: "/category",
    // PRODUCTS: (categoryId) => `/products/${categoryId}`,s
    ORDERS: "/orders",
    CART: "/cart",
    CHECKOUT: "/checkout",
    BLOG: "/blog",
  },
};

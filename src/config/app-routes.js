export const APP_ROUTES = {
  public: {
    HOME: "/",
    SIGNUP: "/signup",
    LOGIN: "/login",
    REGISTER: "/signup",
    CART: "/cart",
    PRODUCTS_LISTING: (categoryId) => `/products-listing/${categoryId}`,
    BLOG: "/blog",
    ABOUT: "/about-us",
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
    PRODUCTS_LISTING: (categoryId) => `/products-listing/${categoryId}`,
    LOGIN: "/login",
    CATEGORY: "/category",
    ORDERS: "/orders",
    CART: "/cart",
    CHECKOUT: "/checkout",
    BLOG: "/blog",
    ABOUT: "/about-us",
    USER_ORDERS: "/user-orders",
  },
};

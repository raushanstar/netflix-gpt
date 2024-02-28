// require("dotenv").config();

export const api_options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjhmY2M0MTkyNDJlNmI3N2MxNzc3NWM3NjBkNWM2YiIsInN1YiI6IjYwZWRkN2VlMTM0ZDU4MDA3NDkyMGYzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KI5kIdKwgJ7lPLmEDBkPSNuHX0rBb7rRq_t8sJ_6fDA",
  },
};

export const netflix_logo =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const background =
  "https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const google_api = process.env.REACT_APP_bard_api;

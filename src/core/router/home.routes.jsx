import React from "react";
import HomePage from "../../views/pages/home";
import ContactPage from "../../views/pages/contact";
import HomeLayout from "../../views/layout/home";

export const homeRoutes = {
  path: "/",
  element: <HomeLayout/> ,
  children: [
    { index: true, element: <HomePage/> },
    { path: "contact", element: <ContactPage/> },
  ],
};

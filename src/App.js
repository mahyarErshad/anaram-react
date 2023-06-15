import React, { lazy, Suspense } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import PageLayout from "./Pages/PageLayout/PageLayout";
import MainPageWrapper from "./Pages/MainPage/MainPageWrapper/MainPageWrapper";
import ProductsPage from "./Pages/ProductsPage/ProductsPageContainer/ProductsPage";
import SingleProductPage from "./Pages/SingleProduct/SingleProductPage/SingleProductPage";
import Loading from "./Components/Utils/Loading/Loading";
const LazyAboutUs = lazy(() => import("./Pages/AboutUs/AboutUs"));
const LazyContactUs = lazy(() => import("./Pages/ContactUs/ContactUs"));
const LazyCart = lazy(() => import("./Pages/CartPage/CartPage"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route index element={<MainPageWrapper />} />
      <Route path="products">
        <Route index element={<ProductsPage />} />
        <Route path="product/:id" element={<SingleProductPage />} />
      </Route>
      <Route
        path="about"
        element={
          <Suspense fallback={<Loading />}>
            <LazyAboutUs />
          </Suspense>
        }
      />
      <Route
        path="contact"
        element={
          <Suspense fallback={<Loading />}>
            <LazyContactUs />
          </Suspense>
        }
      />
      <Route
        path="cart"
        element={
          <Suspense fallback={<Loading />}>
            <LazyContactUs />
          </Suspense>
        }
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

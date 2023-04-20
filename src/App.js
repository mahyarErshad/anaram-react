import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import PageLayout from "./Pages/PageLayout/PageLayout";
import MainPageWrapper from "./Pages/MainPage/MainPageWrapper/MainPageWrapper";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route index element={<MainPageWrapper />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

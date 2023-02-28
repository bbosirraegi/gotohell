import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../components";
import { About, Main } from "./pages";
import Privacy from "../components/BestTopic/Copyright/Privacy";



const IndexRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default IndexRouter;
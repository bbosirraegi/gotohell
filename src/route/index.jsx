import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../components";
import Privacy_Page from "../components/BestTopic/Copyright/Privacy_Page";
import Service_Information from "../components/BestTopic/Copyright/Service_Infromation";
import Terms_Page from "../components/BestTopic/Copyright/Terms_Page";
import { About, Main } from "./pages";

const IndexRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route>
      <Route path="/Privacy_Page" element={<Privacy_Page />} />
      <Route path="/Service_Information" element={<Service_Information/>} />
      <Route path="Terms_Page" element={<Terms_Page/>}/>
      </Route>
    </Routes>
  );
};

export default IndexRouter;

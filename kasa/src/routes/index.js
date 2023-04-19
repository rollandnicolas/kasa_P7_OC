import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Ab from "../pages/About";
import Error from "../pages/Error";
import Logement from "../pages/Logement";

const index = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Ab />} />
            <Route path="logement/:LogementId" element={<Logement />} />
            <Route path="/*" element={<Error />} />
        </Routes>
    );
};

export default index;


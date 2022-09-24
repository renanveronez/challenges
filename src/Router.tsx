import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./styles/DefaultLayout";

import { Home } from "./Pages/Home";
import { Codes } from "./Pages/Codes";
import { Tests } from "./Pages/Tests"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/codes" element={<Codes />} />
        <Route path="/tests" element={<Tests />} />
      </Route>
    </Routes>
  )
}
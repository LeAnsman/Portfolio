import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Resume from "./pages/Resume";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

export default App;

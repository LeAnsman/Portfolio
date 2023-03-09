import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Resume from "./pages/Resume";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <ToastContainer
        className={"max-w-[480px]"}
        position="top-center"
        pauseOnHover={false}
        newestOnTop
        draggable
        autoClose={3000}
        toastClassName={"rounded-xl transition duration-300"}
        bodyClassName={"text-center text-lg mx-2"}
      />
    </>
  );
}

export default App;

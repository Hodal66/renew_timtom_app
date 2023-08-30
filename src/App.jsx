/* eslint-disable react/jsx-no-undef */
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";
import "./index.css";
import styles from "./components/Style";
import HomePage from "./pages/homePage/HomePage";

function App() {
  const [loading, setLoading] = useState(false);
  //const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <div className="loaderSpinner">
      <div>
        {loading ? (
          <div
            className={`${styles.boxWidth} h-full
          flex justify-center items-center text-center mt-[25%] flex-col gap-10`}
          >
            <HashLoader
              color="#6436d6"
              cssOverride={{}}
              loading={loading}
              size={80}
              aria-label="Loading Spinner"
              data-testid="loader"
              speedMultiplier={2}
            />
            <h6 className="text-primary">Please Wait few seconds....</h6>
          </div>
        ) : (
          <BrowserRouter>

            <Routes>
              <Route exact path="/" element={<HomePage />} />
              {/* <Route path="/about_us" element={<AboutUs />} />
              <Route path="*" element={<ErrorPage />} /> */}
            </Routes>
          </BrowserRouter>
        )}
      </div>
    </div>
  );
}

export default App;

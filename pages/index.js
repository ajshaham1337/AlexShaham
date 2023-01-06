import * as React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Contact from "../components/Contact";
import About from "../components/About";

function Home() {
  return (
    <div className="page-container">
      <Header />
      <div className="content-wrap width-adjuster mx-auto">
        <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
          <About />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

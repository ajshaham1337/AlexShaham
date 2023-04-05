import Header from "/components/common/Header";
import Footer from "/components/common/Footer";
import Projects from "/components/Projects";

function Portfolio() {
  return (
    <div className="page-container">
      <Header />
      <div className="content-wrap">
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;

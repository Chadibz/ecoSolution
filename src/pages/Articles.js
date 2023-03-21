import Navbar from "./components/Navbar/Navbar";
import Articles from "./components/ArticlePage/articles";
import Footer from "./components/Footer";
export default function ArticlesPage() {
  return (
    <div className="bg_img">
      <div>
        <Navbar />
        <Articles />
        <Footer />
      </div>
    </div>
  );
}

import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

export default function Layout({ children }) {
  return (
    <>
      <NavigationBar />
      <Home />
      <Footer />
    </>
  );
}

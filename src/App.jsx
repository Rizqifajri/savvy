import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

function Layout({ children }) {
  return (
    <div>
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route path='/login-user' element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;

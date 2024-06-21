import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./components/Team";
import LoginPage from "./pages/LoginPage";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import DemoFeature from "./pages/DemoFeature";
import Savings from "./pages/Savings";
import { AuthMiddleware } from "./auth/middleware";
import RegisterPage from "./pages/RegisterPage";


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
        <Route
          path='/savvys-team'
          element={
            <Layout>
              <Team />
            </Layout>
          }
        />
        <Route path='/register' element={<RegisterPage/>}></Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/feature-demo' element={ <AuthMiddleware><DemoFeature /></AuthMiddleware>} />
        <Route path='/feature-demo/savings' element={<Savings />} />
      </Routes>
    </Router>
  );
}

export default App;

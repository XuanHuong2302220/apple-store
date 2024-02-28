import "./App.css";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "./components/routes";
import StorePage from "./pages/StorePage/StorePage";
function App() {
  return (
    <div>
      
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component
            return <Route key={index} path={route.path} element={<Page/>} />
          })}
        </Routes>
    </div>
  )
}

export default App;

import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Router";
import AuthProvider from "./components/auth/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );
}

export default App;

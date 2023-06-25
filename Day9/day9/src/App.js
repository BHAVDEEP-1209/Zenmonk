import "./Styles/App.scss";
import Login from "./pages/Login";
import Otp from "./pages/Otp";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResumeForm from "./pages/ResumeForm";
import Protected from "./components/Protected";
import { useSelector } from "react-redux";
import SignIn from "./pages/SignIn";

function App() {
  const isLoggedIn = useSelector((state) => state.reducer.user.user.isLoggedIn);

  const public1 = [
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/otp/:number",
      element: <Otp />,
    },
    {
      path: "*",
      element: <SignIn />,
    },
  ];
  const private1 = [
    {
      path: "/homepage",
      element: <HomePage />,
    },
    {
      path: "/resume",
      element: <ResumeForm />,
    },
    {
      path: "/resume/:editId",
      element: <ResumeForm />,
    }
  ];

  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Login />}/>
      <Route path="/otp/:number" element={<Otp />}/>
      <Route path="/homepage" element={<HomePage />}/>
      <Route path="/resume" element={<ResumeForm />}/>
      <Route path="*" element={<h1>Page not found!</h1>}/>                 */}

        {public1.map((ele) => {
          return <Route path={ele.path} element={ele.element} />;
        })}

        {isLoggedIn && (
          <>
            {private1.map((ele) => {
              return <Route path={ele.path} element={ele.element} />;
            })}
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;

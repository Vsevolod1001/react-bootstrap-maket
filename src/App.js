import { Header } from "./Components/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Blog } from "./Pages/Blog";
import { About } from "./Pages/About";
import { Contacts } from "./Pages/Contacts";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};

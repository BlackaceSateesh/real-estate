import { Route, Routes } from "react-router-dom";
import { AuthenticatedRoutes } from "../../constants/Routes";
import MainHome from "../layout/MainHome";
const Authenticate = () => {
  return (
    <>
      <Routes>
        <Route path={AuthenticatedRoutes.HOME} element={<MainHome />} />
      </Routes>
    </>
  );
};

export default Authenticate;

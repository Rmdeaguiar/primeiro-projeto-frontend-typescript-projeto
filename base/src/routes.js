import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import SignIn from "./pages/SignIn";

function MainRoutes(){
    return(
        <Routes>
            <Route path="/main" element={<Main/>}/>
            <Route path="/" element={<SignIn/>}/>
        </Routes>
        )
}

export default MainRoutes;
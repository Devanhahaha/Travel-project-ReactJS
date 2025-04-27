import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../style/style.css';
import Navbar from "./Navbar";
import Header from "./Header";
import Packages from "./Packages";
import Destinations from "./Destinations";


createRoot(document.getElementById("root"))
.render(
    <StrictMode>
        <Navbar />
        <Header />
        <Packages />
        <Destinations />
    </StrictMode>
)
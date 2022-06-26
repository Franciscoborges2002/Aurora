import { Route, Routes } from "react-router-dom";
import { Aurora } from "./pages/Aurora";
import { Event } from "./pages/Event";
import { Participants } from "./pages/Participants";
import { PeP } from "./pages/PeP";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<Aurora />} />

            <Route path="/event/:event/subscribe" element={<Subscribe />} />
            <Route path="/event" element={<Event />} />
            <Route path="/event/:event/lesson/:slug" element={<Event />} />
            <Route path="/event/:event/lesson/" element={<Event />} />
            <Route path="/event/:event/participants" element={<Participants />} />

            <Route path="/pep" element={<PeP />} />
        </Routes>
    );
}
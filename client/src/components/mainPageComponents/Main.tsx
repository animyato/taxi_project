import GreetingSection from "./sections/GreetingSection";
import BookingSection from "./sections/BookingSection";
import TarifSection from "./sections/TarifSection";
import InfoSection from "./sections/InfoSection";
import ClientSection from "./sections/ClientSection";

const Main = () => {

    return(
        <div>
            <GreetingSection />
            <BookingSection />
            <TarifSection />
            <InfoSection />
            <ClientSection />
        </div>
    )
}

export default Main
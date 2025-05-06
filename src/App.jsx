import Header from "./components/Header";
import EventCard from "./components/EventCard";
import EventDetails from "./components/EventDetails";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="flex flex-col lg:flex-row gap-6 p-4">
        <EventCard />
        <EventDetails />
      </main>
      <Footer />
    </div>
  );
}

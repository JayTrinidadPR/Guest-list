import { useState } from "react";
import { GUESTS } from "./data/guests";
import GuestList from "./components/GuestList";
import GuestDetails from "./components/GuestDetails";

export default function App() {
  const [selectedGuestId, setSelectedGuestId] = useState(null);

  const selectedGuest =
    GUESTS.find((guest) => guest.id === selectedGuestId) || null;

  return (
    <div className="app">
      <h1>Guest List</h1>

      {selectedGuest ? (
        <GuestDetails
          guest={selectedGuest}
          onBack={() => setSelectedGuestId(null)}
        />
      ) : (
        <GuestList
          guests={GUESTS}
          onSelect={setSelectedGuestId}
        />
      )}
    </div>
  );
}

import { useEffect, useState } from "react";
import GuestList from "./components/GuestList";
import GuestDetails from "./components/GuestDetails";

const API = "https://fsa-crud-2aa9294fe819.herokuapp.com/api/guest-list-justin";

// Fetch all guests
async function fetchGuests() {
  const response = await fetch(`${API}/guests`);
  const result = await response.json();
  return result.data; // array of guests
}

// Fetch one guest by id
async function fetchGuestDetails(id) {
  const response = await fetch(`${API}/guests/${id}`);
  const result = await response.json();
  return result.data; // single guest object
}

export default function App() {
  const [guests, setGuests] = useState([]);
  const [selectedGuestId, setSelectedGuestId] = useState(null);
  const [selectedGuest, setSelectedGuest] = useState(null);

  // Load list of guests on first render
  useEffect(() => {
    async function loadGuests() {
      try {
        const data = await fetchGuests();
        setGuests(data);
      } catch (err) {
        console.error("Failed to fetch guests:", err);
      }
    }

    loadGuests();
  }, []);

  // Load details when a guest is selected
  useEffect(() => {
    async function loadGuestDetails() {
      if (!selectedGuestId) {
        setSelectedGuest(null);
        return;
      }

      try {
        const data = await fetchGuestDetails(selectedGuestId);
        setSelectedGuest(data);
      } catch (err) {
        console.error("Failed to fetch guest details:", err);
      }
    }

    loadGuestDetails();
  }, [selectedGuestId]);

  return (
    <div className="app">
      <header className="header">
        <h1>Guest List</h1>
        <p>Click a guest to view details.</p>
      </header>

      {selectedGuest ? (
        <GuestDetails
          guest={selectedGuest}
          onBack={() => setSelectedGuestId(null)}
        />
      ) : (
        <GuestList guests={guests} onSelect={setSelectedGuestId} />
      )}
    </div>
  );
}
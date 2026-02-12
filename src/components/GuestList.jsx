export default function GuestList({ guests, onSelect }) {
  return (
    <div>
      <h2>Guests</h2>

      <ul>
        {guests.map((guest) => (
          <li key={guest.id}>
            <button onClick={() => onSelect(guest.id)}>
              <strong>{guest.name}</strong>
              <br />
              {guest.email}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

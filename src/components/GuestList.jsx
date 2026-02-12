export default function GuestList({ guests, onSelect, selectedId }) {
  return (
    <section className="card">
      <h1 className="title">Guest List</h1>

      <table className="guestTable">
        <thead>
          <tr>
            <th className="left">Name</th>
            <th className="left">Email</th>
            <th className="left">Phone</th>
          </tr>
        </thead>

        <tbody>
          {guests.map((guest) => (
            <tr
              key={guest.id}
              className={guest.id === selectedId ? "selectedRow" : ""}
              onClick={() => onSelect(guest.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") onSelect(guest.id);
              }}
            >
              <td>{guest.name}</td>
              <td>{guest.email}</td>
              <td>{guest.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="hint">Select a guest to see more details.</p>
    </section>
  );
}

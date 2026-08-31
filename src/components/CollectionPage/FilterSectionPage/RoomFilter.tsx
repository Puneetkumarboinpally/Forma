import { useFilterStore } from "../../../store/filterStore";

const rooms = [
  { id: "living-room", label: "Living Room", value: "living-room" },
  { id: "dining-room", label: "Dining Room", value: "dining-room" },
  { id: "bedroom", label: "Bedroom", value: "bedroom" },
  { id: "lighting", label: "Lighting", value: "lighting" },
];
export const RoomFilter = () => {
  const { room: selectedRoom, setRoom } = useFilterStore();
  return (
    <div className="filter-container">
      <h2>ROOM</h2>

      {rooms.map((room) => (
        <div className="grouped-input" key={room.id}>
          <input
            className="filter-input"
            type="radio"
            name="room"
            id={room.id}
            value={room.value}
            checked={selectedRoom === room.value}
            onChange={(e) => setRoom(e.target.value)}
          />

          <label className="filter-label" htmlFor={room.id}>
            {room.label}
          </label>
        </div>
      ))}
    </div>
  );
};

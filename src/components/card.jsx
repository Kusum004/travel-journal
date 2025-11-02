// src/components/Card.jsx
export default function Card(props) {
  return (
    <div style={{
      display: "flex",
      gap: "20px",
      padding: "20px",
      maxWidth: "500px",
      margin: "0 auto",
      borderBottom: "1px solid #ddd"
    }}>
      {/* Left Image */}
      <img
        src={props.imageUrl}
        alt={props.title}
        style={{
          width: "150px",
          height: "200px",
          borderRadius: "8px",
          objectFit: "cover"
        }}
      />

      {/* Right Content */}
      <div>
        {/* Location Row */}
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <span style={{ color: "red" }}>📍</span>
          <p style={{ letterSpacing: "2px" }}>{props.location}</p>
          <a href={props.googleMapsUrl} target="_blank" rel="noreferrer">
            View on Google Maps
          </a>
        </div>

        <h2 style={{ margin: "8px 0" }}>{props.title}</h2>

        <p style={{ fontWeight: "bold" }}>
          {props.startDate} - {props.endDate}
        </p>

        <p style={{ marginTop: "10px" }}>{props.description}</p>
      </div>
    </div>
  );
}

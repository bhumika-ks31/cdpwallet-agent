import { useState, useEffect } from "react";
import axios from "axios";

export default function MilestoneAgent({ token: incomingToken }) {
  const [verified, setVerified] = useState(false);
  const [token, setToken] = useState("");
  const [status, setStatus] = useState("");
  const [milestones, setMilestones] = useState([]);
  const [loadingId, setLoadingId] = useState(null);

  useEffect(() => {
    if (incomingToken && !verified) {
      setToken(incomingToken);
      handleVerify(incomingToken);
    }
  }, []);

  const handleVerify = async (usedToken = token) => {
    setStatus("🔐 Verifying...");
    try {
      const res = await axios.post("http://localhost:4000/verify-token", { token: usedToken });
      if (res.data.valid) {
        setStatus("✅ Access Granted");
        setVerified(true);
      } else {
        setStatus("❌ Invalid Token");
      }
    } catch {
      setStatus("❌ Server Error");
    }
  };

  const fetchMilestones = async () => {
    const res = await axios.get("http://localhost:4000/milestones");
    setMilestones(res.data);
  };

  useEffect(() => {
    if (verified) fetchMilestones();
  }, [verified]);

  const markComplete = async (id) => {
    setLoadingId(id);
    try {
      await axios.post("http://localhost:4000/milestones/complete", { id });
      await fetchMilestones();
    } catch {
      alert("❌ Payment failed.");
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: "24px", borderRadius: "16px", border: "1px solid #eaeaea", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", fontFamily: "Segoe UI, sans-serif" }}>
      <h2 style={{ textAlign: "center", marginBottom: "24px", color: "#333" }}>
        💰 CDP Milestone Agent
      </h2>

      {!verified && (
        <div style={{ textAlign: "center" }}>
          <input
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="🔑 Enter Access Token"
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              width: "60%",
              marginBottom: "12px",
              fontSize: "16px",
            }}
          />
          <br />
          <button
            onClick={() => handleVerify()}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Verify Token
          </button>
          <p style={{ marginTop: "12px", color: status.includes("✅") ? "green" : "red" }}>{status}</p>
        </div>
      )}

      {verified && (
        <div style={{ display: "grid", gap: "20px", marginTop: "30px" }}>
          {milestones.map((m) => (
            <div
              key={m.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "20px",
                backgroundColor: "#fafafa",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              }}
            >
              <h3 style={{ marginBottom: "8px" }}>{m.title}</h3>
              <p><strong>💸 Amount:</strong> {m.amount} ETH</p>
              <p><strong>👛 Wallet:</strong> {m.address}</p>
              <p>
                <strong>📌 Status:</strong>{" "}
                <span style={{ color: m.status === "paid" ? "green" : "#f39c12", fontWeight: "bold" }}>
                  {m.status.toUpperCase()}
                </span>
              </p>

              {m.status === "pending" ? (
                <button
                  onClick={() => markComplete(m.id)}
                  disabled={loadingId === m.id}
                  style={{
                    marginTop: "12px",
                    padding: "10px 16px",
                    backgroundColor: "#28a745",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  {loadingId === m.id ? "Processing..." : "✅ Complete & Payout"}
                </button>
              ) : (
                <p style={{ color: "green", fontWeight: "bold", marginTop: "12px" }}>
                  ✅ Already Paid
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

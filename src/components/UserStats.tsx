import React from "react";

export function UserStats() {
  return (
    <div className="stats shadow">
      <div className="stat place-items-center">
        <div className="stat-title">Users</div>
        <div className="stat-value text-secondary">4,200</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">New Registers</div>
        <div className="stat-value">1,200</div>
      </div>
    </div>
  );
}

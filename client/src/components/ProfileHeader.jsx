import React from "react";
import { Avatar } from "@mui/material/Avatar";

export default function ProfileHeader() {
  return (
    <>
      <div className="p-9 flex space-x-4 flex-wrap gap-2">
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
        />
      </div>
    </>
  );
}

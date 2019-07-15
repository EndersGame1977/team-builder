import React from "react";
import TeamMember from "./TeamMember";

export default function TeamMembers(props) {
  return (
    <div>
      {props.members.map(member => {
        return (
          <TeamMember
            key={member.email}
            member={member}
            editMember={props.editMember}
          />
        );
      })}
    </div>
  );
}

import React from "react";

export default function TeamMember(props) {
  return (
    <div>
      <div>First Name: {props.member.nameFirst}</div>
      <div>Last Name: {props.member.nameLast}</div>
      <div>Email: {props.member.email}</div>
      <div>Role: {props.member.role}</div>

      <button onClick={() => props.editMember(props.member)}>Edit</button>
    </div>
  );
}

import React, { useState } from "react";
import "./App.css";

import TeamMembers from "./TeamMembers";
import Form from "./Form";

function App() {
  const [members, setMembers] = useState([]);

  const [memberToEdit, setMemberToEdit] = useState(null);

  const [memberID, setMemberID] = useState(0);

  const editMember = member => {
    setMemberToEdit(member);
  };

  const updateMember = newMember => {
    const newMemberArray = members.map(member => {
      if (newMember.id === member.id) {
        member = newMember;
      }
      return member;
    });
    setMembers(newMemberArray);
    setMemberToEdit(null);
  };

  const addMember = member => {
    member.id = memberID;
    setMemberID(memberID + 1);
    setMembers([...members, member]);
  };

  return (
    <div className="App">
      <Form
        addMember={addMember}
        memberToEdit={memberToEdit}
        updateMember={updateMember}
      />
      <TeamMembers members={members} editMember={editMember} />
    </div>
  );
}

export default App;

// create form
// create inputs for fistname, lastname, email adress, and roll
// firstname and lastname are type text
// email is type email
// roll is type textarea
// give a name attribute like name="first name"
// value needs to be two-way data binding. meaning the value needs to be value={state}
// create hooks. I'm thinking one hook that has the state as an object so value will look like value={data.firstname}
// need an onChange attribute something like onChange={changHandler}
//onSubmit needs a event.preventDefault() in it
// const changeHandler = event => {
//   console.log(formState);
//   setFormState({
//     ...formState,
//     [event.target.name]: event.target.value + "i"
//   });
// };
// make a component to pass the data to and then map it and then display it
// <TeamMembers data={data} /> map data and pass to <TeamMember />

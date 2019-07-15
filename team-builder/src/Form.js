import React, { useState, useEffect } from "react";

export default function Form(props) {
  const [data, setData] = useState({
    nameFirst: "",
    nameLast: "",
    email: "",
    role: ""
  });

  const changeHandler = event => {
    console.log(event.target);
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const submitHandler = event => {
    event.preventDefault();
    if (props.memberToEdit) {
      props.updateMember(data);
    } else {
      props.addMember(data);
    }

    setData({
      nameFirst: "",
      nameLast: "",
      email: "",
      role: ""
    });
  };

  useEffect(() => {
    if (props.memberToEdit) {
      setData(props.memberToEdit);
    }
  }, [props.memberToEdit]);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="text"
            name="nameFirst"
            value={data.nameFirst}
            onChange={changeHandler}
            placeholder="first name"
          />
        </div>
        <div>
          <input
            type="text"
            name="nameLast"
            value={data.nameLast}
            onChange={changeHandler}
            placeholder="last name"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={changeHandler}
            placeholder="email"
          />
        </div>
        <div>
          <textarea
            rows="3"
            name="role"
            value={data.role}
            onChange={changeHandler}
            placeholder="role"
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

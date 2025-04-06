import React, { useState, useEffect } from "react";
import axios from "axios";
import "../registation/register.css"

const RegisterPage = () => {
  const [leader, setLeader] = useState({ name: "", email: "", phone: "" });
  const [members, setMembers] = useState([
    { name: "", phone: "" },
    { name: "", phone: "" },
    { name: "", phone: "" },
    { name: "", phone: "" },
  ]);
  const [idea, setIdea] = useState("");
  const [isValid, setIsValid] = useState(false);

  const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPhoneValid = (phone) => /^\d{10}$/.test(phone);
  const isUnique = (arr) => new Set(arr.map((x) => x.trim().toLowerCase())).size === arr.length;

  useEffect(() => {
    const allFilled =
      leader.name && leader.email && leader.phone && idea &&
      members.every((m) => m.name && m.phone);

    const emailValid = isEmailValid(leader.email);
    const phoneValid = isPhoneValid(leader.phone) && members.every((m) => isPhoneValid(m.phone));

    const nameUnique = isUnique([leader.name, ...members.map((m) => m.name)]);
    const phoneUnique = isUnique([leader.phone, ...members.map((m) => m.phone)]);

    setIsValid(allFilled && emailValid && phoneValid && nameUnique && phoneUnique);
  }, [leader, members, idea]);

  const handleMemberChange = (index, field, value) => {
    const updated = [...members];
    updated[index][field] = value;
    setMembers(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const payload = {
      leader,
      members,
      idea,
    };
  
    try {
      const res = await axios.post("http://localhost:8000/register", payload);
      alert("Form submitted successfully!");
      // Optionally reset fields
      setLeader({ name: "", email: "", phone: "" });
      setMembers([
        { name: "", phone: "" },
        { name: "", phone: "" },
        { name: "", phone: "" },
        { name: "", phone: "" },
      ]);
      setIdea("");
    } catch (err) {
      console.error(err);
      alert("Failed to submit form");
    }
  };

  return (
    <div className="register-background" id="register">
      <div className="register-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2>Register Your Idea</h2>

          <input placeholder="Leader Name" value={leader.name} onChange={(e) => setLeader({ ...leader, name: e.target.value })} />
          <input placeholder="Leader Email" value={leader.email} onChange={(e) => setLeader({ ...leader, email: e.target.value })} />
          <input placeholder="Leader Phone" value={leader.phone} maxLength={10} onChange={(e) => setLeader({ ...leader, phone: e.target.value.replace(/\D/g, "") })} />

          {members.map((member, i) => (
            <div key={i}>
              <input placeholder={`Member ${i + 1} Name`} value={member.name} onChange={(e) => handleMemberChange(i, "name", e.target.value)} />
              <input placeholder="Phone (10 digits)" value={member.phone} maxLength={10} onChange={(e) => handleMemberChange(i, "phone", e.target.value.replace(/\D/g, ""))} />
            </div>
          ))}

          <textarea placeholder="Your Idea..." value={idea} onChange={(e) => setIdea(e.target.value)} />

          <button type="submit" onSubmit={handleSubmit} disabled={!isValid}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

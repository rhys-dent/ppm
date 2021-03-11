import styled from "styled-components";
import emailjs, { init } from "emailjs-com";

const EmailFormS = styled.form`
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 1rem;
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    input {
      width: 100%;
      box-sizing: border-box;
    }
  }
  textarea {
    width: 100%;
    box-sizing: border-box;
    height: 100%;
    padding: 1rem;
  }
  button {
    text-align: center;
    width: 25%;
    margin-left: 37.5%;
    padding: 0;
  }
`;

export default function () {
  init("user_0aXrjbQ2eRrhjw2lcewWO");
  function submit(e) {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm(
        "service_xb1sh98",
        "template_9yrb69b",
        e.target,
        "user_0aXrjbQ2eRrhjw2lcewWO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <EmailFormS onSubmit={submit} className="frosted-glass">
      <div>
        <input type="text" placeholder="First Name" name="first_name" />
        <input type="text" placeholder="Last Name" name="last_name" />
        <input type="text" placeholder="Email" name="email" />
        <input type="text" placeholder="Phone" name="phone" />
      </div>
      <textarea cols="50" rows="10" name="message" />
      <br />
      <button>Send</button>
    </EmailFormS>
  );
}

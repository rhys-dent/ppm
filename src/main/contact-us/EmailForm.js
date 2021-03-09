import styled from "styled-components";

const EmailFormS = styled.form`
  width: 100%;
  margin: 0 auto;

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
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
  }
`;

export default function () {
  return (
    <EmailFormS className="frosted-glass">
      <div>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Phone" />
      </div>
      <div></div>
      <textarea cols="50" rows="10" />
      <br />
      <button>Send</button>
    </EmailFormS>
  );
}

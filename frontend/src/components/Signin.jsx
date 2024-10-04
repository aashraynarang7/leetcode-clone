import React, { useState } from "react";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import {app} from '../utils/firebase'
const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "http://localhost:5173/",
  // This must be true.
  handleCodeInApp: true,
};
const auth = getAuth(app);

const Signin = () => {
  const [emailval, setEmailval] = useState("");
  const HandleSubmit = async() => {
    await sendSignInLinkToEmail(auth, emailval, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // if they open the link on the same device.
        window.localStorage.setItem("emailForSignIn", emailval);
        alert("email sent")        

        // ...
      })
      .catch((error) => {
        alert("email not sent. "+error+ emailval)
        // ...
      });
  };
  return (
    <div>
      <form action="submit">
        <input style={{border:"1px solid black"}}
          placeholder="email"
          type="text"
          onChange={(e) => {
            setEmailval(e.target.value);
          }}
        />
        <button onClick={HandleSubmit}>send email</button>
      </form>
    </div>
  );
};

export default Signin;

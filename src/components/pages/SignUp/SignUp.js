
import React, { useState }  from "react"
import axios from "axios";
import '../SignUp/SignUp.css'
import Helmet from 'react-helmet'






function SignUp() {
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
      });
      const handleServerResponse = (ok, msg, form) => {
        setServerState({
          submitting: false,
          status: { ok, msg }
        });
        if (ok) {
          form.reset();
        }
      };

    
      const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
          method: "post",
          url: "https://getform.io/f/a5bd7840-377b-4857-934e-b058c13d4aad",
          data: new FormData(form)
        })
          .then(r => {
            handleServerResponse(true, "Thanks!", form);
          })
          .catch(r => {
            handleServerResponse(false, r.response.data.error, form);
          });
      };
    return (
        <>
          <Helmet bodyAttributes={{style: 'background-color: #1c2237'}} />
            <h1 className="title" >Get in Touch</h1>  
            <form action="https://getform.io/f/a5bd7840-377b-4857-934e-b058c13d4aad" className="box" onSubmit={handleOnSubmit}>
              <ul className="form-style-1">
              <li><label>Full Name</label><input  type="text" name="field1" className="field-divided1" placeholder="First" /><span className="lazyway" > break break break </span>
              <input height="100px" type="text" name="field2" className="field-divided2" placeholder="Last" /></li>
              <li className="email" >
                <label>Email</label>
                <input type="email" name="field3" className="field-long" />
              </li>   
              <li>
              </li>
              <li>
                <label>Your Message <span className="required"></span></label>
                <textarea name="field5" id="field5" className="field-long field-textarea"></textarea>
               
              </li>

                <button className="btn" type="submit" disabled={serverState.submitting} > Submit </button>
                {serverState.status && (
                              <p className={!serverState.status.ok ? "errorMsg" : ""}>
                              {serverState.status.msg}
                              </p>
                          )}
              </ul>
              
            </form>
            <img  className="signupImg" src='images/svg-2.svg' alt='img'></img>
              
                
      </>
    )
}

export default SignUp
import "./Login1.css";
import React from "react";
import {Link} from "react-router-dom";
const Login1 = () => {
  return (
    <div className="a1">
      <div className="a2">
        <span className="login">Login</span>
        <span className="a3">Username</span><br></br>
        <div className="a4">
          <img className="a5" src="https://s3-alpha-sig.figma.com/img/d104/83f6/801634225163cdaf52a1a967283047d7?Expires=1670198400&Signature=Gh6BOwaf6PbWiqWLMYDd1s3JGUYzMKqINEjRDj4YGWHbzRggHlM7OaI7TgemBsL24gboqOat1KAUGv7laefHwGieae8YDbrLptUpl5Pz7eWnFVjH0afVdW19AlEBJOHkfCRS2QlabmFKHxBkQqARej2WeFDesBfOUkUFeQI-hB1eNpEmHuO5hLqfTnntZmFYt-zYVUIUiQ9OomUHIFAUMXG76FAOdqpLTIdmrDCqciEtSc0q0FEO1enzWYm27qKGV~IYPmDlgos7Z4JGyfjBQlNRXpn0O5SVXxwjXVsM5azk~Rhmm~6M-Vsgl2q3k2w5biXORbRAwiInj3OxB5fCOA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
          <input className="a6" type="text" />
        </div>
        <br></br>
        <span className="a7">Password</span><br></br>
        <div className="a8">
          <img className="a9" src="https://s3-alpha-sig.figma.com/img/c2df/78e5/7bdde5860ac2daad0001f491ab248a7c?Expires=1670198400&Signature=V7dLs5ficKo3u98FH8JvLYQxfQN8jol5OCr1~N157Dx9aRJucI3wnrsAlBS9TTovHV4w0yIZ5yAFrgH1nFa60JKgBatHcmUxJJW~52AE3Q8CdG7v-IOzKLOn1kL1Qt~teidT4ZqBogDzGpDZ1dzVSdlTeo27~EiCLpkLCPuRQ1TTtIzFYbKigKtHLpiQhQcF2hVtQd1amQHSIw5DTpeTNddY0GZIjS-ec6Xx-poBiVTTF5OLjuaBvTVZvEruh4ysGZlBSYgFpskdaQGqIb1nNctF9Zar7XKSkOSk1TZ66wOKxSEz763v8OZ9H1o6rVMnlsEKgB-FtMptXJ5XN9pu3w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
          <input className="a10" type="password" />
        </div>
        <br></br>
        <button className="a11">LOGIN</button><br></br>
        <span className="a12"><a><Link to="/Login12">CREATE AN ACCOUNT </Link></a></span>
        <div className="a13">
          <span className="or">OR</span>

        </div>
      </div>
    </div>
  );
};
export default Login1;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [currentModal, setCurrentModal] = useState<number>(1);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [randomNumber, setRandomNumber] = useState<number>(0);

  useEffect(() => {
    // Load login styles
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/styles/login-style.css";
    document.head.appendChild(link);

    // Generate random number for authenticator
    setRandomNumber(Math.floor(Math.random() * 100) + 1);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const handleEmailSubmit = () => {
    if (email.trim() !== "abzalk@usf.edu") {
      setEmailError(true);
    } else {
      setEmailError(false);
      setCurrentModal(2);
      setTimeout(() => {
        setCurrentModal(3);
      }, 2000);
    }
  };

  const handlePasswordSubmit = () => {
    if (password === "Abzkudratt616..") {
      setPasswordError(false);
      setCurrentModal(5);
      setTimeout(() => {
        setCurrentModal(4);
        setTimeout(() => {
          navigate("/main");
        }, 10000);
      }, 1000);
    } else {
      setPasswordError(true);
    }
  };

  const handleBackToEmail = () => {
    setCurrentModal(1);
    setPassword("");
  };

  return (
    <div className="main-section">
      <div className="overlay"></div>

      {/* Modal 1: Email Input */}
      {currentModal === 1 && (
        <div className="login-section" id="modal-1">
          <div className="card">
            <img
              src="/images/bannerlogo.png"
              style={{ width: "142px", height: "auto" }}
              alt="Microsoft Logo"
            />
            <h1 className="title">Sign in</h1>
            {emailError && (
              <div className="error-message">
                We couldn't find an account with that username.
              </div>
            )}

            <div className="input pb-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                maxLength={113}
                className={`form-control ltr_override input ext-input text-box ${
                  emailError ? "error" : ""
                }`}
                placeholder="Sign-in with your NetID@usf.edu (not U#)"
              />
            </div>
            <a
              href="https://support.microsoft.com/en-us/account-billing/i-can-t-sign-in-to-my-microsoft-account-475c9b5c-8c25-49f1-9c2d-c64b7072e735"
              className="link py-2"
            >
              Can't access your account?
            </a>
            <div className="d-flex gap-2 justify-content-end pt-3" style={{ gap: "10px" }}>
              <input
                type="button"
                className="win-button button-secondary button ext-button secondary ext-secondary"
                value="Back"
              />
              <input
                type="submit"
                onClick={handleEmailSubmit}
                className="win-button button_primary button ext-button primary ext-primary"
                value="Next"
              />
            </div>
          </div>
          <div className="boilerplate-text">
            <p>
              By logging in you agree to follow the USF's{" "}
              <a
                href="https://www.usf.edu/it/data-security/acceptable-use"
                rel="noopener noreferrer"
                target="_blank"
              >
                Acceptable Use Policy
              </a>
            </p>
          </div>
          <div className="options">
            <a
              href="https://support.microsoft.com/en-us/windows/windows-sign-in-options-and-account-protection-7b34d4cf-794f-f6bd-ddcc-e73cdf1a6fbf"
              style={{ textDecoration: "none", color: "#1b1b1b" }}
            >
              <div className="table-row d-flex align-items-center">
                <div className="table-cell tile-img medium">
                  <img
                    className="tile-img medium"
                    src="https://aadcdn.msauth.net/shared/1.0/content/images/signin-options_3e3f6b73c3f310c31d2c4d131a8ab8c6.svg"
                    alt="Sign-in options"
                  />
                </div>
                <div className="table-cell text-left content">
                  <div>Sign-in options</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Modal 2: Loading */}
      {currentModal === 2 && (
        <div className="login-section" id="modal-2">
          <div className="card">
            <img
              src="/images/bannerlogo.png"
              style={{ width: "142px", height: "auto" }}
              alt="Microsoft Logo"
            />
            <h1 className="title">Trying to sign you in</h1>
            <div className="col-12 my-3">
              <img
                src="/images/marching_ants.gif"
                width="100%"
                height="auto"
                alt="Loading"
              />
            </div>
            <a href="#" className="link py-2" style={{ fontSize: "20px" }}>
              Cancel
            </a>
          </div>
        </div>
      )}

      {/* Modal 3: Password Input */}
      {currentModal === 3 && (
        <div className="login-section" id="modal-3">
          <div className="card">
            <img
              src="/images/bannerlogo.png"
              style={{ width: "142px", height: "auto" }}
              alt="Microsoft Logo"
            />
            <div className="py-3 d-flex align-items-center">
              <img
                className="arrow-back"
                onClick={handleBackToEmail}
                style={{ cursor: "pointer" }}
                src="https://aadcdn.msauth.net/shared/1.0/content/images/arrow_left_43280e0ba671a1d8b5e34f1931c4fe4b.svg"
                alt="Back"
              />
              <p className="my-0 ml-3">{email}</p>
            </div>

            <h1 className="title">Enter password</h1>

            {passwordError && (
              <div className="error-message">
                Your account or password is incorrect.
              </div>
            )}
            <div className="input pb-2">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                maxLength={113}
                className="form-control ltr_override input ext-input text-box"
                placeholder="Password"
              />
            </div>
            <a
              href="https://support.microsoft.com/en-us/account-billing/reset-a-forgotten-microsoft-account-password-eff4f067-5042-c1a3-fe72-b04d60556c37"
              className="link py-2"
            >
              Forgot my password
            </a>
            <div className="d-flex gap-2 justify-content-end pt-3" style={{ gap: "10px" }}>
              <input
                type="submit"
                onClick={handlePasswordSubmit}
                className="win-button button_primary button ext-button primary ext-primary"
                value="Sign in"
              />
            </div>
          </div>
          <div className="boilerplate-text">
            <p>
              By logging in you agree to follow the USF's{" "}
              <a
                href="https://www.usf.edu/it/data-security/acceptable-use"
                rel="noopener noreferrer"
                target="_blank"
              >
                Acceptable Use Policy
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Modal 4: Authenticator */}
      {currentModal === 4 && (
        <div className="login-section" id="modal-4">
          <div className="card">
            <img
              src="/images/bannerlogo.png"
              style={{ width: "142px", height: "auto" }}
              alt="Microsoft Logo"
            />

            <p>{email}</p>
            <h1 className="title-approve">Approve sign in request</h1>
            <div>
              <div className="d-flex text-body">
                <div>
                  <img
                    className="tile-img small animate-pulse pr-3"
                    role="presentation"
                    width="50px"
                    height="50px"
                    src="https://aadcdn.msauth.net/shared/1.0/content/images/picker_verify_fluent_authenticator_59892f1e05e3adf9fd2f71b42d92a27f.svg"
                    alt="Authenticator"
                  />
                </div>

                <div className="text-block-body overflow-hidden">
                  <div>
                    Open your Authenticator app, and enter the number shown to sign in.
                  </div>
                </div>
              </div>
            </div>

            <div className="py-3 text-center">
              <h1>{randomNumber}</h1>
            </div>

            <p>No numbers in your app? Make sure to upgrade to the latest version</p>

            <div className="d-flex py-3 align-items-center">
              <input type="checkbox" />
              <p className="my-0 ml-2">Don't ask again for 60 days</p>
            </div>
            <div>
              <a
                href="#"
                rel="noopener noreferrer"
                style={{ color: "#0067b8", fontSize: "13px" }}
              >
                I can't use my Microsoft Authenticator app right now
              </a>
            </div>
            <div className="py-2">
              <a href="#" rel="noopener noreferrer" style={{ color: "#0067b8", fontSize: "13px" }}>
                More Information
              </a>
            </div>
          </div>
          <div className="boilerplate-text">
            <p>
              By logging in you agree to follow the USF's{" "}
              <a
                href="https://www.usf.edu/it/data-security/acceptable-use"
                rel="noopener noreferrer"
                target="_blank"
              >
                Acceptable Use Policy
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Modal 5: Loading 2 */}
      {currentModal === 5 && (
        <div className="login-section" id="modal-5">
          <div className="card">
            <img
              src="/images/bannerlogo.png"
              style={{ width: "142px", height: "auto" }}
              alt="Microsoft Logo"
            />
            <h1 className="title">Trying to sign you in</h1>
            <div className="col-12 my-3">
              <img
                src="/images/marching_ants.gif"
                width="100%"
                height="auto"
                alt="Loading"
              />
            </div>
            <a href="#" className="link py-2" style={{ fontSize: "20px" }}>
              Cancel
            </a>
          </div>
        </div>
      )}

      <div className="terms">
        <a href="#">Terms of use</a>
        <a href="#">Privacy & cookies</a>
        <a href="#">...</a>
      </div>
    </div>
  );
};

export default Login;

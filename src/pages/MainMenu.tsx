import { useEffect } from "react";
import { Link } from "react-router-dom";

const MainMenu = () => {
  useEffect(() => {
    // Load main menu styles
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/styles/web_default.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div>
      <div className="headerwrapperdiv">
        <div className="pageheaderdiv1">
          <a
            href="#main_content"
            onMouseOver={() => (window.status = "Go to Main Content")}
            onMouseOut={() => (window.status = "")}
            className="skiplinks"
          >
            Go to Main Content
          </a>
          <h1>USF</h1>
        </div>
        <div className="headerlinksdiv">
          <span className="pageheaderlinks2">
            <table className="plaintable" style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td className="pldefault">
                    <table className="plaintable">
                      <tbody>
                        <tr>
                          <td className="taboff" style={{ height: "22px" }}>
                            <Link to="/personal-information">Personal Information</Link>
                          </td>
                          <td
                            className="bgtaboff"
                            style={{ height: "22px", verticalAlign: "top", textAlign: "right" }}
                          >
                            <img
                              src="/images/web_tab_corner_right.gif"
                              alt="Tab Corner Right"
                              style={{ height: "20px", width: "8px" }}
                            />
                          </td>
                          <td className="taboff" style={{ height: "22px" }}>
                            <Link to="/student">Student</Link>
                          </td>
                          <td
                            className="bgtaboff"
                            style={{ height: "22px", verticalAlign: "top", textAlign: "right" }}
                          >
                            <img
                              src="/images/web_tab_corner_right.gif"
                              alt="Tab Corner Right"
                              style={{ height: "20px", width: "8px" }}
                            />
                          </td>
                          <td className="taboff" style={{ height: "22px" }}>
                            <a href="#">Financial Aid</a>
                          </td>
                          <td
                            className="bgtaboff"
                            style={{ height: "22px", verticalAlign: "top", textAlign: "right" }}
                          >
                            <img
                              src="/images/web_tab_corner_right.gif"
                              alt="Tab Corner Right"
                              style={{ height: "20px", width: "8px" }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td className="bgtabon" style={{ width: "100%" }}>
                    <img
                      src="/images/web_transparent.gif"
                      alt="Transparent Image"
                      style={{ height: "3px", width: "10px" }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </span>
        </div>
        <table className="plaintable" style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td className="pldefault">
                <div className="headerlinksdiv2">
                  <form action="/pls/prod/twbksrch.P_ShowResults" method="post">
                    Search{" "}
                    <input type="text" name="KEYWRD_IN" size={20} maxLength={65} />
                    <input type="submit" value="Go" />
                  </form>
                </div>
              </td>
              <td className="pldefault">
                <p className="rightaligntext">
                  <span className="pageheaderlinks">
                    <a href="#" className="submenulinktext2">
                      ACCESSIBILITY
                    </a>{" "}
                    |{" "}
                    <a href="#" className="submenulinktext2">
                      SITE MAP
                    </a>{" "}
                    |{" "}
                    <a href="#" className="submenulinktext2">
                      HELP
                    </a>{" "}
                    |{" "}
                    <Link to="/" className="submenulinktext2">
                      EXIT
                    </Link>
                  </span>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="pagetitlediv">
        <table className="plaintable" style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td className="pldefault">
                <h2>Main Menu</h2>
              </td>
              <td className="pldefault">&nbsp;</td>
              <td className="pldefault">
                <p className="rightaligntext">
                  <div className="staticheaders"></div>
                </p>
              </td>
            </tr>
            <tr>
              <td className="bg3" style={{ width: "100%" }}>
                <img
                  src="/images/web_transparent.gif"
                  alt="Transparent Image"
                  style={{ height: "3px", width: "10px" }}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <a id="main_content"></a>
      </div>
      <div className="pagebodydiv">
        <table className="menuplaintable">
          <tbody>
            <tr>
              <td className="mpdefault">&nbsp;</td>
              <td className="mpdefault">
                <Link to="/personal-information" className="submenulinktext2">
                  Personal Information
                </Link>
                <br />
                <span className="menulinkdesctext">
                  View and update addresses, phone numbers and email addresses. Request the level
                  of privacy for your records. View immunization records.
                </span>
              </td>
            </tr>
            <tr>
              <td className="mpdefault">&nbsp;</td>
              <td className="mpdefault">
                <Link to="/student" className="submenulinktext2">
                  Student
                </Link>
                <br />
                <span className="menulinkdesctext">
                  Apply for Admission, Register, View your academic records.
                </span>
              </td>
            </tr>
            <tr>
              <td className="mpdefault">&nbsp;</td>
              <td className="mpdefault">
                <a href="#" className="submenulinktext2">
                  Financial Aid
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="plaintable" style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td className="bgtabon" style={{ width: "100%" }}>
                <img
                  src="/images/web_transparent.gif"
                  alt="Transparent Image"
                  style={{ height: "3px", width: "10px" }}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <a href="#top" className="skiplinks">
          Skip to top of page
        </a>
      </div>
    </div>
  );
};

export default MainMenu;

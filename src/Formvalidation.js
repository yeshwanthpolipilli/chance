import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Formvalidation() {
  const [first, setFirstname] = useState("");
  const [last, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const [error, setError] = useState(false);
  const [para, setPara] = useState(
    "uppercase and lowercase maximum 8 charcters"
  );
  const regex = /^[A-Za-z]{3,8}$/;
  const yesh = useNavigate();

  function handleclick() {
    if (
      first.length > 3 &&
      last.length > 3 &&
      email.length > 3 &&
      city.length > 3 &&
      password.length > 3
    ) {
      yesh(alert("Login succesfully"));
      {
        window.location = "/Home";
      }
    } else {
      yesh("/Form");
    }
  }

  const ValidateTheForm = (e) => {
    e.preventDefault();
    if (
      first.length === 0 ||
      last.length === 0 ||
      email.length === 0 ||
      address.length === 0
    ) {
      setError(true);
    }
  };

  return (
    <>
      {/* <div className="containerjustify-content-center">
        <input type="text" className='form-control w-50 my-lg-2' onChange={(e)=>setAddress(e.target.value)}/>
    </div> */}

      {/* firstname starts here */}
      <div className="container my-5 bg-dark text-white p-4">
        <form
          className="row g-3 needs-validation"
          action=""
          novalidate
          onSubmit={ValidateTheForm}
        >
          <div className="col-md-3">
            <label for="validationCustom01" class="form-label">
              First name
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom01"
              onChange={(e) => setFirstname(e.target.value)}
            />

            {error && first.length <= 0 ? (
              <p className="text-danger must">Enter first name</p>
            ) : first.length > 3 ? (
              <p className="looks">
                Looks Good <FaCheck />
              </p>
            ) : (
              <p>{""}</p>
            )}
          </div>
          {/* firstname ends here */}

          {/* lastname starts here */}

          <div className="col-md-3">
            <label for="validationCustom02" class="form-label">
              Last name
            </label>
            <input
              type="text"
              class="form-control"
              id="validationCustom02"
              onChange={(e) => setLastname(e.target.value)}
            />

            {error && last.length <= 0 ? (
              <p className="text-danger must">Enter last name</p>
            ) : last.length > 3 ? (
              <p className="looks">
                Looks Good <FaCheck />
              </p>
            ) : (
              <p>{""}</p>
            )}
          </div>
          {/* lastname ends here */}

          {/* email starts here */}
          <div class="col-md-4">
            <label for="validationCustomUsername" class="form-label">
              Email
            </label>
            <div class="input-group has-validation">
              <span class="input-group-text" id="inputGroupPrepend">
                @
              </span>
              <input
                type="email"
                class="form-control"
                id="validationCustomUsername"
                aria-describedby="inputGroupPrepend"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
         
            {error &&  email.length <=0 ? ( <p className='must'>This should not be an empty</p>):
    (regex.test(email)) ? <p className='looks'>Looks good <FaCheck/> </p> 
     :( <p className='must'>{para}</p> ) } 
          </div>
          {/* {/* email ends here


          <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setAddress(e.target.value)}
                />
                {error&& error.length<=0?
                  <h6 className="text-white">please enter details</h6>
                :null
                // <h6 className="text-success">Looks Good</h6>
                
                } */}



          {/* city starts here */}
          <div className="container">
            <div className="row">
              <div className="col-lg-5 citydown">
                <label for="validationCustom03" class="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setAddress(e.target.value)}
                />
              

             

      

                  
  {error && city.length <= 0 ? (
            <p className="text-danger must">This should not be an empty</p>
          ) : city === 'Hyderabad' || city === 'Mumbai' || city === 'Delhi' ? 
          ( <p className='looks'>Looks Good <FaCheck/></p>) : <p className='must'>'Hint: City must be Hyderabad, Mumbai, or Delhi.'</p> } 
              </div>

              {/* city ends here */}

              {/* Password starts here */}

              <div className="col-lg-3">
                <label for="inputPassword8" class="col-form-label">
                  {" "}
                  Create new password
                </label>
                <div className="col-auto">
                  <input
                    type="password"
                    id="inputPassword8"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="col-auto">
                  {error && password.length <= 0 ? (
                    <p className="text-danger must">Password is required</p>
                  ) : password.length > 3 ? (
                    <p className="looks">
                      Looks Good <FaCheck />
                    </p>
                  ) : (
                    <p>{""}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* password ends here */}

          <div class="col-12">
            <button class="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>
      </div>
      <hr width="100%" class="my-5 htt" />
      <div class="container text-white">
        <div id="downoutput1">
          {" "}
          {first.length > 3 ? (
            <p className="text-primary">{first}</p>
          ) : (
            <p>{first}</p>
          )}
        </div>
        <div id="downoutput2">
          {last.length > 3 ? (
            <p className="text-primary">{last}</p>
          ) : (
            <p>{last}</p>
          )}
        </div>
        <div id="downoutput3">
          {" "}
          {email.length > 3 ? (
            <p className="text-primary">{email}</p>
          ) : (
            <p>{email}</p>
          )}
        </div>
        <div id="downoutput4">
          {city.length > 3 ? (
            <p className="text-primary">{city}</p>
          ) : (
            <p>{city}</p>
          )}
        </div>
        <div id="downoutput5"></div>
      </div>
    </>
  );
}

export default Formvalidation;

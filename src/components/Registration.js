import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../asset/style.css";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Registration = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [disable, setDisable] = useState(true);

  const handleChange = (e) => {
    if (e.target.value === " ") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Container>
        <FontAwesomeIcon className="user_icon" icon={faUserCircle} />
        <h3>Register User</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            {/* firstName */}
            <div className="col-md-6">
              <input
                className="w-100 mt-2"
                {...register("firstName", { required: true, maxLength: 20 })}
                placeholder="First Name *"
                onChange={handleChange}
              />
              <span className="error_message">
                {errors.firstName?.type === "required" &&
                  "** First name is required **"}
              </span>
            </div>
            {/* lastName */}
            <div className="col-md-6">
              <input
                className="w-100 mt-2"
                {...register("lastName", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
                placeholder="Last Name *"
                onChange={handleChange}
              />
              <span className="error_message">
                {errors.lastName && "** Last Name is required **"}
              </span>
            </div>
          </div>

          <div className="row">
            {/* email */}
            <div className="col-md-6">
              <input
                className="w-100 mt-2"
                type="text"
                {...register("email", {
                  required: "** Email Address is required **",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Email Address *"
                onChange={handleChange}
              />
              <span className="error_message">
                {errors.email && <p>{errors.email.message}</p>}
              </span>
            </div>
            {/* Phone */}
            <div className="col-md-6">
              <input
                className="w-100 mt-2"
                type="text"
                {...register("phone", {
                  required: "** Phone Number is required **",
                  pattern: {
                    value: /^(?:\+?88)?01[13-9]\d{8}$/i,
                    message: "Invalid Phone Number",
                  },
                })}
                placeholder="Phone *"
                onChange={handleChange}
              />
              <span className="error_message">
                {errors.phone && <p>{errors.phone.message}</p>}
              </span>
            </div>
          </div>

          <div className="row">
            {/* userName */}
            <div className="col-md-6">
              <input
                className="w-100 mt-2"
                {...register("userName", { required: true, maxLength: 20 })}
                placeholder="Username *"
                onChange={handleChange}
              />
              <span className="error_message">
                {errors.userName?.type === "required" &&
                  "** User name is required **"}
              </span>
            </div>
            <div className="col-md-6">
              {/* address */}
              <textarea
                className="w-100 mt-2"
                {...register("address", { required: true })}
                placeholder="Address *"
                onChange={handleChange}
              />
              <span className="error_message">
                {errors.address && "** Address is required **"}
              </span>
            </div>
          </div>

          <div className="row">
            {/* district */}
            <div className="col-md-6">
              <select
                className="w-100 mt-2"
                {...register("district")}
                onChange={handleChange}
              >
                <option value="Dhaka">Dhaka</option>
                <option value="Gazipur">Gazipur</option>
                <option value="Mymensingh">Mymensingh</option>
              </select>
            </div>
            <div className="col-md-6 text-left">
              {/* gender */}
              <p>Gender</p>
              <input
                {...register("gender", { required: true })}
                type="radio"
                id="female"
                name="gender"
                onChange={handleChange}
              />
              <label className="ml-2 mr-3" htmlFor="female">
                {" "}
                Female{" "}
              </label>
              <input
                {...register("gender", { required: true })}
                type="radio"
                id="male"
                name="gender"
              />
              <label className="ml-2 mr-3" htmlFor="male">
                {" "}
                Male{" "}
              </label>
              <input
                {...register("gender", { required: true })}
                type="radio"
                id="other"
                name="gender"
              />
              <label className="ml-2 mr-3" htmlFor="other">
                {" "}
                Other{" "}
              </label>
              <span className="error_message">
                {errors.gender && "** Gender is required **"}
              </span>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 text-left">
              <input type="checkbox" id="confirm" />
              <label htmlFor="confirm" className="ml-2">
                I want to receive inspiration, marketing promotions and updates
                via email.{" "}
              </label>
            </div>
            <div className="col-md-12">
              <input
                type="submit"
                className={
                  disable ? "btn_disable disabled w-100" : "btn_enable w-100"
                }
              />
            </div>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Registration;

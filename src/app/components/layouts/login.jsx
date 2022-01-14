import React, { useState, useEffect } from "react";
import TextField from "../textField";
import { validator } from "../../utils/validator";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const chandleChange = ({ target }) => {
    setData(prevState => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const ValidatorConfig = {
    email: {
      isRequired: {
        massage: "Електронная почта обязательна к заполнению"
      },
      isEmail: {
        massage: "Email введен не корректно"
      }
    },
    password: {
      isRequired: {
        massage: "Пароль обязателен к заполнению"
      },
      isCapitalSimvol: {
        massage: "Пароль должен содержать хотя бы одну заглавную букву"
      },
      isContainDijit: {
        massage: "Пароль должен содержать хотя бы одну цифру"
      },
      min: {
        massage: "Пароль должен содержать минимум 8-мь символов",
        value: 8
      }
    }
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, ValidatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
  };
  return (
    <div className="container mt-5" >
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-3">
          <h3 className="mb-4">Login</h3>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              name="email"
              value={data.email}
              error={errors.email}
              onChange={chandleChange}
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              value={data.password}
              error={errors.password}
              onChange={chandleChange}
            />
            <button
              type="submit"
              disabled={!isValid}
              className="btn btn-primary w-100 mx-auto"
            >Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { useFormik } from "formik";
import CustomInput from "../shared-components/custom-input";
import CustomButton from "../shared-components/custom-button";
import styles from "./signin.module.css";
import { signInSchema } from "@/utils/validationSchemas/auth";
import useAuth from "@/hooks/useAuth";
import { setLoggedinUser, setToken } from "@/reducers/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Col, Row } from "antd";

const Signin = () => {
  const { loading, signin } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log({ styles });
  const userLogin = (values) => {
    let body = {
      email: values.email,
      password: values.password,
    };
    console.log("bofy1::", body);

    signin(body, (resp) => {
      console.log("reponse::", resp);

      dispatch(setLoggedinUser(resp.user));
      dispatch(setToken(resp.token));
      navigate("/");
    });
  };

  const {
    values,
    setFieldValue,
    handleChange,
    handleBlur,
    touched,
    errors,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      userLogin(values);
    },
    validationSchema: signInSchema,
  });

  console.log({ errors });
  console.log({ values });

  return (
    <>
      <Row className={styles.signinContainer}>
        <Col span={12} />
        <Col span={12} className="h-100 bg-light p-4">
          <form className="d-flex flex-column" onSubmit={handleSubmit}>
            <CustomInput
              name="email"
              type="text"
              handleChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              touched={touched.email}
              label="Email"
              placeholder="Enter Email"
              error={errors.email}
            />
            <CustomInput
              name="password"
              type="password"
              handleChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              touched={touched.password}
              label="Password"
              error={errors.password}
            />
            <CustomInput
              name="confirmPassword"
              type="password"
              handleChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              touched={touched.confirmPassword}
              label="Confirm Password"
              error={errors.confirmPassword}
            />

            <CustomButton
              type="submit"
              title={"Sign in"}
              handleClick={handleSubmit}
            />
          </form>
        </Col>
      </Row>
    </>
  );
};

export default Signin;

import { useFormik } from "formik";
import CustomInput from "../shared-components/custom-input";
import CustomButton from "../shared-components/custom-button";
import styles from "./register.module.css";
import { signupSchema } from "@/utils/validationSchemas/auth";
import useAuth from "@/hooks/useAuth";
import { setLoggedinUser, setToken } from "@/reducers/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Col, Row } from "antd";
import PageLoader from "../shared-components/page-loader";
import LogoImage from "../../assets/logo.png";
import { APP_ROUTES } from "@/config/app-routes";

const Signup = () => {
  const { loading, registerUser } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userSignup = (values) => {
    let body = {
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
    };

    registerUser(body, (resp) => {
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
      firstName: "",
      lastName: "",
    },
    onSubmit: (values) => {
      userSignup(values);
    },
    validationSchema: signupSchema,
  });

  return (
    <>
      <PageLoader loading={loading} />
      <Row className={styles.registerContainer}>
        <Col
          span={24}
          className="h-50 bg-dark d-flex justify-content-center align-items-center"
        >
          <div onClick={() => navigate(APP_ROUTES.public.HOME)} role="button">
            <img src={LogoImage} width={400} height={400} />
          </div>
        </Col>
        <Col xs={24} lg={15} className="px-4 mt-4 mx-auto">
          <Row>
            <Col xs={24} md={12} className="mx-auto ">
              <form className="d-flex flex-column" onSubmit={handleSubmit}>
                <CustomInput
                  name="firstName"
                  type="text"
                  handleChange={handleChange}
                  value={values.firstName}
                  onBlur={handleBlur}
                  touched={touched.firstName}
                  label="First Name"
                  placeholder="Enter First Name"
                  error={errors.firstName}
                />{" "}
                <CustomInput
                  name="lastName"
                  type="text"
                  handleChange={handleChange}
                  value={values.lastName}
                  onBlur={handleBlur}
                  touched={touched.lastName}
                  label="Last Name"
                  placeholder="Enter Last Name"
                  error={errors.lastName}
                />
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
                  title={"Signup"}
                  handleClick={handleSubmit}
                />
                <p className="text-end" style={{ fontSize: "12px" }}>
                  Already have an account?
                  <span
                    onClick={() => navigate(APP_ROUTES.public.LOGIN)}
                    className={styles.signin}
                  >
                    Signin
                  </span>
                </p>
              </form>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Signup;

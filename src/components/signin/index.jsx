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
import PageLoader from "../shared-components/page-loader";
import LogoImage from "../../assets/logo.png";
import { APP_ROUTES } from "@/config/app-routes";

const Signin = () => {
  const { loading, signin } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = (values) => {
    let body = {
      email: values.email,
      password: values.password,
    };

    signin(body, (resp) => {
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
    },
    onSubmit: (values) => {
      userLogin(values);
    },
    validationSchema: signInSchema,
  });

  return (
    <>
      <PageLoader loading={loading} />
      <Row className={styles.signinContainer}>
        <Col
          span={24}
          className="h-50 bg-dark d-flex justify-content-center align-items-center"
        >
          <div onClick={() => navigate(APP_ROUTES.public.HOME)} role="button">
            <img src={LogoImage} width={200} />
          </div>
        </Col>
        <Col span={24} className="px-4 mb-5">
          <Row className="mb-5">
            <Col xs={24} md={12} className="mx-auto mb-5">
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

                <CustomButton
                  type="submit"
                  title={"Sign in"}
                  handleClick={handleSubmit}
                />
              </form>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Signin;

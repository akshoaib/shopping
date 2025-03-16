import CustomButton from "../custom-button";

const FooterButtons = ({ title, handleSubmit, handleReset, disabled }) => {
  return (
    <>
      <div className="d-flex gap-2 justify-content-end">
        <CustomButton
          disabled={disabled}
          type="submit"
          title={title}
          handleClick={handleSubmit}
        />
        <CustomButton
          disabled={disabled}
          type="submit"
          title="Reset"
          handleClick={handleReset}
        />
      </div>
    </>
  );
};

export default FooterButtons;

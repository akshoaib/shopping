import React from "react";
import { Button, Modal } from "antd";
const CustomModal = ({
  title,
  isModalOpen,
  handleCloseModal,
  handleSave,
  children,
  width = "520px",
}) => {
  //   const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    handleCloseModal();
  };
  const handleOk = () => {
    handleSave();
  };
  return (
    <>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={() => {}}
        onCancel={handleCancel}
        width={width}
        footer={[
          <Button
            key="cancel"
            style={{ color: "#000000", backgroundColor: "#ffffff" }}
            onClick={handleCancel}
          >
            Cancel
          </Button>,
          <Button
            key="submit"
            style={{ color: "#ffffff", backgroundColor: "#000000" }}
            type="primary"
            onClick={handleOk}
          >
            Save
          </Button>,
        ]}
      >
        {children}
      </Modal>
    </>
  );
};
export default CustomModal;

import React, { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";

const CustomUpload = ({ handleChange, name, error, value }) => {
  const [fileList, setFileList] = useState([]);

  const handleFileChange = ({ fileList }) => {
    if (fileList.length > 0) {
    } else {
      // handleChange;
    }
    setFileList(fileList);
  };

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
    }
    return isImage;
  };

  useEffect(() => {
    if (!value) {
      setFileList([]);
    }
  }, [value]);
  return (
    <>
      <Upload
        listType="picture"
        fileList={fileList}
        onChange={(e) => {
          if (e?.fileList?.length > 0) {
            handleChange({
              target: {
                name,
                value: fileList?.map((file) => file.originFileObj),
              },
            });
          } else {
            handleChange({
              target: {
                name,
                value: "",
              },
            });
          }
          handleFileChange(e);
        }}
        name={name}
        beforeUpload={beforeUpload}
        customRequest={({ file, onSuccess }) => {
          setTimeout(() => {
            onSuccess("ok");
          }, 0);
        }}
      >
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
      {error && <p className={"error"}>{error}</p>}
    </>
  );
};
export default CustomUpload;

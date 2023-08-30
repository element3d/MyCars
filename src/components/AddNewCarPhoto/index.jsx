import React, { useState } from "react";
import { message, Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";

import styles from "./styles.module.css";

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const AddNewCarPhoto = ({ handleGetUploadImages }) => {
  const [loading, setLoading] = useState(false);

  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };


  const uploadImage = async (options) => {
    handleGetUploadImages(fileList, options);
    //TODO: BELOW SHOULD GO TO PARENT COMPONENT. HANDLE UPLOAD FUNCTION
    const { onSuccess, onError, file, onProgress } = options;
    setLoading(true)
    const fmData = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (event) => {
        const percent = Math.floor((event.loaded / event.total) * 100);
        console.log(percent)
        onProgress({ percent: (event.loaded / event.total) * 100 });
      },
    };
    console.log(config)
    fmData.append("image", file);
    try {
      //   const res = await axios.post(
      //     "https://jsonplaceholder.typicode.com/posts",
      //     fmData,
      //     config
      //   );

      onSuccess("Ok");
      setLoading(false)
      //   console.log("server res: ", res);
    } catch (err) {
      console.log("Eroor: ", err);
      //   const error = new Error("Some error");
      onError({ err });
      setLoading(false)
    }
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.photoContainer}>
        <Title level={2}>Upload photo</Title>
        <Upload
          accept="image/*"
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          beforeUpload={beforeUpload}
          onChange={onChange}
          maxCount={10}
          multiple
          onPreview={onPreview}
          customRequest={uploadImage}
        >
          {uploadButton}
        </Upload>
      </div>
    </div>
  );
};

export default AddNewCarPhoto;

import { UrlServer } from 'config/UrlServer'
import React from 'react'

import {
    Button,
    Upload,
  } from "antd";
  import { UploadOutlined } from "@ant-design/icons";

  interface Props {
    totalImage: number,
    file?: any
}

const getBase64 = (file: any) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });



const UploadImage = ({totalImage, file}: Props) => {
  const [fileList, setFileList] = React.useState<any>([]);
    
  const uploadButton = (
    <Button
      style={{
        marginTop: 20,
      }}
      icon={<UploadOutlined />}
    >
      Tải hình ảnh
    </Button>
  );

  const handleChange = async (e: any) => {
    setFileList(e.fileList);
    file(e.fileList?.[0]?.response?.message)
  };
  
  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
  };
  return (
    <Upload
        action={`${UrlServer}/upload/image`}
        fileList={fileList}
        onPreview={handlePreview}
        onChange={(e: any) => handleChange(e)}
        multiple={true}
        progress={{
        strokeColor: {
            "0%": "#108ee9",
            "100%": "#87d068",
        },
        strokeWidth: 3,
        format: (percent: any) =>
            percent && `${parseFloat(percent.toFixed(2))}%`,
        }}
    >
        {fileList.length >= totalImage ? null : uploadButton}
    </Upload>
  )
}

export default UploadImage
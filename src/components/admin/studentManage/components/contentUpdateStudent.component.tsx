import React from 'react'
import { UpdateStudentInfoStyled } from './styled'
import { Avatar, Col, DatePicker, Form, Input, Row, Select, Typography, message } from 'antd'
import { HOST, UrlServer } from 'config/UrlServer'
import UploadImage from 'common/uploadImage.common'
import { TypeUser } from 'types/Types'
import axios from 'axios'
import _ from 'lodash'
import { postWithAuthorizationAndAdmin } from 'helpers/queryHelper'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { ADMIN_QUERY_STUDENT } from 'config/keyQuery'
import { useQueryClient } from 'react-query'
import dayjs from 'dayjs';
import moment from 'moment';


const { Paragraph } = Typography;

interface Props {
  record: any,
  form: any,
  onCloseModal: () => void
}

const ContentUpdateStudentComponent = ({record, form, onCloseModal}: Props) => {
  const [fileList, setFileList] = React.useState<any>()
  const [linkAvatar, setLinkAvatar] = React.useState<any>(record.avatar)
  const [listQuanHuyen, setListQuanHuyen] = React.useState<any>([]);
  const [listPhuongXa, setListPhuongXa] = React.useState<any>([]);
  const [localVN, setLocalVN] = React.useState<any>(null);
  const [listTinhTP, setListTinhTP] = React.useState<
    { value: string; label: string }[]
  >([]);
  const [address, setAddress] = React.useState<any>();
  const queryClient = useQueryClient();

  const {user} = useSelector((state: RootState) => state.auth)

  const selectLocalVN = async () => {
    const response = await axios.get(`${HOST}/json-data/location.json`);
    const newListTinh_TP: { value: string; label: string }[] = [];
    response?.data?.map((item: any) => {
      return newListTinh_TP?.push({
        value: item.code,
        label: item.name,
      });
    });
    setListTinhTP(newListTinh_TP);
    setLocalVN(response.data);
  };
  const handleChangeTinhTP = (value: string, option: any) => {
    const newDataQuan_Huyen: any = [];
    _.filter(localVN, { code: value })?.[0]?.districts?.map((item: any) =>
      newDataQuan_Huyen.push({
        value: item.id,
        label: item.name,
        ...item,
      })
    );
    setListQuanHuyen(newDataQuan_Huyen);
    setAddress((prev: any) => ({
      ...prev,
      tinhTP: option.label,
    }));
  };
  const handleChangeQuanHuyen = (value: string, option: any) => {
    const newDataPhuongXa: any = [];
    const filterDataPhuongXa = _.filter(listQuanHuyen, { value: value })?.[0];
    filterDataPhuongXa?.wards?.map((item: any) =>
      newDataPhuongXa.push({
        value: item.id,
        label: item.prefix + " " + item.name,
        ...item,
      })
    );
    filterDataPhuongXa?.streets?.map((item: any) =>
      newDataPhuongXa.push({
        value: item.id,
        label: item.prefix + " " + item.name,
        ...item,
      })
    );
    filterDataPhuongXa?.project?.map((item: any) =>
      newDataPhuongXa.push({
        value: item.id,
        label: item.prefix + " " + item.name,
        ...item,
      })
    );
    setListPhuongXa(newDataPhuongXa);
    setAddress((prev: any) => ({
      ...prev,
      quan_huyen: option.label,
    }));
  };

  const onFieldValue = () => {
    const keyRecord = Object.keys(record)
    keyRecord.map((key) => {
      if(key === 'birthDay') {
        return  form.setFieldsValue({
          [key]: moment(record[key]) ?? null
        })
      }
      if(key === 'address'){
        return  form.setFieldsValue({
          [key]: moment(record[key]) ?? null
        })
      }
    
      form.setFieldsValue({
        [key]: record[key] ?? '___'
      })
    })
  }

  

  const onFinishUpdateInfo = async (values: any) => {
    const {tinh_tp, quan_huyen, phuong_xa, address_detail, ...infoUser} :any = values
    const address = `${tinh_tp ?? '___'}-${quan_huyen ?? '___'}-${phuong_xa ?? '___'}-${address_detail ?? '___'}`
    const parameters = {
      ...infoUser,
      address,
      avatar: linkAvatar
    }
    const result: any = await postWithAuthorizationAndAdmin(`${UrlServer}/admin/update-info-user`, user.accessToken, {
      parameters, 
      userId: record.id
    })
    if(result.status === 200){
      message.success('Cập nhật thông tin thành công.')
      onCloseModal()
    }
    
  }
  React.useEffect(() => {
    onFieldValue() 
      selectLocalVN();
  }, [])



  return (
    <UpdateStudentInfoStyled>
      <div className="left">
        <Avatar shape="square" className='avatar' src={`${HOST}/image/${linkAvatar}`}  />
        <UploadImage totalImage={1} file={setLinkAvatar} />
      </div>
      <div className="right">
        <Form form={form} onFinish={onFinishUpdateInfo}>
          <Form.Item name={'fullName'} label="Họ tên">
            <Input />
          </Form.Item>
          <Form.Item name={'email'} label="Email">
            <Input />
          </Form.Item>
          <Form.Item name={'sex'} label="Giới tính">
            <Select
                    showSearch
                    style={{ width: "100%" }}
                    optionFilterProp='children'
                    onChange={handleChangeQuanHuyen}
                    filterOption={(input: any, option: any) =>
                      (option?.label ?? "").includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? "")
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    options={[
                      {
                        value: 'nam',
                        label: 'Nam'
                      },
                      {
                        value: 'nu',
                        label: 'Nữ'
                      },
                    ]}
                  />
          </Form.Item>
          <Form.Item name={'phone'} label="SĐT">
            <Input />
          </Form.Item>
          <Form.Item name={'cccd'} label="CCCD">
            <Input />
          </Form.Item>
          <Form.Item name={'birthDay'} label="Ngày sinh">
            <DatePicker style={{
              width: '100%'
            }} format={'DD/MM/YYYY'}  placeholder='Ngày sinh' />
          </Form.Item>
          <>
            <strong className='ant-form-text'>Address:</strong>
            <Row gutter={[12, 12]}>
              <Col span={24}>
                <Form.Item label='Tỉnh / Thành phố:' name='tinh_tp' >
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    optionFilterProp='children'
                    onChange={handleChangeTinhTP}
                    filterOption={(input: any, option: any) =>
                      (option?.label ?? "").includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? "")
                        .toUpperCase()
                        .localeCompare((optionB?.label ?? "").toUpperCase())
                    }
                    options={listTinhTP}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[12, 12]}>
              <Col span={24}>
                <Form.Item label='Quận / Huyện' name='quan_huyen' >
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    optionFilterProp='children'
                    onChange={handleChangeQuanHuyen}
                    filterOption={(input: any, option: any) =>
                      (option?.label ?? "").includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? "")
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    options={listQuanHuyen}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[12, 12]}>
              <Col span={24}>
                <Form.Item
                  label='Phường / Xã:'
                  name='phuong_xa'
                >
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    onChange={(value: string, option: any) => {
                      setAddress((prev: any) => ({
                        ...prev,
                        phuong_xa: option.label,
                      }));
                    }}
                    optionFilterProp='children'
                    filterOption={(input: any, option: any) =>
                      (option?.label ?? "").includes(input)
                    }
                    filterSort={(optionA: any, optionB: any) =>
                      (optionA?.label ?? "")
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    options={listPhuongXa}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[12, 12]}>
              <Col span={24}>
                <Form.Item
                  label='Địa chỉ chi tiết:'
                  name='address_detail'
                  
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </>
        </Form>
        
      </div>

    </UpdateStudentInfoStyled>

  )
}

export default ContentUpdateStudentComponent
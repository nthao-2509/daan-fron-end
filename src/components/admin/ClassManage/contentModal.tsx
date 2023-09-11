import { Button, Col, DatePicker, DatePickerProps, Form, Input, Modal, Row, Select, Tooltip, Typography } from 'antd'
import React from 'react'
import {  EyeTwoTone } from '@ant-design/icons';
import moment from 'moment';
import { RangePickerProps } from 'antd/es/date-picker';
import CalendarComponent from 'common/Calendar';
interface Props{
    record: any,
    form: any
}
const { Text, Link } = Typography;
const { RangePicker } = DatePicker;

const ContentModal = ({record, form}: Props) => {

    const [valueThu, setValueThu] = React.useState<string>('1')
    const [listDataState, setListDataState] = React.useState<any>()
    const [showModalCalendar, setShowModalCalendar] = React.useState<boolean>(false)    

    const weekFormat = 'MM/DD';

    const formatWeek = (time: any) => {
        const start = Number((time[0]).format('w'))
        const end = Number((time[1]).format('w'))
        const week = []
        for (let i = start; i <= end; i++) {
            week.push(i)   
        }
        return week
    }

    const onFinish = async (values: any) => {
        const rangeTimeValue = values['tuan'];
        formatWeek(rangeTimeValue)
    }
    
    const handleChangeThu = (value: string) => {
        setValueThu(value)
    }

    const onChange = (
        value: DatePickerProps['value'] | RangePickerProps['value'],
        dateString: [string, string] | string,
      ) => {
        const weekList = formatWeek(value)
        const listDate: any = []
        weekList.map(week => {
            listDate.push(moment().day(Number(valueThu)).week(week).format('DD/MM/YYYY'))
        })
        setListDataState(listDate)
      };

      const onFieldValue = () => {
        const keyRecord = Object.keys(record)
        keyRecord.map((key) => {
            if(key === 'tuan'){
                return
            }
          form.setFieldsValue({
            [key]: record[key] ?? '___'
          })
        })
      }
      React.useEffect(() => {
        onFieldValue()
      },[])
  return (
    <>
        <Form form={form} onFinish={onFinish} layout='vertical'>
            <Row gutter={[12, 12]}>
                <Col span={12}>
                    <Form.Item name='nameClass' label="Tên lớp:">
                        <Input />
                    </Form.Item>
                    <Form.Item name='nameTeacher' label="Giảng viên phụ trách:">
                        <Input  suffix={
                            <Tooltip title="Thông tin giảng viên">
                                <div style={{
                                    cursor: 'pointer'
                                }}>
                                    <EyeTwoTone style={{ color: 'rgba(0,0,0,.45)' }} />
                                </div>  
                            </Tooltip>
                        } />
                    </Form.Item>
                    <Form.Item name='totalStudent' label="Số lượng sinh viên:">
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name='TC' label="Tín chỉ:">
                        <Input  />
                    </Form.Item>
                    <Form.Item name={'thu'} label="Thứ:">
                        <Select
                            defaultValue={valueThu}
                            onChange={handleChangeThu}
                            options={[
                                { value: '1', label: 'T2' },
                                { value: '2', label: 'T3' },
                                { value: '3', label: 'T4' },
                                { value: '4', label: 'T5' },
                                { value: '5', label: 'T6' },
                                { value: '6', label: 'T7' },
                                { value: '0', label: 'CN' },
                            ]}
                            />
                    </Form.Item>
                    <Form.Item name='tuan' label="Tuần:">
                    <RangePicker disabled={!valueThu} style={{
                            width: '100%'
                        }} format={weekFormat} picker="week" onChange={onChange} />
                    </Form.Item>
                    <Link onClick={() => setShowModalCalendar(true)} target="_blank">
                        Hiển thị lịch học
                    </Link>
                </Col>
            </Row>
        </Form>
        {/* <Modal width={'90%'} footer={null} title='Lịch học' open={showModalCalendar} onCancel={() => setShowModalCalendar(false)}>

            <CalendarComponent listData={listDataState} />
        </Modal> */}
    </>
  )
}

export default ContentModal
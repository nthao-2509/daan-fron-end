import React, { useState } from 'react';
import type { Dayjs } from 'dayjs';
import  dayjs from 'dayjs'
import { Alert, Calendar } from 'antd';
import moment from 'moment';
import 'dayjs/locale/en'; // Import any required locale
interface Props {
    listData: any
}
dayjs().clone()

const CalendarComponent = ({listData}:Props) => {

    const dayjsDates = [
        (dayjs('2023-09-12'))
      ];
    
      return (
        <>
          {/* Truyền danh sách các ngày dưới dạng Dayjs */}
          {/* <Calendar value={(dayjsDates)} /> */}
        </>
      
  )
}

export default CalendarComponent
import React from 'react';
import { Calendar, Space, Tag } from 'tdesign-react';
import type { CalendarCell, ControllerOptions } from 'tdesign-react';

import dayjs from 'dayjs';

type TagTheme = 'default' | 'danger' | 'warning' | 'success' | 'primary';

interface DataList {
  label: string;
  value: TagTheme;
}

export default function CalendarExample() {
  const displayNum = React.useCallback((date: CalendarCell) => {
    if (date.mode === 'month') {
      return date.date.getDate();
    }
    return date.date.getMonth() + 1;
  }, []);

  const isShow = (data: CalendarCell) =>
    data.mode === 'month' ? dayjs(data.formattedDate).date() === 15 : dayjs(data.formattedDate).month() === 7;

  const dataList: DataList[] = [
    {
      value: 'danger',
      label: '错误事件',
    },
    {
      value: 'warning',
      label: '警告事件',
    },
    {
      value: 'success',
      label: '正常事件',
    },
  ];

  const renderHead = (params: ControllerOptions) => {
    let title = `${params.filterDate.getFullYear()}`;
    if (params.mode === 'month') {
      title += `-${params.filterDate.getMonth() + 1}`;
    }
    title += ' 工作安排';
    return <div>{title}</div>;
  };

  return (
    <Calendar
      head={renderHead}
      cell={(cellData) => (
        <>
          <div style={{ width: '100%' }}>
            <div>{displayNum(cellData)}</div>
            {isShow(cellData) && (
              <Space direction="vertical" size={2}>
                {dataList.map((item, index) => (
                  <Tag key={index} theme={item.value}>
                    {item.label}
                  </Tag>
                ))}
              </Space>
            )}
          </div>
        </>
      )}
    />
  );
}

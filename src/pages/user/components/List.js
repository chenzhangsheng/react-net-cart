import React from 'react'
import PropTypes from 'prop-types'
import { Table, Modal, Row, Col } from 'antd'
import classnames from 'classnames'
import { DropOption } from 'components'
import { Link } from 'react-router-dom'
import AnimTableBody from 'components/DataTable/AnimTableBody'
import styles from './List.less'
import moment from 'moment'
import ImgPreview from './imgPreview'

const { confirm } = Modal

const List = ({
  onDeleteItem, onEditItem, isMotion, location, ...tableProps
}) => {

  const handleMenuClick = (record, e) => {
    if (e.key === '1') {
      onEditItem(record)
    } else if (e.key === '2') {
      confirm({
        title: 'Are you sure delete this record?',
        onOk () {
          onDeleteItem(record.id)
        },
      })
    }
  }

  const columns = [
    // {
    //   title: 'Avatar',
    //   dataIndex: 'cartDriveLicenseImageBack',
    //   key: 'cartDriveLicenseImageBack',
    //   width: 64,
    //   className: styles.avatar,
    //   render: text => <img alt="cartDriveLicenseImageBack" width={24} src={text} />,
    // }, 
    // {
    //   title: '姓名',
    //   dataIndex: 'cartName',
    //   key: 'cartName',
    //   render: (text, record) => <Link to={`user/${record.id}`}>{text}</Link>,
    // }, 
    {
      title: '姓名',
      dataIndex: 'cartName',
      key: 'cartName',
      width: 100,
    }, {
      title: '工作城市',
      dataIndex: 'wxCity',
      key: 'wxCity',
      width: 120,
    }, 
    {
      title: '身份证号',
      dataIndex: 'cartIdNumber',
      key: 'cartIdNumber',
      width: 300,
    },
    {
      title: '手机号',
      dataIndex: 'wxPhone',
      key: 'wxPhone',
      width: 200,
    },
    {
      title: '初次领驾照时间',
      // dataIndex: 'cartCreateTime',
      key: 'cartCreateTime',
      width: 200,
      render: r => {
        return r.cartCreateTime ? moment(r.cartCreateTime).format('YYYY-MM-DD') : '-'
      },
    },
    {
      title: '车牌号码',
      dataIndex: 'cartNumber',
      key: 'cartNumber',
      width: 200,
    },
    {
      title: '车辆品牌',
      dataIndex: 'cartBrand',
      key: 'cartBrand',
      width: 200,
    },
    {
      title: '车辆所有人',
      dataIndex: 'cartOwner',
      key: 'cartOwner',
      width: 200,
    },
    {
      title: '核定载人数',
      dataIndex: 'cartApprove',
      key: 'cartApprove',
      width: 200,
    },
    {
      title: '车辆注册日期',
      // dataIndex: 'cartCreateLicense',
      key: 'cartCreateLicense',
      width: 200,
      render: r => {
        return r.cartCreateLicense ? moment(r.cartCreateLicense).format('YYYY-MM-DD') : '-'
      },
    },
    // {
    //   title: '照片',
    //   // dataIndex: 'cartDriveLicenseImageBack',
    //   key: 'cartDriveLicenseImageBack',
    //   width: 200,
    //   render: r => {
        // const fileList = [
        //   {
        //     uid: '-1',
        //     name: '示例图1',
        //     status: 'done',
        //     url: r.cartDriveLicenseImageBack,
        //   },
        // ]
        // return <ImgPreview fileList={fileList}></ImgPreview>
    //   },
    // },
  ]

  const AnimateBody = (props) => {
    return <AnimTableBody {...props} />
  }

  const CommonBody = (props) => {
    return <tbody {...props} />
  }

  return (
    <Table
      {...tableProps}
      scroll={{ x: 1400 }}
      columns={columns}
      simple
      rowKey={record => record.wxId}
      expandedRowRender={ r => {
        const cartLicenseImageFront = [
          {
            uid: '-1',
            name: '驾驶证主页',
            status: 'done',
            url: r.cartLicenseImageFront,
          },
        ]
        const cartLicenseImageBack = [
          {
            uid: '-1',
            name: '驾驶证副页',
            status: 'done',
            url: r.cartLicenseImageBack,
          },
        ]
        const cartDriveLicenseImageFront = [
          {
            uid: '-1',
            name: '行驶证主页',
            status: 'done',
            url: r.cartDriveLicenseImageFront,
          },
        ]
        const cartDriveLicenseImageBack = [
          {
            uid: '-1',
            name: '行驶证副页',
            status: 'done',
            url: r.cartDriveLicenseImageBack,
          },
        ]
        return <Row>
            <Col sm={6} xs={24}>
            {/* <span>驾驶证主页:</span> */}
            <ImgPreview fileList={cartLicenseImageFront}></ImgPreview>
            </Col>
            <Col sm={6} xs={24}>
            {/* <span>驾驶证副页:</span> */}
            <ImgPreview fileList={cartLicenseImageBack}></ImgPreview>
            </Col>
            <Col sm={6} xs={24}>
            {/* <span>行驶证主页:</span> */}
            <ImgPreview fileList={cartDriveLicenseImageFront}></ImgPreview>
            </Col>
            <Col sm={6} xs={24}>
            {/* <span>行驶证副页:</span> */}
            <ImgPreview fileList={cartDriveLicenseImageBack}></ImgPreview>
            </Col>
        </Row>
      }}
    />
  )
}

List.propTypes = {
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  isMotion: PropTypes.bool,
  location: PropTypes.object,
}

export default List

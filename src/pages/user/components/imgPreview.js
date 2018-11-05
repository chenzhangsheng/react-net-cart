import { Upload, Modal } from 'antd'
import { PureComponent } from 'react'

export default class ImgPreview extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      previewVisible: false,
      previewImage: '',
      fileList: [],
    }
  }
  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  };
  handleChange = ({ fileList }) => this.setState({ fileList });
  render () {
    const { previewVisible, previewImage } = this.state
    const { fileList } = this.props
    console.log(fileList[0].name,'fileList.name')
    return (
      <div style={{ float: 'left' }}>
        <Upload
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
          showUploadList={{ showRemoveIcon: false, showPreviewIcon: true }}
        >
        </Upload>
        <Modal
          visible={previewVisible}
          footer={fileList[0].name}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
        <h6 style={{ textAlign: 'center' }}>{fileList[0].name}</h6>
      </div>
    )
  }
}
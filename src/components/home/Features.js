import { Card, Col, Row } from 'antd';
import React from 'react';
import image6 from '../../assets/images/advanced-option.jpg';
import image2 from '../../assets/images/clean-design.jpg';
import image4 from '../../assets/images/easy-customise.jpg';
import image3 from '../../assets/images/great-support.jpg';
import image1 from '../../assets/images/modern-design.jpg';
import image5 from '../../assets/images/unlimited-features.jpg';


const { Meta } = Card;

function AppFeature() {
  return (
    <div id="features" className="block bgGrey">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Key Features and Benefits</h2>
        </div>
        <Row gutter={[8, 8]}>
          <Col 
            md={{ span: 8 }} 
            sm={{ span: 12 }} 
            xs={{ span: 24 }}
          >
            <Card hoverable cover={<img alt="modern-design" src={image1} />}>
              <Meta title="Modern Design" />
            </Card>
          </Col>
          <Col
            md={{ span: 8 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <Card hoverable cover={<img alt="clean-design" src={image2} />}>
              <Meta title="Clean Design" />
            </Card>
          </Col>
          <Col
            md={{ span: 8 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <Card hoverable cover={<img alt="great-support" src={image3} />}>
              <Meta title="Great Support" />
            </Card>
          </Col>
          <Col
            md={{ span: 8 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <Card hoverable cover={<img alt="easy-customise" src={image4} />}>
              <Meta title="Easy to Customise" />
            </Card>
          </Col>
          <Col
            md={{ span: 8 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <Card hoverable cover={<img alt="unlimited-features" src={image5} />}>
              <Meta title="Unlimited Features" />
            </Card>
          </Col>
          <Col
            md={{ span: 8 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <Card hoverable cover={<img alt="advance-option" src={image6} />}>
              <Meta title="Advance Option" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default AppFeature;
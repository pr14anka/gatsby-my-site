import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={85}
          text="Java"
        />
        <ProgressBar
          percent={80}
          text="JavaScript"
        />
        <ProgressBar
          percent={70}
          text="J2EE"
        />
        <ProgressBar
          percent={85}
          text="HTML"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={85}
          text="CSS"
        />
        <ProgressBar
          percent={70}
          text="Algorithms"
        />
        <ProgressBar
          percent={78}
          text="Data Structures"
        />
        <ProgressBar
          percent={80}
          text="JS Frameworks"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;

import React, { useState, useContext } from 'react';
import { Row, Col, Button } from 'antd';
import { AuthContext } from 'context/AuthProvider';

const SocialLogin = () => {
  const { signUp } = useContext(AuthContext);
  const [state, setState] = useState({
    facebook: false,
    google: false,
  });
  const handleSocialAuth = (key) => {
    setState({
      ...state,
      [key]: true,
    });
    setTimeout(() => {
      setState({
        ...state,
        [key]: false,
      });
      signUp({});
    }, 600);
  };

  return (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <Button
            loading={state.facebook}
            className="facebook-btn"
            type="primary"
            style={{ width: '100%', marginBottom: 16 }}
            size="large"
            onClick={() => handleSocialAuth('facebook')}
          >
            Facebook
          </Button>
        </Col>
        <Col span={12}>
          <Button
            loading={state.google}
            className="google-btn"
            type="primary"
            style={{ width: '100%', marginBottom: 16 }}
            size="large"
            onClick={() => handleSocialAuth('google')}
          >
            Google+
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default SocialLogin;

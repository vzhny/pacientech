import React, { useState } from 'react';
import { Button } from 'reactstrap';

const Navigation = () => {
  const [isOpen, toggleNavbar] = useState(false);

  return (
    <div style={{ width: '180px' }}>
      {isOpen ? <p>isOpen is currently true.</p> : <p>isOpen is currently false.</p>}
      <Button color="primary" block onClick={() => toggleNavbar(!isOpen)}>
        Toggle
      </Button>
    </div>
  );
};

Navigation.propTypes = {};

export default Navigation;

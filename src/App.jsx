import { useState } from 'react';
import { Container, Tab, Tabs, Row, Col, Image, Modal } from 'react-bootstrap';
import './App.css';

// Sample data structure
const mapCategories = {
  'Adaptive Capacity': {
    'Overall': '/maps/Adaptive_Capacity/Overall.png',
    'Inverted': '/maps/Adaptive_Capacity/Inverted.png',
    'Economic': '/maps/Adaptive_Capacity/Economic.png',
    'Human': '/maps/Adaptive_Capacity/Human.png',
    'Institutional': '/maps/Adaptive_Capacity/Institutional.png',
    'Physical': '/maps/Adaptive_Capacity/Physical.png',
    'Anticipatory': '/maps/Adaptive_Capacity/Anticipatory.png',
  },
  'Hazard': {
    'Overall': '/maps/Hazard/Overall.png',
  },
  'Crop Sensitivity':{
    'test': '',
  },
  'Crop Occurence':{
    'test': '',
  },
  'CRVA Maps':{
    'test': '',
  },
};

function App() {
  const [activeTab, setActiveTab] = useState(Object.keys(mapCategories)[0]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <Container className="py-4">
      <h1 className="text-center mb-4">CAR CRVA MAPS</h1>

      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="mb-3 colored-tabs"
        justify
      >
        {Object.entries(mapCategories).map(([category, maps]) => (
          <Tab eventKey={category} title={category} key={category}>
            <Row>
              {Object.entries(maps).map(([label, src]) => (
                <Col xs={12} sm={6} md={4} lg={3} key={label} className="mb-4">
                  <div className="map-thumbnail" onClick={() => handleImageClick(src)}>
                  <p className="map-label mt-2 text-center">{label}</p>
                    <Image src={src} thumbnail className="w-100" />
                    </div>
                </Col>
              ))}
            </Row>
          </Tab>
        ))}
      </Tabs>

      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Map Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <Image src={selectedImage} fluid />
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default App;

import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function URL() {

  const [url, setUrl] = useState('')
  const [color, setColor] = useState('#000000')
  const [bgColor, setBgColor] = useState('#ffffff')
  const [size, setSize] = useState(256)

  const onImageDownload = () => {
    const svg = document.getElementById("QRCode");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "QRCode";
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;

    setUrl('')
    setColor('#000000')
    setBgColor('#ffffff')
    setSize(256)
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col className="mb-3" sm={12} md={{ span: 4, offset: 1 }}>
          
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Input URL</Form.Label>
              <Form.Control type="text" placeholder="https://google.com" value={url} onChange={(e) => setUrl(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>QR Color</Form.Label>
              <Form.Control type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Background Color</Form.Label>
              <Form.Control type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Size (pixels)</Form.Label>
              <Form.Control type="number" value={size} onChange={(e) => setSize(e.target.value)} />
            </Form.Group>
              <Button type="button" value="Download QR" onClick={onImageDownload}>Download</Button>
          </Form>
        </Col>

        <Col className="mb-3" sm={12} md={{ span: 5, offset: 2 }}>
          <QRCode value={url} size={size} fgColor={color} bgColor={bgColor} level="H" id="QRCode"   />
        </Col>
      </Row>
    </Container>
  )
}

export default URL
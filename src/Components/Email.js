import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Email() {
  const [email, setEmail] = useState('')
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('#000000')
  const [bgColor, setBgColor] = useState('#ffffff')

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

    setTo('')
    setSubject('')
    setMessage('')
    setColor('#000000')
    setBgColor('#ffffff')
  };

  email = setEmail(`MATMSG:TO:${to};SUB:${subject};BODY:${message};;`);

  return (
    <Container >
      <Row className="justify-content-md-center">
        <Col className="mb-3" sm={12} md={{ span: 4, offset: 1 }}>
          
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>To Email</Form.Label>
              <Form.Control type="email" placeholder="email@gmail.com" value={to} onChange={(e) => setTo(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control type="textarea" placeholder="message..." value={message} onChange={(e) => setMessage(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>QR Color</Form.Label>
              <Form.Control type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Background Color</Form.Label>
              <Form.Control type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />
            </Form.Group>
              <Button variant="primary" type="submit">Generate</Button>
              <Button type="button" value="Download QR" onClick={onImageDownload}>Download</Button>
          </Form>
        </Col>

        <Col className="mb-3" sm={12} md={{ span: 5, offset: 2 }}>
          <QRCode value={email} size={256} fgColor={color} bgColor={bgColor} id="QRCode" />
        </Col>
      </Row>
    </Container>
  )
}

export default Email
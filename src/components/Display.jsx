import React from "react";
import { useSelector } from "react-redux";
import formatTime from "./FormatTime";
import { Container, Row, Col } from "react-bootstrap";

const Display = () => {
  const session = useSelector((state) => state.time.session);
  const breaking = useSelector((state) => state.time.breaking);
  const isBreak = useSelector((state) => state.time.isBreak);

  return (
    <Container fluid >
      <Row className="justify-content-center align-items-center">
        <Col xs={12} className="text-center">
          <h1 className="display-4" id="timer-label">{isBreak ? "Break" : "Session"}</h1>
        </Col>
        <Col xs={12} className="text-center">
          <h1 className="display-1" id="time-left" 
          style={{
            fontWeight: "bold"
        }}
          >
            {formatTime(isBreak ? breaking : session, "mm:ss")}
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Display;

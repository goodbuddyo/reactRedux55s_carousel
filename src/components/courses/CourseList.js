import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const CourseList = ({ courses, onDeleteClick }) => (
  <div className="so-tasklist">


<Container>
  {/* <Row className="so-tasklist-head">
    <Col xs={5} md={3}>xs=5 md=3</Col>
    <Col xs={7} md={4}>xs=7 md=4</Col>
    <Col xs={3} md={2}>xs=3 md=2</Col>
    <Col xs={2} md={1}>2/1</Col>
    <Col  xs={7} md={2}> xs=7 md=2</Col>
  </Row> */}

  <Row className="so-tasklist-head">
    <Col xs={5} md={5}>
    Task 
    </Col>
    <Col xs={5} md={5}>
    Details
    </Col> <Col xs={1} md={1}>
      Rank
    </Col>
   
  </Row>
{courses.map(course => {
  return (
  <Row className="so-tasklist-row" key={course.id}>
     <Col xs={5} md={5}>
      <Link to={"/course/" + course.id}>{course.title}</Link>
    </Col>
    <Col xs={5} md={5}>
      {course.category}
      {/* details */}
    </Col>

    <Col xs={1} md={1}>
    {course.authorName}
    </Col>

    <Col xs={12} md={10}>
      Info: <a  className="btn btn-info"
        onClick={ ()=> window.open(course.slug, "_blank")  }
      >
        {course.slug}
      </a>
    </Col>
   
    <Col  xs={12} md={2} className="so-delete">
    <button
      className="btn btn-outline-danger"
      onClick={() => onDeleteClick(course)}
    >
      Delete
    </button>
    </Col>
  </Row>
    );
  })}
  </Container>


  </div>
);

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default CourseList;

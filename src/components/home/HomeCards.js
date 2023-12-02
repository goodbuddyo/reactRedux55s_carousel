import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomeCards = () => (
  <div className="so-homecards">
    <div className="row so-mb-row">
      <div className="col-12 so-grid-col so-bodyContentTop">
        <div className="so-4pxHigh" />
      </div>
    </div>
    <div className="so-assessmentHeader px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">

      
      <Row className="so-taskbutton-row">
    <Col xs={1} md={1}>  </Col>

    <Col xs={10} md={10} className="so-taskbutton">
    <p className="lead">
        <span className="so-lgScreenTxt">
          Many organizations launch great websites, but then move on to other
          projects.{" "}
        </span>
        Great websites require consistant attention.
        <strong>5-5s </strong> recommends a 5 step process to achieve 5 star
        websites that provides a prioritized list of tasks for your backlog.
      </p>
    </Col> 

    <Col xs={1} md={1}>  </Col>
   
  </Row>
  
  <Row className="so-taskbutton-row">
    <Col xs={1} md={3}>  </Col>

    <Col xs={10} md={6} className="so-taskbutton">
      <button type="button" className="btn btn-lg btn-block btn-primary">
        Begin Your Free Assessment
      </button>
    </Col> 

    <Col xs={1} md={3}>  </Col>
   
  </Row>
  </div>

    <div className="card-deck mb-3 text-center">
      <div className="card mb-4 shadow-sm">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">Step 1: Sitemap Review </h4>
        </div>
        <div className="card-body">
          <ul className="my-ul-list list-unstyled my-mt-3 my-mb-4">
            <li>Improves search indexing</li>
            <li>Enables better user navigation</li>
            <li>Great tool for team planning</li>
          </ul>
          <button type="button" className="btn btn-lg btn-block btn-primary">
            Learn More
          </button>
        </div>
      </div>
      <div className="card mb-4 shadow-sm">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal"> Step 2: SEO Update</h4>
        </div>
        <div className="card-body">
          <ul className="my-ul-list list-unstyled my-mt-3 my-mb-4">
            <li>Search results are critical</li>
            <li>Location! Location! Location!</li>
            <li>Some practical low cost recommendations</li>
          </ul>
          <button type="button" className="btn btn-lg btn-block btn-primary">
            Learn More
          </button>
        </div>
      </div>
      <div className="card mb-4 shadow-sm">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal"> Step 3: Site Performance</h4>
        </div>
        <div className="card-body">
          <ul className="my-ul-list list-unstyled my-mt-3 my-mb-4">
            <li>Online performance tools</li>
            <li>Items youve been meaning to get to</li>
            <li>Helpful recommendations</li>
          </ul>
          <button type="button" className="btn btn-lg btn-block btn-primary">
            Learn More
          </button>
        </div>
      </div>
    </div>

    <div className="card-deck mb-3 text-center">
      <div className="card mb-4 shadow-sm">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">Step 4: Security </h4>
        </div>
        <div className="card-body">
          <ul className="my-ul-list list-unstyled my-mt-3 my-mb-4">
            <li>Bad guys are relentless</li>
            <li>And so must we be</li>
            <li>Risk reduction steps</li>
            <li>A practical checklist</li>
          </ul>
          <button type="button" className="btn btn-lg btn-block btn-primary">
            Learn More
          </button>
        </div>
      </div>
      <div className="card mb-4 shadow-sm">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">5: Review External Data</h4>
        </div>
        <div className="card-body">
          <ul className="my-ul-list list-unstyled my-mt-3 my-mb-4">
            <li>User data/feedback</li>
            <li>Email and marketing data</li>
            <li>Social Media considerations</li>
            <li>Competitors</li>
          </ul>
          <button type="button" className="btn btn-lg btn-block btn-primary">
            Learn More
          </button>
        </div>
      </div>
      <div className="card mb-4 shadow-sm">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">Copy/Save Your List!</h4>
        </div>
        <div className="card-body">
          <ul className="my-ul-list list-unstyled my-mt-3 my-mb-4">
            <li>This tool is in beta</li>
            <li>Entries will be periodically deleted</li>
            <li>Copy/save your task list </li>
            <li>Come back again soon</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default HomeCards;

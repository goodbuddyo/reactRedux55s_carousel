import React from "react";
import Carousel from "react-bootstrap/Carousel";

class HomeCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
        interval={900000}
        fade={true}
      >
        <Carousel.Item className="so-carouselitem">
          <img
            className="d-block w-100"
            src="static/img/5-5sTransparent_2010x594.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="row so-mb-row">
              <div className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-6 so-grid-col  so-LeftCaption">
                <h3>5 Steps to 5 Star Ratings</h3>
                <p>
                  Every website manager wants 5 star ratings, but few do these five important
                  steps consistently to get there. Take the free assessment.
                </p>
              </div>
              <div className=" d-none d-md-block  col-0 col-sm-5 col-md-5 col-lg-5 col-xl-6 so-grid-col so-RtCaption">
                <img
                  src="static/img/5-5sStar400x246.gif"
                  className="d-block w-100"
                  alt=""
                />
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="static/img/5-5sTransparent_2010x594.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="row so-mb-row">
              <div className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-6 so-grid-col  so-LeftCaption">
                <h3> Step 1: Site Map Review</h3>
                <p>
                  This step has many benfits for your team and your users. It
                  also prepares you for the next steps.
                </p>
              </div>
              <div className=" d-none d-md-block  col-0 col-sm-5 col-md-5 col-lg-5 col-xl-6 so-grid-col so-RtCaption">
                <img
                  src="static/img/tapemeasure01.svg"
                  className="d-block w-100"
                  alt=""
                />
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="static/img/5-5sTransparent_2010x594.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="row so-mb-row">
              <div className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-6 so-grid-col  so-LeftCaption">
                <h3> Step 2: SEO Update</h3>
                <p>
                  Attaining prominant search results can be costly. Periodic
                  optimization can improve your results without paying fees.
                </p>
              </div>
              <div className=" d-none d-md-block  col-0 col-sm-5 col-md-5 col-lg-5 col-xl-6 so-grid-col so-RtCaption">
                <img
                  src="static/img/dataLaptopIcon02.svg"
                  className="d-block w-100"
                  alt=""
                />
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="static/img/5-5sTransparent_2010x594.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="row so-mb-row">
              <div className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-6 so-grid-col  so-LeftCaption">
                <h3> Step 3:  Performance Test</h3>
                <p>This step can help users, Google and your team.</p>
              </div>
              <div className=" d-none d-md-block  col-0 col-sm-5 col-md-5 col-lg-5 col-xl-6 so-grid-col so-RtCaption">
                <img
                  src="static/img/5-5sCityBlue400wx250.jpg"
                  className="d-block w-100"
                  alt=""
                />
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="static/img/5-5sTransparent_2010x594.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="row so-mb-row">
              <div className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-6 so-grid-col  so-LeftCaption">
                <h3> Step 4: Security Check</h3>
                <p>Ignoring security can cost you more than just users. There are always new threats. Some practical steps to lower your risks.</p>
              </div>
              <div className=" d-none d-md-block  col-0 col-sm-5 col-md-5 col-lg-5 col-xl-6 so-grid-col so-RtCaption">
                <img
                  src="static/img/5-5sIntegrateBiz03.png"
                  className="d-block w-100"
                  alt=""
                />
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-100"
            src="static/img/5-5sTransparent_2010x594.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="row so-mb-row">
              <div className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-6 so-grid-col  so-LeftCaption">
                <h3>Step 5: Review &amp; Revise </h3>
                <p>
                  User/business/marketing feedback and other data may require
                  revising your list. Be prepared to support why each item is
                  listed.
                </p>
              </div>
              <div className=" d-none d-md-block col-0 col-sm-5 col-md-5 col-lg-5 col-xl-6 so-grid-col so-RtCaption">
                <img
                  src="static/img/5-5sSiteUpdates01.svg"
                  className="d-block w-100"
                  alt=""
                />
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-100"
            src="static/img/5-5sTransparent_2010x594.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="row so-mb-row">
              <div className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-6 so-grid-col  so-LeftCaption">
                <h3>Copy/Save/Print Task List</h3>
                <p>If your list is long, address the higher priority tasks first and then 
                  come back in a few weeks for an updated list. </p>
              </div>
              <div className=" d-none d-md-block col-0 col-sm-5 col-md-5 col-lg-5 col-xl-6 so-grid-col so-RtCaption">
                <img
                  src="static/img/TaskList400_250.jpg"
                  className="d-block w-100"
                  alt=""
                />
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>



      </Carousel>
    );
  }
}

{
  /* <div>
    <img src="static/img/tapemeasure01.svg" className="d-block w-80" alt="06"></img>
    </div>
    <div>
    <img src="static/img/map01.png" className="d-block w-80" alt="06"></img>
    </div>
    <div>
    <img src="static/img/dataLaptopIcon02.svg" className="d-block w-80" alt="06"></img>
    </div>
    <div>
    <img src="static/img/5-5sTransparent_2010x594.png" className="d-block w-80" alt="06"></img>
    </div>
    <div>
    <img src="static/img/5-5sSiteUpdates01.svg" className="d-block w-80" alt="06"></img>
    </div>
    <div>
    <img src="static/img/5-5sLogo06_454x140.png" className="d-block w-80" alt="06"></img>
    </div>
    <div>
    <img src="static/img/5-5sIntegrateBiz03.png" className="d-block w-80" alt="06"></img>
    </div>
    <div>
    <img src="static/img/5-5sCityBlue400wx250.jpg" className="d-block w-80" alt="06"></img>
    </div> */
}

export default HomeCarousel;

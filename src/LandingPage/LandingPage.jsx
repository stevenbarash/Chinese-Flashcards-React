import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import TopNavBar from '../Components/TopNavBar';
import Footer from '../Components/Footer';
import './LandingPage.css';
import GreatWallSVG from './GreatWallSVG';
export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="lander-top">
          {/* <header className="nav"> */}
          <TopNavBar />
          {/* </header> */}
          <Jumbotron className="jumbotron-fluid bg-transparent">
            <div className="container">
              <div className="col-md-6 col-12 d-md-inline-block align-middle">
                <h1 className="text-md-left text-center display-5 animated fadeInDown">
                  Learn Chinese for free.
                </h1>
                <p className="lead">
                  Welcome to HanU, a Chinese language learning platform written
                  in ReactJS.
                </p>
              </div>
              <div className="great-wall col-md-5 col-12 d-md-inline-block align-middle image-container">
                <GreatWallSVG />
              </div>
            </div>
          </Jumbotron>
        </div>

        {/* <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box mt-5 mx-auto">
                <i className="far fa-thumbs-up " />
                <h3 className="mb-3">Proven Success</h3>
                <p className="text-muted mb-0">
                  Our templates are updated regularly so they don't break.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box mt-5 mx-auto">
                <i className="far fa-thumbs-up " />
                <h3 className="mb-3">Ready to Ship</h3>
                <p className="text-muted mb-0">
                  You can use this theme as is, or you can make changes!
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box mt-5 mx-auto">
                <i className="far fa-thumbs-up " />
                <h3 className="mb-3">Up to Date</h3>
                <p className="text-muted mb-0">
                  We update dependencies to keep things fresh.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="service-box mt-5 mx-auto">
                <i className="far fa-thumbs-up " />
                <h3 className="mb-3">Made with Love</h3>
                <p className="text-muted mb-0">
                  You have to make your websites with love these days!
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="col-12 d-md-none">
          <img src="Assets/Images/kite1.jpg" className="rounded-circle w-100 p-3 mx-auto d-block" alt="Delta Kite">
        </div>
        <div className="col-md-6 col-12 d-md-inline-block align-middle text-primary ">
          <h2 className="text-md-left text-center font-weight-bold m-3">
            Open yourself up to a whole new world
          </h2>
          <p className="m-3">
            Chinese is the world's most widely spoken language, with over 1
            Billion native speakers.
          </p>
        </div>

        <div className="d-none col-md-5 d-md-inline-block align-middle">
          <img src="Assets/Images/kite1.jpg" className="rounded-circle w-100 p-3 mx-auto d-block" alt="Delta Kite">
        </div>
        <div className="col-md-6 col-12 d-md-inline-block align-middle text-primary ">
          <h2 className="text-md-left text-center font-weight-bold m-3">
            Learn on the go
          </h2>
          <p className="m-3">
            HanU is built responsively so you can learn on your phone, laptop or
            tablet.
          </p>
        </div>

        <div className="d-none col-md-5 d-md-inline-block align-middle">
          <img src="Assets/Images/kite1.jpg" className="rounded-circle w-100 p-3 mx-auto d-block" alt="Delta Kite">
        </div>

        <div className="col-md-6 col-12 d-md-inline-block align-middle text-primary ">
          <h2 className="text-md-left text-center font-weight-bold">
            Why is it called "HanU"
          </h2>
          <p className="m-3">
            "Hanyu", or 汉语 is the Chinese word for "Chinese Language", and
            "HanU" is a contraction of "Hanyu" and "Univeristy", thus "HanU"
          </p>
        </div> */}
        <div className="first-item p-4">
          <div className="col-md-5 col-12 d-md-inline-block align-middle">
            <img
              className="mockup container-fluid"
              src="http://imgur.com/OGG3iRA.png"
            />
          </div>

          <div className="banner-inner text-white col-md-6 col-12 d-md-inline-block align-middle">
            <h2 className="text-md-left text-center font-weight-bold m-3">
              Learn on the go
            </h2>
            <p className="m-3">
              HanU is built responsively so you can learn on your phone, laptop
              or tablet.
            </p>
          </div>
        </div>

        <div className=" second-item p-4 make-white-when-phone">
          <div className="col-12 d-md-none" />
          <div className="banner-inner col-md-6 col-12 d-md-inline-block align-middle text-white">
            <h2 className="text-md-left text-center font-weight-bold m-3">
              Open yourself up to a whole new world
            </h2>
            <p className="m-3">
              Chinese is the world's most widely spoken language, with over 1
              Billion native speakers.
            </p>
          </div>
          <div className="d-none row-md-5 d-md-inline-block align-middle" />
        </div>
        {/* <div className="third-item p-4">
          <div className="banner-inner text-white text-center align-middle">
            <h2 className=" text-center font-weight-bold m-3">
              Why is it called "HanU"
            </h2>
            <p className="m-3 text-center">
              "Hanyu", or 汉语 is the Chinese word for "Chinese Language", and
              "HanU" is a portmanteau of "Hanyu" and "Univeristy", thus "HanU"
            </p>
          </div>
        </div> */}
        <Footer />
      </div>
    );
  }
}

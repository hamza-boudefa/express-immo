import React from "react";
import "./Carousel.css";
import { MdBed } from "react-icons/md";
import { BiBath } from "react-icons/bi";
import { TbDimensions } from "react-icons/tb";
import { GrShareOption } from "react-icons/gr";
import { FaMapMarkerAlt } from "react-icons/fa";

import Carousel, {  slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';



const Carousell = () => {
  let property=[{
    address:'9 rued hadi chaker ,ariana',
    price:"540 000",
    discreption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ut odit sed!",
    room:"3",
    bathroom:"1",
    area:"100"
  }]

  return (
    <div>
        <h1 className="carousel-title">Nouvellement listé 
</h1>
<Carousel
 plugins={[
  'arrows',
  'infinite',
  {
    resolve: slidesToShowPlugin,
    options: {
     numberOfSlides: 3,
     interval: 2000,

    }
  },
]}
breakpoints={{
  
  800: {
    plugins: [
      'arrows',
     {
       resolve: slidesToShowPlugin,
       options: {
        numberOfSlides: 1
       }
     },
   ]
  },
  1150: {
    plugins: [
      'arrows',
     {
       resolve: slidesToShowPlugin,
       options: {
        numberOfSlides: 2
       }
     },
   ]
  }
}}
>
<div class="carousel-card">

        <div class="box">
          <div class="top">
            <img
              src="https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271__340.jpg"
              alt=""
            />
          </div>
          <div className="card-address">
            <FaMapMarkerAlt />
            <span> 9 rue hedi chaker ariana</span>
          </div>
          <div class="bottom">
            <div class="price">
              <span>a vendre</span>
              <span>540,000 MD</span>
            </div>
            {/* <GrShareOption/> */}
            <h3>villa a vendre a tunis</h3>
            <p>
              Enchanting three bedrooms, three bath home with spacious one
              bedroom, one bath...
            </p>
            <div class="advants">
              <div>
                <span>chambres</span>
                <div>
                  <MdBed /> <span>3</span>
                </div>
              </div>
              <div>
                <span>salle d'eau</span>
                <div>
                  <BiBath />
                  <span>3</span>
                </div>
              </div>
              <div>
                <span>surface</span>
                <div>
                  <TbDimensions />
                  <span>
                    4300<span>m²</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="card-agent">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                alt=""
              />
              <div className="card-agent-cred">
                <h5>hamza boudefa</h5>
                <p>agent immobiler</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-card">
        <div class="box">
          <div class="top">
            <img
              src="https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271__340.jpg"
              alt=""
            />
          </div>
          <div className="card-address">
            <FaMapMarkerAlt />
            <span> 9 rue hedi chaker ariana</span>
          </div>
          <div class="bottom">
            <div class="price">
              <span>a vendre</span>
              <span>540,000 MD</span>
            </div>
            {/* <GrShareOption/> */}
            <h3>villa a vendre a tunis</h3>
            <p>
              Enchanting three bedrooms, three bath home with spacious one
              bedroom, one bath...
            </p>
            <div class="advants">
              <div>
                <span>chambres</span>
                <div>
                  <MdBed /> <span>3</span>
                </div>
              </div>
              <div>
                <span>salle d'eau</span>
                <div>
                  <BiBath />
                  <span>3</span>
                </div>
              </div>
              <div>
                <span>surface</span>
                <div>
                  <TbDimensions />
                  <span>
                    4300<span>m²</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="card-agent">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                alt=""
              />
              <div className="card-agent-cred">
                <h5>hamza boudefa</h5>
                <p>agent immobiler</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-card">
        <div class="box">
          <div class="top">
            <img
              src="https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271__340.jpg"
              alt=""
            />
          </div>
          <div className="card-address">
            <FaMapMarkerAlt />
            <span> 9 rue hedi chaker ariana</span>
          </div>
          <div class="bottom">
            <div class="price">
              <span>a vendre</span>
              <span>540,000 MD</span>
            </div>
            {/* <GrShareOption/> */}
            <h3>villa a vendre a tunis</h3>
            <p>
              Enchanting three bedrooms, three bath home with spacious one
              bedroom, one bath...
            </p>
            <div class="advants">
              <div>
                <span>chambres</span>
                <div>
                  <MdBed /> <span>3</span>
                </div>
              </div>
              <div>
                <span>salle d'eau</span>
                <div>
                  <BiBath />
                  <span>3</span>
                </div>
              </div>
              <div>
                <span>surface</span>
                <div>
                  <TbDimensions />
                  <span>
                    4300<span>m²</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="card-agent">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                alt=""
              />
              <div className="card-agent-cred">
                <h5>hamza boudefa</h5>
                <p>agent immobiler</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-card">
        <div class="box">
          <div class="top">
            <img
              src="https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271__340.jpg"
              alt=""
            />
          </div>
          <div className="card-address">
            <FaMapMarkerAlt />
            <span> 9 rue hedi chaker ariana</span>
          </div>
          <div class="bottom">
            <div class="price">
              <span>a vendre</span>
              <span>540,000 MD</span>
            </div>
            {/* <GrShareOption/> */}
            <h3>villa a vendre a tunis</h3>
            <p>
              Enchanting three bedrooms, three bath home with spacious one
              bedroom, one bath...
            </p>
            <div class="advants">
              <div>
                <span>chambres</span>
                <div>
                  <MdBed /> <span>3</span>
                </div>
              </div>
              <div>
                <span>salle d'eau</span>
                <div>
                  <BiBath />
                  <span>3</span>
                </div>
              </div>
              <div>
                <span>surface</span>
                <div>
                  <TbDimensions />
                  <span>
                    4300<span>m²</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="card-agent">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                alt=""
              />
              <div className="card-agent-cred">
                <h5>hamza boudefa</h5>
                <p>agent immobiler</p>
              </div>
            </div>
          </div>
        </div>
      </div>

 </Carousel>
         </div>
  );
};

export default Carousell;

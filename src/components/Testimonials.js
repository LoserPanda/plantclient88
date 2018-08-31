import React, {Component} from 'react';
import {Container} from '../bootstrapcomponents/Container.js';
// import {Avatar} from '../bootstrapcomponents/Avatar.js';

import {Fa} from '../bootstrapcomponents/Fa.js';

import { Carousel} from '../bootstrapcomponents/Carousel.js';
import { CarouselInner} from '../bootstrapcomponents/CarouselInner.js';
import { CarouselItem} from '../bootstrapcomponents/CarouselItem.js';
import Palm from './pic/palm.jpeg';
import Palm2 from './pic/palm2.jpeg';
import Horse from './pic/horse.jpeg';
// Avatar, Fa, Carousel, CarouselInner, CarouselItem, Testimonial

class Testimonials extends Component {

  render() {

    return(

      <Container>

        <section className="text-center my-5">

          <h2 className="h1-responsive font-weight-bold my-5">Testimonials v.2</h2>

          <Carousel

            activeItem={1}

            length={3}

            testimonial

            interval={false}

            showIndicators={false}

            className="no-flex">

            <CarouselInner>

              <CarouselItem itemId="1">

                <div>

                  <div className="mx-auto mb-4">

                    <img src={Palm}/>

                  </div>

                  <h2><p>

                    <Fa icon="quote-left"></Fa> "I wouldn't live without BANANAPROJECT anymore. It was such a relief when I finally got a change to express my feelings"

                  </p></h2>

                  <h1 className="font-weight-bold">Yucca palm tree</h1>

                  <h3 className="font-weight-bold my-3">Resident indoor plant</h3>

                  <Fa icon="star" className="blue-text"> </Fa>

                  <Fa icon="star" className="blue-text"> </Fa>

                  <Fa icon="star" className="blue-text"> </Fa>

                  <Fa icon="star" className="blue-text"> </Fa>

                  <Fa icon="star-half-full" className="blue-text"> </Fa>

                </div>

              </CarouselItem>

              <CarouselItem itemId="2">

                <div>

                  <div className="mx-auto mb-4">

                    <img src={Palm2} className="rounded-circle img-fluid" alt="Second sample avatar image"/>

                  </div>

                  <p>

                    <Fa icon="quote-left"></Fa> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.

                  </p>

                  <h4 className="font-weight-bold">Maria Kate</h4>

                  <h6 className="font-weight-bold my-3">Photographer at Studio LA</h6>

                  <Fa icon="star" className="blue-text"> </Fa>

                  <Fa icon="star" className="blue-text"> </Fa>

                  <Fa icon="star" className="blue-text"> </Fa>

                  <Fa icon="star" className="blue-text"> </Fa>

                  <Fa icon="star" className="blue-text"> </Fa>

                </div>

              </CarouselItem>

              <CarouselItem itemId="3">

                <div>

                  <div className="mx-auto mb-4">

                    <img src={Horse} className="rounded-circle img-fluid" alt="Third sample avatar image"/>

                  </div>

                  <p>

                    <Fa icon="quote-left"></Fa> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

                  </p>

                  <h4 className="font-weight-bold">John Doe</h4>

                  <h6 className="font-weight-bold my-3">Front-end Developer in NY</h6>

                  <Fa icon="star" className="blue-text"> </Fa>

                  <Fa icon="star" className="blue-text"> </Fa>

                  <Fa icon="star" className="blue-text"> </Fa>

                  <Fa icon="star" className="blue-text"> </Fa>

                  <Fa icon="star-o" className="blue-text"> </Fa>

                </div>

              </CarouselItem>

            </CarouselInner>

          </Carousel>

        </section>

      </Container>

    );

  };

}




export default Testimonials;

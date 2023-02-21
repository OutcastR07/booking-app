import React, { useState } from 'react'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import './Hotel.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CancelIcon from '@mui/icons-material/Cancel';

const Hotel = () => {

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/424314221.jpg?k=045a739f8ccd79a777dc3a2f3c6f0f62a983e4d9c7926acf30b2659eafba9e8e&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/424314022.jpg?k=54d1947fb775cd431ac930d651075520898bc7029ef3bfc1e278c8e434691abd&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/424314182.jpg?k=70e55160804cc40ecd38df0a0535bc2bdbfa4d354391f8e6be5424fe51c73181&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/424313962.jpg?k=bf0521b13c37dce8f744a497f316d468bfb1f309ae07768b318d4d3cfdc927a2&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/358474343.jpg?k=e456332fefb2d448af62ab22cb705a1ec3684348a87d95d3e0670df65aa91ccc&o=&hp=1"
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/358474277.jpg?k=9fe21e0ee2f4401a25083458ebc04320a59eaa769abe49d8998fedfae7de7582&o=&hp=1"
        }
    ]

    const handleOpen = (i) => {
        setSlideNumber(i)
        setOpen(true)
    }

    const handleMove = (direction) => {
        let newSlideNumber;
        if (direction === 'l') {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1
        }
        setSlideNumber(newSlideNumber);
    }

    return (
        <div>
            <Navbar />
            <Header type='list' />
            <div className="hotel__container">
                {open &&
                    <div className="slider">
                        <CancelIcon style={{ width: "30px", height: "30px" }} className='close' onClick={() => setOpen(false)} />
                        <ArrowBackIcon style={{ width: "50px", height: "50px" }} className='arrow' onClick={() => handleMove("l")} />
                        <div className="slider__wrapper">
                            <img src={photos[slideNumber].src} alt="" className="slider__img" />
                        </div>
                        <ArrowForwardIcon style={{ width: "50px", height: "50px" }} className='arrow' onClick={() => handleMove("r")} />
                    </div>}
                <div className="hotel__wrapper">
                    <button className='hotel__reserve'>Reserve</button>
                    <h1 className="hotel__title">Huge Ocean Front Condo, Amazing Views</h1>
                    <div className="hotel__address">
                        <LocationOnIcon />
                        <span>107 South Ocean Boulevard, Myrtle Beach, USA</span>
                    </div>
                    <span className="hotel__distance">
                        Excellent location - 1.8km from center
                    </span>
                    <span className='hotel__priceHighlight'>
                        Book a stay at $210 per night and get a free airport taxi
                    </span>
                    <div className="hotel__images">
                        {photos.map((photo, i) => (
                            <div className="hotel__imageWrapper">
                                <img onClick={() => handleOpen(i)} src={photo.src} alt="" className="hotel__img" />
                            </div>
                        ))}
                    </div>
                    <div className="hotel__details">
                        <div className="hotel__detailsText">
                            <h1 className="hotel__title">Stay in the heart of Myrtle Beach</h1>
                            <p className="hotel__description">
                                Situated less than 1 km from the centre of Myrtle Beach, a 0-minute walk from Myrtle Beach, Huge Ocean Front Condo, Amazing Views features air-conditioned accommodation with a balcony, an outdoor swimming pool and a terrace. Both WiFi and private parking are accessible at the apartment free of charge.

                                The accommodation comes with a flat-screen TV and a private bathroom with shower, hot tub and free toiletries, while the kitchen has a fridge and a microwave.

                                Guests can enjoy the indoor pool at Huge Ocean Front Condo, Amazing Views.

                                Myrtle Beach Boardwalk is 1.1 km from the accommodation, while Myrtle Beach Convention Center is 3.7 km from the property. The nearest airport is Myrtle Beach International Airport, 5 km from Huge Ocean Front Condo, Amazing Views.

                                Huge Ocean Front Condo, Amazing Views has been welcoming Booking.com guests since 13 May 2022.
                            </p>
                        </div>
                        <div className="hotel__detailsPrice">
                            <h1>Property Highlights</h1>
                            <span>
                                Located in the heart of Myrtle Beach, this property has a excellent location score of 9.8!
                            </span>
                            <h2>
                                <b>$840</b> (4 nights)
                            </h2>
                            <button>Reserve</button>
                        </div>
                    </div>
                </div>
                <MailList />
                <Footer />
            </div>
        </div>
    )
}

export default Hotel
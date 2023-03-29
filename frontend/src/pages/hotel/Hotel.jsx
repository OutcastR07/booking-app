import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CancelIcon from '@mui/icons-material/Cancel';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Navbar from '../../components/navbar/Navbar';
import Reserve from '../../components/reserve/Reserve';
import { AuthContext } from '../../context/AuthContext';
import { SearchContext } from '../../context/SearchContext';
import useFetch from '../../hooks/useFetch';
import './Hotel.css';

const Hotel = () => {
	const location = useLocation();
	const id = location.pathname.split('/')[2];
	const [slideNumber, setSlideNumber] = useState(0);
	const [open, setOpen] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	const { data, loading } = useFetch(`/hotels/find/${id}`);

	const { user } = useContext(AuthContext);

	const navigate = useNavigate();

	const { dates, options } = useContext(SearchContext);

	const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
	function dayDifference(date1, date2) {
		const timeDiff = Math.abs(date2.getTime() - date1.getTime());
		const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
		return diffDays;
	}

	const days = dayDifference(dates[0].endDate, dates[0].startDate);

	const handleOpen = (i) => {
		setSlideNumber(i);
		setOpen(true);
	};

	const handleMove = (direction) => {
		let newSlideNumber;
		if (direction === 'l') {
			newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
		} else {
			newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
		}
		setSlideNumber(newSlideNumber);
	};

	const handleClick = () => {
		if (user) {
			setOpenModal(true);
		} else {
			navigate('/login');
		}
	};

	console.log(data);

	return (
		<div>
			<Navbar />
			<Header type="list" />
			{loading ? (
				'loading'
			) : (
				<div className="hotel__container">
					{open && (
						<div className="slider">
							<CancelIcon
								style={{ width: '30px', height: '30px' }}
								className="close"
								onClick={() => setOpen(false)}
							/>
							<ArrowBackIcon
								style={{ width: '50px', height: '50px' }}
								className="arrow"
								onClick={() => handleMove('l')}
							/>
							<div className="slider__wrapper">
								<img
									src={data.photos[slideNumber]}
									alt=""
									className="slider__img"
								/>
							</div>
							<ArrowForwardIcon
								style={{ width: '50px', height: '50px' }}
								className="arrow"
								onClick={() => handleMove('r')}
							/>
						</div>
					)}
					<div className="hotel__wrapper">
						<button className="hotel__reserve" onClick={handleClick}>
							Reserve
						</button>
						<h1 className="hotel__title">{data.name}</h1>
						<div className="hotel__address">
							<LocationOnIcon />
							<span>{data.address}</span>
						</div>
						<span className="hotel__distance">
							Excellent location - {data.distance}m from center
						</span>
						<span className="hotel__priceHighlight">
							Book a stay at ${data.cheapestPrice} per night and get a free
							airport taxi
						</span>
						<div className="hotel__images">
							{data.photos?.map((photo, i) => (
								<div className="hotel__imageWrapper">
									<img
										onClick={() => handleOpen(i)}
										src={photo}
										alt=""
										className="hotel__img"
									/>
								</div>
							))}
						</div>
						<div className="hotel__details">
							<div className="hotel__detailsText">
								<h1 className="hotel__title">{data.title}</h1>
								<p className="hotel__description">{data.desc}</p>
							</div>
							<div className="hotel__detailsPrice">
								<h1>Property Highlights</h1>
								<span>
									Located in the heart of Myrtle Beach, this property has a
									excellent location score of 9.8!
								</span>
								<h2>
									<b>${days * data.cheapestPrice * options.room}</b> ({days}{' '}
									nights)
								</h2>
								<button onClick={handleClick}>Reserve</button>
							</div>
						</div>
					</div>
					<MailList />
					<Footer className="footer" />
				</div>
			)}
			{openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
		</div>
	);
};

export default Hotel;

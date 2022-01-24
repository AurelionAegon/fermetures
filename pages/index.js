/* eslint-disable @next/next/no-img-element */

import Head from 'next/head';
import Header from '../components/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
	Pagination,
	EffectFade,
	Autoplay,
	EffectCoverflow,
} from 'swiper';

import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import Slide from '../components/Slide';

export default function Home() {
	SwiperCore.use([Autoplay, EffectCoverflow]);

	return (
		<div className='font-sans'>
			<Head>
				<title>fermetures</title>
				<meta name='description' content='fermetures' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='relative'>
				<Header className='absolute top-0 left-0 right-0 z-40 ' />
				<div className='absolute top-0 left-0 right-0 -z-50'>
					<Swiper
						modules={[Pagination, EffectFade]}
						spaceBetween={0}
						slidesPerView={1}
						loop={true}
						autoplay={{
							delay: 3000,
							disableOnInteraction: false,
						}}
						effect='coverflow'
						coverflowEffect={{
							rotate: 0,
							stretch: 0,
							depth: 360,
							modifier: 1,
						}}
						pagination={{ clickable: true }}
					>
						<SwiperSlide>
							<Slide image='slideA' />
						</SwiperSlide>
						<SwiperSlide>
							<Slide image='slideB' />
						</SwiperSlide>
						<SwiperSlide>
							<Slide image='slideC' />
						</SwiperSlide>
						<SwiperSlide>
							<Slide image='slideD' />
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
}

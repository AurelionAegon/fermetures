import React, { Component } from 'react';
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

export default class Hero extends Component {
	constructor() {
		super();
		SwiperCore.use([Autoplay, EffectCoverflow]);
	}
	render() {
		return (
			<div className=' -z-10'>
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
						<Slide
							image='slideA'
							text='Fermetures, designer de solutions de fermetures personnalisées'
							dark={false}
							link='#'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Slide
							image='slideB'
							text='Trouvez un professionnel pres de ches vous'
							dark={false}
							link='#'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Slide
							image='slideC'
							text='lorem ipsum dollar imppe '
							dark={false}
							link='#'
						/>
					</SwiperSlide>
					<SwiperSlide>
						<Slide
							image='slideD'
							text='the greate gastaby by aurelions usl'
							dark={true}
							link='#'
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		);
	}
}

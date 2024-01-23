import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import PageLoading from '@/components/PageLoading'
import PageError from '@/components/PageError'
import PlayHeader from '@/components/Play/PlayHeader'
import GameInfo from '@/components/Play/GameInfo'
import Footer from '@/components/PageFooter'
import Questions from '@/components/Questions/Questions'

import queryValidator from '@/helpers/gameConfig'
import categories from '@/assets/categories.json'
import { useBoundStore } from '@/store/useBoundStore'
import NewGameForm from '@/components/Form/NewGameForm'
import playSound from '@/helpers/playSound'

export default function Play () {
	
	const handlePlay = () => {
		playSound('pop');
		document.getElementById('newGameDialog')?.showModal();
		// document.getElementById("start").addEventListener("click", closePlay);
	
	};
	
	  // Call handlePlay on page load
	  useEffect(() => {
		
		handlePlay();
	  }, []); // Empty dependency array ensures that the effect runs only once on mount
	
	return (
		<style jsx global>
					{`
					body {
						background: url(play_bg.webp) center;
						background-size: 100% 100%;
						background-color: #e6c642;
					}

					@media (max-width: 1030px) {
						body {
							background-size: auto 100%;
						}
					}
				`}
				</style>
	)
}

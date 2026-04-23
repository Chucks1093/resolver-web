import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";

const TELEGRAM_BOT_URL = "https://t.me/resolver_agent_bot";

function Hero() {
	return (
		<section className='bg-[#1d1d1d] noice min-h-screen flex items-center px-4 md:px-2 relative overflow-hidden w-full'>
			<motion.img
				initial={{ opacity: 0, x: -50 }}
				animate={{
					opacity: 1,
					x: 0,
					y: [0, -10, 0],
					rotate: [0, 5, 0],
				}}
				transition={{
					opacity: { duration: 0.8 },
					x: { duration: 0.8 },
					y: {
						repeat: Infinity,
						duration: 4,
						ease: "easeInOut",
					},
					rotate: {
						repeat: Infinity,
						duration: 5,
						ease: "easeInOut",
					},
				}}
				className='absolute bottom-3 -left-3 invert-[.9] w-[6rem]'
				src='/icons/kite.svg'
				alt='Kite'
			/>
			<motion.img
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.3 }}
				className='md:w-[22rem] w-[18rem] absolute md:-bottom-20 -bottom-[10rem] right-[10%]'
				src='/icons/bolt.svg'
				alt=''
			/>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className='w-full max-w-6xl mx-auto mt-10 relative md:bottom-0 bottom-10'>
				<motion.img
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					src='/icons/wavy-line.svg'
					alt=''
					className='w-[7rem] md:w-[10rem] mb-4'
				/>
				<motion.h1
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.2 }}
					className='hidden md:block text-[2rem] md:text-[3rem] leading-8 md:leading-snug mb-3 font-marlin text-app-offwhite font-medium relative'>
					Fix GitHub Issues
					<br className='md:block hidden' /> Directly From Telegram
				</motion.h1>
				<motion.h1
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.2 }}
					className='text-[2rem] md:text-[3rem] leading-10 md:leading-snug mb-3 font-marlin text-app-offwhite font-medium md:hidden'>
					Fix GitHub Issues From Telegram.
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.4 }}
					className='text-sm md:text-lg mb-9 text-app-offwhite w-[%] font-bricolage md:min-w-[35rem] md:max-w-[38rem]'>
					Resolver connects your Telegram and GitHub so you can assign,
					solve, continue, and ship issue work with AI-assisted workflows.
				</motion.p>
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.6 }}
					className='flex items-center gap-4'>
					<motion.a
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						href={TELEGRAM_BOT_URL}
						target='_blank'
						rel='noreferrer'
						className='px-5 md:px-8 py-2 md:py-3 bg-white text-zinc-700 rounded-full transition-colors flex items-center gap-2 shadow-lg text-[.8rem] md:text-[1rem]'>
						Get Started
						<motion.div
							animate={{ x: [0, 5, 0] }}
							transition={{
								repeat: Infinity,
								repeatDelay: 2,
								duration: 0.8,
							}}>
							<ArrowRight className='h-5 w-5' />
						</motion.div>
					</motion.a>
					<motion.a
						href='https://github.com/Chucks1093/resolver'
						target='_blank'
						whileHover={{
							scale: 1.05,
							backgroundColor: "rgba(255, 255, 255, 0.1)",
							borderColor: "rgba(255, 255, 255, 0.5)",
						}}
						whileTap={{ scale: 0.95 }}
						className='px-5 md:px-8 py-2 md:py-3 border-[.1rem] border-zinc-200 bg-transparent rounded-full hover:bg-blue-50 transition-colors flex items-center gap-2 text-zinc-200 text-[.8rem] md:text-[1rem] relative'>
						View on GitHub
						<motion.div
							animate={{ rotate: [0, 10, 0] }}
							transition={{
								repeat: Infinity,
								repeatDelay: 3,
								duration: 0.5,
							}}>
							<Github
								className='h-5 w-5'
								color='white'
							/>
						</motion.div>
					</motion.a>
				</motion.div>
			</motion.div>
		</section>
	);
}

export default Hero;

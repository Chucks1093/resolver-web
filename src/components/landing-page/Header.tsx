import { LogOut } from "lucide-react";

const TELEGRAM_BOT_URL = "https://t.me/resolver_agent_bot";

function Header() {
	return (
		<header className='absolute flex items-center justify-between w-full max-w-6xl md:top-[8vh] top-[5vh] left-1/2 -translate-x-1/2 px-4 md:px-6 lg:px-0 z-20'>
			<div className='flex items-center gap-1'>
				<p className='text-white font-montserrat font-medium text-xl'>
					Resolver
				</p>
			</div>
			<div>
				<a
					href={TELEGRAM_BOT_URL}
					target='_blank'
					rel='noreferrer'
					className='bg-white text-black font-marlin rounded-lg px-3 py-2 md:px-6 md:py-2 shadow-lg flex items-center justify-center gap-2 text-sm md:text-base font-medium transition-all hover:shadow-xl'>
					<span className='inline'>Get Started</span>
					<LogOut className='w-5' />
				</a>
			</div>
		</header>
	);
}

export default Header;

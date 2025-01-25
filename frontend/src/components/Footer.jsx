const Footer = () => {
	return (
		<footer className='py-6 md:px-8 md:py-0 bg-black text-white border-t border-gray-800'>
			<div className='flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row'>
				<p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
					Built by{" "}
					<a
						href='https://www.instagram.com/k.kimtoki/'
						target='_blank'
						className='font-medium underline underline-offset-4'
					>
						kimtoki
					</a>
					. Recommended books{" "}
					<a
						href='https://www.hytexts.com/ebook/3fb6b2f3-7056-46ac-bbb2-1ee18403f66f'
						target='_blank'
						rel='noreferrer'
						className='font-medium underline underline-offset-4'
					>
						ฝันที่เป็นจริงได้
					</a>
					.
				</p>
			</div>
		</footer>
	);
};
export default Footer;

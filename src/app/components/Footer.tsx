import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faCodepen, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
		<div className="bottom-0 absolute w-full">
			<div className="flex justify-between items-center bottom-0 p-10">
				<div className="">
					<p className="text-xl font-bold">© 2025 Ethereal. All rights reserved.</p>
				</div>
				<div className="flex gap-8">
					<FontAwesomeIcon
						icon={faInstagram}
						color="white"
						width={40}
						height={40}
						className="w-10 h-10"
					/>
					<FontAwesomeIcon
						icon={faFacebook}
						color="white"
						width={40}
						height={40}
						className="w-10 h-10"
					/>
					<FontAwesomeIcon
						icon={faLinkedin}
						color="white"
						width={40}
						height={40}
						className="w-10 h-10"
					/>
					<FontAwesomeIcon
						icon={faCodepen}
						color="white"
						width={40}
						height={40}
						className="w-10 h-10"
					/>
				</div>
			</div>
		</div>
	);
}
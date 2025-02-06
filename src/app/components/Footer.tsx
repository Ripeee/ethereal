import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faCodepen, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
			<div className="flex justify-between items-center bottom-0">
				<div className="">
					<p className="">© 2025 Ethereal. All rights reserved.</p>
				</div>
				<div className="flex gap-2">
					<FontAwesomeIcon
						icon={faInstagram}
						color="white"
						width={20}
						height={20}
					/>
					<FontAwesomeIcon
						icon={faFacebook}
						color="white"
						width={20}
						height={20}
					/>
					<FontAwesomeIcon
						icon={faLinkedin}
						color="white"
						width={20}
						height={20}
					/>
					<FontAwesomeIcon
						icon={faCodepen}
						color="white"
						width={20}
						height={20}
					/>
				</div>
			</div>
		);
}
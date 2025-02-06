import Image from 'next/image';


export default function Card({text, title, image}) {
    return (
        <div className="bg-blue-500 rounded-xl p-4">
            <Image src={image} alt={title} />
            <p className="">{title}</p>
            <p className="">{text}</p>
        </div>
    )
}
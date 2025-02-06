import Image from 'next/image';

interface CardProps {
    text: string,
    title: string,
    image: string
}

export default function Card({text, title, image}: CardProps) {
    return (
        <div className="bg-blue-500 rounded-xl w-60">
            <Image src={image} alt={title} width={2000} height={2000} className='rounded-t-xl h-2/3' />
            <div className="m-2 flex flex-col gap-4">
                <p className="">{title}</p>
                <p className="">{text}</p>
            </div>
        </div>
    )
}
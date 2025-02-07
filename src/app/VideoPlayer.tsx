export default function VideoPlayer() {
	return (
		<video
			src="https://video.wixstatic.com/video/a64726_a2faf84303cd488396f10f5ca787c720/1080p/mp4/file.mp4"
			className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
			autoPlay
			loop
			muted
			playsInline
		/>
	);
}

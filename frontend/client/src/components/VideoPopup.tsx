import { FC } from 'react'

interface VideoPopupProps {
  videoSrc: string
  onClose: () => void
}

export const VideoPopup: FC<VideoPopupProps> = ({ videoSrc, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 relative max-w-3xl w-full">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-black text-lg font-bold"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Video Player without download */}
        <video
          controls
          autoPlay
          className="w-full h-auto rounded"
          controlsList="nodownload" // disables download button in most browsers
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

import React from 'react'

const ChatbotScreen = () => {
  return (
    <>
      <div className="h-[94vh] flex flex-col w-[50vw]">
        <div className="bg-gray-200 flex-1 overflow-y-scroll">
          <div className="px-4 py-2">
            <div className="flex items-center mb-2">
                <div className="font-medium">John Doe</div>
            </div>
            <div className="bg-white rounded-lg p-2 shadow mb-2 max-w-sm">
              Hi, how can I help you?
            </div>
            <div className="flex items-center justify-end">
              <div className="bg-blue-500 text-white rounded-lg p-2 shadow mr-2 max-w-sm">
                Sure, I can help with that.
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 px-4 py-2">
          <div className="flex items-center">
            <input className="w-full border rounded-full py-2 px-4 mr-2" type="text" placeholder="Type your message..." />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
                Send
              </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatbotScreen
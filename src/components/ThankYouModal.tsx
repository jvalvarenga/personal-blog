import {CiCircleCheck} from 'react-icons/ci'

interface Props {
  modalOpen: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function ThankYouModal({modalOpen, onClick}: Props) {
  return (
    <>
      {modalOpen && (
        <div
          id="default-modal"
          tabIndex={-1}
          aria-hidden="true"
          className="fixed left-0 right-0 top-0 z-50 flex h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
        >
          <div className="relative max-h-full w-full max-w-2xl p-4">
            {/*<!-- Modal content -->*/}
            <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
              {/*<!-- Modal header -->*/}
              <div className="flex items-center justify-between rounded-t pr-4 pt-4">
                <button
                  type="button"
                  className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="default-modal"
                  onClick={onClick}
                >
                  <svg
                    className="h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/*<!-- Modal body -->*/}
              <div className="space-y-4 p-4 md:p-5">
                <CiCircleCheck className="text-7xl text-primary-500" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Thanks for subscribing!
                </h3>

                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  I'm glad to have you on board. Get ready to stay updated with my latest posts, and
                  exclusive content directly to your inbox.
                </p>
              </div>
              {/*<!-- Modal footer -->*/}
              <div className="flex items-center rounded-b p-4 md:p-5">
                <button
                  data-modal-hide="default-modal"
                  type="button"
                  className="rounded-lg bg-primary-500 px-6 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-600 dark:bg-primary-500 dark:hover:bg-primary-400 dark:focus:ring-offset-black"
                  onClick={onClick}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

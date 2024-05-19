'use client'

import {useState} from 'react'
import ThankYouModal from '@/components/ThankYouModal.tsx'
import {useFormik} from 'formik'
import axios from 'axios'
import {newsletterValidation} from 'schema/formValidation'

export default function NewsletterForm() {
  const [isLoading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onSubmit = async (data: FormValues, actions: any) => {
    setLoading(true)
    const config = {
      method: 'POST',
      url: process.env.NEWSLETTER_API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(data),
    }

    try {
      const response = await axios(config)
      if (response.status == 200) {
        actions.resetForm()
        setIsModalOpen(true)
      }
    } catch (err) {
      // notify()
    }
    setLoading(false)
  }

  // Formik
  const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik(
    {
      initialValues: {
        email: '',
      },
      validationSchema: newsletterValidation,
      onSubmit,
    }
  )

  return (
    <div>
      {/* Modal */}
      <ThankYouModal
        modalOpen={isModalOpen}
        onClick={() => {
          setIsModalOpen(false)
        }}
      />

      <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">
        Subscribe to the newsletter
      </div>
      <form
        className="flex flex-col sm:flex-row"
        id="newsletter"
        onSubmit={handleSubmit}
        autoComplete="on"
      >
        <div className="relative flex flex-col">
          <label for="email-input">
            <span class="sr-only">Email address</span>
            <input
              autocomplete="email"
              className={`${errors.email && touched.email ? 'border-red-600 focus:border-red-700 focus:ring-0' : 'focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600'} w-72 rounded-md px-4 dark:bg-black`}
              id="email-input"
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            ></input>
          </label>
          {errors.email && touched.email && (
            <span className="text-md absolute bottom-[-28px] mt-1 text-red-600">
              {errors.email}
            </span>
          )}
        </div>
        <div className="mt-2 flex w-full rounded-md shadow-sm sm:ml-3 sm:mt-0">
          <button
            className={`${isLoading ? 'pointer-events-none cursor-not-allowed' : ''} w-full rounded-md bg-primary-500 px-4 py-2 font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black dark:hover:bg-primary-400 sm:py-0`}
            type={isLoading ? 'button' : 'submit'}
            form="newsletter"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg
                  aria-hidden="true"
                  role="status"
                  className="mr-3 inline h-4 w-4 animate-spin text-white"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  ></path>
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  ></path>
                </svg>
                Loading...
              </>
            ) : (
              'Subscribe'
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

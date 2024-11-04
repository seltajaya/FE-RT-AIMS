
export default function ProductTable() {
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg m-5'>
      <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right'>
        <thead className='bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='p-4'>
              <div className='flex items-center'>
                <input
                  id='checkbox-all-search'
                  type='checkbox'
                  className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800'
                />
                <label htmlFor='checkbox-all-search' className='sr-only'>
                  checkbox
                </label>
              </div>
            </th>
            <th scope='col' className='px-6 py-3'>
              Filename
            </th>
            <th scope='col' className='px-6 py-3'>
              Duration
            </th>
            <th scope='col' className='px-6 py-3'>
              Date
            </th>
            <th scope='col' className='px-6 py-3'>
              Actions 
            </th>
          </tr>
        </thead>
        <tbody>
          {/* MacBook Pro */}
          <tr className='border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'>
            <td className='w-4 p-4'>
              <div className='flex items-center'>
                <input
                  id='checkbox-table-search-1'
                  type='checkbox'
                  className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800'
                />
                <label htmlFor='checkbox-table-search-1' className='sr-only'>
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope='row'
              className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
            >
              MacBook Pro 17"
            </th>
            <td className='px-6 py-4'>Silver</td>
            <td className='px-6 py-4'>Laptop</td>
            <td className='flex items-center px-6 py-4'>
              <a
                href='#'
                className='font-medium text-blue-600 hover:underline dark:text-blue-500'
              >
                Ubah
              </a>
              <a
                href='#'
                className='ms-3 font-medium text-red-600 hover:underline dark:text-red-500'
              >
                Hapus
              </a>
            </td>
          </tr>

          {/* Magic Mouse 2 */}
          <tr className='border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'>
            <td className='w-4 p-4'>
              <div className='flex items-center'>
                <input
                  id='checkbox-table-search-2'
                  type='checkbox'
                  className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800'
                />
                <label htmlFor='checkbox-table-search-2' className='sr-only'>
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope='row'
              className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
            >
              Magic Mouse 2
            </th>
            <td className='px-6 py-4'>Hitam</td>
            <td className='px-6 py-4'>Aksesoris</td>
            <td className='flex items-center px-6 py-4'>
              <a
                href='#'
                className='font-medium text-blue-600 hover:underline dark:text-blue-500'
              >
                Ubah
              </a>
              <a
                href='#'
                className='ms-3 font-medium text-red-600 hover:underline dark:text-red-500'
              >
                Hapus
              </a>
            </td>
          </tr>

          {/* iPad Pro */}
          <tr className='border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'>
            <td className='w-4 p-4'>
              <div className='flex items-center'>
                <input
                  id='checkbox-table-search-3'
                  type='checkbox'
                  className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800'
                />
                <label htmlFor='checkbox-table-search-3' className='sr-only'>
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope='row'
              className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
            >
              iPad Pro
            </th>
            <td className='px-6 py-4'>Emas</td>
            <td className='px-6 py-4'>Tablet</td>
            <td className='flex items-center px-6 py-4'>
              <a
                href='#'
                className='font-medium text-blue-600 hover:underline dark:text-blue-500'
              >
                Ubah
              </a>
              <a
                href='#'
                className='ms-3 font-medium text-red-600 hover:underline dark:text-red-500'
              >
                Hapus
              </a>
            </td>
          </tr>

          {/* Magic Keyboard */}
          <tr className='border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'>
            <td className='w-4 p-4'>
              <div className='flex items-center'>
                <input
                  id='checkbox-table-search-4'
                  type='checkbox'
                  className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800'
                />
                <label htmlFor='checkbox-table-search-4' className='sr-only'>
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope='row'
              className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
            >
              Magic Keyboard
            </th>
            <td className='px-6 py-4'>Hitam</td>
            <td className='px-6 py-4'>Aksesoris</td>
            <td className='flex items-center px-6 py-4'>
              <a
                href='#'
                className='font-medium text-blue-600 hover:underline dark:text-blue-500'
              >
                Ubah
              </a>
              <a
                href='#'
                className='ms-3 font-medium text-red-600 hover:underline dark:text-red-500'
              >
                Hapus
              </a>
            </td>
          </tr>

          {/* AirPods */}
          <tr className='border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'>
            <td className='w-4 p-4'>
              <div className='flex items-center'>
                <input
                  id='checkbox-table-search-5'
                  type='checkbox'
                  className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800'
                />
                <label htmlFor='checkbox-table-search-5' className='sr-only'>
                  checkbox
                </label>
              </div>
            </td>
            <th
              scope='row'
              className='whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white'
            >
              AirPods
            </th>
            <td className='px-6 py-4'>Putih</td>
            <td className='px-6 py-4'>Aksesoris</td>
            <td className='flex items-center px-6 py-4'>
              <a
                href='#'
                className='font-medium text-blue-600 hover:underline dark:text-blue-500'
              >
                Ubah
              </a>
              <a
                href='#'
                className='ms-3 font-medium text-red-600 hover:underline dark:text-red-500'
              >
                Hapus
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

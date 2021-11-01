import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/menu/menu.css"

const people = [
    { instructor: 'Plant Lady Mary', class: 'Moss Wall Workshop', fee: '$65', date: 'April 26 @ 5pm' },
    { instructor: 'Plant Lady Mary', class: 'Moss Wall Workshop', fee: '$65', date: 'April 26 @ 5pm' },
    { instructor: 'Plant Lady Mary', class: 'Moss Wall Workshop', fee: '$65', date: 'April 26 @ 5pm' },
    { instructor: 'Plant Lady Mary', class: 'Moss Wall Workshop', fee: '$65', date: 'April 26 @ 5pm' },
    { instructor: 'Plant Lady Mary', class: 'Moss Wall Workshop', fee: '$65', date: 'April 26 @ 5pm' },
    { instructor: 'Plant Lady Mary', class: 'Moss Wall Workshop', fee: '$65', date: 'April 26 @ 5pm' },
    { instructor: 'Plant Lady Mary', class: 'Moss Wall Workshop', fee: '$65', date: 'April 26 @ 5pm' },
    { instructor: 'Plant Lady Mary', class: 'Moss Wall Workshop', fee: '$65', date: 'April 26 @ 5pm' },
    { instructor: 'Cody Fisher', class: 'Product Directives Officer', fee: 'Owner', date: 'cody.fisher@example.com' },
    // More people...
  ]

const Classes = () => {
  return (
    <Layout>
      <Seo title="Classes" />
      <div className="w-full ht overflow-scroll">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Instructor
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Class
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Fee
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {people.map((person, personIdx) => (
                  <tr key={person.email} className={personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person.instructor}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.class}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.fee}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" className="text-green-700 hover:text-indigo-900">
                        Register
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default Classes
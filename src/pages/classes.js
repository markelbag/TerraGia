import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"
import "../components/menu/menu.css"

const people = [
  {
    instructor: "Plant Lady Mary",
    class: "Moss Wall Workshop",
    fee: "$65",
    date: "April 26 @ 5pm",
  },
  {
    instructor: "Plant Lady Mary",
    class: "Moss Wall Workshop",
    fee: "$65",
    date: "April 26 @ 5pm",
  },
  {
    instructor: "Plant Lady Mary",
    class: "Moss Wall Workshop",
    fee: "$65",
    date: "April 26 @ 5pm",
  },
  {
    instructor: "Plant Lady Mary",
    class: "Moss Wall Workshop",
    fee: "$65",
    date: "April 26 @ 5pm",
  },
  {
    instructor: "Plant Lady Mary",
    class: "Moss Wall Workshop",
    fee: "$65",
    date: "April 26 @ 5pm",
  },
  {
    instructor: "Plant Lady Mary",
    class: "Moss Wall Workshop",
    fee: "$65",
    date: "April 26 @ 5pm",
  },
  {
    instructor: "Plant Lady Mary",
    class: "Moss Wall Workshop",
    fee: "$65",
    date: "April 26 @ 5pm",
  },
  {
    instructor: "Plant Lady Mary",
    class: "Moss Wall Workshop",
    fee: "$65",
    date: "April 26 @ 5pm",
  },
  // More people...
]

const Classes = () => {
  return (
    <Layout>
      <Seo title="Classes" />
      <div className="w-full ht">
        <div className=" ">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Instructor
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Class
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
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
                    <tr
                      key={person.email}
                      className={
                        personIdx % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                        {person.instructor}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {person.class}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {person.date}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {person.fee}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <Link
                          to="/register"
                          className="text-green-700 hover:text-indigo-900"
                        >
                          Register
                        </Link>
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

// import { useState } from "react"
import useTitlesAPI from "../../hooks/streamingTitles"
import BasicDataTable from "../../components/MyBasicTable"
import { getLayout } from "../../layouts/MainLayout"
import Spinner from "../../components/MySpinner"
import ErrorAlertCard from "../../components/MyErrorAlertCard"

const BasicTablePage = () => {
  // Streaming-Titles API request:
  const { data, isLoading, isError } = useTitlesAPI("/api/titles/?limit=20")
  // DEBUGGING...
  console.log({ data, isLoading, isError })

  const columns = [
    {
      name: "Show ID",
      selector: row => row.show_id,
    },
    {
      name: "Title",
      selector: row => row.title,
      grow: 3,
    },
    {
      name: "Type",
      selector: row => row.type,
    },
    {
      name: "Description",
      selector: row => row.description,
      wrap: true,
      grow: 6,
    },
    {
      name: "Country",
      selector: row => row.country,
    },
    {
      name: "Release Year",
      selector: row => row.release_year,
    },
    {
      name: "Rating",
      selector: row => row.rating,
    },
    {
      name: "Duration",
      selector: row => row.duration,
    },
    {
      name: "Platform",
      selector: row => row.platform,
    },
  ]

  return (
    <div className="text-black">
      <h1 className="text-2xl font-medium my-2 pt-2 pb-3 mx-2">
        Basic Data Table
      </h1>

      {/* Handle Error State */}
      <ErrorAlertCard error={isError} />

      {/* Handle Loading State */}
      <Spinner loading={isLoading} />

      {/* Handle Loaded Table State */}
      {(data && !isLoading && !isError) && (
        <div className="mx-3">
          <BasicDataTable
            columns={columns}
            data={data?.titles}
            className=""
          />
        </div>
      )}
    </div>
  )
}

BasicTablePage.pageTitle = `Tabula Rasa: Basic Table`
BasicTablePage.getLayout = getLayout

export default BasicTablePage

// Example Record Object:
//
// {
//     "show_id": "s733",
//     "title": "The Boat Show",
//     "type": "TV Show",
//     "director": null,
//     "cast": [],
//     "country": null,
//     "date_added": null,
//     "release_year": "2018",
//     "rating": "13+",
//     "duration": "1 Season",
//     "genres": [
//         "Tv Shows"
//     ],
//     "description": "The Boat Show is a program dedicated to nautical lovers and boat owners. It is the only show in the world completely dedicated to the nautical world, made with passion by a team of experts with more than 15 years of experience.",
//     "platform": "Amazon Prime",
//     "pk": 735
// }

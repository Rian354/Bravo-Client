"use client"
import React from "react"
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import axios from "axios"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BRAVO_PROJECT_ALL } from "@/lib/constant"
import { DataTable } from "./data-table"

export const columns: ColumnDef<any>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "isactive",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("isactive") ? 'Active': 'Completed'}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const project = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(project.id)}
            >
              Project Id
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Project Details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export type Project = {
  id: number
  name: string
  url_on_catalog: string
  url_external: string
  description: string
  keywords: string
  fields_of_science: string
  isActive: Boolean
  agency_sponsor: string
  agency_sponsor_other: string
  gov_contact: string
  gov_contact_email: string
  geographic_scope: string
  participant_age: string
  participation_tasks: string
  scistarter: Boolean
  email: string
  start_date: Date
  project_goals: string
  created_at: Date
  updated_at: Date
}

const page = () => {
  let data_: Project;
let setData_: any;
  [data_, setData_] = React.useState<Project>({
    id: 0,
    name: "",
    url_on_catalog: "",
    url_external: "",
    description: "",
    keywords: "",
    fields_of_science: "",
    isActive: false,
    agency_sponsor: "",
    agency_sponsor_other: "",
    gov_contact: "",
    gov_contact_email: "",
    geographic_scope: "",
    participant_age: "",
    participation_tasks: "",
    scistarter: false,
    email: "",
    start_date: new Date(),
    project_goals: "",
    created_at: new Date(),
    updated_at: new Date(),
  })

  React.useEffect(() => {
    axios.get(BRAVO_PROJECT_ALL).then((result) => {
      setData_(result.data)
      console.log(data_)
    })
  }, [])

  return (
    <div className="container mx-auto py-10">
       <DataTable columns={columns} data={data_} />
    </div>
  )
}

export default page

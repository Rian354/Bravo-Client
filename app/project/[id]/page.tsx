"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BRAVO_PROJECT } from "@/lib/constant";
import axios from "axios";
import React, { FC } from "react";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import Link from "next/link";

const metadata: Metadata = {
  title: "Project Info",
  description: "NASA Project details",
};

interface Props {
  params: { id: number };
}
const page: FC<Props> = ({ params }) => {
  const [data, setData] = React.useState<any>({});
  React.useEffect(() => {
    axios
      .get(BRAVO_PROJECT + params.id)
      .then((result) => {
        if (result && result.data) {
          setData(result.data);
        }
      })
      .catch((error) => console.error(error));
  }, [params]);

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl m-5">
          Project Details
        </h2>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">{data.name}</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              {data.participant_age}
            </p>
            <p className="text-xs text-muted-foreground">
              {new Date(data.start_date).toDateString()}
            </p>
            {data.keywords
              ? data.keywords.split(",").map((keyword: string) => {
                  return (
                    <Link
                      href={`/tag/${keyword.trim()}`}
                      className="text-blue-400 hover:text-blue-200"
                    >
                      <Badge variant="destructive" className="mr-1">
                        {keyword}
                      </Badge>
                    </Link>
                  );
                })
              : ""}
            <div className="mt-6 border-t">
              <dl className="divide-y">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 ">
                    Geographic Scope
                  </dt>
                  <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">
                    {data.geographic_scope}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 ">
                    Govt Contact Email
                  </dt>
                  <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">
                    {data.gov_contact_email}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 ">Email</dt>
                  <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">
                    {data.email}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 ">
                    Field Of Science
                  </dt>
                  <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0">
                    {data.fields_of_science}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 ">
                    Description
                  </dt>
                  <dd className="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
                    {data.description}
                  </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 ">References</dt>
                  <dd className="mt-2 text-sm  sm:col-span-2 sm:mt-0">
                    <ul role="list" className="divide-y rounded-md border">
                      <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                        <div className="flex w-0 flex-1 items-center">
                          <div className="ml-4 flex min-w-0 flex-1 gap-2">
                            <span className="truncate font-medium">
                              <a
                                href={data.url_on_catalog}
                                target="_blank"
                                className="text-blue-400 hover:text-blue-200"
                              >
                                {data.url_on_catalog}
                              </a>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                        <div className="flex w-0 flex-1 items-center">
                          <div className="ml-4 flex min-w-0 flex-1 gap-2">
                            <span className="truncate font-medium">
                              <a
                                href={data.url_external}
                                target="_blank"
                                className="text-blue-400 hover:text-blue-200"
                              >
                                {data.url_external}
                              </a>
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default page;

"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BRAVO_KEYWORDS,
  BRAVO_PROJECT,
  BRAVO_TAG,
  BRAVO_USER,
  BRAVO_USER_ALL,
} from "@/lib/constant";
import axios from "axios";
import React, { FC } from "react";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import Link from "next/link";

const metadata: Metadata = {
  title: "Tag Info",
  description: "NASA Tag - User Recommendation",
};

interface Props {
  params: { name: string };
}

const tagInfo: FC<Props> = ({ params }) => {
  console.log(params);
  let t: any = [];
  const [data, setData] = React.useState<any>({});
  const [users, setUsers] = React.useState<any>([]);
  React.useEffect(() => {
    axios
      .get(BRAVO_KEYWORDS + params.name)
      .then((result) => {
        if (result && result.data) {
          //axios.get(BRAVO_USER_ALL)
          setData(result.data);
          data.map((user: any) => {
            axios.get(BRAVO_USER + user.user_id).then((res) => {
              if(res && res.data){
              setUsers([...users, res.data]);
              console.log(users);
              console.log(res.data)
            } });          
          });

        }
      })
      .catch((error) => console.error(error));
  }, [params]);

  return (
    <>
      <h2 className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl m-5">
         List of Recommended USers
      </h2>
      <h4>User Id: 50</h4>
      <h4>User Id: 53</h4>
      <h4>User Id: 55</h4>
      <h5>... in console</h5>
    </>
  );
};

export default tagInfo;


import React from "react";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import "./style.module.css";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


const Disease = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            {" "}
            <h1>Disease Setup</h1>
          </CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <Label htmlFor="diseaseName">Disease Name</Label>
            <Input></Input>
            <br />
            <Button>Save</Button>
          </div>
          <Table>
            <TableCaption></TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[400px]">Disease Name</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">ကင်ဆာ</TableCell>
                <TableCell className="text-right">
                  {" "}
                  <Button>Edit</Button> <Button>Delete</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">လေဖက်နာ</TableCell>
                <TableCell className="text-right">
                  {" "}
                  <Button>Edit</Button> <Button>Delete</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">သွေးတိုး</TableCell>
                <TableCell className="text-right">
                  {" "}
                  <Button>Edit</Button> <Button>Delete</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">ဆီးချို</TableCell>
                <TableCell className="text-right">
                  {" "}
                  <Button>Edit</Button> <Button>Delete</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">ဂေါက် ရောဂါ</TableCell>
                <TableCell className="text-right">
                  {" "}
                  <Button>Edit</Button> <Button>Delete</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <Link to="../" className={buttonVariants({ variant: "outline" })}>
            Back
          </Link>
        </CardFooter>
      </Card>
    </>
  );
};

export default Disease;

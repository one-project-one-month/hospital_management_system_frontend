
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./style.module.css";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
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

const Room = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>
            <div>
              <h1>Room Setup</h1>
            </div>
          </CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <Label htmlFor="roomeName">Room Name</Label>
            <Input></Input>
            <br />
            <Button>Save</Button>
          </div>
          <Table>
            <TableCaption></TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[400px]">Room Name</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Room 1</TableCell>
                <TableCell className="text-right">
                  {" "}
                  <Button>Edit</Button> <Button>Delete</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Room 2</TableCell>
                <TableCell className="text-right">
                  {" "}
                  <Button>Edit</Button> <Button>Delete</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Room 3</TableCell>
                <TableCell className="text-right">
                  {" "}
                  <Button>Edit</Button> <Button>Delete</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Room 4</TableCell>
                <TableCell className="text-right">
                  {" "}
                  <Button>Edit</Button> <Button>Delete</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Room 5</TableCell>
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

export default Room;


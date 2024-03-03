"use client"

import { CheckIcon } from "@radix-ui/react-icons"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { IconButton } from "@/components/ui/icon-button"
import Icons from "@/components/ui/icons"
import { List, ListItem, ListItemContent, ListItemTrigger } from "@/components/ui/list"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/utils/tailwind"
import React from "react"

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
]

type CardProps = React.ComponentProps<typeof Card>

export default function CardDemo({ className, ...props }: CardProps) {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <div className="flex flex-row flex-wrap gap-4">
      <Card className={cn("w-[380px]", className)}>
        <CardHeader>
          <CardTitle>List</CardTitle>
          <CardDescription>You have 3 unread messages.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 py-4">
          <List type="multiple">
            <ListItem startIcon={<Icons name="outline.general.home-2" />} active>
              <ListItemTrigger>Project</ListItemTrigger>
              <ListItemContent>
                <ListItem>Project 1</ListItem>
                <ListItem>Project 3</ListItem>
                <ListItem startIcon={<Icons name="outline.general.autobrightness" />}>
                  <ListItemTrigger>Project</ListItemTrigger>
                  <ListItemContent>
                    <ListItem>Project 4</ListItem>
                    <ListItem>Project 5</ListItem>
                    <ListItem>Project 6</ListItem>
                  </ListItemContent>
                </ListItem>
              </ListItemContent>
            </ListItem>

            <ListItem startIcon={<Icons name="outline.general.rocket" />}>eCommerce</ListItem>
            <ListItem startIcon={<Icons name="outline.general.cloud" />}>Contacts</ListItem>
            <ListItem startIcon={<Icons name="outline.general.coffee" />}>Support center</ListItem>
            <ListItem startIcon={<Icons name="outline.general.mouse-circle" />}>
              User management
            </ListItem>
            <ListItem startIcon={<Icons name="outline.general.cup" />}>Customers</ListItem>
            <ListItem startIcon={<Icons name="outline.general.ghost" />}>Subscription</ListItem>
          </List>
        </CardContent>
        <CardFooter className="py-4">
          <Button className="w-full">
            <CheckIcon className="mr-2 h-4 w-4" /> Mark all as read
          </Button>
        </CardFooter>
      </Card>
      <Card className={cn("w-[380px]", className)}>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>You have 3 unread messages.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className=" border-card-border flex items-center space-x-4 rounded-md border p-4">
            <Icons name="outline.it-network.message-programming" />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">Push Notifications</p>
              <p className="text-sm text-foreground">Send notifications to device.</p>
            </div>
          </div>
          <div>
            {notifications.map((notification, index) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">{notification.title}</p>
                  <p className="text-sm text-foreground">{notification.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <CheckIcon className="mr-2 h-4 w-4" /> Mark all as read
          </Button>
        </CardFooter>
      </Card>
      <Card className={cn("w-[380px]", className)}>
        <CardHeader>
          <CardTitle>Muted</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2 text-sm">
          <h2>Home</h2>
          {">"}
          <h2>Navigation</h2>
          {">"}
          <h2>Dashboard</h2>
        </CardContent>
      </Card>
      <Card className={cn("w-[380px]", className)}>
        <CardHeader>
          <CardTitle>Forms</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2 text-sm">
          <Switch />
          <Checkbox />
          <Checkbox />
        </CardContent>
      </Card>
      <Card className={cn("w-[380px]", className)}>
        <CardHeader className="mb-4">
          <CardTitle>Calendar</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center gap-2 text-sm">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </CardContent>
      </Card>
      <Card className={cn("w-[380px]", className)}>
        <CardHeader className="mb-4">
          <CardTitle>Popover</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center gap-2 text-sm">
          <Popover>
            <PopoverTrigger asChild>
              <button type="button">Open popover</button>
              {/* <Button variant="outline">Open popover</Button> */}
            </PopoverTrigger>
            <PopoverContent className="w-auto border-0 border-transparent p-0">
              <Calendar mode="single" selected={new Date()} />
            </PopoverContent>
          </Popover>
        </CardContent>
      </Card>
      <Card className={cn("w-[380px]", className)}>
        <CardHeader>
          <CardTitle>Tabs</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2 text-sm">
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Make changes to your account here.</TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className={cn("w-[380px]", className)}>
        <CardHeader>
          <CardTitle>Accordion</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2 text-base">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>Alert</CardTitle>
        </CardHeader>
        <CardContent>
          <Alert>
            <Icons name="outline.general.information" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              {" "}
              You can add components and dependencies to your app using the cli.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>Alert</CardTitle>
        </CardHeader>
        <CardContent>
          <AlertDialog>
            <AlertDialogTrigger>Open</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account and remove
                  your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardContent>
      </Card>

      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Avatar</CardTitle>
        </CardHeader>
        <CardContent>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </CardContent>
      </Card>

      <Card className="w-[300px]">
        <CardHeader>
          <CardTitle>Badge</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Badge>Badge</Badge>
          <Badge>Badge</Badge>
          <Badge>Badge</Badge>

          <Badge>Badge</Badge>
          <Badge>Badge</Badge>
          <Badge>Badge</Badge>

          <Badge>Badge</Badge>
          <Badge>Badge</Badge>
          <Badge>Badge</Badge>

          <Badge>Badge</Badge>
          <Badge>Badge</Badge>
          <Badge>Badge</Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Button</CardTitle>
          <CardDescription>The general buttons.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4 p-6">
          <Button
            color="destructive"
            startIcon={<Icons className="h-4 w-4" name="duotone.abstract.abstract-19" />}
            endIcon={<Icons className="h-4 w-4" name="duotone.abstract.abstract-20" />}
          >
            Contained destructive
          </Button>
          <Button
            color="secondary"
            startIcon={<Icons className="h-4 w-4" name="duotone.abstract.abstract-19" />}
            endIcon={<Icons className="h-4 w-4" name="duotone.abstract.abstract-20" />}
          >
            Contained secondary
          </Button>
          <Button
            startIcon={<Icons className="h-4 w-4" name="duotone.abstract.abstract-19" />}
            endIcon={<Icons className="h-4 w-4" name="duotone.abstract.abstract-20" />}
          >
            Contained default
          </Button>
          <Button
            color="destructive"
            startIcon={<Icons className="h-4 w-4" name="duotone.abstract.abstract-19" />}
            endIcon={<Icons className="h-4 w-4" name="duotone.abstract.abstract-20" />}
          >
            Outlined destructive
          </Button>
          <Button
            color="secondary"
            startIcon={<Icons className="h-4 w-4" name="duotone.abstract.abstract-19" />}
            endIcon={<Icons className="h-4 w-4" name="duotone.abstract.abstract-20" />}
          >
            Outlined secondary
          </Button>
          <Button
            startIcon={<Icons className="h-4 w-4" name="duotone.abstract.abstract-19" />}
            endIcon={<Icons className="h-4 w-4" name="duotone.abstract.abstract-20" />}
          >
            Outlined default
          </Button>
          <Button
            color="destructive"
            startIcon={<Icons className="h-4 w-4" name="duotone.abstract.abstract-19" />}
            endIcon={<Icons className="h-4 w-4" name="duotone.abstract.abstract-20" />}
          >
            text destructive
          </Button>
          <Button
            color="secondary"
            startIcon={<Icons className="h-4 w-4" name="duotone.abstract.abstract-19" />}
            endIcon={<Icons className="h-4 w-4" name="duotone.abstract.abstract-20" />}
          >
            text secondary
          </Button>
          <Button
            startIcon={<Icons className="h-4 w-4" name="duotone.abstract.abstract-19" />}
            endIcon={<Icons className="h-4 w-4" name="duotone.abstract.abstract-20" />}
          >
            text default
          </Button>
          <Button
            color="destructive"
            startIcon={<Icons className="h-4 w-4" name="duotone.abstract.abstract-19" />}
            endIcon={<Icons className="h-4 w-4" name="duotone.abstract.abstract-20" />}
          >
            text destructive
          </Button>
          <Button
            color="secondary"
            startIcon={<Icons className="h-4 w-4" name="duotone.abstract.abstract-19" />}
            endIcon={<Icons className="h-4 w-4" name="duotone.abstract.abstract-20" />}
          >
            text secondary
          </Button>
          <Button
            startIcon={<Icons className="h-4 w-4" name="duotone.abstract.abstract-19" />}
            endIcon={<Icons className="h-4 w-4" name="duotone.abstract.abstract-20" />}
          >
            text default
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex flex-wrap gap-4 p-6">
          <IconButton hoverable={false}>
            <Icons name="duotone.abstract.abstract-23" />
          </IconButton>
          <IconButton hoverable>
            <Icons name="duotone.abstract.abstract-23" />
          </IconButton>
        </CardContent>
      </Card>
    </div>
  )
}

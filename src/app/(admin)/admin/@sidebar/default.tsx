import { IconButton } from "@/components/icon-button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import Icons from "@/components/ui/icons"
import { List, ListItem, ListItemContent, ListItemTrigger } from "@/components/ui/list"
import { SIDEBAR_ITEMS } from "@/constants/admin"
import { cn } from "@/utils/tailwind"
import Link from "next/link"
import SidebarLogo from "./_components/sidebar-logo"

export interface AdminSidebarProps {}

const AdminSidebar = (props: AdminSidebarProps) => (
  <aside
    className={cn(
      "fixed left-0 top-0",
      "h-lvh w-app-sidebar-dimension bg-app-sidebar-background",
      "border-r border-accent-darkness",
      "flex flex-col items-center overflow-hidden",
    )}
  >
    <div
      className={cn(
        "size-app-sidebar-dimension",
        "border-b border-accent-darkness bg-app-sidebar-background",
        "mb-4 flex shrink-0 items-center justify-center",
      )}
    >
      <SidebarLogo />
    </div>

    <div className="flex h-full flex-col gap-3 p-2">
      {SIDEBAR_ITEMS.map(({ title, key, icon, path }, index) => (
        <HoverCard openDelay={0} closeDelay={2}>
          <HoverCardTrigger asChild>
            <IconButton key={key} active={index === 0} size="lg" forceDark asChild>
              <Link href={path}>
                <Icons name={icon} className="h-[22px] w-[22px]" />
              </Link>
            </IconButton>
          </HoverCardTrigger>
          <HoverCardContent side="right" sideOffset={16} className="mt-2 w-[298px] space-y-3">
            <List type="multiple">
              <ListItem startIcon={<Icons name="outline.general.home-2" />} active>
                <ListItemTrigger>Project</ListItemTrigger>
                <ListItemContent>
                  <ListItem startIcon={<Icons name="outline.general.home-2" />}>Project 1</ListItem>
                  <ListItem startIcon={<Icons name="outline.general.home-2" />}>Project 3</ListItem>
                  <ListItem startIcon={<Icons name="outline.general.autobrightness" />}>
                    <ListItemTrigger>Project</ListItemTrigger>
                    <ListItemContent>
                      <ListItem startIcon={<Icons name="outline.general.home-2" />}>
                        Project 4
                      </ListItem>
                      <ListItem startIcon={<Icons name="outline.general.home-2" />}>
                        Project 5
                      </ListItem>
                      <ListItem startIcon={<Icons name="outline.general.home-2" />}>
                        Project 6
                      </ListItem>
                    </ListItemContent>
                  </ListItem>
                </ListItemContent>
              </ListItem>

              <ListItem startIcon={<Icons name="outline.general.rocket" />}>eCommerce</ListItem>
              <ListItem startIcon={<Icons name="outline.general.cloud" />}>Contacts</ListItem>
              <ListItem startIcon={<Icons name="outline.general.coffee" />}>
                Support center
              </ListItem>
              <ListItem startIcon={<Icons name="outline.general.mouse-circle" />}>
                User management
              </ListItem>
              <ListItem startIcon={<Icons name="outline.general.cup" />}>Customers</ListItem>
              <ListItem startIcon={<Icons name="outline.general.ghost" />}>Subscription</ListItem>
            </List>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  </aside>
)

export default AdminSidebar

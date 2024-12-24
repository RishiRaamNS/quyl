import HelpIcon from "@/components/icons/HelpIcon";
import MessageIcon from "@/components/icons/MessageIcon";
import NotificationIcon from "@/components/icons/NotificationIcon";
import SettingsTopIcon from "@/components/icons/SettingsTopIcon";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import SidebarLayout from "@/components/SidebarLayout";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { signoutAction } from "./actions";
import Dashboard from "@/components/Dashboard";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log(user);
  return (
    <SidebarLayout>
      <div className="bg-[#F6F8FA] w-[80vw] px-4 py-6">
        {/* Top Bar */}
        <div className="flex items-center gap-x-10">
          {/* Search bar */}
          <div className="flex items-center bg-white px-4 py-2 w-[60%] rounded-[14px] text-anothergray gap-x-4 pl-8 justify-start">
            <IoSearch fontSize={25} />
            <Input
              placeholder="Search your course"
              className="font-noto border-none focus-visible:ring-0"
            />
          </div>
          <HelpIcon className="fill-anothergray" />
          <MessageIcon className="fill-anothergray" />
          <SettingsTopIcon className="fill-anothergray" />
          <NotificationIcon className="fill-anothergray" />
          {user ? (
            <button onClick={signoutAction} className={buttonVariants()}>
              Sign out
            </button>
          ) : (
            <div className="flex gap-x-2">
              <Link
                href={"/sign-in"}
                className={buttonVariants({ variant: "outline" })}
              >
                Sign in
              </Link>

              <Link href={"/signup"} className={buttonVariants()}>
                Sign up
              </Link>
            </div>
          )}
        </div>
        <Dashboard show={user ? true : false} />
      </div>
      {/* Main Dashboard */}
    </SidebarLayout>
  );
}

import HelpIcon from "@/components/icons/HelpIcon";
import MessageIcon from "@/components/icons/MessageIcon";
import NotificationIcon from "@/components/icons/NotificationIcon";
import SettingsTopIcon from "@/components/icons/SettingsTopIcon";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="bg-[#F6F8FA] w-[80vw] px-4 py-6">
      {/* Top Bar */}
      <div className="flex items-center gap-x-10">
        {/* Search bar */}
        <div className="flex items-center bg-white px-4 py-2 w-[60%] rounded-[12px] text-anothergray gap-x-4 pl-8 justify-start">
          <IoSearch fontSize={25} />
          <Input placeholder="Search your course" className="font-noto" />
        </div>
        <HelpIcon className="fill-anothergray" />
        <MessageIcon className="fill-anothergray" />
        <SettingsTopIcon className="fill-anothergray" />
        <NotificationIcon className="fill-anothergray" />
        <div className="flex gap-x-2">
          <Link
            href={"/login"}
            className={buttonVariants({ variant: "outline" })}
          >
            Sign in
          </Link>

          <Link href={"/signup"} className={buttonVariants()}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

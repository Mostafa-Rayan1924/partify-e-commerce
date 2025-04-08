"use client";
import { Locate, MailCheck, UserRound } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LoggedUserBtns from "./LoggedUserBtns";

function LoggedUserData() {
  const { user } = useSelector((state: RootState) => state.loginSlice);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative">
      {user?.token ? (
        <>
          <Avatar className="cursor-pointer" onClick={() => setOpen(!open)}>
            <AvatarImage
              src={
                "https://res.cloudinary.com/dhddxcwcr/image/upload/v1700416252/6558f05c2841e64561ce75d1_Cover.jpg"
              }
              alt={user?.userData?.username}
            />
            <AvatarFallback>
              {user?.userData?.username[0] + user?.userData?.username[1]}
            </AvatarFallback>
          </Avatar>
          <div
            className={`absolute end-0 z-10 top-[120%] divide-y divide-border rounded-md border ${
              open ? "block" : "hidden"
            } bg-background shadow-lg`}
            role="menu">
            <div className="p-2">
              <div
                className="flex items-center whitespace-nowrap gap-2 rounded-lg p-2 text-sm text-muted-foreground hover:bg-accent hover:text-primary"
                role="menuitem">
                <UserRound size={20} />
                <h2>Welcome! {user?.userData?.username}</h2>
              </div>

              <div
                className="flex items-center whitespace-nowrap gap-2 rounded-lg p-2 text-sm text-muted-foreground hover:bg-accent hover:text-primary"
                role="menuitem">
                <MailCheck size={20} />
                <h2>{user?.userData?.email}</h2>
              </div>
              <div
                className="flex items-center whitespace-nowrap gap-2 rounded-lg p-2 text-sm text-muted-foreground hover:bg-accent hover:text-primary"
                role="menuitem">
                <Locate size={20} />
                <h2>
                  {user?.userData?.location !== undefined
                    ? user?.userData?.location
                    : "No Location Set"}
                </h2>
              </div>
            </div>

            <div className="p-2">
              <LoggedUserBtns />
            </div>
          </div>
        </>
      ) : (
        <LoggedUserBtns />
      )}
    </div>
  );
}

export default LoggedUserData;

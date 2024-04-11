"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const cld = new Cloudinary({ cloud: { cloudName: "delflsgq4" } });

  const handleLogin = () => {
    router.push("/home", { scroll: false });
  };

  return (
    <div className="bg-background min-h-screen p-2">
      <div className="max-w-[1812px] flex flex-col min-h-screen">
        <div className="mt-20">
          <div className="max-w-[188px] flex justify-center items-center sm:px-10">
            <AdvancedImage
              className="w-full max-w-[231px] -translate-y-[120%]"
              cldImg={cld.image("foniso/logo")}
            />
          </div>
          <div className="w-full flex flex-col items-center mt-10">
            <h1 className="text-[1.5rem] md:text-[2.5rem] md:leading-[3rem] font-bold text-foreground">
              Your All-in-One Sports Platform
            </h1>

            {/* <div class */}
            <div className="w-1/2 flex flex-col justify-center items-center mt-10">
              <div className="w-full max-w-[571px] p-6 border border-border bg-background rounded-xl">
                <h1 className="text-[1.5rem] md:text-[2rem] md:leading-[3rem] font-bold text-foreground text-center">
                  Welcome to Foniso
                </h1>
                <p className="text-foreground/50 text-center">
                  Let’s get you back in the game!
                </p>
                <div className="flex flex-col gap-x-5">
                  <div className="mt-4 w-full">
                    <Input
                      id="username"
                      placeholder="Username,email or phone number"
                      className="bg-transparent mt-2 border-foreground/50 h-[54px] text-base text-semibold placeholder:text-foreground/50 font-semibold"
                    />
                  </div>
                  <div className="mt-4 w-full">
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter  password"
                      className="bg-transparent mt-2 border-foreground/50 h-[54px] text-base text-semibold placeholder:text-foreground/50 font-semibold"
                    />
                  </div>
                </div>
                <Button
                  onClick={handleLogin}
                  className="w-full hover:bg-foreground hover:scale-[1.01] transition-all hover:shadow-xl bg-foreground border border-border text-background rounded-full flex justify-center items-center mt-6 h-12"
                >
                  <span className="text-base font-bold block p-0 align-middle -translate-y-[2px]">
                    Log in
                  </span>
                </Button>
                <p className="text-foreground/50 mt-4 text-base font-semibold text-end">
                  Forgot password?
                </p>
                <div className="h-5 mt-1 relative after:content-['or'] after:block after:w-6 after:text-center after:text-foreground/50 after:bg-background after:absolute after:left-1/2 after:-translate-x-1/2 after:top-2/3 after:-translate-y-1/3 before:block before:w-full before:bg-foreground/20 before:h-[1px] before:absolute before:bottom-0" />

                <Button className="w-full hover:bg-colorGrey/10 bg-transparent border border-border text-foreground rounded-full flex justify-center gap-x-2 items-center mt-6 h-12">
                  <Image
                    alt="google"
                    src={"/assets/google-icon.svg"}
                    width={30}
                    height={30}
                    className="h-[30px]"
                  />
                  <span className="text-base font-bold block p-0 align-middle -translate-y-[2px]">
                    Continue with Google
                  </span>
                </Button>
              </div>
              <p className="text-foreground mt-4 text-base font-semibold">
                Get app on:
              </p>
              {/* <div className="flex justify-center items-center gap-4"></div> */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 pt-2 mt-2">
                <Link
                  href="https://play.google.com/store/apps/details?id=team.foniso.app"
                  target="_blank"
                  rel="noreferrer"
                  type="button"
                  className={cn(
                    "bg-background rounded-md text-white cta-text",
                    "flex justify-center py-1 gap-2 items-center"
                  )}
                >
                  <Image
                    alt="play store"
                    src={"/assets/playstore.svg"}
                    width={170.44}
                    height={50.77}
                    className="h-[50px]"
                  />
                  {/* <div>
                <p className="text-xs">GET IT ON</p>
                <p className="leading-6">Download on Android</p>
              </div> */}
                </Link>
                <Link
                  href="https://apps.apple.com/us/app/foniso/id6478035444"
                  target="_blank"
                  rel="noreferrer"
                  type="button"
                  className={cn(
                    "bg-background rounded-md text-white cta-text",
                    "flex justify-center py-1 items-center"
                  )}
                >
                  <Image
                    alt="apple store"
                    src={"/assets/applestore.svg"}
                    className="h-[50px]"
                    width={138.56}
                    height={50}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[805px] mt-8 flex flex-col gap-y-2 items-center mx-auto p-2">
          <div className="flex gap-x-7 gap-y-2 flex-wrap">
            <Link
              href="/terms-of-use"
              target="_blank"
              rel="noreferrer"
              type="button"
              className={cn(
                "bg-transparent text-textNav",
                "flex justify-center py-1 gap-2 items-center"
              )}
            >
              <span className="whitespace-nowrap">Terms of service</span>
            </Link>
            <Link
              href="/about-us"
              target="_blank"
              rel="noreferrer"
              type="button"
              className={cn(
                "bg-transparent text-textNav",
                "flex justify-center py-1 gap-2 items-center"
              )}
            >
              <span className="whitespace-nowrap">About</span>
            </Link>
            <Link
              href="/faqs"
              target="_blank"
              rel="noreferrer"
              type="button"
              className={cn(
                "bg-transparent text-textNav",
                "flex justify-center py-1 gap-2 items-center"
              )}
            >
              <span className="whitespace-nowrap">Help</span>
            </Link>
            <Link
              href="/contact-us"
              target="_blank"
              rel="noreferrer"
              type="button"
              className={cn(
                "bg-transparent text-textNav",
                "flex justify-center py-1 gap-2 items-center"
              )}
            >
              <span className="whitespace-nowrap">Contact us</span>
            </Link>
            <Link
              href="/advertising"
              target="_blank"
              rel="noreferrer"
              type="button"
              className={cn(
                "bg-transparent text-textNav",
                "flex justify-center py-1 gap-2 items-center"
              )}
            >
              <span className="whitespace-nowrap">Advertising</span>
            </Link>
            <Link
              href="/privacy-policy"
              target="_blank"
              rel="noreferrer"
              type="button"
              className={cn(
                "bg-transparent text-textNav",
                "flex justify-center py-1 gap-2 items-center"
              )}
            >
              <span className="whitespace-nowrap">Privacy policy</span>
            </Link>
            <p
              className={cn(
                "bg-transparent text-textNav",
                "flex justify-center py-1 gap-2 items-center"
              )}
            >
              <span className="whitespace-nowrap">
                C {new Date().getFullYear()} Foniso
              </span>
            </p>
          </div>
          <div className="flex gap-x-7 gap-y-2 flex-wrap">
            <Link
              href="/support"
              target="_blank"
              rel="noreferrer"
              type="button"
              className={cn(
                "bg-transparent text-textNav",
                "flex justify-center py-1 gap-2 items-center"
              )}
            >
              <span className="whitespace-nowrap">Support</span>
            </Link>
            <Link
              href="/faqs"
              target="_blank"
              rel="noreferrer"
              type="button"
              className={cn(
                "bg-transparent text-textNav",
                "flex justify-center py-1 gap-2 items-center"
              )}
            >
              <span className="whitespace-nowrap">FAQs</span>
            </Link>
            <Link
              href="/ticketing"
              target="_blank"
              rel="noreferrer"
              type="button"
              className={cn(
                "bg-transparent text-textNav",
                "flex justify-center py-1 gap-2 items-center"
              )}
            >
              <span className="whitespace-nowrap">Ticketing</span>
            </Link>
            <p
              className={cn(
                "bg-transparent text-textNav",
                "flex justify-center py-1 gap-2 items-center"
              )}
            >
              <span className="whitespace-nowrap">
                C {new Date().getFullYear()} Foniso
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

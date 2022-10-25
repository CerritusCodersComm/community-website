import React, { FC } from "react";
import { FaDiscord, FaLinkedin, FaTwitter } from "react-icons/fa";
import Button from "./common/button";

export const JoinSection: FC = () => {
  return (
    <div className="bg-white p-4">
      <div className="h-3/4">
        <div className="max-w-3xl mx-auto text-[36px] tracking-wide leading-relaxed font-satoshi font-bold text-center text-black justify-center">
          Join Our Community
        </div>
        <div className="mx-auto text-[20px] tracking-wide leading-relaxed font-satoshi text-center text-[#7D7D7D] justify-center mb-4">
          Join the community run solely by students, for students, focused on
          development, open source and much more.
          <div className="justify-center w-auto h-auto flex items-center mt-8">
            <div className="grid grid-rows-2 gap-y-5">
              <Button
                icon={FaDiscord}
                className="text-commColor"
                variant="join"
                iconSize={40}
                onClick={() => {
                  window.open(
                    "https://discord.com/invite/WYFskJZY8z",
                    "_blank"
                  );
                }}
              />
              <span className="text-commColor font-bold">Discord</span>
            </div>
            <div className="grid grid-rows-2 gap-y-5">
              <Button
                icon={FaTwitter}
                className="text-commColor"
                variant="join"
                iconSize={40}
                onClick={() => {
                  window.open(
                    "https://www.twitter.com/cerrituscoders/",
                    "_blank"
                  );
                }}
              />
              <span className="text-commColor font-bold">Twitter</span>
            </div>
            <div className="grid grid-rows-2 gap-y-5">
              <Button
                icon={FaLinkedin}
                className="text-commColor"
                variant="join"
                iconSize={40}
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/company/cerrituscoders/",
                    "_blank"
                  );
                }}
              />
              <span className="text-commColor font-bold">LinkedIn</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

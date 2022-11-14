import React from "react";
import {SubEventProps} from "../../types/event_types";

export const SubEvents = ({
                              id,
                              title,
                              about,
                              description,
                              date,
                              imagePath,
                              venue,
                              venueLink,
                          }: SubEventProps) => {


    return (
        <div className="subevent">
            <div className="item">
                <p className="event-name">{title}</p>
                <a className="venue" href={venueLink} rel="noreferrer noopener">{venue}</a>
                <div className="date">
                    <div dangerouslySetInnerHTML={
                        {
                            __html: date
                        }
                    }/>
                </div>
                <div>
                    {description}
                </div>
            </div>
        </div>
    );
};

import {MediaType, MediaSource} from "react-chrono/dist/models/TimelineMediaModel";

export interface EventProps {
    idx: number;
    eventID: string;
    title: string;
    about: string;
    description: string;
    startingDate: string;
    endingDate: string;
    timing?: string;
    speaker: string;
    speakerImage: string
    speakerSocials: SpeakerSocials;
    imageLink: string;
    venue: string;
    venueLink: string;
    registrationLink?: string;
    scheduleArray?: Schedule[];
    status: EVENT_STATUS;
}

interface SpeakerSocials {
    twitter?: string;
    linkedin?: string;
    github?: string;
}

interface Schedule {
    title: string;
    description: string;
    date: Date;
    timing: string;
    thumbnailLink?: string;
    venue: string;
    venueLink: string;
}

export enum EVENT_STATUS {
    LIVE = "Join Now",
    UPCOMING = "Set Reminder", // or show register button
    PAST = "Watch recording",
}

export interface SubEventProps {
    idx: number;
    active?: boolean;
    cardDetailedText?: string | string[];
    cardSubtitle?: string;
    cardTitle?: string;
    id?: string;
    media?: Media;
    position?: string;
    title?: string;
    url?: string;
    visible?: boolean;
}

interface Media {
    name?: string;
    source: MediaSource;
    type: MediaType;
}
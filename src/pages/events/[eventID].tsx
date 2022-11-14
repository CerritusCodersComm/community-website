import type {NextPage} from "next";
import {EventView} from "../../views";
import {events} from "../../components/event/events";
import {getWebTitle, getWebURL} from "../../utils";
import Head from "next/head";
import {EventProps} from "../../types/event_types";

const EventID: NextPage<{ eventProps: EventProps, lol: any }> = (props) => {
    return (
        <div>
            <Head>
                <title>{getWebTitle(props?.eventProps?.eventID)}</title>
                <meta name='description' content={props?.eventProps?.about}/>
            </Head>
            <div className="flex flex-col overflow-hidden">
                <EventView {...props.eventProps} />
            </div>
        </div>
    );
};

export async function getStaticProps({params}) {
    const event = events.filter(event => event.eventID.toString() === params.eventID);

    return {
        props: {
            eventProps: JSON.parse(JSON.stringify(event[0])),
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: events.map(event => {
            return {
                params: {
                    eventID: getWebURL(event.eventID).toString()
                }
            }
        }),
        fallback: false
    }
}

export default EventID;

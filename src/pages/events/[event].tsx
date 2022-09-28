import type {NextPage} from "next";
import {EventView} from "../../views";
import {events} from "../../components/event/events";
import {getWebTitle, getWebURL} from "../../utils";
import Head from "next/head";
import {EventProps} from "../../types/event_types";

const Event: NextPage<{ eventProps: EventProps }> = (props) => {
    return (
        <div>
            <Head>
                <title>{getWebTitle(props?.eventProps?.eventID)}</title>
                <meta name='description' content='Grant details'/>
            </Head>
            <EventView {...props.eventProps} />
        </div>
    );
};

export async function getStaticProps() {
    return {
        props: {
            eventProps: JSON.parse(JSON.stringify(events[0]))
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: events.map(event => {
            return {
                params: {
                    event: getWebURL(event.eventID)
                }
            }
        }),
        fallback: false
    }
}

export default Event;
